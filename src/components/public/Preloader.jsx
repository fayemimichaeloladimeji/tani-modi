import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // 1. Logo draws (1.8s) + fills (0.8s) = 2.6s total
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3100);

    // 2. Cross-fade transition (1s) then unmount
    const unmountTimer = setTimeout(() => {
      setIsRendered(false);
      if (onComplete) onComplete();
    }, 4100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-screen z-[9999] bg-brand-obsidian flex items-center justify-center transition-opacity duration-[1000ms] ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle dotted background texture behind the preloader */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(249,115,22,0.12) 1.5px, transparent 2.5px)",
          backgroundSize: "24px 24px",
          opacity: 0.8,
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated SVG Owl Logo - Minimalist Vector Reveal */}
        <svg
          className="w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
        {/* Inline styles for sophisticated stroke and fill animations */}
        <style>{`
          /* Phase 1: Draw stroke in white (1.8s) */
          .owl-stroke {
            stroke: #FAF8F5;
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: drawStroke 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            fill: none;
          }

          /* Phase 2: Fill with brand orange (0.8s, starts after draw) */
          .owl-fill {
            fill: #ff6f2c;
            animation: fillColor 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s forwards;
            opacity: 0;
          }

          /* Draw animation - reveals stroke gradually */
          @keyframes drawStroke {
            to {
              stroke-dashoffset: 0;
            }
          }

          /* Fill animation - elegant ease-out pulse into brand orange */
          @keyframes fillColor {
            to {
              opacity: 1;
            }
          }

          /* Eye circles - appear during fill phase */
          .owl-eyes {
            fill: #0D1110;
            opacity: 0;
            animation: eyeReveal 0.4s ease-out 2.2s forwards;
          }

          @keyframes eyeReveal {
            to {
              opacity: 1;
            }
          }
        `}</style>

        {/* Head/Wings outline - top contour */}
        <path
          className="owl-stroke"
          d="M 20,32 C 35,47 45,47 50,37 C 55,47 65,47 80,32 C 72,18 28,18 20,32 Z"
        />

        {/* Body outline - lower contour */}
        <path
          className="owl-stroke"
          d="M 50,37 C 38,58 28,68 50,88 C 72,68 62,58 50,37 Z"
        />

        {/* Combined owl shape for fill - created as separate path for layered fill effect */}
        <g className="owl-fill">
          <path d="M 20,32 C 35,47 45,47 50,37 C 55,47 65,47 80,32 C 72,18 28,18 20,32 Z" />
          <path d="M 50,37 C 38,58 28,68 50,88 C 72,68 62,58 50,37 Z" />
        </g>

        {/* Left eye */}
        <circle cx="38" cy="50" r="3.5" className="owl-eyes" />

        {/* Right eye */}
        <circle cx="62" cy="50" r="3.5" className="owl-eyes" />
      </svg>
      <div className="text-center space-y-2">
        <p className="text-2xl uppercase tracking-[0.35em] text-amber-400">Welcome to</p>
        <h2 className="text-4xl font-semibold text-white">Tani Modi</h2>
        <p className="text-sm text-gray-300 px-6 max-w-md">
          We are a small family run café and are all about giving our customers a genuinely memorable experience.
        </p>
      </div>
      </div>
    </div>
  );
}
