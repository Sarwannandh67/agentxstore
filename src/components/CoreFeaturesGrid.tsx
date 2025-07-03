
import { Shield, Globe, Users, FileCheck, Lock, CreditCard, Eye } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Supports n8n, Zapier, LangChain, CrewAI",
    description: "Cross-platform compatibility for all major automation tools"
  },
  {
    icon: Lock,
    title: "Encrypted & Licensed Downloads",
    description: "Secure JSON, XML, YAML files with proper licensing"
  },
  {
    icon: Users,
    title: "Request Custom Workflows or DFY Setup",
    description: "Get personalized automations or full done-for-you service"
  },
  {
    icon: Eye,
    title: "Verified Sellers with Portfolios & Ratings",
    description: "Trusted creators with transparent reviews and badges"
  },
  {
    icon: Shield,
    title: "No Resell Policy — Watermarked & Secured",
    description: "Buyer protection with unique watermarking system"
  },
  {
    icon: CreditCard,
    title: "Global Payments: UPI, Stripe, Cards",
    description: "Multiple payment options for worldwide accessibility"
  },
  {
    icon: FileCheck,
    title: "Strict Human Review & Quality Curation",
    description: "Every workflow manually verified by our expert team"
  }
];

export function CoreFeaturesGrid() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the Automation Economy
          </h2>
          <p className="text-xl text-text-subtle max-w-2xl mx-auto">
            Everything you need to buy, sell, and profit from AI workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 bg-accent rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-subtle text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
