import { Phone, Truck, Wallet } from "lucide-react";

const steps = [
  {
    icon: <Phone className="w-10 h-10 text-orange-600" />,
    title: "1. Order",
    desc: "Leave a request on the website or call us. Our manager will clarify delivery details within 2 minutes.",
  },
  {
    icon: <Truck className="w-10 h-10 text-orange-600" />,
    title: "2. Fast Delivery",
    desc: "We load and deliver coal with our own transport within 1-3 days.",
  },
  {
    icon: <Wallet className="w-10 h-10 text-orange-600" />,
    title: "3. Pay on Delivery",
    desc: "No risks. You check the weight and quality at home, and only then pay.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-stone-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A completely transparent process with no prepayment required.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Decorative line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-orange-100 -z-10 border-t-2 border-dashed border-orange-200"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white z-10 transition-transform group-hover:scale-110 group-hover:bg-orange-100">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-action button (Optional) */}
        <div className="mt-12 text-center">
          <button className="text-orange-600 font-semibold hover:text-orange-700 underline underline-offset-4">
            Learn more about delivery →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
