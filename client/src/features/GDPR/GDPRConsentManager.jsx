import { useState } from "react";
import { useTranslation } from "react-i18next";

const GDPR_CONSENT_COOKIE = "gdpr_consent";

export default function GDPRConsentManager() {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);

  // Використовуємо функцію для встановлення початкового стану
  const getInitialConsent = () => {
    const storedConsent = localStorage.getItem(GDPR_CONSENT_COOKIE);
    return storedConsent ? JSON.parse(storedConsent) : null;
  };

  const [consent, setConsent] = useState(getInitialConsent);

  const updateConsent = (newConsent) => {
    localStorage.setItem(GDPR_CONSENT_COOKIE, JSON.stringify(newConsent));
    setConsent(newConsent);

    // Викликаємо подію для оновлення налаштувань Google Analytics
    window.dispatchEvent(new Event("gdpr_consent_given"));
  };

  const revokeAllConsent = () => {
    const revokedConsent = {
      necessary: true, // Необхідні куки залишаються активними
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: "1.0",
    };

    updateConsent(revokedConsent);
    alert(
      t(
        "gdpr.manager.revokedAlert",
        "Your consent has been revoked. Analytics and marketing cookies have been disabled.",
      ),
    );
  };

  if (!consent) {
    return null;
  }

  return (
    <div className="bg-stone-900 border border-stone-700 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-orange-500">
          {t("gdpr.manager.title", "Cookie Settings")}
        </h3>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="text-stone-400 hover:text-orange-500"
        >
          {showSettings ? "▲" : "▼"}
        </button>
      </div>

      {showSettings && (
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-stone-200">
                {t("gdpr.manager.necessary", "Necessary")}
              </p>
              <p className="text-stone-400 text-sm">
                {t(
                  "gdpr.manager.necessaryDesc",
                  "Always active for basic functionality",
                )}
              </p>
            </div>
            <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
              {t("gdpr.manager.active", "Active")}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-stone-200">
                {t("gdpr.manager.analytics", "Analytics")}
              </p>
              <p className="text-stone-400 text-sm">
                {t(
                  "gdpr.manager.analyticsDesc",
                  "Help us understand how visitors interact with our website",
                )}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) =>
                  updateConsent({
                    ...consent,
                    analytics: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-stone-700 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-stone-200">
                {t("gdpr.manager.marketing", "Marketing")}
              </p>
              <p className="text-stone-400 text-sm">
                {t("gdpr.manager.marketingDesc", "Personalized advertisements")}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) =>
                  updateConsent({
                    ...consent,
                    marketing: e.target.checked,
                  })
                }
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-stone-700 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
          </div>

          <div className="pt-3 border-t border-stone-700">
            <button
              onClick={revokeAllConsent}
              className="w-full py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-lg text-sm font-medium border border-red-800/50"
            >
              {t("gdpr.manager.revokeAll", "Revoke All Consent")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
