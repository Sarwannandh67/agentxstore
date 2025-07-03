
import { HeroSection } from "@/components/HeroSection";
import { CoreFeaturesGrid } from "@/components/CoreFeaturesGrid";
import { BuyersSection } from "@/components/BuyersSection";
import { SellersSection } from "@/components/SellersSection";
import { WhyAgentXstoreSection } from "@/components/WhyAgentXstoreSection";
import { CTAFooterSection } from "@/components/CTAFooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CoreFeaturesGrid />
      <BuyersSection />
      <SellersSection />
      <WhyAgentXstoreSection />
      <CTAFooterSection />
    </div>
  );
};

export default Index;
