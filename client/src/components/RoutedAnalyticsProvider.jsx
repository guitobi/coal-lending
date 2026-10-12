import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "../utils/analytics";
import { useAnalyticsConsent } from "../utils/analyticsConsent";

function RoutedAnalyticsProvider({ children, measurementId }) {
  const location = useLocation();
  const consent = useAnalyticsConsent();

  useEffect(() => {
    if (measurementId) {
      window[`ga-disable-${measurementId}`] = !consent;
      if (consent) initGA(measurementId);
      if (window.gtag) {
        window.gtag("consent", "update", { analytics_storage: consent ? "granted" : "denied" });
      }
    }
  }, [measurementId, consent]);

  useEffect(() => {
    if (measurementId && consent) trackPageView(location, measurementId);
  }, [location, measurementId, consent]);

  return <>{children}</>;
}

export default RoutedAnalyticsProvider;
