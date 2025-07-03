import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const sellerFeatures = [
  "Upload automations & earn (one-time or subscription)",
  "Get ratings, badges & public portfolio",
  "Offer Done-For-You services",
  "Earn globally with built-in payouts"
];

interface ForSellersSectionProps {
  onJoinWaitlist: () => void;
}

export function ForSellersSection({ onJoinWaitlist }: ForSellersSectionProps) {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="bg-accent rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">$2,847</div>
                <div className="text-text-subtle">Monthly earnings potential</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Lead Gen Workflow</span>
                  <span className="font-semibold">$127</span>
                </div>
                <div className="flex justify-between">
                  <span>E-commerce Automation</span>
                  <span className="font-semibold">$89</span>
                </div>
                <div className="flex justify-between">
                  <span>Social Media Manager</span>
                  <span className="font-semibold">$156</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold">
                    <span>This Month</span>
                    <span>$2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              For Sellers –{" "}
              <span className="italic">Monetize Your Workflows</span>
            </h2>
            <p className="text-xl text-text-subtle mb-8">
              Turn your automation expertise into recurring income.
            </p>
            
            <ul className="space-y-4 mb-8">
              {sellerFeatures.map((feature, index) => (
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
              Start Selling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}