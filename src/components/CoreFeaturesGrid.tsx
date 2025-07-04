
import { Shield, Globe, Users, FileCheck, Lock, CreditCard, Eye, Code } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Cross-Platform: n8n, Zapier, LangChain & More",
    description: "Universal compatibility across all major automation platforms"
  },
  {
    icon: Lock,
    title: "Encrypted Files + Licensing Engine",
    description: "Secure JSON, XML, YAML downloads with built-in licensing"
  },
  {
    icon: Users,
    title: "Custom Workflow Requests Built-in",
    description: "Request personalized automations from verified creators"
  },
  {
    icon: Shield,
    title: "DFY Setup for Non-Tech Teams",
    description: "Done-for-you implementation services available"
  },
  {
    icon: Eye,
    title: "Verified Sellers + Public Portfolios",
    description: "Transparent creator profiles with ratings and portfolios"
  },
  {
    icon: Shield,
    title: "No Resell. Watermarked & Traceable",
    description: "Advanced protection with unique buyer watermarking"
  },
  {
    icon: CreditCard,
    title: "Global Payments – Stripe, UPI, Cards",
    description: "Multiple payment methods for worldwide accessibility"
  },
  {
    icon: FileCheck,
    title: "Manual Review & Strict Curation",
    description: "Every workflow manually verified by automation experts"
  }
];

export function CoreFeaturesGrid() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
            Enterprise-Grade Features
          </h2>
          <p className="text-lg sm:text-xl text-text-subtle max-w-3xl mx-auto leading-relaxed px-4">
            Industry-grade features designed for professional automation workflows
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-medium transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 leading-tight">{feature.title}</h3>
                <p className="text-text-subtle text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
