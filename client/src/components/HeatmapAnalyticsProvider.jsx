import { useEffect } from "react";
import { initAllHeatmapTracking } from "../utils/heatmapAnalytics";
import { useAnalyticsConsent } from "../utils/analyticsConsent";

function HeatmapAnalyticsProvider({ children }) {
  const consent = useAnalyticsConsent();
  useEffect(() => {
    if (!consent) return;
    return initAllHeatmapTracking();
  }, [consent]);

  return <>{children}</>;
}

export default HeatmapAnalyticsProvider;
