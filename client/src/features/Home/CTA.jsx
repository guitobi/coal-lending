import Button from "../../ui/Button";

function CTA() {
  return (
    <section className="pb-20 sm:pb-25 md:pb-30 lg:pb-25 flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16">
          <div className="flex-1 lg:text-left text-center pt-8 sm:pt-12 md:pt-20 lg:pt-0">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-bold font-space-grotesk text-stone-50 transition-all duration-500 cursor-pointer hover:text-orange-600
            hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] mb-4 sm:mb-6 md:mb-8 text-center tracking-tight sm:tracking-normal px-2 sm:px-0"
            >
              <span className="inline-block">Maximum Heat,</span>{" "}
              <span className="inline-block">Minimum Ash</span>
            </h1>

            {/* Mobile layout photo */}
            <div className="lg:hidden flex justify-center mb-4 sm:mb-6 relative group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/30 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
              <img
                fetchPriority="high"
                width={567}
                height={1280}
                src="/coal_in_bag.webp"
                alt="Premium coal in bag"
                className="relative z-10 w-32 sm:w-40 md:w-48 rounded-2xl drop-shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
              />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-stone-300 hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.6)] cursor-pointer duration-300 mb-6 sm:mb-8 lg:mb-10 text-center">
              Honest weight, certified quality.
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button type="primary">Check Prices</Button>
              <Button to="/calculator" type="secondary">
                Calculate Price
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center mt-12 lg:mt-8 relative z-0 group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/30 rounded-full blur-[120px] -z-10 pointer-events-none transition-all duration-700 group-hover:scale-125 group-hover:bg-orange-500/50"></div>

            <img
              fetchPriority="high"
              width={567}
              height={1280}
              src="/coal_in_bag.webp"
              alt="Premium coal in bag"
              className="relative z-10 w-64 lg:w-72 xl:w-80 rounded-2xl drop-shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
