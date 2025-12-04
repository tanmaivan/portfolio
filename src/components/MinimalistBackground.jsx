import { useEffect, useState } from "react";

export const MinimalistBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light mode: rainbow gradient */}
      {/* Light mode: solid background (handled by CSS), no rainbow */}
      {!isDarkMode && null}

      {/* Subtle grid pattern (only in dark mode) */}
      {isDarkMode && (
        <>
          {/* Clouds */}
          <div
            className="cloud"
            style={{ width: "480px", height: "220px", top: "10%", left: "-5%" }}
          />
          <div
            className="cloud"
            style={{
              width: "520px",
              height: "240px",
              top: "20%",
              right: "-8%",
            }}
          />
          <div
            className="cloud"
            style={{
              width: "360px",
              height: "180px",
              top: "35%",
              left: "15%",
              opacity: 0.4,
            }}
          />
          <div
            className="cloud"
            style={{
              width: "420px",
              height: "200px",
              top: "55%",
              right: "10%",
              opacity: 0.45,
            }}
          />

          {/* Rain removed as requested */}
        </>
      )}
    </div>
  );
};
