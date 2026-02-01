import AboutVanShare from "../features/About/AboutVanShare";
import AboutContactSection from "../features/About/AboutContactSection";
import OurAchievements from "../features/About/OurAchievements";
import OurMission from "../features/About/OurMission";
import OurTeam from "../features/About/OurTeam";

function AboutUs() {
  return (
    <div className="bg-[#d4c4a8] min-h-screen">
      <AboutVanShare />

      <OurAchievements />

      <OurMission />

      <OurTeam />

      <AboutContactSection />
    </div>
  );
}

export default AboutUs;
