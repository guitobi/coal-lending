import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "../utils/analytics";

function AnalyticsProvider({ children, measurementId }) {
  const location = useLocation();

  useEffect(() => {
    if (measurementId) {
      // Initialize Google Analytics
      initGA(measurementId);
    }
  }, [measurementId]);

  useEffect(() => {
    if (measurementId) {
      // Track page views when location changes
      trackPageView(location, measurementId);
    }
  }, [location, measurementId]);

  return <>{children}</>;
}

export default AnalyticsProvider;
