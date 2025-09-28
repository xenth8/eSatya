import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, FileText, GraduationCap } from "lucide-react";

const VerificationTypes = () => {
  const verificationTypes = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Verify Certificate",
      description: "Validate professional certificates, training completions, and skill certifications from recognized institutions.",
      documents: [
        "Professional Certificates",
        "Training Completions", 
        "Skill Badges",
        "Industry Certifications"
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Verify Documents",
      description: "Authenticate official documents including ID cards, licenses, and institutional certificates.",
      documents: [
        "Identity Cards",
        "Professional Licenses",
        "Voter IDs", 
        "Official Certificates"
      ]
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Verify Degree",
      description: "Comprehensive verification of academic degrees from universities and educational institutions.",
      documents: [
        "Bachelor's Degrees",
        "Master's Degrees",
        "PhD Certificates",
        "Diploma Courses"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Verification Type</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the appropriate verification category for your document type. 
            Our AI system is optimized for different document formats and sources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {verificationTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{type.icon}</div>
                <CardTitle className="text-2xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Supported Documents:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {type.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Start Verification
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationTypes;