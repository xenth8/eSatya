import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Freemium",
      price: "Free",
      description: "Perfect for individuals and small-scale verification needs",
      features: [
        "10 verifications per month",
        "Basic OCR technology", 
        "Mobile app access",
        "Standard support",
        "No API access"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: "₹2,999/month",
      description: "Ideal for educational institutions and medium businesses",
      features: [
        "500 verifications per month",
        "Advanced fraud detection",
        "API access & integration", 
        "Priority support",
        "Detailed analytics"
      ],
      buttonText: "Start Professional",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise", 
      price: "₹15,999/month",
      description: "For large organizations requiring extensive verification",
      features: [
        "5,000 verifications per month",
        "White-label solution",
        "Advanced analytics",
        "Dedicated account manager", 
        "SLA guarantee"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Institutional",
      price: "Custom",
      description: "Tailored solutions for institutions and agencies",
      features: [
        "Unlimited verifications",
        "On-premise deployment",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Compliance support"
      ],
      buttonText: "Contact Sales", 
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Choose Your Subscription Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Flexible pricing options designed to meet the needs of individuals, institutions, and enterprises. 
            Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative h-full ${plan.popular ? 'border-2 border-primary shadow-lg' : 'border hover:shadow-lg'} transition-shadow`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant}
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;