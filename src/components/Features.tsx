import { Shield, Code, Smartphone, Lock, BarChart3, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Document Verification",
      description: "Bank-level security with end-to-end encryption ensures your documents are protected.",
      items: ["256-bit SSL encryption", "GDPR compliant", "Secure cloud storage"]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Easy API Integration",
      description: "RESTful APIs allow universities and employers to integrate verification directly.",
      items: ["REST API", "SDK support", "Real-time webhooks"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Access",
      description: "Native mobile apps for iOS and Android allow verification on-the-go.",
      items: ["Native apps", "Push notifications", "Offline mode"]
    },
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Multi-factor Authentication",
      description: "Enhanced security with biometric verification, OTP, and device fingerprinting.",
      items: ["Biometric auth", "OTP verification", "Device tracking"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Admin Dashboards",
      description: "Comprehensive dashboards for institutions to manage verifications and generate reports.",
      items: ["Usage analytics", "Custom reports", "User management"]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Multi-language Support",
      description: "Support for Hindi, English, and regional languages to ensure accessibility.",
      items: ["Hindi support", "Regional languages", "RTL text support"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Powerful Features for Complete Security
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Enterprise-grade features designed to meet the complex needs of educational institutions, 
            employers, and agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;