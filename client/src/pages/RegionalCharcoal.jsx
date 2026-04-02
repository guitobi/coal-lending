import { useParams } from "react-i18next";
import { useTranslation } from "react-i18next";
import LocalizedPageTemplate from "../components/LocalizedPageTemplate";

function RegionalCharcoal() {
  const { region } = useParams();
  const { t } = useTranslation();

  // If no region is specified in the URL, we'll use a default
  const regionName = region || t("regions.default", "Poland");

  // Content specific to regional page
  const regionalContent = (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-orange-500 mb-4">
          {t("regions.supplyTitle", "Premium Charcoal Supply in {{region}}", {
            region: regionName,
          })}
        </h2>
        <p className="text-stone-300 mb-4">
          {t(
            "regions.supplyDescription",
            "We provide premium WOODEN WEST hardwood charcoal directly to {{region}}. Our high-quality charcoal is perfect for industrial, commercial, and residential use.",
            { region: regionName },
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
          <h3 className="font-bold text-orange-500 mb-2">
            {t("regions.fastDelivery", "Fast Delivery")}
          </h3>
          <p className="text-stone-400 text-sm">
            {t(
              "regions.fastDeliveryDesc",
              "Direct delivery to {{region}} with our logistics network",
              { region: regionName },
            )}
          </p>
        </div>

        <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
          <h3 className="font-bold text-orange-500 mb-2">
            {t("regions.qualityGuarantee", "Quality Guarantee")}
          </h3>
          <p className="text-stone-400 text-sm">
            {t(
              "regions.qualityGuaranteeDesc",
              "EN 1860-2 certified charcoal for {{region}} customers",
              { region: regionName },
            )}
          </p>
        </div>

        <div className="bg-stone-800/50 p-6 rounded-xl border border-stone-700">
          <h3 className="font-bold text-orange-500 mb-2">
            {t("regions.bulkOrders", "Bulk Orders")}
          </h3>
          <p className="text-stone-400 text-sm">
            {t(
              "regions.bulkOrdersDesc",
              "Wholesale pricing for large orders in {{region}}",
              { region: regionName },
            )}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          {t("regions.howToOrder", "How to Order Charcoal in {{region}}", {
            region: regionName,
          })}
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-stone-300">
          <li>
            {t("regions.orderStep1", "Contact us with your requirements")}
          </li>
          <li>
            {t(
              "regions.orderStep2",
              "Receive a quote tailored for {{region}}",
              { region: regionName },
            )}
          </li>
          <li>{t("regions.orderStep3", "Confirm your order")}</li>
          <li>
            {t("regions.orderStep4", "Fast delivery to {{region}}", {
              region: regionName,
            })}
          </li>
        </ol>
      </div>

      <div className="mt-8 pt-8 border-t border-stone-700">
        <h3 className="text-xl font-bold text-orange-500 mb-4">
          {t("regions.whyChooseUs", "Why Choose VAN SHARE in {{region}}", {
            region: regionName,
          })}
        </h3>
        <ul className="space-y-2 text-stone-300">
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✓</span>
            <span>
              {t("regions.reason1", "Direct from manufacturer to {{region}}", {
                region: regionName,
              })}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✓</span>
            <span>
              {t(
                "regions.reason2",
                "Competitive pricing for {{region}} market",
                { region: regionName },
              )}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✓</span>
            <span>
              {t("regions.reason3", "Reliable delivery in {{region}}", {
                region: regionName,
              })}
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-orange-500 mr-2">✓</span>
            <span>{t("regions.reason4", "Certified quality charcoal")}</span>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <LocalizedPageTemplate
      title={t(
        "seoPages.regional.title",
        "Charcoal Supplier in {{region}} | VAN SHARE",
        { region: regionName },
      )}
      description={t(
        "seoPages.regional.description",
        "Premium hardwood charcoal supplier in {{region}}. WOODEN WEST certified charcoal for industrial and residential use. Fast delivery and competitive prices.",
        { region: regionName },
      )}
      path={`/region/${region}`}
      region={regionName}
    >
      {regionalContent}
    </LocalizedPageTemplate>
  );
}

export default RegionalCharcoal;
