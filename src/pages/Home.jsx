import HeroSection from "../components/home/HeroSection";
import PopularCarsSection from "../components/home/PopularCarsSection";
import VizagFeatureSection from "../components/home/VizagFeatureSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import WhyHrrSection from "../components/home/WhyHrrSection";
import FinalCtaSection from "../components/home/FinalCtaSection";

export default function Home() {
  return (
    <div className="overflow-hidden bg-cream">

      <HeroSection />

      <PopularCarsSection />

      <VizagFeatureSection />

      <HowItWorksSection />

      <WhyHrrSection />

      <FinalCtaSection />

    </div>
  );
}