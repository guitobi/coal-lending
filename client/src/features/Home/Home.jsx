import WaveDevider from "../../ui/WaveDevider";
import CTA from "./CTA";
import HowItWorks from "./HowItWorks";

import KeyFeatures from "./KeyFeatures";

function Home() {
  return (
    <div className="text-center">
      <div className="bg-[#E7E5E4] relative">
        <CTA />
        <WaveDevider color="stone-100" />
      </div>

      <div className="relative">
        <KeyFeatures />
        <WaveDevider color="stone-200" />
      </div>
      <HowItWorks />
    </div>
  );
}

export default Home;
