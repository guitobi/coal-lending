import { buildApiUrl } from "./api";
import { getAnalyticsConsent } from "./analyticsConsent";

// Delegate to document so forms in lazy-loaded routes are also tracked.
export function initAllHeatmapTracking() {
  function send(type, field) {
    if (!getAnalyticsConsent() || typeof navigator.sendBeacon !== "function") return;
    const fieldName = field.name || field.id;
    // Only the field identifier is collected; never send its value.
    if (!/^[a-zA-Z][\w-]{0,99}$/.test(fieldName || "")) return;
    const payload = {
      type,
      fieldName,
      ...(type === "form-focus" ? { fieldType: field.type || field.tagName.toLowerCase() } : {}),
      url: window.location.origin + window.location.pathname,
      timestamp: Date.now(),
    };
    navigator.sendBeacon(
      buildApiUrl(`/api/heatmap/${type}`),
      new Blob([JSON.stringify(payload)], { type: "application/json" }),
    );
  }

  function handleFocus(event) {
    const field = event.target;
    if (field?.closest?.("form") && ["INPUT", "TEXTAREA", "SELECT"].includes(field.tagName)) {
      send("form-focus", field);
    }
  }

  function handleChange(event) {
    const field = event.target;
    if (field?.closest?.("form") && ["INPUT", "TEXTAREA", "SELECT"].includes(field.tagName)) {
      send("form-change", field);
    }
  }

  document.addEventListener("focusin", handleFocus);
  document.addEventListener("change", handleChange);
  return () => {
    document.removeEventListener("focusin", handleFocus);
    document.removeEventListener("change", handleChange);
  };
}
