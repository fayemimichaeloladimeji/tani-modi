import { useEffect, useState } from "react";

export default function OtherPagePreloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    const unmountTimer = setTimeout(() => {
      setIsRendered(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-screen z-[9999] bg-[#0F1113] flex items-center justify-center transition-opacity duration-[1000ms] ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 2.5px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-[#D97706]/10 border border-[#D97706]/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#D97706] animate-pulse" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#FBBF24] font-semibold mb-3">
            Discover more pages
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Loading the next chapter...
          </h2>
        </div>
        <p className="max-w-lg text-sm text-stone-300 leading-relaxed">
          Thanks for exploring Tani Modi — we’re preparing the page with fresh details just for you.
        </p>
      </div>
    </div>
  );
}
