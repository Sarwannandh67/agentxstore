
import { Check, DollarSign, Star, TrendingUp } from "lucide-react";

const sellerFeatures = [
  "Upload automations & get paid (one-time / subscription / hybrid)",
  "Offer full-service setup (DFY) for premium pricing",
  "Earn badges, reviews, and monthly spotlights",
  "Global payouts through Stripe and UPI"
];

export function SellersSection() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative lg:order-1">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-6 h-6 text-foreground" />
                <span className="font-semibold">Seller Dashboard</span>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-2">$2,847</div>
                <div className="text-text-subtle">Monthly earnings potential</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-foreground" />
                    <span>Lead Gen Workflow</span>
                  </div>
                  <span className="font-semibold">$127</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-foreground" />
                    <span>E-commerce Automation</span>
                  </div>
                  <span className="font-semibold">$89</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-foreground" />
                    <span>Social Media Manager</span>
                  </div>
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
              Monetize Your Workflows.{" "}
              <span className="italic">Globally.</span>
            </h2>
            <p className="text-xl text-text-subtle mb-8 leading-relaxed">
              Turn your automation expertise into recurring income with our seller-friendly platform.
            </p>
            
            <ul className="space-y-4 mb-8">
              {sellerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-lg leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
