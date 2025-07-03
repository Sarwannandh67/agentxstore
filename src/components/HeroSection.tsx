
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the waitlist! 🎉",
      description: "We'll notify you when AgentXstore launches.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-foreground rotate-45 animate-slide-pattern"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-foreground"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-foreground rounded-full"></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-foreground rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-foreground rotate-12"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The World's First{" "}
            <span className="block mt-2">Marketplace for</span>
            <span className="italic border-b-4 border-foreground mt-2 inline-block">
              AI Agents & Automation Workflows
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-subtle mb-12 max-w-4xl mx-auto leading-relaxed">
            Download, customize, and monetize plug-and-play automations across platforms like n8n, Zapier, LangChain, and more.
          </p>
          
          {/* Embedded Email Form */}
          <div className="max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email to join the waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 text-lg border-2 border-foreground/20 focus:border-foreground transition-colors"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background h-14 px-8 text-lg font-semibold animate-pulse-cta transition-all duration-300 hover:shadow-strong whitespace-nowrap"
              >
                {isSubmitting ? "Joining..." : "Join Now"}
              </Button>
            </form>
            <p className="text-sm text-text-subtle mt-3">
              No spam. Just powerful automations.
            </p>
          </div>
        </div>
      </div>

      {/* Code-style decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-subtle font-mono text-sm opacity-50">
        &lt;AgentXstore /&gt;
      </div>
    </section>
  );
}
