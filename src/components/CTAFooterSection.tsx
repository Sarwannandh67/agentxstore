import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";
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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Welcome to the future! 🚀",
      description: "You're now on the AgentXstore waitlist."
    });
    setEmail("");
    setPlatform("");
    setIsSubmitting(false);
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
          
          
          
          <p className="text-sm opacity-70 mb-12 sm:mb-16">
            No spam. Only hand-picked, high-quality automations.
          </p>
          
          <div className="pt-12 sm:pt-16 border-t border-background/20">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl font-bold">AgentXstore</div>
            </div>
            <div className="text-lg opacity-80 italic font-medium">Automate. Earn. Repeat.</div>
            <div className="text-sm opacity-60 mt-4">© 2025 AgentXstore. Built for the automation economy.</div>
          </div>
        </div>
      </div>
    </section>;
}