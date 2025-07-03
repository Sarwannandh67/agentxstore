
import { Shield, Globe, Users, FileCheck, Lock, CreditCard, Eye, Code } from "lucide-react";

const features = [
  {
    emoji: "✅",
    icon: Code,
    title: "Cross-Platform: n8n, Zapier, LangChain & More",
    description: "Universal compatibility across all major automation platforms"
  },
  {
    emoji: "🔐",
    icon: Lock,
    title: "Encrypted + Licensed Workflow Files",
    description: "Secure JSON, XML, YAML downloads with built-in licensing"
  },
  {
    emoji: "🛠️",
    icon: Users,
    title: "Customization & DFY Options",
    description: "Request personalized automations from verified creators"
  },
  {
    emoji: "🧾",
    icon: Shield,
    title: "Verified Sellers & Reviews",
    description: "Transparent creator profiles with ratings and portfolios"
  },
  {
    emoji: "🌍",
    icon: Globe,
    title: "Global Payment Support (UPI, Stripe)",
    description: "Multiple payment methods for worldwide accessibility"
  },
  {
    emoji: "🚫",
    icon: Shield,
    title: "No Resell + Watermarking System",
    description: "Advanced protection with unique buyer watermarking"
  },
  {
    emoji: "📦",
    icon: FileCheck,
    title: "Setup Guides + Demo Videos Included",
    description: "Complete documentation and walkthrough videos"
  },
  {
    emoji: "👨‍🔬",
    icon: FileCheck,
    title: "Manual Human Curation (No AI Spam)",
    description: "Every workflow manually verified by automation experts"
  }
];

export function CoreFeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Built for the Automation Economy
          </h2>
          <p className="text-xl text-text-subtle max-w-3xl mx-auto leading-relaxed">
            Industry-grade features designed for professional automation workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-6 bg-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                <h3 className="text-lg font-bold mb-4 leading-tight">{feature.title}</h3>
                <p className="text-text-subtle text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
