
import { DollarSign, Star, TrendingUp, Award, Globe, Zap } from "lucide-react";

const sellerFeatures = [
  {
    icon: DollarSign,
    title: "Earn via one-time, subscription, or hybrid model",
    description: "Flexible monetization options that scale with your business"
  },
  {
    icon: Star,
    title: "Portfolio with reviews, badges, and seller ranking",
    description: "Build your reputation with transparent feedback systems"
  },
  {
    icon: Zap,
    title: "Offer DFY (done-for-you) as upsell",
    description: "Premium implementation services for higher earnings"
  },
  {
    icon: Globe,
    title: "Monthly spotlights, global payouts (Stripe, UPI)",
    description: "International reach with localized payment solutions"
  }
];

export function SellersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="relative lg:order-1 mt-8 lg:mt-0">
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-medium">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                <span className="font-bold text-base sm:text-lg">Creator Dashboard</span>
              </div>
              
              <div className="text-center mb-6 sm:mb-8 p-4 sm:p-6 bg-accent rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">$12,847</div>
                <div className="text-sm sm:text-base text-text-subtle">Monthly earnings potential</div>
                <div className="text-xs sm:text-sm text-green-600 font-semibold mt-2">↗ +34% from last month</div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-center p-3 sm:p-4 bg-hero-bg rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Lead Gen Pro Suite</div>
                      <div className="text-xs sm:text-sm text-text-subtle">147 downloads</div>
                    </div>
                  </div>
                  <span className="font-bold text-base sm:text-lg">$3,247</span>
                </div>
                
                <div className="flex justify-between items-center p-3 sm:p-4 bg-hero-bg rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">E-commerce Automation</div>
                      <div className="text-xs sm:text-sm text-text-subtle">89 downloads</div>
                    </div>
                  </div>
                  <span className="font-bold text-base sm:text-lg">$2,156</span>
                </div>
                
                <div className="flex justify-between items-center p-3 sm:p-4 bg-hero-bg rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Social Media Manager</div>
                      <div className="text-xs sm:text-sm text-text-subtle">203 downloads</div>
                    </div>
                  </div>
                  <span className="font-bold text-base sm:text-lg">$4,891</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
              Upload, Monetize,{" "}
              <span className="italic bg-gradient-to-r from-foreground to-foreground bg-clip-text">
                Scale
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-text-subtle mb-8 sm:mb-12 leading-relaxed">
              Transform your automation expertise into a thriving global business with our creator-first platform.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {sellerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-foreground rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-text-subtle leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
