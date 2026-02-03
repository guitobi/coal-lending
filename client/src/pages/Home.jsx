import WaveDevider from "../ui/WaveDevider";
import CTA from "../features/Home/CTA";
import HowItWorks from "../features/Home/HowItWorks";
import KeyFeatures from "../features/Home/KeyFeatures";

function Home() {
  return (
    <div className="text-center">
      <div className="relative">
        <CTA />
      </div>

      <div className="relative overflow-visible z-10">
        <KeyFeatures />
      </div>

      {/* Wave between sections - not overlapping anything */}

      <div className="relative z-0 -mt-1">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;
