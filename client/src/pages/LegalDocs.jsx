import Seo from "../seo/Seo";
import { useTranslation } from "react-i18next";

export function PrivacyDocPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("legalDocs.privacy.seoTitle")}
        description={t("legalDocs.privacy.seoDescription")}
        path="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          {t("legalDocs.privacy.title")}
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <p>{t("legalDocs.privacy.intro")}</p>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.dataControllerTitle")}
            </h2>
            <p>
              {t("legalDocs.privacy.dataController.company")}
              <br />
              {t("legalDocs.privacy.dataController.address")}
              <br />
              {t("legalDocs.privacy.dataController.nip")}
              <br />
              {t("legalDocs.privacy.dataController.email")}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.dataCollectedTitle")}
            </h2>
            <p>{t("legalDocs.privacy.dataCollectedText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.legalBasisTitle")}
            </h2>
            <p>{t("legalDocs.privacy.legalBasisText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.dataSharingTitle")}
            </h2>
            <p>{t("legalDocs.privacy.dataSharingText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.retentionTitle")}
            </h2>
            <p>{t("legalDocs.privacy.retentionText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.privacy.rightsTitle")}
            </h2>
            <p>{t("legalDocs.privacy.rightsText")}</p>
          </div>

          <p className="text-sm text-stone-400">{t("legalDocs.lastUpdated")}</p>
        </div>
      </div>
    </section>
  );
}

export function TermsDocPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("legalDocs.terms.seoTitle")}
        description={t("legalDocs.terms.seoDescription")}
        path="/terms-of-service"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          {t("legalDocs.terms.title")}
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <p>{t("legalDocs.terms.intro")}</p>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.scopeTitle")}
            </h2>
            <p>{t("legalDocs.terms.scopeText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.ordersAndPricingTitle")}
            </h2>
            <p>{t("legalDocs.terms.ordersAndPricingText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.deliveryAndIncotermsTitle")}
            </h2>
            <p>{t("legalDocs.terms.deliveryAndIncotermsText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.paymentTermsTitle")}
            </h2>
            <p>{t("legalDocs.terms.paymentTermsText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.liabilityTitle")}
            </h2>
            <p>{t("legalDocs.terms.liabilityText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.b2bStatusTitle")}
            </h2>
            <p>{t("legalDocs.terms.b2bStatusText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.terms.governingLawTitle")}
            </h2>
            <p>{t("legalDocs.terms.governingLawText")}</p>
          </div>

          <p className="text-sm text-stone-400">{t("legalDocs.lastUpdated")}</p>
        </div>
      </div>
    </section>
  );
}

export function CookieDocPage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("legalDocs.cookies.seoTitle")}
        description={t("legalDocs.cookies.seoDescription")}
        path="/cookie-policy"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          {t("legalDocs.cookies.title")}
        </h1>

        <div className="space-y-6 text-stone-300 leading-relaxed">
          <p>{t("legalDocs.cookies.intro")}</p>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.cookies.essentialTitle")}
            </h2>
            <p>{t("legalDocs.cookies.essentialText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.cookies.optionalTitle")}
            </h2>
            <p>{t("legalDocs.cookies.optionalText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.cookies.managingTitle")}
            </h2>
            <p>{t("legalDocs.cookies.managingText")}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-300 mb-2">
              {t("legalDocs.cookies.withdrawalTitle")}
            </h2>
            <p>{t("legalDocs.cookies.withdrawalText")}</p>
          </div>

          <p className="text-sm text-stone-400">{t("legalDocs.lastUpdated")}</p>
        </div>
      </div>
    </section>
  );
}

export function LegalNoticePage() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-12 sm:py-16 px-4">
      <Seo
        title={t("legalDocs.notice.seoTitle")}
        description={t("legalDocs.notice.seoDescription")}
        path="/legal-notice"
      />

      <div className="max-w-4xl mx-auto bg-stone-900/40 border border-stone-800 rounded-2xl p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-300 mb-6">
          {t("legalDocs.notice.title")}
        </h1>

        <div className="space-y-4 text-stone-300 leading-relaxed">
          <p>
            <strong>{t("legalDocs.notice.companyLabel")}</strong>{" "}
            {t("legalDocs.notice.companyValue")}
          </p>
          <p>
            <strong>{t("legalDocs.notice.addressLabel")}</strong>{" "}
            {t("legalDocs.notice.addressValue")}
          </p>
          <p>
            <strong>{t("legalDocs.notice.nipLabel")}</strong>{" "}
            {t("legalDocs.notice.nipValue")}
          </p>
          <p>
            <strong>{t("legalDocs.notice.emailLabel")}</strong>{" "}
            {t("legalDocs.notice.emailValue")}
          </p>
          <p>
            <strong>{t("legalDocs.notice.phoneLabel")}</strong>{" "}
            {t("legalDocs.notice.phoneValue")}
          </p>
          <p>
            <strong>{t("legalDocs.notice.businessProfileLabel")}</strong>{" "}
            {t("legalDocs.notice.businessProfileValue")}
          </p>
          <p className="text-sm text-stone-400 pt-2">
            {t("legalDocs.lastUpdated")}
          </p>
        </div>
      </div>
    </section>
  );
}
