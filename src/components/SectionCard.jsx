import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const SectionCard = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal",
        visible && "reveal-in",
        "bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-sm",
        "mx-4 sm:mx-6 lg:mx-8 xl:mx-auto xl:max-w-6xl",
        "p-6 sm:p-8 lg:mx-8 lg:p-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
