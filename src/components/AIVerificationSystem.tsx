import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Upload, FileText, AlertCircle, CheckCircle, XCircle, Loader2, Brain, Scan, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { documentAnalyzer, AnalysisResult } from '@/utils/documentAnalysis';

const AIVerificationSystem = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleVerification = async () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    try {
      const analysis = await documentAnalyzer.analyzeImage(file);
      setResult(analysis);
      
      // Show completion toast
      toast({
        title: "Analysis Complete",
        description: `Document analysis finished with ${analysis.details.overallScore}% confidence.`
      });
    } catch (error) {
      toast({
        title: "Verification failed",
        description: "An error occurred during document analysis. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;
    
    // Validate file type and size
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(uploadedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, JPG, or PNG file.",
        variant: "destructive"
      });
      return;
    }
    
    if (uploadedFile.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB.",
        variant: "destructive"
      });
      return;
    }
    
    setFile(uploadedFile);
    setResult(null);
  };

  const getResultIcon = () => {
    switch (result?.result) {
      case 'authentic':
        return <CheckCircle className="w-8 h-8 text-green-500" />;
      case 'suspicious':
        return <AlertCircle className="w-8 h-8 text-yellow-500" />;
      case 'fake':
        return <XCircle className="w-8 h-8 text-red-500" />;
      default:
        return null;
    }
  };

  const getResultText = () => {
    switch (result?.result) {
      case 'authentic':
        return { status: "✅ Authentic", color: "text-green-600", bgColor: "bg-green-50" };
      case 'suspicious':
        return { status: "⚠️ Suspicious / Needs Review", color: "text-yellow-600", bgColor: "bg-yellow-50" };
      case 'fake':
        return { status: "❌ Fake", color: "text-red-600", bgColor: "bg-red-50" };
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Try Our <span className="text-primary">Document Verification</span>
          </h2>
          <p className="text-xl text-gray-600">
            Upload a sample document and see how our AI-powered system works in real-time. 
            Get instant verification results with detailed analysis.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-6 h-6" />
              <span>Upload Document for Verification</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg mb-2">Drag and drop your PDF or image file here</p>
                <p className="text-gray-500 mb-4">or click to browse</p>
                <p className="text-sm text-gray-400">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
              </label>
            </div>

            {file && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-gray-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleVerification}
                    disabled={isAnalyzing}
                    className="bg-primary hover:bg-primary/90"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Verify Document'
                    )}
                  </Button>
                </div>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-8">
                <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI Analysis in Progress</h3>
                <p className="text-gray-600 mb-4">Our machine learning model is analyzing your document...</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-center items-center space-x-2">
                    <Brain className="w-4 h-4 text-primary animate-pulse" />
                    <span>AI pattern recognition analysis</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Scan className="w-4 h-4 text-primary animate-pulse" />
                    <span>Document layout verification</span>
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    <Shield className="w-4 h-4 text-primary animate-pulse" />
                    <span>Machine learning authenticity assessment</span>
                  </div>
                </div>
              </div>
            )}

            {result && (
              <div className="space-y-6">
                <div className={`p-6 rounded-lg ${getResultText()?.bgColor} border`}>
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    {getResultIcon()}
                    <h3 className={`text-2xl font-bold ${getResultText()?.color}`}>
                      {getResultText()?.status}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">{result.details.patternRecognition}%</div>
                      <div className="text-sm text-gray-600">Pattern Recognition</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">{result.details.layoutAnalysis}%</div>
                      <div className="text-sm text-gray-600">Layout Analysis</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-800">{result.details.consistencyCheck}%</div>
                      <div className="text-sm text-gray-600">Consistency Check</div>
                    </div>
                    {result.details.textAnalysis && (
                      <div className="text-center">
                        <div className="text-3xl font-bold text-gray-800">{result.details.textAnalysis}%</div>
                        <div className="text-sm text-gray-600">Text Analysis</div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center space-x-2">
                        <Brain className="w-5 h-5 text-primary" />
                        <span>AI Analysis Results:</span>
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">ML Prediction: {result.details.mlPrediction}</p>
                      <ul className="space-y-1 text-sm">
                        {result.details.flags.map((flag: string, index: number) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Overall Confidence:</span>
                        <span className={`font-bold text-lg ${
                          result.confidence > 80 ? 'text-green-600' :
                          result.confidence > 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.details.overallScore}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIVerificationSystem;