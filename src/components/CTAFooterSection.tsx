
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be the First to Automate the Future
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join thousands of automation creators and businesses building the next generation of AI workflows.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background text-foreground border-0 h-14 text-lg placeholder:text-muted-foreground"
                required
              />
              
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full h-14 px-4 bg-background text-foreground rounded-md text-lg border-0 placeholder:text-muted-foreground"
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
              className="w-full bg-background text-foreground hover:bg-background/90 h-14 text-lg font-semibold animate-pulse-cta"
            >
              {isSubmitting ? "Joining the Revolution..." : "Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm opacity-70 mt-6">
            No spam. Just powerful automations.
          </p>
          
          <div className="mt-16 pt-8 border-t border-background/20">
            <div className="text-2xl font-bold mb-2">AgentXstore</div>
            <div className="text-sm opacity-70 italic">Automate. Earn. Repeat.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
