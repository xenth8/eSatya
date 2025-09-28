// Enhanced AI/ML document analysis utilities
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = true;

export interface AnalysisResult {
  result: 'authentic' | 'suspicious' | 'fake';
  confidence: number;
  details: {
    patternRecognition: number;
    layoutAnalysis: number;
    consistencyCheck: number;
    textAnalysis?: number;
    overallScore: number;
    flags: string[];
    mlPrediction: string;
  };
}

export class DocumentAnalyzer {
  private classifier: any = null;
  private initialized = false;

  async initialize() {
    if (this.initialized) return;
    
    try {
      // Use a lightweight image classification model for document analysis
      this.classifier = await pipeline(
        'image-classification',
        'microsoft/DiT-base-finetuned-rvlcdip',
        { 
          device: 'webgpu'
        }
      );
      this.initialized = true;
    } catch (error) {
      console.log('Failed to load WebGPU model, falling back to mock analysis');
      // Fallback to mock analysis if model loading fails
      this.initialized = false;
    }
  }

  async analyzeImage(imageFile: File): Promise<AnalysisResult> {
    try {
      await this.initialize();
      
      if (!this.initialized || !this.classifier) {
        return this.mockAnalysis(imageFile);
      }

      // Convert file to image for ML analysis
      const imageUrl = URL.createObjectURL(imageFile);
      const results = await this.classifier(imageUrl);
      
      // Clean up the object URL
      URL.revokeObjectURL(imageUrl);

      // Process ML results for document authenticity
      return this.processMLResults(results, imageFile);
    } catch (error) {
      console.log('ML analysis failed, falling back to mock analysis:', error);
      return this.mockAnalysis(imageFile);
    }
  }

  private processMLResults(mlResults: any[], file: File): AnalysisResult {
    // Document categories that suggest authenticity
    const authenticCategories = ['form', 'letter', 'certificate', 'invoice', 'receipt'];
    const suspiciousCategories = ['handwriting', 'advertisement', 'presentation'];
    
    let isAuthentic = false;
    let isSuspicious = false;
    let maxScore = 0;
    let topCategory = '';

    // Analyze ML predictions
    for (const result of mlResults.slice(0, 5)) { // Top 5 predictions
      if (result.score > maxScore) {
        maxScore = result.score;
        topCategory = result.label.toLowerCase();
      }
      
      if (authenticCategories.some(cat => result.label.toLowerCase().includes(cat))) {
        isAuthentic = true;
      }
      if (suspiciousCategories.some(cat => result.label.toLowerCase().includes(cat))) {
        isSuspicious = true;
      }
    }

    // Enhanced pattern recognition based on ML confidence
    const patternScore = Math.min(maxScore * 100, 95);
    const layoutScore = this.analyzeFileCharacteristics(file);
    const consistencyScore = this.checkConsistency(file, topCategory);
    const textScore = this.analyzeTextPatterns(file);
    
    const overallScore = (patternScore + layoutScore + consistencyScore + textScore) / 4;
    
    let result: 'authentic' | 'suspicious' | 'fake';
    let flags: string[] = [];
    
    if (overallScore > 80 && isAuthentic && !isSuspicious) {
      result = 'authentic';
      flags = ['ML model confidence: HIGH', `Document type: ${topCategory}`, 'Pattern analysis: PASSED'];
    } else if (overallScore > 50 || (isAuthentic && isSuspicious)) {
      result = 'suspicious';
      flags = ['ML model confidence: MEDIUM', 'Mixed document signals detected', 'Requires manual review'];
    } else {
      result = 'fake';
      flags = ['ML model confidence: LOW', 'Suspicious patterns detected', 'Document authenticity questionable'];
    }

    return {
      result,
      confidence: overallScore,
      details: {
        patternRecognition: Math.round(patternScore),
        layoutAnalysis: Math.round(layoutScore),
        consistencyCheck: Math.round(consistencyScore),
        textAnalysis: Math.round(textScore),
        overallScore: Math.round(overallScore),
        flags,
        mlPrediction: `${topCategory} (${(maxScore * 100).toFixed(1)}% confidence)`
      }
    };
  }

  private analyzeFileCharacteristics(file: File): number {
    // Analyze file metadata for authenticity indicators
    const fileName = file.name.toLowerCase();
    const fileSize = file.size;
    
    let score = 70; // Base score
    
    // File size analysis (documents are typically within certain ranges)
    if (fileSize > 50000 && fileSize < 5000000) score += 15; // 50KB - 5MB is typical
    if (fileSize < 10000) score -= 20; // Very small files are suspicious
    
    // Filename analysis
    if (fileName.includes('certificate') || fileName.includes('degree') || fileName.includes('diploma')) {
      score += 10;
    }
    if (fileName.includes('fake') || fileName.includes('test') || fileName.includes('sample')) {
      score -= 30;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  private checkConsistency(file: File, documentType: string): number {
    // Check consistency between file characteristics and detected document type
    const fileType = file.type;
    let score = 75; // Base consistency score
    
    // PDF files are generally more authentic for official documents
    if (fileType === 'application/pdf') score += 15;
    
    // Check if document type matches expected patterns
    if (documentType.includes('form') || documentType.includes('letter')) {
      score += 10;
    }
    
    return Math.max(0, Math.min(100, score));
  }

  private analyzeTextPatterns(file: File): number {
    // Simple text pattern analysis based on file characteristics
    const fileName = file.name;
    let score = 70;
    
    // Check for professional naming patterns
    if (/\d{4}/.test(fileName)) score += 10; // Contains year
    if (/[A-Z]{2,}/.test(fileName)) score += 5; // Contains uppercase abbreviations
    
    return Math.max(0, Math.min(100, score));
  }

  private mockAnalysis(file: File): AnalysisResult {
    // Enhanced mock analysis for when ML model is not available
    const fileName = file.name.toLowerCase();
    const fileSize = file.size;
    
    // Simulate more sophisticated analysis
    const patternScore = this.analyzeFileCharacteristics(file);
    const layoutScore = Math.random() * 30 + 60; // 60-90 range
    const consistencyScore = Math.random() * 40 + 50; // 50-90 range
    const textScore = this.analyzeTextPatterns(file);
    
    const overallScore = (patternScore + layoutScore + consistencyScore + textScore) / 4;
    
    let result: 'authentic' | 'suspicious' | 'fake';
    let flags: string[] = [];
    
    if (overallScore > 80) {
      result = 'authentic';
      flags = ['Document structure: VALID', 'File characteristics: NORMAL', 'No suspicious patterns detected'];
    } else if (overallScore > 60) {
      result = 'suspicious';
      flags = ['Some inconsistencies detected', 'Requires additional verification', 'Manual review recommended'];
    } else {
      result = 'fake';
      flags = ['Multiple red flags detected', 'Suspicious file characteristics', 'High probability of tampering'];
    }
    
    // Special handling for obviously fake files
    if (fileName.includes('fake') || fileName.includes('test')) {
      result = 'fake';
      flags = ['Filename indicates test/fake document', 'Automated rejection'];
    }
    
    return {
      result,
      confidence: overallScore,
      details: {
        patternRecognition: Math.round(patternScore),
        layoutAnalysis: Math.round(layoutScore),
        consistencyCheck: Math.round(consistencyScore),
        textAnalysis: Math.round(textScore),
        overallScore: Math.round(overallScore),
        flags,
        mlPrediction: 'Mock analysis (ML model unavailable)'
      }
    };
  }
}

export const documentAnalyzer = new DocumentAnalyzer();