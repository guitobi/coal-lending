import Button from "../../ui/Button";

function CTA() {
  return (
    <section className="pb-50 md:pb-80">
      <h1
        className="text-4xl px-4 py-4 font-bold font-zalando text-orange-700  transition-all duration-500 cursor-pointer 
          hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] md:text-5xl pt-15 pb-10 md:pt-30 md:pb-20"
      >
        Maximum Heat, Minimum Ash
      </h1>

      <h3 className="font-zalando text-xl font-semibold text-orange-800 hover:text-orange-600 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] cursor-pointer md:text-2xl duration-300">
        Honest weight, certified quality.
      </h3>

      <div className="flex items-center justify-center gap-4 mt-6 pb-5 ">
        <Button type="primary">Check Prices</Button>
        <Button type="secondary">Calculate Price</Button>
      </div>
    </section>
  );
}

export default CTA;
