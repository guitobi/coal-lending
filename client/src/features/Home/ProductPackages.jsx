import { Package } from "lucide-react";
import { Link } from "react-router";
import Button from "../../ui/Button";

function ProductPackages() {
  // Базові стилі для карток
  const baseCardStyles =
    "rounded-lg p-6 sm:p-8 shadow-lg transition-all duration-300 border hover:shadow-2xl";

  return (
    <section
      id="packages"
      className="scroll-mt-20 md:scroll-mt-65 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-orange-500">
        Available Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* --- 2.5 kg --- */}
        <Link to="/order">
          <div
            className={`${baseCardStyles} bg-stone-900/40 border-stone-700 hover:border-amber-600`}
          >
            <div className="text-center">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                2.5 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-stone-200 mb-4">
                €1.88
              </div>
              <div className="text-sm text-stone-400 mb-6">per bag</div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ Perfect for small grills</li>
                <li>✓ Ideal for 2-3 people</li>
                <li>✓ Easy to store</li>
                <li>✓ Sealed packaging</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* --- 10 kg --- */}
        <Link to="/order">
          <div
            className={`${baseCardStyles} bg-stone-900/80 md:transform md:scale-105 border-orange-500/30 shadow-[rgba(249,115,22,0.2)]`}
          >
            <div className="text-center">
              <div className="bg-stone-200 text-orange-600 text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
                MOST POPULAR
              </div>
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                10 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
                €7.50
              </div>
              <div className="text-sm text-stone-400 mb-6">per bag</div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ Commercial use ready</li>
                <li>✓ Best price per kg</li>
                <li>✓ Long-lasting supply</li>
                <li>✓ Heavy-duty packaging</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* --- 5 kg --- */}
        <Link to="/order">
          <div
            className={`${baseCardStyles} bg-stone-900/40 border-stone-700 hover:border-amber-600`}
          >
            <div className="text-center">
              <Package className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-stone-300">
                5 kg
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-stone-100 mb-4">
                €3.75
              </div>
              <div className="text-sm text-stone-400 mb-6">per bag</div>
              <ul className="text-left space-y-2 text-sm sm:text-base text-stone-300">
                <li>✓ Best value option</li>
                <li>✓ Perfect for families</li>
                <li>✓ Multiple grilling sessions</li>
                <li>✓ Premium packaging</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
        <Link to="/order">
          <Button type="primary">Order now</Button>
        </Link>
        <a href="/about">
          <Button type="secondary">Learn more</Button>
        </a>
      </div>

      {/* Footer Info */}
      <div className="text-center mt-6 sm:mt-8 text-stone-300 px-4">
        <p className="text-base sm:text-lg">
          Base price:{" "}
          <span className="font-bold text-orange-500">€950/ton</span> | €0.95/kg
        </p>
        <p className="text-xs sm:text-sm mt-2">
          Delivery: DAP Polkowice (Incoterms 2020)
        </p>
      </div>
    </section>
  );
}

export default ProductPackages;
