import { CheckCircle, Package, TreeDeciduous } from "lucide-react";
import { useTranslation } from "react-i18next";

function DeliveryHero() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-950/50 border border-black text-stone-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-stone-100">
          {t("delivery.title")}
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto px-4 text-stone-300">
          {t("delivery.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <Package className="w-6 h-6 text-orange-500" strokeWidth={2} />
            </div>
            <span className="font-semibold text-stone-300 ">
              {t("delivery.features.firstFeature.description")}
            </span>
          </div>
          <div className="bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <CheckCircle
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">
              {t("delivery.features.secondFeature.description")}
            </span>
          </div>
          <div className="bg-stone-900/40 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
              <TreeDeciduous
                className="w-6 h-6 text-orange-500"
                strokeWidth={2}
              />
            </div>
            <span className="font-semibold text-stone-300">
              {t("delivery.features.thirdFeature.description")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryHero;
