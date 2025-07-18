import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Logo } from "@/components/Logo";
export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to join the waitlist.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: email.trim().toLowerCase(),
            platform: null
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique violation
          toast({
            title: "Already registered!",
            description: "This email is already on our waitlist.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        // Send confirmation email via Supabase Edge Function
        try {
          const { data, error: emailError } = await supabase.functions.invoke('send-confirmation', {
            body: { 
              email: email.trim().toLowerCase(),
              name: email.split('@')[0] // Use email prefix as name
            }
          });

          if (emailError) {
            console.warn('Email confirmation failed, but continuing...', emailError);
          }
        } catch (emailError) {
          console.error('Error sending confirmation email:', emailError);
          // Continue execution even if email fails
        }

        toast({
          title: "Welcome to the future! 🚀",
          description: "You're now on the AgentXstore waitlist. Check your email for confirmation!"
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-[0.04]">
        {/* Flowing Network Lines */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 animate-float-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,50 Q50,20 80,50 T140,50" stroke="currentColor" strokeWidth="2" fill="none" className="animate-draw-line" />
            <circle cx="20" cy="50" r="4" fill="currentColor" className="animate-pulse-node" />
            <circle cx="80" cy="50" r="4" fill="currentColor" className="animate-pulse-node" style={{
            animationDelay: '0.5s'
          }} />
            <circle cx="140" cy="50" r="4" fill="currentColor" className="animate-pulse-node" style={{
            animationDelay: '1s'
          }} />
          </svg>
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-foreground rotate-45 animate-rotate-slow"></div>
        <div className="absolute bottom-32 left-10 w-24 h-24 border border-foreground rounded-full animate-scale-pulse"></div>
        <div className="absolute top-60 right-1/4 w-16 h-16 border border-foreground animate-float"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <Logo className="h-16 md:h-20 w-auto mx-auto" />
          </div>
          
          <h1 className="sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight xl:text-5xl text-4xl">
            The World's First{" "}
            <span className="block mt-2">Marketplace for</span>
            <span className="italic border-b-4 border-foreground mt-2 inline-block bg-gradient-to-r from-foreground to-foreground bg-clip-text text-center">AI Agents &amp; Automation 
Workflows</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-text-subtle mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4 md:text-xl">
            Monetize or install plug-and-play automations — verified, secure, and cross-platform.
          </p>
          
          {/* Enhanced Email Form */}
          <div className="max-w-lg mx-auto mb-8 md:mb-12 px-4">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <Input type="email" placeholder="Enter your email to join the waitlist" value={email} onChange={e => setEmail(e.target.value)} className="flex-1 h-14 sm:h-16 px-4 sm:px-6 text-base sm:text-lg border-2 border-foreground/20 focus:border-foreground transition-all duration-300 rounded-lg" required />
              <Button type="submit" disabled={isSubmitting} size="lg" className="bg-foreground hover:bg-foreground/90 text-background h-14 sm:h-16 px-6 sm:px-8 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-strong whitespace-nowrap rounded-lg">
                {isSubmitting ? "Joining..." : "Get Early Access"}
              </Button>
            </form>
            <p className="text-sm text-text-subtle px-2">
              Launching soon. Limited early access for creators and buyers.
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <ChevronDown className="w-6 h-6 mx-auto text-text-subtle" />
          </div>
        </div>
      </div>

      {/* Code-style decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-subtle font-mono text-sm opacity-50">
        &lt;AgentXstore.init() /&gt;
      </div>
    </section>;
}