import { HeroSection } from "@/components/HeroSection";
import { CoreFeaturesGrid } from "@/components/CoreFeaturesGrid";
import { BuyersSection } from "@/components/BuyersSection";
import { SellersSection } from "@/components/SellersSection";
import { WhyAgentXstoreSection } from "@/components/WhyAgentXstoreSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CoreFeaturesGrid />
      <BuyersSection />
      <SellersSection />
      <WhyAgentXstoreSection />
      <Footer />
    </div>
  );
};

export default Index;
