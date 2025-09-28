import { Brain, Shield, Database, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const TechnologySolution = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our Technology-Driven Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            eSatya combines cutting-edge AI, blockchain technology, and institutional partnerships 
            to create the most advanced document verification system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Detection</h3>
              <p className="text-gray-600 mb-4">
                Advanced machine learning algorithms analyze document patterns, fonts, and layouts to identify forgeries with 99.7% accuracy
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 px-3 py-1 rounded">OCR Technology</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Pattern Recognition</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Anomaly Detection</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Blockchain Verification</h3>
              <p className="text-gray-600 mb-4">
                Immutable ledger technology ensures document authenticity and prevents tampering or unauthorized modifications
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 px-3 py-1 rounded">Tamper-Proof Records</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Digital Signatures</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Smart Contracts</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Institutional Integration</h3>
              <p className="text-gray-600 mb-4">
                Direct connections with universities and databases for real-time verification and cross-referencing
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 px-3 py-1 rounded">Real-time API</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Bulk Processing</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Multi-format Support</div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Results</h3>
              <p className="text-gray-600 mb-4">
                Get verification results in seconds instead of days, with detailed reports and confidence scores
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-100 px-3 py-1 rounded">Sub-second Processing</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Detailed Analytics</div>
                <div className="bg-gray-100 px-3 py-1 rounded">Mobile Access</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolution;