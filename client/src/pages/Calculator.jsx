const PRICE_PER_BAG = 16; //PLN
const DELIVERY_BASE_FEE = 40;
const PRICE_PER_KM = 5;

function Calculator() {
  return (
    <form className="flex flex-col items-center p-4 mt-2">
      <h2 className="text-3xl font-semibold hover:text-orange-600 hover:[text-shadow:0_0_20px_rgb(249_115_22/0.8)] transition-all duration-300">
        Calculate estimate price!
      </h2>
      <div className="flex flex-col space-x-96">
        <div>
          <label htmlFor=""></label>
          <input type="text" id="" />
        </div>
      </div>
    </form>
  );
}

export default Calculator;
