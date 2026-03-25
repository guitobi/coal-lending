import { CreditCard, MapPin, Package, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

function DeliveryTerms() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-800/5 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-orange-500">
              {t("delivery.terms.title")}
            </h2>
            <div className="space-y-4 text-stone-300">
              <div className="flex items-start">
                <Truck className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.firstFeature.title")}
                  </h3>
                  <p>{t("delivery.terms.features.firstFeature.description")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.secondFeature.title")}
                  </h3>
                  <p>
                    {t("delivery.terms.features.secondFeature.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.thirdFeature.title")}
                  </h3>
                  <p>{t("delivery.terms.features.thirdFeature.description")}</p>
                </div>
              </div>
              <div className="flex items-start">
                <CreditCard className="w-7 h-7 mr-3 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">
                    {t("delivery.terms.features.fourthFeature.title")}
                  </h3>
                  <p>
                    {t("delivery.terms.features.fourthFeature.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop"
              alt="Delivery truck"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliveryTerms;
