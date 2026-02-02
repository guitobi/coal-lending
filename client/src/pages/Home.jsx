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
        <WaveDevider color="amber-100" />
        <KeyFeatures />
      </div>

      {/* Wave between sections - not overlapping anything */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-12 md:h-20"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-amber-50/70"
        ></path>
      </svg>

      <div className="relative z-0 -mt-1">
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;
