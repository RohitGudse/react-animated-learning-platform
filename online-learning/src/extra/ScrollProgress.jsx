import { useCallback, useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = useCallback(() => {
    const documentElement = document.documentElement;

    const scrollTop =
      window.pageYOffset || documentElement.scrollTop;

    const scrollHeight =
      documentElement.scrollHeight - documentElement.clientHeight;

    if (scrollHeight <= 0) {
      setScrollProgress(0);
      return;
    }

    const progress = (scrollTop / scrollHeight) * 100;

    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    calculateScrollProgress();

    window.addEventListener("scroll", calculateScrollProgress, {
      passive: true,
    });

    window.addEventListener("resize", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", calculateScrollProgress);
      window.removeEventListener("resize", calculateScrollProgress);
    };
  }, [calculateScrollProgress]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: "5px",
        background:
          "linear-gradient(90deg, #2563eb, #06b6d4, #22c55e)",
        zIndex: 9999,
        transition: "width 0.08s linear",
        boxShadow: "0 1px 6px rgba(37, 99, 235, 0.35)",
      }}
      aria-hidden="true"
    />
  );
}