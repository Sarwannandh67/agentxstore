
import { Rocket, Code, Users, Building, Zap, Globe } from "lucide-react";

const roadmapItems = [
  {
    icon: Code,
    title: "SDK Integrations",
    description: "Native SDKs & APIs for seamless integration",
    timeline: "Q2 2025"
  },
  {
    icon: Zap,
    title: "Ecosystem Partner Plugins",
    description: "Direct n8n, Zapier marketplace connections",
    timeline: "Q3 2025"
  },
  {
    icon: Building,
    title: "White-labeled Enterprise Stores",
    description: "Custom marketplace solutions for enterprises",
    timeline: "Q4 2025"
  },
  {
    icon: Globe,
    title: "Creator Grant Programs",
    description: "Partnership programs and creator funding",
    timeline: "2026"
  }
];

export function WhyAgentXstoreSection() {
  return (
    <section id="why" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              Built for the Automation Economy
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl font-semibold mb-8 opacity-90 leading-relaxed">
                AgentXstore is more than a marketplace. It's a secure ecosystem for creators, buyers, and AI-first teams.
              </p>
              
              <p className="text-xl leading-relaxed opacity-80 mb-12">
                While others focus on code repositories or basic marketplaces, we've built the first 
                <span className="font-semibold"> commerce-native platform</span> for automation workflows. 
                Every transaction is protected, every creator is verified, and every workflow is production-ready.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="text-lg font-bold mb-2">{item.timeline}</div>
                  <div className="font-semibold mb-2">{item.title}</div>
                  <div className="text-sm opacity-80">{item.description}</div>
                </div>
              );
            })}
          </div>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/20">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Mission</h3>
            <p className="text-xl italic text-center opacity-90 leading-relaxed">
              "To create the world's most trusted marketplace where automation creators 
              and businesses connect, enabling the democratization of AI workflows and 
              building the infrastructure for the automation economy."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
