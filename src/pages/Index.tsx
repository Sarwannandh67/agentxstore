import { HeroSection } from "@/components/HeroSection";
import { PlatformHighlights } from "@/components/PlatformHighlights";
import { ForBuyersSection } from "@/components/ForBuyersSection";
import { ForSellersSection } from "@/components/ForSellersSection";
import { WhyAgentXstoreSection } from "@/components/WhyAgentXstoreSection";
import { CTAFooter } from "@/components/CTAFooter";

const Index = () => {
  const scrollToWaitlist = () => {
    const footer = document.querySelector('section:last-child');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onJoinWaitlist={scrollToWaitlist} />
      <PlatformHighlights />
      <ForBuyersSection onJoinWaitlist={scrollToWaitlist} />
      <ForSellersSection onJoinWaitlist={scrollToWaitlist} />
      <WhyAgentXstoreSection />
      <CTAFooter />
    </div>
  );
};

export default Index;
