import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const platforms = [
  "n8n", "Zapier", "LangChain", "Make", "Automate.io", "Other"
];

export function CTAFooter() {
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
    
    try {
      const response = await fetch('http://localhost:5000/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(),
          name: platform || undefined
        })
      });

      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "You're on the waitlist! 🎉",
          description: "Check your email for confirmation!",
        });
        setEmail("");
        setPlatform("");
      } else {
        throw new Error(data.error || 'Failed to join waitlist');
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl mb-12 opacity-80">
            Be among the first to access the future of automation commerce
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background text-foreground border-0 h-14 text-lg"
                required
              />
              
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full h-14 px-4 bg-background text-foreground rounded-md text-lg border-0"
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
              className="w-full bg-background text-foreground hover:bg-background/90 h-14 text-lg animate-pulse-cta"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm opacity-60 mt-6">
            By joining, you agree to our fair use & privacy policy
          </p>
          
          <div className="mt-16 pt-8 border-t border-background/20">
            <div className="text-2xl font-bold mb-2">AgentXstore</div>
            <div className="text-sm opacity-60">Automate. Earn. Repeat.</div>
          </div>
        </div>
      </div>
    </section>
  );
}