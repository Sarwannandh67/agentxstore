import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ConfirmationEmailRequest {
  email: string;
  name?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { email, name }: ConfirmationEmailRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const emailResponse = await resend.emails.send({
      from: "AgentXstore Team <team@agentxstore.com>",
      to: [email],
      subject: "Welcome to AgentXstore Waitlist! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #000; font-size: 28px; margin-bottom: 10px;">Welcome to AgentXstore! 🎉</h1>
            <p style="color: #666; font-size: 16px;">The World's First Marketplace for AI Agents & Automation Workflows</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 25px;">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Hi${name ? ` ${name}` : ''},
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              Thanks for joining the AgentXstore waitlist! You're now part of an exclusive group that will be first to experience the world's first marketplace for AI Agents & Automation Workflows.
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
              <strong>What happens next?</strong>
            </p>
            <ul style="color: #333; font-size: 16px; line-height: 1.6; margin-left: 20px;">
              <li>🚀 Early access to premium automation workflows</li>
              <li>💎 Exclusive creator opportunities</li>
              <li>📧 Priority updates on our launch progress</li>
              <li>🎁 Special launch discounts and bonuses</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-bottom: 25px;">
            <p style="color: #666; font-size: 14px;">
              Follow us for updates and automation tips:
            </p>
            <div style="margin-top: 15px;">
              <a href="#" style="color: #000; text-decoration: none; margin: 0 10px;">Twitter</a>
              <a href="#" style="color: #000; text-decoration: none; margin: 0 10px;">LinkedIn</a>
              <a href="#" style="color: #000; text-decoration: none; margin: 0 10px;">YouTube</a>
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #999; font-size: 12px; margin-bottom: 10px;">
              This email was sent to ${email} because you joined our waitlist.
            </p>
            <p style="color: #333; font-size: 14px; font-weight: bold;">
              Best regards,<br>The AgentXstore Team
            </p>
          </div>
        </div>
      `,
    });

    console.log("Confirmation email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Confirmation email sent successfully",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send confirmation email", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);