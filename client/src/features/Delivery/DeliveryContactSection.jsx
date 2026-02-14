import { Mail, MapPinned, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";

function DeliveryContactSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-stone-900/50 py-16 border border-stone-800">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-6 text-orange-500">
          {t("delivery.order.title")}
        </h2>
        <p className="text-xl mb-8 text-stone-400">
          {t("delivery.order.description")}
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-left max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.email.title")}</h3>
              </div>
              <a href="mailto:vanshare1@gmail.com" className="hover:underline">
                {t("delivery.order.contacts.email.description")}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 font-semibold mb-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.phone.title")}</h3>
              </div>
              <p>{t("delivery.order.contacts.phone.first")}</p>
              <p>{t("delivery.order.contacts.phone.second")}</p>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-semibold mb-2">
                <MapPinned className="w-5 h-5 text-orange-500" />
                <h3>{t("delivery.order.contacts.address.title")}</h3>
              </div>

              <p>
                {t("delivery.order.contacts.address.description.firstLine")}
              </p>
              <p>
                {t("delivery.order.contacts.address.description.secondLine")}
              </p>
              <p>
                {t("delivery.order.contacts.address.description.thirdLine")}
              </p>
              <p className="mt-2 text-sm">{t("delivery.order.contacts.nip")}</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm py-6">
          {t("delivery.order.contacts.footer")}
        </p>
        <Button type="secondary" to="/order">
          Order now
        </Button>
      </div>
    </section>
  );
}

export default DeliveryContactSection;
