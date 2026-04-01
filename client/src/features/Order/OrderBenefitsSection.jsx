import { useTranslation } from "react-i18next";
import { Link } from "react-router";

function OrderBenefitsSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-linear-to-br from-orange-500/10 to-amber-600/5 border-2 border-orange-500/30 rounded-2xl p-5 sm:p-6">
      <h3 className="text-base sm:text-lg font-bold text-orange-500 mb-3">
        {t("order.form.summary.title")}
      </h3>
      <ul className="space-y-2 text-stone-300 text-xs sm:text-sm">
        <li className="flex items-center gap-2">
          <span className="text-orange-500 shrink-0">✓</span>
          {t("order.form.quantity.min")}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-orange-500 shrink-0">✓</span>
          {t(["order.form.footer.delivery", "order.footer.delivery"])}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-orange-500 shrink-0">✓</span>
          <span>
            {t([
              "order.form.footer.contact.title",
              "order.footer.contact.title",
            ])}{" "}
            <Link
              to="/contact"
              className="text-orange-500 hover:text-orange-400 underline"
            >
              {t([
                "order.form.footer.contact.contact",
                "order.footer.contact.contact",
              ])}
            </Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default OrderBenefitsSection;
