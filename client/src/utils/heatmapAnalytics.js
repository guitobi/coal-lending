// Heatmap Analytics Integration (e.g., Hotjar, Crazy Egg, or similar)

// Initialize heatmap tracking
export const initHeatmapAnalytics = (config) => {
  // Check if we're in the browser environment
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Implementation for popular heatmap tools
    if (config.type === "hotjar") {
      initHotjar(config.id, config.version);
    } else if (config.type === "crazyegg") {
      initCrazyEgg(config.accountId);
    } else if (config.type === "custom") {
      // Custom heatmap implementation
      setupCustomHeatmapTracking();
    }
  }
};

// Hotjar initialization
const initHotjar = (id, version) => {
  // Create Hotjar script tag
  const hotjarScript = document.createElement("script");
  hotjarScript.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${id},hjsv:${version}};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;
  document.head.appendChild(hotjarScript);
};

// Crazy Egg initialization
const initCrazyEgg = (accountId) => {
  const crazyEggScript = document.createElement("script");
  crazyEggScript.innerHTML = `
    setTimeout(function() {
      var a = document.createElement("script");
      var b = document.getElementsByTagName("script")[0];
      a.src = "//script.crazyegg.com/pages/scripts/${accountId.substring(0, 4)}/${accountId.substring(4)}.js?" + Math.floor(new Date().getTime() / 3600000);
      a.async = true; a.type = "text/javascript"; b.parentNode.insertBefore(a, b);
    }, 1);
  `;
  document.head.appendChild(crazyEggScript);
};

// Custom heatmap tracking implementation
const setupCustomHeatmapTracking = async () => {
  // Disable custom heatmap tracking to prevent network errors
  // This avoids the issue where beacon API calls fail and show errors in console
  return;
};

// Track form interactions
export const trackFormInteractions = () => {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener(
      "focus",
      (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
          trackFormFocus(e.target.name || e.target.id, e.target.type);
        }
      },
      true,
    );

    form.addEventListener(
      "change",
      (e) => {
        if (
          e.target.tagName === "INPUT" ||
          e.target.tagName === "TEXTAREA" ||
          e.target.tagName === "SELECT"
        ) {
          trackFormChange(e.target.name || e.target.id, e.target.value);
        }
      },
      true,
    );
  });
};

const trackFormFocus = (fieldName, fieldType) => {
  if (navigator.sendBeacon) {
    try {
      navigator.sendBeacon(
        "/api/heatmap/form-focus",
        JSON.stringify({
          fieldName,
          fieldType,
          url: window.location.href,
          timestamp: Date.now(),
        }),
      );
    } catch (error) {
      // Silently ignore errors for heatmap tracking
      console.debug("Heatmap form focus tracking failed:", error);
    }
  }
};

const trackFormChange = (fieldName, value) => {
  if (navigator.sendBeacon) {
    try {
      navigator.sendBeacon(
        "/api/heatmap/form-change",
        JSON.stringify({
          fieldName,
          value,
          url: window.location.href,
          timestamp: Date.now(),
        }),
      );
    } catch (error) {
      // Silently ignore errors for heatmap tracking
      console.debug("Heatmap form change tracking failed:", error);
    }
  }
};

// Initialize all heatmap tracking when DOM is loaded
export const initAllHeatmapTracking = (config) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      try {
        initHeatmapAnalytics(config);
      } catch (error) {
        console.error("Error initializing heatmap analytics:", error);
      }
      trackFormInteractions();
    });
  } else {
    try {
      initHeatmapAnalytics(config);
    } catch (error) {
      console.error("Error initializing heatmap analytics:", error);
    }
    trackFormInteractions();
  }
};
