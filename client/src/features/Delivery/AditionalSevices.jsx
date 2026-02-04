import { FlaskConical, Handshake, Tag } from "lucide-react";

function AditionalSevices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
        Additional Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <Tag
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            Custom Labeling
          </h3>
          <p className="text-stone-300 text-sm">
            Customized packaging and labeling according to your requirements
          </p>
        </div>
        <div className="group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <FlaskConical
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            Quality Samples
          </h3>
          <p className="text-stone-300 text-sm">
            Free samples available upon request with technical specifications
          </p>
        </div>
        <div className="group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center">
          <div className="mb-4">
            <Handshake
              className="w-10 h-10 mx-auto mb-4 text-stone-500 group-hover:text-orange-500 transition-colors duration-300"
              strokeWidth={2}
            />
          </div>
          <h3 className="text-xl font-bold mb-3 text-stone-200 group-hover:text-white transition-colors">
            Loyalty Program
          </h3>
          <p className="text-stone-300 text-sm">
            Special conditions for regular or bulk orders
          </p>
        </div>
      </div>
    </section>
  );
}

export default AditionalSevices;
