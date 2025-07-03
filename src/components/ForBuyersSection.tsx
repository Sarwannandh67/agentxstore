import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const buyerFeatures = [
  "Download JSON, XML, YAML flows with guides & demos",
  "Filter by platform, use-case, or complexity",
  "Verified sellers & refundable purchases",
  "Request customizations or DFY setup"
];

interface ForBuyersSectionProps {
  onJoinWaitlist: () => void;
}

export function ForBuyersSection({ onJoinWaitlist }: ForBuyersSectionProps) {
  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              For Buyers –{" "}
              <span className="italic">Ready-to-Use Automations</span>
            </h2>
            <p className="text-xl text-text-subtle mb-8">
              Skip the learning curve. Get workflows that just work.
            </p>
            
            <ul className="space-y-4 mb-8">
              {buyerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={onJoinWaitlist}
              size="lg"
              className="bg-gradient-cta hover:bg-cta-hover px-8 py-4"
            >
              Get Early Access
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-pattern-light rounded-lg p-8 font-mono text-sm">
              <div className="text-text-subtle mb-4">// Sample workflow metadata</div>
              <div className="space-y-2">
                <div><span className="text-foreground font-semibold">"name":</span> "Lead Enrichment Pipeline"</div>
                <div><span className="text-foreground font-semibold">"platform":</span> "n8n"</div>
                <div><span className="text-foreground font-semibold">"complexity":</span> "Intermediate"</div>
                <div><span className="text-foreground font-semibold">"price":</span> "$49"</div>
                <div><span className="text-foreground font-semibold">"rating":</span> 4.9</div>
                <div><span className="text-foreground font-semibold">"downloads":</span> 2847</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}