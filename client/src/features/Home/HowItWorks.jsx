import { steps } from "../../data/steps.jsx";
import Button from "../../ui/Button.jsx";

const HowItWorks = () => {
  return (
    <section className="py-20  relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-100 mb-4 font-space-grotesk">
            How It Works?
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto">
            A completely transparent process with no prepayment required.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Decorative line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-amber-600 -z-10 border-t-2 border-dashed border-amber-600"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group "
            >
              {/* Icon circle */}
              <div className="relative w-24 h-24 bg-stone-900/40 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 hover:border-amber-600 z-20 transition-all duration-300 group-hover:scale-105">
                {/* Opaque background to hide line */}
                <div className="absolute inset-0 bg-stone-950 rounded-full -z-10"></div>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-amber-600 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action button (Optional) */}
        <div className="mt-12 text-center">
          <Button
            to="/delivery"
            className="text-stone-300 font-semibold hover:text-stone-400 underline underline-offset-4 cursor-pointer"
          >
            Learn more about delivery →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
