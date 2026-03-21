import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";

function AboutContactSection() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h3 className="text-3xl font-bold mb-4 text-orange-500">
        {t("about.contactUs.title")}
      </h3>
      <p className="text-xl text-stone-300">
        {t("about.contactUs.description")}{" "}
        <a
          href="mailto:vanshare1@gmail.com"
          className="text-orange-600 underline hover:text-orange-700 transition-colors"
        >
          vanshare1@gmail.com
        </a>
      </p>
      <p className="text-stone-300 text-3xl py-6 font-semibold">
        {t("about.contactUs.or")}
      </p>
      <Button type="secondary" to="/contact">
        {t("about.contactUs.buttonText")}
      </Button>
    </section>
  );
}

export default AboutContactSection;
