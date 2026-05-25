import { useEffect, useState } from "react";

export default function EditorialIntro() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [fadeContent, setFadeContent] = useState(true);

  // 🔄 Editorial configurations
  const phrases = [
    "since 2013.",
    "with precision.",
    "built for gathering."
  ];

  const stories = [
    {
      headline: "Feeding the soul on Hanover Street ",
      paragraph: "Tani Modi represents a refined era of independent brunch culture in Edinburgh city centre. As a small, family-run café, our platform is built entirely around an uncompromising commitment to genuine hospitality, artisanal craftsmanship, and memorable culinary moments.",
      quote: "“When life gives you lemons, juice them up, plant the seeds and throw the rinds back at life.”"
    },
    {
      headline: "Crafting intentional morning rituals ",
      paragraph: "We intentionally step away from mass-produced, industrial combinations to focus completely on house-made flavor profiles. From cooking our own seasonal fruit curds to pulling artisanal espresso shots, every microscopic element is curated.",
      quote: "“Hospitality isn't just about what we put on the plate, it's about how we make you feel.”"
    },
    {
      headline: "A vibrant, light-filled venue ",
      paragraph: "Our beautifully expanded dining space invites natural Edinburgh daylight straight to your table. Designed with minimalist architectural grids, it shifts seamlessly from busy daytime brunches to exclusive private evening hire functions.",
      quote: "“Sustenance and comfort in every single way, shape, and form.”"
    }
  ];

  // ⌨️ Core Typewriter + Deletion Animation Loop
  useEffect(() => {
    const currentPhrase = phrases[activeIdx];
    
    // Determine dynamic speeds based on current typing state
    let typingSpeed = isDeleting ? 40 : 80; // Deleting is crisper and faster than writing

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at the complete word to let the user read it comfortably
      const timeout = setTimeout(() => setIsDeleting(true), 3000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Once completely deleted, turn off deleting status and advance to the next index
      setIsDeleting(false);
      setFadeContent(false); // Trigger quick fade-out for side column content
      
      const nextIdx = (activeIdx + 1) % phrases.length;
      setTimeout(() => {
        setActiveIdx(nextIdx);
        setFadeContent(true); // Fade back in the next narrative block
      }, 400);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting 
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, activeIdx]);

  return (
    <section className="relative w-full py-28 md:py-40 bg-stone-90 overflow-hidden pt-36 min-h-[600px] flex flex-col justify-center">
      
      {/* 🖼️ Subtle Atmospheric Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center  opacity-[0.5] scale-105 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80')"
        }}
      />

      {/* 🌌 Refined Micro-Dot Geometric Mesh Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Dramatic Serif Fixed Headline + Dynamic Typing Span */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-bg-stone-500 tracking-tight leading-[1.1]">
              {stories[activeIdx].headline}
              <span className="text-orange-500 font-normal inline-block relative border-r-2 border-orange-500/80 pr-1 animate-pulse-fast">
                {displayText}
              </span>
            </h1>
          </div>

          {/* Right Side: High-Contrast Support Narrative Block (Synchronized Fading) */}
          <div 
            className={`lg:col-span-5 lg:pt-4 space-y-6 transition-all duration-700 ease-in-out ${
              fadeContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="w-12 h-[1px] bg-orange-500/60" />
            <p className="font-sans text-bg-stone-300 text-sm md:text-base leading-relaxed text-{30px} font-medium">
              {stories[activeIdx].paragraph}
            </p>
            <p className="font-serif italic text-bg-stone-500 text-sm lowercase tracking-wide text-{30px}">
              {stories[activeIdx].quote}
            </p>
          </div>

        </div>

        {/* Minimal Progress Indicator Lines */}
        <div className="mt-16 flex items-center space-x-3 relative z-20">
          {phrases.map((_, idx) => (
            <div
              key={idx}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                activeIdx === idx ? "w-12 bg-orange-500" : "w-4 bg-stone-300"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Embedded Typewriter Custom Cursor Blinking Core CSS Style */}
      <style>{`
        @keyframes blink {
          50% { border-color: transparent }
        }
        .animate-pulse-fast {
          animation: blink 0.75s step-end infinite;
        }
      `}</style>
    </section>
  );
}