import { features } from "../../data/features.jsx";
import Button from "../../ui/Button";

function KeyFeatures() {
  return (
    <div className="pt-15 pb-32">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-stone-50 mb-8 font-space-grotesk px-6 lg:px-16 text-center">
        Key Features
      </h2>

      <article className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-stone-100 mb-3 font-space-grotesk">
            Premium Coal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-orange-500 mb-4 font-space-grotesk">
            $199.99/kg
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
            High-quality coal with maximum heat output and minimum ash. Perfect
            for home heating and industrial use.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-stone-900/40 p-6 rounded-xl border border-stone-800 backdrop-blur-sm transition-all duration-300 hover:bg-stone-900/80 hover:border-orange-500/50 hover:-translate-y-1 hover:shadow-lg text-center"
            >
              <div className="mb-2 sm:mb-3">{feature.icon}</div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-stone-200 group-hover:text-white transition-colors mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 hidden md:block">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button type="primary">Buy now</Button>
          <Button type="secondary">Learn more</Button>
        </div>
      </article>
    </div>
  );
}

export default KeyFeatures;
