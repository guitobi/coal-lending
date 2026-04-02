import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "../utils/analytics";

function RoutedAnalyticsProvider({ children, measurementId }) {
  const location = useLocation();

  useEffect(() => {
    // Use either passed measurementId or global window variable
    const gaMeasurementId = measurementId || window.VITE_GA_MEASUREMENT_ID;

    if (gaMeasurementId) {
      // Initialize Google Analytics
      initGA(gaMeasurementId);
    }
  }, [measurementId]);

  useEffect(() => {
    // Use either passed measurementId or global window variable
    const gaMeasurementId = measurementId || window.VITE_GA_MEASUREMENT_ID;

    if (gaMeasurementId) {
      // Track page views when location changes
      trackPageView(location, gaMeasurementId);
    }
  }, [location, measurementId]);

  return <>{children}</>;
}

export default RoutedAnalyticsProvider;
