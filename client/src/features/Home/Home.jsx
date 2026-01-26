// import Calculator from "./Calculator";

import Button from "../../ui/Button";

function Home() {
  return (
    <div className="text-center space-y-8">
      <h1
        className="text-4xl px-4 py-4 font-bold font-zalando text-orange-700  transition-all duration-500 cursor-pointer 
          hover:text-orange-500 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] md:text-5xl"
      >
        Maximum Heat, Minimum Ash
      </h1>

      <h3 className="font-zalando text-xl font-semibold text-orange-800 hover:text-orange-600 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] cursor-pointer md:text-2xl duration-300">
        Honest weight, certified quality.
      </h3>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button type="primary">Check Prices</Button>
        <Button type="secondary">Calculate Price</Button>
      </div>
      {/* <Calculator /> */}
    </div>
  );
}

export default Home;
