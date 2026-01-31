import WaveDevider from "../ui/WaveDevider";
import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";

import KeyFeatures from "../features/Home/KeyFeatures";

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
