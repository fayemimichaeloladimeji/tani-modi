import { useEffect, useState, useRef } from "react";

export default function AccoladesBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const accolades = [
    { title: "2023 // CHOICE AWARD WINNER", subtitle: "TripAdvisor Elite Performance" },
    { title: "2024 // TOP 10% GLOBAL CAFES", subtitle: "Verified Guest Satisfaction" },
    { title: "2025 // CULINARY EXCELLENCE", subtitle: "Edinburgh independent Landmark" }
  ];

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200 text-center md:text-left">
          {accolades.map((item, index) => (
            <div 
              key={index} 
              className={`md:px-8 first:pl-0 last:pr-0 pt-6 md:pt-0 first:pt-0 transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h4 className="font-sans text-xs md:text-sm font-black tracking-[0.2em] text-stone-900 mb-2">
                {item.title}
              </h4>
              <p className="font-serif text-sm text-orange-500 italic lowercase tracking-wide font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}