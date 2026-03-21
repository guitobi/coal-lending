import { useTranslation } from "react-i18next";

function OurTeam() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-800/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="/5310268230607771061.jpg"
              alt="Palletized charcoal prepared for transport"
              className="w-full h-80 object-cover object-center"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-orange-500">
              {t("about.ourTeam.title")}
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              {t("about.ourTeam.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
