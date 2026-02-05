import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";
import KeyFeatures from "../features/Home/KeyFeatures";
import ProductPackages from "../features/Home/ProductPackages";

function Home() {
  return (
    <div className="text-center">
      <div className="relative">
        <CTA />
      </div>

      <div className="relative overflow-visible z-10">
        {/* <KeyFeatures /> */}
        <ProductPackages />
      </div>

      <div className="relative z-0 -mt-1">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;
