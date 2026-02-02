import { steps } from "../../data/steps.jsx";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-amber-50/70 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-space-grotesk">
            How It Works?
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            A completely transparent process with no prepayment required.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Decorative line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-amber-200 -z-10 border-t-2 border-dashed border-amber-300"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-amber-100 z-10 transition-transform group-hover:scale-110 group-hover:bg-amber-200">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action button (Optional) */}
        <div className="mt-12 text-center">
          <button className="text-neutral-800 font-semibold hover:text-neutral-900 underline underline-offset-4 cursor-pointer">
            Learn more about delivery →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
