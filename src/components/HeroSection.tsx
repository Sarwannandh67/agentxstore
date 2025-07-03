import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export function HeroSection({ onJoinWaitlist }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-foreground rotate-45 animate-slide-pattern"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-foreground"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border border-foreground rounded-full"></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-foreground"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 border-2 border-foreground rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The World's First{" "}
            <span className="block">Marketplace for</span>
            <span className="italic border-b-4 border-foreground">AI Agents & Workflows</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-subtle mb-12 max-w-3xl mx-auto">
            Plug, play, and profit from curated automation templates – n8n, Zapier, LangChain, and more.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={onJoinWaitlist}
              size="lg"
              className="bg-gradient-cta hover:bg-cta-hover text-2xl px-12 py-6 rounded-lg animate-pulse-cta transition-all duration-300 hover:shadow-strong"
            >
              Join the Waitlist
            </Button>
            
            <p className="text-sm text-text-subtle">
              Be the first to access the future of automation commerce
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