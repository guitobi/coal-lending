import AboutVanShare from "../features/About/AboutVanShare";
import AboutContactSection from "../features/About/AboutContactSection";
import OurAchievements from "../features/About/OurAchievements";
import OurMission from "../features/About/OurMission";
import OurTeam from "../features/About/OurTeam";
import AboutProduct from "../features/About/AboutPoduct";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <AboutProduct />

      <AboutVanShare />

      <OurAchievements />

      <OurMission />

      <OurTeam />

      <AboutContactSection />
    </div>
  );
}

export default AboutUs;
