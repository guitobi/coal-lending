import Button from "../../ui/Button";

function KeyFeatures() {
  return (
    <div className="pt-15 pb-50 bg-amber-100">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-neutral-800 mb-8 font-space-grotesk">
        Key Features
      </h2>
      <article className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Ціна та опис */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-neutral-900 mb-3 font-space-grotesk">
            Premium Coal
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-neutral-800 mb-4 font-space-grotesk">
            $199.99/kg
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            High-quality coal with maximum heat output and minimum ash. Perfect
            for home heating and industrial use.
          </p>
        </div>

        {/* Характеристики */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 mb-10">
          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center">
            <div className="text-3xl sm:text-4xl lg:text-4xl mb-2 sm:mb-3">
              🔥
            </div>
            <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-neutral-800 mb-2">
              High Heat
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 hidden md:block">
              Maximum thermal efficiency
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">✨</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
              Low Ash
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 hidden md:block">
              Minimal residue
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">⚖️</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
              Certified
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 hidden md:block">
              Honest weight
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🚚</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 hidden md:block">
              Quick shipping
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center hidden md:block">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🏭</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Sustainable sourcing
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 transition-all text-center hidden md:block">
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">💰</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-neutral-800 mb-2">
              Best Value
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Competitive pricing
            </p>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button type="primary">Buy now</Button>
          <Button type="secondary">Learn more</Button>
        </div>
      </article>
    </div>
  );
}

export default KeyFeatures;
