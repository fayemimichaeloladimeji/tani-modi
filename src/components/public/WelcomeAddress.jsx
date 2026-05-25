import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Heart, Sparkles, Award, ShieldCheck } from "lucide-react";

export default function WelcomeAddress({
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
  storyMainImg = "/hero-section-images/tanimodi-1.webp",
  storyOverlayImg = "/hero-section-images/tanimodi-4.webp",
  craftMainImg = "/hero-section-images/tanimodi-4.webp",
  craftOverlayImg = "/hero-section-images/tanimodi-1.webp"
}) {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF9F6]">

      {/* ================= SECTION 1: OUR STORY (Daytime Sandstone Vibe) ================= */}
      <section
        ref={section1Ref}
        className="relative w-full py-16 md:py-24 border-b border-stone-200/50 overflow-hidden"
      >
        {/* Luxury subtle paper overlay background */}
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.10] pointer-events-none"
          style={{
            backgroundImage: "url('/hero-section-images/background-15.webp')"
          }}
        />

        {/* Dynamic decorative visual dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(#D97706 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Warm Spotlighting */}
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] rounded-full bg-[#D97706]/[0.03] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* COLUMN 1.1: STORY CONTENT */}
            <motion.div
              className="lg:col-span-6 space-y-6"
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/1 text-[14px] font-semibold uppercase tracking-widest text-[#D97706]">
                <Sparkles className="w-3 h-3" />
                {tag1}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#121212]">
                {title1}
              </h2>

              <p className="text-slate-900 font-serif italic text-base md:text-lg tracking-wide border-l-2 border-[#D97706]/30 pl-4">
                {subtitle1}
              </p>

              <div className="text-slate-900 text-base md:text-lg font-light leading-relaxed space-y-4">
                {description1.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Dynamic Highlights / Badges for Sourcing */}
        

              <div className="pt-6">
                <a
                  href={ctaLink1}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-600 text-white border border-transparent shadow-md hover:brightness-95 transition-all duration-300"
                >
                  <span className="text-sm uppercase tracking-widest font-bold">{ctaText1}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>

            {/* */}
            {/* COLUMN 1.2: INTERACTIVE COLLAGE */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              {/* Main Image Frame */}
              <motion.div
              className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] p-2 bg-white border border-stone-200/60 rounded-[32px] shadow-[0_20px_50px_rgba(23,21,19,0.04)] overflow-hidden"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
                <div className="w-full h-full overflow-hidden rounded-[22px]">
                  <img
                    src={storyMainImg}
                    alt="Tani Modi Dining Atmosphere"
                    className="w-full h-full object-cover"
                    style={{
                      transform: `translateY(${(scrollY - (section1Ref.current?.offsetTop || 0)) * 0.04}px)`
                    }}
                  />
                </div>
              </motion.div>

              {/* Overlapping Floating Secondary Card */}
              <div 
                className="absolute -bottom-8 -left-2 md:-left-6 lg:-left-10 w-40 h-40 md:w-52 md:h-52 p-2 bg-white border border-stone-200/60 rounded-[28px] shadow-[0_25px_45px_rgba(23,21,19,0.06)] overflow-hidden hidden sm:block"
                style={{
                  transform: `translateY(${(scrollY - (section1Ref.current?.offsetTop || 0)) * -0.05}px)`
                }}
              >
                <div className="w-full h-full overflow-hidden rounded-[20px]">
                  <img
                    src={storyOverlayImg}
                    alt="Pancake close-up stack detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Behind Soft Warm Backdrop Aura Glow */}
              <div className="absolute inset-auto w-72 h-72 bg-[#D97706]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
            </div>

          </div>
        </div>
      </section>

 

    </div>
  );
}