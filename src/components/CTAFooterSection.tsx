
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

const platforms = [
  "n8n", "Zapier", "LangChain", "CrewAI", "Make", "Automate.io", "Other"
];

export function CTAFooterSection() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
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
      title: "Welcome to the future! 🚀",
      description: "You're now on the AgentXstore waitlist.",
    });
    
    setEmail("");
    setPlatform("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 mr-3" />
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              Join the Future of Automation Commerce
            </h2>
          </div>
          
          <p className="text-xl mb-16 opacity-90 leading-relaxed">
            Be among the first to access the world's most comprehensive marketplace for AI agents and automation workflows.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background text-foreground border-0 h-16 text-lg placeholder:text-muted-foreground rounded-xl"
                required
              />
              
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="h-16 px-4 bg-background text-foreground rounded-xl text-lg border-0 placeholder:text-muted-foreground"
              >
                <option value="">Preferred platform (optional)</option>
                {platforms.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-background text-foreground hover:bg-background/90 h-16 text-lg font-semibold transition-all duration-300 hover:shadow-strong rounded-xl"
            >
              {isSubmitting ? "Joining the Revolution..." : "Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm opacity-70 mb-16">
            No spam. Only hand-picked, high-quality automations.
          </p>
          
          <div className="pt-16 border-t border-background/20">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold">AgentXstore</div>
            </div>
            <div className="text-lg opacity-80 italic font-medium">Automate. Earn. Repeat.</div>
            <div className="text-sm opacity-60 mt-4">© 2025 AgentXstore. Built for the automation economy.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
