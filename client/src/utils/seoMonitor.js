// SEO Monitoring System

// Monitor Core Web Vitals
export const monitorCoreWebVitals = () => {
  if ("PerformanceObserver" in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.name === "first-input") {
          // First Input Delay
          console.log("FID:", entry.processingStart - entry.startTime);
          sendMetricToAnalytics("fid", entry.processingStart - entry.startTime);
        } else if (entry.entryType === "largest-contentful-paint") {
          // Largest Contentful Paint
          console.log("LCP:", entry.startTime);
          sendMetricToAnalytics("lcp", entry.startTime);
        } else if (entry.entryType === "layout-shift") {
          // Cumulative Layout Shift
          if (!entry.hadRecentInput) {
            console.log("CLS:", entry.value);
            sendMetricToAnalytics("cls", entry.value);
          }
        }
      });
    });

    observer.observe({
      entryTypes: [
        "measure",
        "navigation",
        "paint",
        "largest-contentful-paint",
        "layout-shift",
        "first-input",
      ],
    });
  }
};

// Monitor SEO metrics
export const monitorSEOMetrics = () => {
  // Title tag monitoring
  const title = document.querySelector("title");
  const titleLength = title ? title.textContent.length : 0;
  sendMetricToAnalytics("title_length", titleLength);

  // Meta description monitoring
  const metaDescription = document.querySelector('meta[name="description"]');
  const descriptionLength = metaDescription
    ? metaDescription.getAttribute("content").length
    : 0;
  sendMetricToAnalytics("meta_description_length", descriptionLength);

  // Heading hierarchy monitoring
  const headings = {
    h1: document.querySelectorAll("h1").length,
    h2: document.querySelectorAll("h2").length,
    h3: document.querySelectorAll("h3").length,
    h4: document.querySelectorAll("h4").length,
    h5: document.querySelectorAll("h5").length,
    h6: document.querySelectorAll("h6").length,
  };
  sendMetricToAnalytics("headings", headings);

  // Image alt tags monitoring
  const images = document.querySelectorAll("img");
  const imagesWithoutAlt = Array.from(images).filter(
    (img) => !img.alt || img.alt.trim() === "",
  ).length;
  const imagesWithAlt = images.length - imagesWithoutAlt;
  sendMetricToAnalytics("images_alt_status", {
    total: images.length,
    with_alt: imagesWithAlt,
    without_alt: imagesWithoutAlt,
  });

  // Internal links monitoring
  const internalLinks = document.querySelectorAll(
    'a[href^="/"], a[href*="' + window.location.hostname + '"]',
  );
  const externalLinks = document.querySelectorAll(
    'a[href^="http"]:not([href*="' + window.location.hostname + '"])',
  );
  sendMetricToAnalytics("links_status", {
    internal: internalLinks.length,
    external: externalLinks.length,
  });

  // Canonical URL monitoring
  const canonicalUrl = document.querySelector('link[rel="canonical"]');
  sendMetricToAnalytics("has_canonical", !!canonicalUrl);

  // Meta robots monitoring
  const metaRobots = document.querySelector('meta[name="robots"]');
  sendMetricToAnalytics(
    "meta_robots",
    metaRobots ? metaRobots.getAttribute("content") : "none",
  );
};

// Send metric to analytics
const sendMetricToAnalytics = (metricName, value) => {
  // Send to analytics endpoint
  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/seo-metrics",
      JSON.stringify({
        metric: metricName,
        value: value,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      }),
    );
  } else {
    // Fallback if sendBeacon is not supported
    fetch("/api/seo-metrics", {
      method: "POST",
      body: JSON.stringify({
        metric: metricName,
        value: value,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => console.error("SEO metrics sending failed:", err));
  }
};

// Monitor page load performance
export const monitorPageLoad = () => {
  window.addEventListener("load", () => {
    const loadTime =
      window.performance.timing.loadEventEnd -
      window.performance.timing.navigationStart;
    sendMetricToAnalytics("page_load_time", loadTime);

    // Resource loading times
    const resources = performance.getEntriesByType("resource");
    const resourceLoadTimes = resources.map((resource) => ({
      name: resource.name,
      duration: resource.duration,
    }));
    sendMetricToAnalytics("resource_load_times", resourceLoadTimes);
  });
};

// Monitor accessibility metrics
export const monitorAccessibility = () => {
  // Check for common accessibility issues
  const buttonsWithoutText = document.querySelectorAll(
    "button:not([aria-label]):not([title]):empty",
  ).length;
  const linksWithoutText = document.querySelectorAll(
    "a:not([aria-label]):not([title]):not(img)",
  ).length;
  const imagesWithoutAlt = document.querySelectorAll("img:not([alt])").length;

  sendMetricToAnalytics("accessibility_issues", {
    buttons_without_text: buttonsWithoutText,
    links_without_text: linksWithoutText,
    images_without_alt: imagesWithoutAlt,
  });
};

// Monitor structured data
export const monitorStructuredData = () => {
  // Check for structured data presence
  const jsonLdScripts = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );
  const structuredDataCount = jsonLdScripts.length;

  // Validate structured data
  const structuredDataValid = Array.from(jsonLdScripts).every((script) => {
    try {
      try {
        JSON.parse(script.textContent);
        return true;
      } catch {
        return false;
      }
  });

  sendMetricToAnalytics("structured_data", {
    count: structuredDataCount,
    valid: structuredDataValid,
  });
};

// Main SEO monitoring function
export const initSEOMonitoring = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        monitorSEOMetrics();
        monitorPageLoad();
        monitorAccessibility();
        monitorStructuredData();
      });
    } else {
      monitorSEOMetrics();
      monitorPageLoad();
      monitorAccessibility();
      monitorStructuredData();
    }

    // Monitor Core Web Vitals
    monitorCoreWebVitals();

    // Monitor URL changes (for SPA)
    let currentUrl = window.location.href;
    const urlCheckInterval = setInterval(() => {
      if (window.location.href !== currentUrl) {
        currentUrl = window.location.href;
        // Small delay to allow page to update
        setTimeout(() => {
          monitorSEOMetrics();
          monitorAccessibility();
          monitorStructuredData();
        }, 100);
      }
    }, 1000);

    // Clean up interval when page unloads
    window.addEventListener("beforeunload", () => {
      clearInterval(urlCheckInterval);
    });
  }
};

// Performance monitoring helper
export const measurePerformance = (fn, label) => {
  if ("performance" in window) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();

    sendMetricToAnalytics("function_performance", {
      label,
      duration: end - start,
    });

    return result;
  } else {
    return fn();
  }
};
