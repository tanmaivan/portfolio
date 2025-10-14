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
      {!isDarkMode && (
        <>
          {/* Blurred conic rainbow to create smooth blending */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #ff6b6b 0deg, #ff8a6b 40deg, #ffd166 80deg, #8be38f 120deg, #06d6a0 160deg, #32b0c9 200deg, #118ab2 240deg, #6f7de8 280deg, #8a5cf5 320deg, #ff6b6b 360deg)",
              filter: "blur(36px)",
              transform: "scale(1.15)",
              opacity: 0.35,
            }}
          />
          {/* Center blend to avoid hard meeting point */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(closest-side at 50% 50%, rgba(255,255,255,0.55), rgba(255,255,255,0.0) 55%)",
            }}
          />
        </>
      )}

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
