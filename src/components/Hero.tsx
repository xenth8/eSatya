import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-brand-navy text-white py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          eSatya <br />
          <span className="text-primary">with Technology</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
          A digital platform to detect and prevent fake degrees, certificates, and 
          documents across higher education systems.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-lg">AI-Powered Detection</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-lg">Blockchain Verified</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-lg">99.7% Accuracy</span>
          </div>
        </div>
        
        <div className="inline-flex items-center space-x-2 bg-primary/20 px-6 py-3 rounded-full">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary font-semibold">Secure • Instant • Reliable</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;