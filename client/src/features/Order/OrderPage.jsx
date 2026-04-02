import { useTranslation } from "react-i18next";
import Seo from "../../seo/Seo";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
} from "../../utils/structuredDataSchemas";

import OrderForm from "./OrderForm";
import OrderContactInfo from "./OrderContactInfo";

function OrderPage() {
  const { t } = useTranslation();

  // Get schemas for structured data
  const localBusinessSchema = createLocalBusinessSchema();
  const organizationSchema = createOrganizationSchema();

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("seoPages.order.title")}
        description={t("seoPages.order.description")}
        path="/order"
        schema={[localBusinessSchema, organizationSchema]}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500 font-extrabold mb-3">
            {t("order.title")}
          </h1>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
            {t("order.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <OrderContactInfo />
          <OrderForm />
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-stone-300 text-base sm:text-lg font-medium">
            📞 {t(["order.form.footer.title", "order.footer.title"])}
          </p>
          <p className="text-stone-500 text-sm">
            {t(["order.form.footer.delivery", "order.footer.delivery"])}
          </p>
          {/* Info Note */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-stone-400">
              {t([
                "order.form.footer.contact.title",
                "order.footer.contact.title",
              ])}{" "}
              <a
                href="/contact"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                {t([
                  "order.form.footer.contact.contact",
                  "order.footer.contact.contact",
                ])}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
