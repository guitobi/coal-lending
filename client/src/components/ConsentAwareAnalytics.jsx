import { Analytics } from "@vercel/analytics/react";
import { getAnalyticsConsent, useAnalyticsConsent } from "../utils/analyticsConsent";

export default function ConsentAwareAnalytics() {
  const consent = useAnalyticsConsent();
  return consent ? (
    <Analytics beforeSend={(event) => getAnalyticsConsent() ? event : null} />
  ) : null;
}