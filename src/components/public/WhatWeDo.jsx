import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Heart, Sparkles, Award, ShieldCheck } from "lucide-react";

export default function WhatWeDo({
  // Section 1: History / About Us
  tag1 = "EST. 2013 • HERITAGE",
  title1 = "Our Story",
  subtitle1 = "Your Warmest Smiles & Coffee Served Next Door!",
  description1 = "Established in 2013, Tani Modi has become renowned for serving delicious seasonal cuisine sourced locally. Famous for our legendary brunch, featuring favorites like full Scottish breakfast and pistachio-strawberry pancakes, we offer a range of options from hearty to light, all paired with expertly crafted coffee or refreshing orange juice.\nWe pride ourselves on sourcing top-quality products from Edinburgh’s finest artisans, including coffee from Rafiki Coffee and teas from Shuibu. Committed to social responsibility and sustainability, Tani Modi is designed to offer an inviting, fun, and friendly atmosphere. We eagerly anticipate welcoming you – more than just a cafe.",
  ctaText1 = "Find Out More",
  ctaLink1 = "/about",

  // Section 2: Offerings / What We Do
  tag2 = "THE CRAFT • OUR MISSION",
  title2 = "What We Do",
  subtitle2 = "Plates & Cups Crafted With True Soul",
  description2 = "At Tani Modi, brunch isn’t just a meal, it’s a mission. We’re here to serve plates that surprise, comfort, and make you go “damn, that’s good.” Whether it’s our Full Scotsman (a breakfast big enough to earn its name), creamy shakshuka, or plant-based dishes that actually excite your taste buds, we build every dish with flavour and care.\nWe love bold ingredients, unexpected combos, and keeping things fresh. Our menu is always evolving, but the heart stays the same: good food made by people who care, served in a place that feels like home.",
  coffeeHighlightTitle = "And then there’s the coffee.",
  coffeeHighlightDesc = "We proudly brew Rafiki Coffee: ethically sourced, locally roasted, and straight-up delicious. It’s the kind of specialty coffee you’ll think about later in the day. Smooth, rich, with just enough attitude to stand up to oat milk or shine solo. Specialty coffee without the snobbery.",
  ctaText2 = "Explore Our Menus",
  ctaLink2 = "/menus",

  // High-resolution image assets
  storyMainImg = "/hero-section-images/background-16.webp",
  storyOverlayImg = "/hero-section-images/background-16.webp",
  craftMainImg = "/menu-images/image-3.webp",
  craftOverlayImg = "/hero-section-images/background-19.webp",
  galleryImg1 = "/menu-images/image-3.webp",
  galleryImg2 = "/hero-section-images/background-19.webp",
  galleryImg3 = "/menu-images/image-15.webp",
  galleryImg4 = "/menu-images/image-2.webp"
}) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.12 };

    const obs1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible1(true);
    }, observerOptions);

    const obs2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible2(true);
    }, observerOptions);

    if (section1Ref.current) obs1.observe(section1Ref.current);
    if (section2Ref.current) obs2.observe(section2Ref.current);

    return () => {
      obs1.disconnect();
      obs2.disconnect();
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
      <style>{`
        @keyframes cardFlash {
          0%, 100% {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(217, 119, 6, 0);
          }
          50% {
            box-shadow: 0 4px 30px rgba(217, 119, 6, 0.4), inset 0 0 30px rgba(217, 119, 6, 0.15);
          }
        }
        .flash-card {
          animation: cardFlash 2s ease-in-out infinite;
        }
      `}</style>

  
      {/* ================= SECTION 1: WHAT WE DO (Luxurious Charcoal Night Vibe) ================= */}
      {/* */}
      <motion.section
        ref={section2Ref}
        className="relative w-full py-20 md:py-32 bg-[#171513] text-[#FAF7F2] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Dark paper blend texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-[0.29] pointer-events-none scale-105"
          style={{
            backgroundImage: "url('/hero-section-images/background-15.webp')"
          }}
        />

        {/* Ambient Glowing Spotlights (Copper & Golden Tones) */}
        <div className="absolute right-[-10%] top-[10%] w-[550px] h-[550px] rounded-full bg-[#D97706]/10 blur-[130px] pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[-5%] w-[450px] h-[450px] rounded-full bg-[#B45309]/5 blur-[110px] pointer-events-none" />

        {/* Micro-Dot Grid customized with Orange sync lights */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(rgba(217, 119, 6, 0.15) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* COLUMN 2.1: 2x2 IMAGE GALLERY */}
            <motion.div
              className="lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4 order-2 lg:order-1"
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            >
              {/* Image 1 */}
              <motion.div
                className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-stone-700/30 bg-stone-900 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                onClick={() => setSelectedImage(galleryImg1)}
              >
                <img
                  src={galleryImg1}
                  alt="Tani Modi gallery 1"
                  className="w-full h-full object-cover block"
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-stone-700/30 bg-stone-900 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                onClick={() => setSelectedImage(galleryImg2)}
              >
                <img
                  src={galleryImg2}
                  alt="Tani Modi gallery 2"
                  className="w-full h-full object-cover block"
                />
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-stone-700/30 bg-stone-900 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                onClick={() => setSelectedImage(galleryImg3)}
              >
                <img
                  src={galleryImg3}
                  alt="Tani Modi gallery 3"
                  className="w-full h-full object-cover block"
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div
                className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-stone-700/30 bg-stone-900 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                onClick={() => setSelectedImage(galleryImg4)}
              >
                <img
                  src={galleryImg4}
                  alt="Tani Modi gallery 4"
                  className="w-full h-full object-cover block"
                />
              </motion.div>
            </motion.div>

            {/* */}
            {/* COLUMN 2.2: CRAFT CONTENT */}
            <div className={`lg:col-span-6 space-y-6 order-1 lg:order-2 transition-all duration-[1000ms] ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/20 text-[10px] font-semibold uppercase tracking-widest text-[#D97706]">
                <Coffee className="w-3 h-3" />
                {tag2}
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {title2}
              </h2>

              <p className="text-[#D97706] font-serif italic text-lg md:text-xl tracking-wide leading-snug">
                {subtitle2}
              </p>

              <div className="text-stone-300 text-base md:text-lg font-light leading-relaxed space-y-4">
                {description2.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Specialty Coffee Showcase Container */}
              <div className="flash-card p-6 rounded-2xl border border-stone-800/80 bg-[#1E1B18] shadow-inner space-y-3 relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-2xl" />
                <h4 className="text-sm uppercase tracking-widest text-[#D97706] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
                  {coffeeHighlightTitle}
                </h4>
                <p className="text-[18px] text-stone-300 font-light leading-relaxed">
                  {coffeeHighlightDesc}
                </p>
              </div>

              <div className="pt-4">
                <a
                  href={ctaLink2}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] px-8 py-4 text-sm uppercase tracking-[0.2em] font-bold text-white shadow-md shadow-[#D97706]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#D97706]/20 active:scale-98"
                >
                  <span>{ctaText2}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>


            </div>

          </div>
        </div>
      </motion.section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-11/12 md:w-4/5"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden">
              <img
                src={selectedImage}
                alt="Gallery modal view"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Close Button */}
            <motion.button
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#D97706] transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}