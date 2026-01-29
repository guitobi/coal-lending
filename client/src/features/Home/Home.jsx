import WaveDevider from "../../ui/WaveDevider";
import CTA from "./CTA";
import HowItWorks from "./HowItWorks";

import KeyFeatures from "./KeyFeatures";

function Home() {
  return (
    <div className="text-center">
      <div className="bg-[#d4c4a8] relative">
        <CTA />
        <WaveDevider color="amber-100" />
      </div>

      <div className="relative">
        <KeyFeatures />
        <WaveDevider color="amber-50" />
      </div>
      <HowItWorks />
    </div>
  );
}

export default Home;
