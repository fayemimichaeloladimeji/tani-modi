import { useEffect, useRef, useState } from "react";

export default function LocationMap() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-stone-900"
    >
      {/* Map Container */}
      <div className="relative w-full h-full">
        <iframe
          title="Tani Modi Location Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.9487154487446!2d-3.1949849!3d55.9527083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c789e3a0c7a5%3A0x123456789!2s103%20Hanover%20Street%2C%20Edinburgh%20EH2%201DJ!5e0!3m2!1sen!2suk!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Location Pin Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-1000 pointer-events-none ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Info Card Floating Over Map */}
        <div
          className={`absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:w-96 bg-white/95 backdrop-blur-md rounded-xl p-8 shadow-2xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Location Icon */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg">
              📍
            </div>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-orange-600 font-bold">
              Our Location
            </span>
          </div>

          {/* Address */}
          <h3 className="font-serif text-2xl font-light text-stone-900 mb-3 leading-tight">
            103 Hanover Street
          </h3>

          {/* Details */}
          <p className="font-sans text-sm text-stone-600 leading-relaxed mb-6">
            Edinburgh, EH2 1DJ
            <br />
            Scotland
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com/maps/search/103+Hanover+Street+Edinburgh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-lg transition-colors duration-300"
            >
              Get Directions
            </a>
            <a
              href="tel:+441315565200"
              className="inline-flex items-center justify-center px-4 py-2.5 border border-stone-300 hover:border-orange-500 text-stone-900 hover:text-orange-600 font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-lg transition-all duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
