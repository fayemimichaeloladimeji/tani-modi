import { useEffect, useState } from "react";
import { ArrowRight, Award } from "lucide-react";

export default function HeroSection({ ctaLink = "/book-a-table" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const slides = [
    {
      headline: "More Than a Meal, A Tani Modi Experience",
      subheadline: "A culinary experience from sunrise to sunset.",
      image:
        "/hero-section-images/background-17.webp",
      ctaText: "Reserve Your Table",
    },
    {
      headline: "Brunch Culture, Refined",
      subheadline: "Edinburgh's Premier Culinary Experience",
      image:
        "/hero-section-images/tanimodi-3.webp",
      ctaText: "Reserve Your Table",
    },
    {
      headline: "Artisanal Ingredients, Crafted Daily",
      subheadline: "Sourced Locally, Celebrated Globally",
      image:
        "/hero-section-images/background-16.webp",
      ctaText: "Explore Our Menus",
    },
    {
      headline: "Shared Moments, Timeless Flavors",
      subheadline: "Immersive Dining From Morning To Night",
      image:
        "/hero-section-images/background-4.webp",
      ctaText: "Book An Experience",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultBackground = slides[0]?.image;

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-stone-900"
      style={defaultBackground ? {
        backgroundImage: `url('${defaultBackground}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : {}}
    >
      {/* Dynamic Background Image Layers */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
            transform: `scale(${isScrolling ? 1.04 : 1})`,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center hero-bg-motion"
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          {/* Vibrant Overlay Matrix — balances brightness while enriching background color depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-650/40 via-amber-900/20 to-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-950/80" />
        </div>
      ))}

      <style>{`
        @keyframes heroBackgroundPan {
          0% {
            background-position: center 45%;
            transform: scale(1.0);
          }
          50% {
            background-position: center 55%;
            transform: scale(1.45);
          }
          100% {
            background-position: center 45%;
            transform: scale(1.75);
          }
        }

        .hero-bg-motion {
          animation: heroBackgroundPan 16s ease-in-out infinite alternate;
          transform-origin: center;
        }
      `}</style>

      {/* Floating Content Canvas Area */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-12 z-10">
        {/* Fully Transparent Glass Capsule Card with CSS Subtle Dot Pattern */}
        <div
          className="text-center w-full max-w-4xl bg-transparent border border-white/20 rounded-[40px] p-6 md:p-16 min-h-[380px] md:min-h-[460px] flex flex-col justify-center items-center relative overflow-hidden transition-all duration-500 mt-15"
          style={{
            // Inline subtle micro-dot grid pattern using CSS radial gradients
            backgroundImage:
              "radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Subtle backing glow layer behind the text to maintain flawless clarity over dynamic image zones */}
          <div className="absolute inset-auto w-3/4 h-1/2 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          {/* Slides Content Layer */}
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`w-full flex flex-col items-center justify-center transition-all duration-700 absolute ${isActive
                    ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                    : "opacity-0 scale-95 pointer-events-none translate-y-4"
                  }`}
              >
                {/* Subheadline Tag — Neon Citrus Tone for pop */}
                <p className="font-sans text-xs md:text-sm text-orange-400 tracking-[0.3em] uppercase mb-4 font-black drop-shadow-sm">
                  {slide.subheadline}
                </p>

                {/* Award badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-amber-200 shadow-sm">
                  <Award className="w-4 h-4 text-orange-300" />

                  <span>Edinburgh Winner</span>
                </div>
                <img src="/award-transparent.png" alt="Award Badge" className="w-40px h-40px" />

                {/* Main Headline — Deep crisp white with text-shadow protection for perfect clarity */}
                <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                  {slide.headline.split(", ").map((part, i) => (
                    <span key={i} className="block">
                      {i === 1 ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 italic font-serif font-medium lowercase px-1">
                          {part}
                        </span>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </h1>

                {/* High-Contrast Interactive Action CTA */}
                <div>
                  <a
                    href={ctaLink}
                    className="group relative px-10 py-4 overflow-hidden rounded-full font-sans text-xs uppercase tracking-[0.25em] font-black inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-xl shadow-orange-600/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 active:scale-98"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center gap-2">
                      {slide.ctaText}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}

          {/* Carousel Dot Navigation Indicators */}
          <div className="absolute bottom-6 p-12 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex
                    ? "w-8 bg-gradient-to-r from-orange-400 to-amber-400"
                    : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
