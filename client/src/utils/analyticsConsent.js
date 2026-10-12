import { useSyncExternalStore } from "react";

const CONSENT_KEY = "gdpr_consent";

export function getAnalyticsConsent() {
  try {
    return JSON.parse(window.localStorage.getItem(CONSENT_KEY) || "null")?.analytics === true;
  } catch {
    return false;
  }
}

function subscribe(callback) {
  window.addEventListener("gdpr_consent_given", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("gdpr_consent_given", callback);
    window.removeEventListener("storage", callback);
  };
}

export function useAnalyticsConsent() {
  return useSyncExternalStore(subscribe, getAnalyticsConsent, () => false);
}