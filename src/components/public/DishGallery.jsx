import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from "lucide-react";

// High-fidelity curated culinary photography matching Tani Modi & Farin Road actual dishes
const GALLERY_ITEMS = [
    { id: 1, category: "brunch", imgUrl: "/menu-images/image-1.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 2, category: "brunch", imgUrl: "/menu-images/image-2.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 3, category: "pancakes", imgUrl: "/menu-images/image-3.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 4, category: "pancakes", imgUrl: "/menu-images/image-4.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 5, category: "pancakes", imgUrl: "/menu-images/image-5.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 6, category: "pancakes", imgUrl: "/menu-images/image-6.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 7, category: "pancakes", imgUrl: "/menu-images/image-7.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 8, category: "pancakes", imgUrl: "/menu-images/image-8.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 9, category: "pancakes", imgUrl: "/menu-images/image-9.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 10, category: "pancakes", imgUrl: "/menu-images/image-10.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 11, category: "pancakes", imgUrl: "/menu-images/image-11.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 12, category: "pancakes", imgUrl: "/menu-images/image-12.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 13, category: "pancakes", imgUrl: "/menu-images/image-13.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 14, category: "pancakes", imgUrl: "/menu-images/image-14.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 15, category: "farin-road", imgUrl: "/menu-images/image-15.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 16, category: "brunch", imgUrl: "/menu-images/image-16.webp", aspect: "aspect-[4/3]", alt: "Tani Modi Dish Gallery" },
    { id: 17, category: "drinks", imgUrl: "/menu-images/image-17.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 18, category: "pancakes", imgUrl: "/menu-images/image-18.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 19, category: "farin-road", imgUrl: "/menu-images/image-19.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 20, category: "brunch", imgUrl: "/menu-images/image-20.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 21, category: "drinks", imgUrl: "/menu-images/image-21.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 22, category: "pancakes", imgUrl: "/menu-images/image-22.webp", aspect: "aspect-[4/3]", alt: "Tani Modi Dish Gallery" },
    { id: 23, category: "farin-road", imgUrl: "/menu-images/image-23.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 24, category: "brunch", imgUrl: "/menu-images/image-24.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 25, category: "drinks", imgUrl: "/menu-images/image-25.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 26, category: "pancakes", imgUrl: "/menu-images/image-26.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 27, category: "farin-road", imgUrl: "/menu-images/image-27.webp", aspect: "aspect-[4/3]", alt: "Tani Modi Dish Gallery" },
    { id: 28, category: "brunch", imgUrl: "/menu-images/image-28.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 29, category: "drinks", imgUrl: "/menu-images/image-29.webp", aspect: "aspect-[3/4]", alt: "Tani Modi Dish Gallery" },
    { id: 30, category: "pancakes", imgUrl: "/menu-images/image-30.webp", aspect: "aspect-square", alt: "Tani Modi Dish Gallery" },
    { id: 31, category: "farin-road", imgUrl: "/menu-images/image-31.webp", aspect: "aspect-[4/3]", alt: "Tani Modi Dish Gallery" },
  
];

const CATEGORIES = [
    { id: "all", label: "All Creations" },
    { id: "brunch", label: "☀️ Daytime Brunch" },
    { id: "pancakes", label: "🥞 Sweet Stacks" },
    { id: "farin-road", label: "🌙 Farin Road Evenings" },
    { id: "drinks", label: "☕ Specialty Drinks" }
];

export default function DishGallery() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [scrollY, setScrollY] = useState(0);

    // Filter items based on activeCategory state
    const filteredItems = useMemo(() => {
        if (activeCategory === "all") return GALLERY_ITEMS;
        return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    // Bind keyboard triggers when lightbox is active
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNext = () => {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    };

    const handlePrev = () => {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    const galleryGridVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.15,
            },
        },
    };

    const galleryItemVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    const modalBackdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalCardVariants = {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section className="relative w-full bg-[#FAF9F6] text-[#171513] py-24 md:py-32 overflow-hidden font-sans border-t border-stone-200/40">

            {/* 🌟 Luxury Sandstone Overlay Background Texture */}
            <div
                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
                }}
            />

            {/* Decorative Glow Elements */}
            <div className="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full bg-[#D97706]/[0.05] blur-[110px] pointer-events-none" />
            <div className="absolute left-[-15%] bottom-[5%] w-[500px] h-[500px] rounded-full bg-[#D97706]/[0.04] blur-[130px] pointer-events-none" />

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-stone-200/50 pb-8">
                    <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-3">
                            <Camera className="w-3.5 h-3.5" />
                            Kitchen Visual Portfolio
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171513]">
                            The Culinary Gallery
                        </h2>
                        <p className="mt-3 text-stone-500 text-sm md:text-base font-light max-w-xl">
                            Take a sensory walk through our kitchen outputs. Handcrafted plates showcasing true local ingredients and flavor artistry.
                        </p>
                    </div>

                    {/* Category Pill Filters */}
                    <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === cat.id
                                        ? "bg-[#171513] text-white border-[#171513] shadow-sm animate-pulse"
                                        : "bg-white text-stone-600 border-stone-200/70 hover:border-stone-400 hover:text-[#171513]"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= EDITORIAL ASYMMETRIC GRID ================= */}
                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                    variants={galleryGridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            onClick={() => setLightboxIndex(index)}
                            className="break-inside-avoid relative rounded-[32px] overflow-hidden group cursor-zoom-in border border-stone-200/40 bg-[#171513] shadow-md hover:shadow-2xl hover:shadow-[#D97706]/10 hover:border-[#D97706]/40 transition-all duration-500"
                            variants={galleryItemVariants}
                            whileHover={{ scale: 1.04, y: -4 }}
                            transition={{ type: "spring", stiffness: 170, damping: 18 }}
                        >
                            {/* Internal Thin Copper Border */}
                            <div className="absolute inset-4 border border-[#D97706]/0 group-hover:border-[#D97706]/30 rounded-[20px] transition-all duration-500 pointer-events-none z-20" />

                            {/* Dish Image Asset */}
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={item.imgUrl}
                                    alt={item.alt}
                                    className="w-full h-full object-cover select-none group-hover:scale-103 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0 group-hover:brightness-95"
                                    loading="lazy"
                                    style={{
                                        transform: `translateY(${Math.sin((scrollY + index * 60) * 0.015) * 10}px)`,
                                    }}
                                />
                            </div>

                            {/* Minimal Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 z-10">
                                <div className="flex justify-between items-center w-full translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[10px] tracking-[0.2em] font-extrabold uppercase text-[#FAF7F2]">
                                        Tani Modi Edinburgh
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-[#D97706] text-[#FAF9F6] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <Maximize2 className="w-3.5 h-3.5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            {/* ================= IMMERSIVE PORTFOLIO LIGHTBOX MODAL ================= */}
            {lightboxIndex !== null && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none"
                    variants={modalBackdropVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Top HUD actions */}
                    <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent">
                        <div>
                            <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4" />
                                Menu Spotlight
                            </span>
                            <p className="text-xs text-stone-300 mt-1 uppercase tracking-wider">
                                Photo {lightboxIndex + 1} of {filteredItems.length}
                            </p>
                        </div>

                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
                            aria-label="Close spotlight"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Left Navigation trigger */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                        className="absolute left-4 md:left-8 z-20 p-4 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer active:scale-95"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Main Focused Card Wrapper */}
                    <motion.div
                        className="relative max-w-[90vw] max-h-[75vh] md:max-h-[80vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                        variants={modalCardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <div className="bg-[#171513] p-2.5 sm:p-3 rounded-[32px] border border-[#D97706]/20 shadow-2xl relative aspect-square max-w-full max-h-full">

                            {/* Internal gold card border */}
                            <div className="absolute inset-5 border border-[#D97706]/15 rounded-[24px] pointer-events-none z-10" />

                            <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-[#FAF9F6]">
                                <img
                                    src={filteredItems[lightboxIndex].imgUrl}
                                    alt={filteredItems[lightboxIndex].alt}
                                    className="w-full h-full object-contain mx-auto select-none pointer-events-none"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Navigation trigger */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 md:right-8 z-20 p-4 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer active:scale-95"
                        aria-label="Next image"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Bottom Dot Nav indicators */}
                    <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5 z-10">
                        {filteredItems.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(index);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${lightboxIndex === index
                                        ? "bg-[#D97706] w-5"
                                        : "bg-white/30 hover:bg-white/60"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </motion.div>
            )}

            {/* Global Transition Animations */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}