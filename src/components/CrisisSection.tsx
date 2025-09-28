import { TrendingDown, Clock, AlertTriangle, Users } from "lucide-react";

const CrisisSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Growing Academic Crisis in Jharkhand
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Fake degrees and certificates are undermining trust in Jharkhand's education system, 
            affecting state recruitments, institutions, and honest students alike.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-red-600 mb-2">30%+</div>
            <p className="text-gray-600">degrees flagged as suspicious in state recruitments</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
            <p className="text-gray-600">forged certificate cases in the last 5 years</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <p className="text-gray-600">Recruitment delays due to slow verification processes</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <p className="text-gray-600">Declining public trust in higher education credibility</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Employers:</h3>
            <p className="text-gray-600">Hiring unqualified candidates leads to poor performance and legal risks</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Institutions:</h3>
            <p className="text-gray-600">Reputation damage and loss of credibility in the academic community</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Students:</h3>
            <p className="text-gray-600">Legitimate qualifications lose value and market trust</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">For Society:</h3>
            <p className="text-gray-600">Erosion of educational standards and professional competency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrisisSection;