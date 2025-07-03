import { Check, Users, Mail, CircleDollarSign, FileText } from "lucide-react";

const highlights = [
  {
    icon: Check,
    title: "Cross-Platform Support",
    description: "n8n, Zapier, LangChain, and more platforms supported"
  },
  {
    icon: Users,
    title: "Manual Curation & Human Review",
    description: "Every workflow is verified by our expert team"
  },
  {
    icon: Mail,
    title: "Encrypted & Licensed Downloads",
    description: "Secure, watermarked workflows with proper licensing"
  },
  {
    icon: CircleDollarSign,
    title: "Global Payments",
    description: "UPI, Cards, Stripe - payment methods for everyone"
  },
  {
    icon: FileText,
    title: "DFY Options",
    description: "Done-For-You setup services for non-tech buyers"
  },
  {
    icon: Users,
    title: "Public Seller Portfolios",
    description: "Reviews, ratings, and verified seller badges"
  },
  {
    icon: Check,
    title: "Secure Licensing",
    description: "Buyer watermarking and usage tracking"
  },
  {
    icon: Mail,
    title: "Custom Workflow Requests",
    description: "Request specific automations from verified sellers"
  }
];

export function PlatformHighlights() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-text-subtle text-sm">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}