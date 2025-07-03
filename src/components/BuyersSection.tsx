
import { Check, Monitor } from "lucide-react";

const buyerFeatures = [
  "Download-ready workflows with step-by-step guides",
  "Demo videos included with every purchase",
  "Refund policy for broken or non-functional flows",
  "Request edits or full customization services",
  "Smart filters for platform, use-case, and complexity"
];

export function BuyersSection() {
  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Buy Automations{" "}
              <span className="italic">That Just Work</span>
            </h2>
            <p className="text-xl text-text-subtle mb-8 leading-relaxed">
              Skip the learning curve. Get workflows that are production-ready from day one.
            </p>
            
            <ul className="space-y-4 mb-8">
              {buyerFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-lg leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-foreground" />
                <span className="font-semibold">Workflow Preview</span>
              </div>
              <div className="bg-pattern-light rounded-lg p-6 font-mono text-sm">
                <div className="text-text-subtle mb-4">// Sample workflow metadata</div>
                <div className="space-y-3">
                  <div><span className="text-foreground font-semibold">"name":</span> "Lead Enrichment Pipeline"</div>
                  <div><span className="text-foreground font-semibold">"platform":</span> "n8n"</div>
                  <div><span className="text-foreground font-semibold">"complexity":</span> "Intermediate"</div>
                  <div><span className="text-foreground font-semibold">"price":</span> "$49"</div>
                  <div><span className="text-foreground font-semibold">"rating":</span> ⭐ 4.9/5</div>
                  <div><span className="text-foreground font-semibold">"downloads":</span> 2,847</div>
                  <div><span className="text-foreground font-semibold">"demo_included":</span> true</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
