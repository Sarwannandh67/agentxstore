
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const sellerFeatures = [
  "Sell workflows (One-time, Subscription, Hybrid)",
  "Offer DFY as premium service",
  "Build trust with ratings, badges, and verified profiles",
  "Monthly campaigns & spotlight programs",
  "Global payouts with Razorpay/Stripe"
];

export function SellersSection() {
  return (
    <section id="for-sellers" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative lg:order-1">
            <div className="bg-accent rounded-xl p-8 shadow-medium">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">$2,847</div>
                <div className="text-text-subtle">Monthly earnings potential</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Lead Gen Workflow</span>
                  <span className="font-semibold">$127</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>E-commerce Automation</span>
                  <span className="font-semibold">$89</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Social Media Manager</span>
                  <span className="font-semibold">$156</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>DFY Services</span>
                  <span className="font-semibold">$895</span>
                </div>
                <div className="border-t-2 border-foreground pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>This Month</span>
                    <span>$2,847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Monetize Your Automations. Globally.
            </h2>
            <p className="text-xl text-text-subtle mb-8 leading-relaxed">
              Turn your automation expertise into recurring income with global reach.
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
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Start Selling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
