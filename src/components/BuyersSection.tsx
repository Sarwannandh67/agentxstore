
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const buyerFeatures = [
  "JSON/XML/YAML with Setup Guides",
  "Demo Video Included",
  "Refund Guarantee",
  "Request Customization or DFY",
  "Buyer Dashboard for Licenses & Updates"
];

export function BuyersSection() {
  return (
    <section id="for-buyers" className="py-24 bg-hero-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Buy Workflows That Just Work
            </h2>
            <h3 className="text-xl text-text-subtle mb-8 leading-relaxed">
              Download-ready automations with documentation, support, and future-proofing.
            </h3>
            
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
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Get Early Access
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-pattern-light rounded-xl p-8 font-mono text-sm shadow-medium">
              <div className="text-text-subtle mb-4">// Buyer Dashboard Preview</div>
              <div className="space-y-3">
                <div className="bg-accent rounded-lg p-4">
                  <div><span className="text-foreground font-semibold">"workflow":</span> "Lead Enrichment Pipeline"</div>
                  <div><span className="text-foreground font-semibold">"platform":</span> "n8n"</div>
                  <div><span className="text-foreground font-semibold">"status":</span> "Downloaded"</div>
                  <div><span className="text-foreground font-semibold">"license":</span> "Active"</div>
                </div>
                <div className="bg-accent rounded-lg p-4">
                  <div><span className="text-foreground font-semibold">"workflow":</span> "E-commerce Automation"</div>
                  <div><span className="text-foreground font-semibold">"platform":</span> "Zapier"</div>
                  <div><span className="text-foreground font-semibold">"status":</span> "Setup Complete"</div>
                  <div><span className="text-foreground font-semibold">"updates":</span> "Available"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
