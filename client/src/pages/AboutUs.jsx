import AboutVanShare from "../features/About/AboutVanShare";
import AboutContactSection from "../features/About/AboutContactSection";
import OurAchievements from "../features/About/OurAchievements";
import OurMission from "../features/About/OurMission";
import OurTeam from "../features/About/OurTeam";
import AboutProduct from "../features/About/AboutPoduct";
import { useTranslation } from "react-i18next";
import Seo from "../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../utils/structuredDataSchemas";

function AboutUs() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <div className="min-h-screen">
      <Seo
        title={t("seoPages.about.title")}
        description={t("seoPages.about.description")}
        path="/about"
        schema={[localBusinessSchema, organizationSchema]}
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
