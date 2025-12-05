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
          {/* Clouds removed as requested for pure black background */}
        </>
      )}
    </div>
  );
};
