import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIVerificationSystem from "@/components/AIVerificationSystem";
import VerificationTypes from "@/components/VerificationTypes";
import CrisisSection from "@/components/CrisisSection";
import TechnologySolution from "@/components/TechnologySolution";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AIVerificationSystem />
      <VerificationTypes />
      <CrisisSection />
      <TechnologySolution />
      <HowItWorks />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
