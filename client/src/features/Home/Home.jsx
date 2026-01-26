import WaveDevider from "../../ui/WaveDevider";
import CTA from "./CTA"; // Твій компонент Hero

function Home() {
  return (
    <div className="text-center">
      <div className="bg-[#E7E5E4] relative">
        <CTA />
        <WaveDevider />
      </div>

      <div className="pt-20 pb-50 bg-stone-100">
        <h2 className=" text-xl font-semibold text-orange-600">Our Product</h2>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
