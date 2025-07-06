import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
}) {
  const emailId = uuidv4();
  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'AgentX Team <onboarding@resend.dev>',
      to,
      subject,
      html,
      text,
    });
    return { success: true, emailId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      emailId 
    };
  }
}
