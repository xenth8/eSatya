import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIVerificationSystem from "@/components/AIVerificationSystem";
import VerificationTypes from "@/components/VerificationTypes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AIVerificationSystem />
      <VerificationTypes />
    </div>
  );
};

export default Index;
