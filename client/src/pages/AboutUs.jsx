import AboutVanShare from "../features/About/AboutVanShare";
import AboutContactSection from "../features/About/AboutContactSection";
import OurAchievements from "../features/About/OurAchievements";
import OurMission from "../features/About/OurMission";
import OurTeam from "../features/About/OurTeam";
import AboutProduct from "../features/About/AboutPoduct";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("nav.aboutUs")}
        description={t("about.companySectionDescription")}
        path="/about"
      />

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
