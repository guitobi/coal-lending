import { FlaskConical, Handshake, Tag } from "lucide-react";

function AditionalSevices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-700">
        Additional Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Tag className="w-8 h-8 text-orange-600" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-900">
            Custom Labeling
          </h3>
          <p className="text-gray-500 text-sm">
            Customized packaging and labeling according to your requirements
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <FlaskConical className="w-8 h-8 text-blue-600" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-900">
            Quality Samples
          </h3>
          <p className="text-gray-500 text-sm">
            Free samples available upon request with technical specifications
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Handshake className="w-8 h-8 text-green-600" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-900">
            Loyalty Program
          </h3>
          <p className="text-gray-500 text-sm">
            Special conditions for regular or bulk orders
          </p>
        </div>
      </div>
    </section>
  );
}

export default AditionalSevices;
