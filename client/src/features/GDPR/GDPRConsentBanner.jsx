import { useState } from "react";
import { useTranslation } from "react-i18next";

const GDPR_CONSENT_COOKIE = "gdpr_consent";

export default function GDPRConsentBanner() {
  const { t } = useTranslation();
  // Використовуємо функцію для встановлення початкового стану
  const getInitialBannerState = () => {
    const consentGiven = localStorage.getItem(GDPR_CONSENT_COOKIE);
    return !consentGiven; // Показуємо банер, якщо немає згоди
  };

  const [showBanner, setShowBanner] = useState(getInitialBannerState);

  const handleAcceptAll = () => {
    // Зберігаємо згоду користувача
    localStorage.setItem(
      GDPR_CONSENT_COOKIE,
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString(),
        version: "1.0",
      }),
    );

    // Викликаємо подію для ініціалізації Google Analytics
    window.dispatchEvent(new Event("gdpr_consent_given"));

    setShowBanner(false);
  };

  const handleAcceptNecessaryOnly = () => {
    localStorage.setItem(
      GDPR_CONSENT_COOKIE,
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString(),
        version: "1.0",
      }),
    );

    // Викликаємо подію для оновлення налаштувань Google Analytics
    window.dispatchEvent(new Event("gdpr_consent_given"));

    setShowBanner(false);
  };

  const handleCustomize = () => {
    // Показуємо діалог налаштування згод
    setShowBanner(false);
    openConsentModal();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900 border-t-2 border-orange-500 p-4 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-orange-500 mb-2">
              {t("gdpr.banner.title", "We value your privacy")}
            </h3>
            <p className="text-stone-300 text-sm">
              {t(
                "gdpr.banner.description",
                "We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements. You can choose which cookies to accept.",
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-end">
            <button
              onClick={handleAcceptNecessaryOnly}
              className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-white rounded-lg text-sm font-medium transition-colors border border-stone-600"
            >
              {t("gdpr.banner.acceptNecessary", "Accept necessary only")}
            </button>

            <button
              onClick={handleCustomize}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-lg text-sm font-medium transition-colors border border-stone-600"
            >
              {t("gdpr.banner.customize", "Customize")}
            </button>

            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm font-medium transition-colors border border-orange-600"
            >
              {t("gdpr.banner.acceptAll", "Accept all")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Функція для відкриття модального вікна налаштувань згоди
function openConsentModal() {
  // Створюємо тимчасову функцію для відкриття модального вікна
  // Реалізація буде в окремому компоненті
  const modal = document.createElement("div");
  modal.id = "gdpr-consent-modal";
  modal.className =
    "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50";

  modal.innerHTML = `
    <div class="bg-stone-900 border-2 border-orange-500 rounded-xl p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
      <h3 class="text-xl font-bold text-orange-500 mb-4">Cookie Settings</h3>
      <div class="space-y-4">
        <div class="flex items-start justify-between">
          <div>
            <h4 class="font-medium text-stone-200">Necessary Cookies</h4>
            <p class="text-stone-400 text-sm mt-1">Essential for basic site functionality</p>
          </div>
          <label class="relative inline-flex items-center cursor-not-allowed">
            <input type="checkbox" checked disabled class="sr-only">
            <div class="w-10 h-6 bg-orange-500 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
        
        <div class="flex items-start justify-between">
          <div>
            <h4 class="font-medium text-stone-200">Analytics Cookies</h4>
            <p class="text-stone-400 text-sm mt-1">Help us understand how visitors interact with our website</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="analytics-toggle" class="sr-only peer">
            <div class="w-10 h-6 bg-stone-700 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
        
        <div class="flex items-start justify-between">
          <div>
            <h4 class="font-medium text-stone-200">Marketing Cookies</h4>
            <p class="text-stone-400 text-sm mt-1">Used to deliver personalized advertisements</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="marketing-toggle" class="sr-only peer">
            <div class="w-10 h-6 bg-stone-700 rounded-full peer-checked:bg-orange-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
      </div>
      
      <div class="mt-6 flex gap-2">
        <button id="save-preferences" class="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium">
          Save Preferences
        </button>
        <button id="close-modal" class="flex-1 px-4 py-2 bg-stone-700 hover:bg-stone-600 text-white rounded-lg font-medium">
          Close
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Додаємо обробники подій
  document.getElementById("close-modal").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.getElementById("save-preferences").addEventListener("click", () => {
    const analyticsConsent =
      document.getElementById("analytics-toggle").checked;
    const marketingConsent =
      document.getElementById("marketing-toggle").checked;

    localStorage.setItem(
      GDPR_CONSENT_COOKIE,
      JSON.stringify({
        necessary: true,
        analytics: analyticsConsent,
        marketing: marketingConsent,
        timestamp: new Date().toISOString(),
        version: "1.0",
      }),
    );

    // Викликаємо подію для оновлення налаштувань Google Analytics
    window.dispatchEvent(new Event("gdpr_consent_given"));

    document.body.removeChild(modal);
  });
}
