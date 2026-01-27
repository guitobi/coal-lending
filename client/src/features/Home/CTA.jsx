import Button from "../../ui/Button";
import coalImage from "../../assets/coal_in_bag.png";

function CTA() {
  return (
    <section className="pb-20 sm:pb-25 md:pb-30 lg:pb-25 flex items-center ">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Текстовий блок зліва */}
          <div className="flex-1 lg:text-left text-center pt-8 sm:pt-12 md:pt-20 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold font-zalando text-orange-700 transition-all duration-500 cursor-pointer hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] mb-4 sm:mb-6 md:mb-8 text-center flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 tracking-wider">
              <span>Maximum Heat,</span>
              <span>Minimum Ash</span>
            </h1>

            {/* Фото на мобільному */}
            <div className="lg:hidden flex justify-center mb-4 sm:mb-6">
              <img
                src={coalImage}
                alt="Premium coal in bag"
                className="w-32 sm:w-40 md:w-48 rounded-2xl mix-blend-multiply drop-shadow-2xl"
              />
            </div>

            <h3 className="font-zalando text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-orange-800 hover:text-orange-600 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] cursor-pointer duration-300 mb-6 sm:mb-8 lg:mb-10 text-center">
              Honest weight, certified quality.
            </h3>

            {/* Кнопки під текстом */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button type="primary">Check Prices</Button>
              <Button type="secondary">Calculate Price</Button>
            </div>
          </div>

          {/* Фото мішка справа */}
          <div className="hidden lg:flex flex-1 justify-end items-center mt-12 lg:mt-8">
            <img
              src={coalImage}
              alt="Premium coal in bag"
              className="w-64 lg:w-72 xl:w-80 rounded-2xl hover:scale-105 transition-transform duration-300 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
