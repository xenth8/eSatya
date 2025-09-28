import { Upload, Brain, Database, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Upload Document",
      description: "Securely upload your certificate or degree for verification"
    },
    {
      number: 2,
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Analysis",
      description: "Advanced algorithms analyze document authenticity"
    },
    {
      number: 3,
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database Check",
      description: "Cross-reference with institutional records"
    },
    {
      number: 4,
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Instant Result",
      description: "Receive detailed verification report in seconds"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">How eSatya Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/30 transform translate-x-1/2 z-0"></div>
              )}
              <div className="relative z-10 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;