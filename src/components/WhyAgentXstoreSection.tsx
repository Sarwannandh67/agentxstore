export function WhyAgentXstoreSection() {
  return (
    <section className="py-20 bg-hero-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why AgentXstore?
          </h2>
          
          <div className="text-xl text-text-subtle leading-relaxed mb-12 space-y-6">
            <p>
              Unlike code repositories or automation communities, AgentXstore is built for 
              <span className="font-semibold text-foreground"> commerce-first automation</span>. 
              We focus on monetization, professional curation, and end-to-end workflow trust.
            </p>
            
            <p>
              Every workflow is manually reviewed, properly licensed, and comes with 
              comprehensive documentation. Sellers build sustainable businesses, buyers get 
              professional-grade automations that actually work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-foreground mb-2">Coming Soon</div>
              <div className="text-text-subtle">Native Plugins</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-foreground mb-2">Q2 2024</div>
              <div className="text-text-subtle">Developer SDK</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-foreground mb-2">2024</div>
              <div className="text-text-subtle">Platform Partnerships</div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-accent rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg italic text-text-subtle">
              "To create the world's most trusted marketplace where automation creators 
              and businesses connect, enabling the democratization of AI workflows."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}