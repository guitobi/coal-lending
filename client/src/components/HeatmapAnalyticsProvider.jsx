import { useEffect } from "react";
import { initAllHeatmapTracking } from "../utils/heatmapAnalytics";

function HeatmapAnalyticsProvider({ children, config }) {
  useEffect(() => {
    if (config && config.enabled) {
      // Initialize heatmap analytics
      initAllHeatmapTracking(config);
    }
  }, [config]);

  return <>{children}</>;
}

export default HeatmapAnalyticsProvider;
