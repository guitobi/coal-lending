import { useTranslation } from "react-i18next";

function AboutVanShare() {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-stone-950/40">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-stone-100">
            {t("about.companySectionTitle")}
          </h2>
          <p className="text-lg text-stone-300 leading-relaxed">
            {t("about.companySectionDescription")}
            <span className="text-amber-600"> EN 1860-2:2005</span>.{" "}
            {t("about.missionStatement")}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/5310268230607771050.jpg"
            alt="Forklift and palletized charcoal at warehouse"
            className="w-full h-80 object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutVanShare;
