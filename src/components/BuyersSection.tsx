
import { Check, Download, Video, RefreshCw, Search, Shield } from "lucide-react";

const buyerFeatures = [
  {
    icon: Download,
    title: "JSON/YAML/XML workflows with setup guides",
    description: "Production-ready files with comprehensive documentation"
  },
  {
    icon: Video,
    title: "Demo video walkthroughs",
    description: "Visual guides showing exactly how workflows operate"
  },
  {
    icon: RefreshCw,
    title: "Custom tweaks or full setup available",
    description: "Professional customization and implementation services"
  },
  {
    icon: Shield,
    title: "Refundable if broken/misleading",
    description: "Quality guarantee with full refund protection"
  },
  {
    icon: Search,
    title: "Smart search: platform, use-case, difficulty",
    description: "Advanced filtering to find exactly what you need"
  }
];

export function BuyersSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-hero-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
              Workflows{" "}
              <span className="italic bg-gradient-to-r from-foreground to-foreground bg-clip-text">
                That Just Work
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-text-subtle mb-8 sm:mb-12 leading-relaxed">
              Skip months of development. Get production-ready automations that deliver results from day one.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {buyerFeatures.map((feature, index) => {
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
          
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-medium">
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                <span className="font-semibold ml-2 sm:ml-4 text-sm sm:text-base">Workflow Preview</span>
              </div>
              <div className="bg-pattern-light rounded-xl p-4 sm:p-6 font-mono text-xs sm:text-sm">
                <div className="text-text-subtle mb-4 sm:mb-6 text-xs">// Enterprise Lead Enrichment Pipeline</div>
                <div className="space-y-4">
                  <div><span className="text-foreground font-bold">"name":</span> <span className="text-green-600">"Advanced Lead Enrichment"</span></div>
                  <div><span className="text-foreground font-bold">"platform":</span> <span className="text-blue-600">"n8n"</span></div>
                  <div><span className="text-foreground font-bold">"complexity":</span> <span className="text-orange-600">"Professional"</span></div>
                  <div><span className="text-foreground font-bold">"price":</span> <span className="text-purple-600">"$149"</span></div>
                  <div><span className="text-foreground font-bold">"rating":</span> <span className="text-yellow-600">⭐⭐⭐⭐⭐ 4.9/5</span></div>
                  <div><span className="text-foreground font-bold">"downloads":</span> <span className="text-indigo-600">8,247</span></div>
                  <div><span className="text-foreground font-bold">"demo_video":</span> <span className="text-green-600">true</span></div>
                  <div><span className="text-foreground font-bold">"dfy_available":</span> <span className="text-green-600">true</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
