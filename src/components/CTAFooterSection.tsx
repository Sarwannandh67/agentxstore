import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Twitter, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
const platforms = ["n8n", "Zapier", "LangChain", "CrewAI", "Make", "Other"];
export function CTAFooterSection() {
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("");
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
            platform: platform || null
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
        toast({
          title: "Welcome to the future! 🚀",
          description: "You're now on the AgentXstore waitlist."
        });
        setEmail("");
        setPlatform("");
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
  return <section className="py-16 sm:py-20 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2 sm:gap-0">
            <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 sm:mr-3" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Join the Future of Automation Commerce
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl mb-12 sm:mb-16 opacity-90 leading-relaxed px-4">
            Be among the first to access the world's most comprehensive marketplace for AI agents and automation workflows.
          </p>
          
          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8 sm:mb-12 space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background text-foreground border-0 h-12 sm:h-14 text-base sm:text-lg"
              required
            />
            
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full h-12 sm:h-14 px-4 bg-background text-foreground rounded-md text-base sm:text-lg border-0"
            >
              <option value="">Preferred platform (optional)</option>
              {platforms.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-background text-foreground hover:bg-background/90 h-12 sm:h-14 text-base sm:text-lg font-semibold"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-sm opacity-70 mb-12 sm:mb-16">
            No spam. Only hand-picked, high-quality automations.
          </p>
          
          <div className="pt-12 sm:pt-16 border-t border-background/20">
            <div className="flex items-center justify-center mb-6">
              <div className="text-3xl font-bold">AgentXstore</div>
            </div>
            <div className="text-lg opacity-80 italic font-medium mb-8">Automate. Earn. Repeat.</div>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 hover:bg-background/10 transition-all duration-300"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 hover:bg-background/10 transition-all duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 hover:bg-background/10 transition-all duration-300"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 hover:bg-background/10 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center hover:border-background/60 hover:bg-background/10 transition-all duration-300"
                aria-label="Follow us on Facebook"  
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            
            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm opacity-70">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Support</a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
            </div>
            
            <div className="text-sm opacity-60">© 2025 AgentXstore. Built for the automation economy.</div>
          </div>
        </div>
      </div>
    </section>;
}