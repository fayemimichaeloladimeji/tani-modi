import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Quote, X } from "lucide-react";

// Curated exported review image database
const EXPORTED_REVIEWS = [
  { id: 1, imgUrl: "/customer-reviews/review-1.jpg", alt: "Aberdeen Mum Review Card" },
  { id: 2, imgUrl: "/customer-reviews/review-2.jpg", alt: "Farin Road Featured Review" },
  { id: 3, imgUrl: "/customer-reviews/review-3.jpg", alt: "Celiac-Friendly Review Card" },
  { id: 4, imgUrl: "/customer-reviews/review-4.jpg", alt: "Rafiki Coffee Highlight" },
  { id: 5, imgUrl: "/customer-reviews/review-5.jpg", alt: "Weekend Brunch Feature" },
  { id: 6, imgUrl: "/customer-reviews/review-6.jpg", alt: "Shared Plate Detail" },
  { id: 7, imgUrl: "/customer-reviews/review-7.jpg", alt: "Shared Plate Detail" },
  { id: 8, imgUrl: "/customer-reviews/review-8.jpg", alt: "Shared Plate Detail" },
  { id: 9, imgUrl: "/customer-reviews/review-9.jpg", alt: "Shared Plate Detail" },
  { id: 10, imgUrl: "/customer-reviews/review-10.jpg", alt: "Shared Plate Detail" },
  { id: 11, imgUrl: "/customer-reviews/review-11.jpg", alt: "Shared Plate Detail" },
  { id: 12, imgUrl: "/customer-reviews/review-12.jpg", alt: "Shared Plate Detail" },
  { id: 13, imgUrl: "/customer-reviews/review-13.jpg", alt: "Shared Plate Detail" },
];

export default function ReviewScroll() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Modal State for Image Viewer
  const [activeReviewIndex, setActiveReviewIndex] = useState(null);

  // Track scroll metrics to update side navigation buttons and progress bar
  const checkScrollLimits = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
      
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
      }
    }
  };

  // Autoplay Logic - Smoothly advancement
  useEffect(() => {
    if (isPaused || activeReviewIndex !== null) return;

    const autoplayTimer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        // Loop back smoothly to the beginning when hitting the end
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          // Slide forward by one card element space width
          const scrollStep = clientWidth > 768 ? 440 : 312;
          scrollContainerRef.current.scrollBy({
            left: scrollStep,
            behavior: "smooth"
          });
        }
      }
    }, 3800); // Step forward every 3.8 seconds

    return () => clearInterval(autoplayTimer);
  }, [isPaused, activeReviewIndex]);

  // Bind keyboard navigation to modal when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeReviewIndex === null) return;
      if (e.key === "Escape") setActiveReviewIndex(null);
      if (e.key === "ArrowRight") handleModalNext();
      if (e.key === "ArrowLeft") handleModalPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeReviewIndex]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScrollLimits);
      checkScrollLimits();
      window.addEventListener("resize", checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollStep = clientWidth > 768 ? 440 : 312;
      const scrollAmount = direction === "left" ? -scrollStep : scrollStep;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Modal navigation controllers
  const handleModalNext = () => {
    setActiveReviewIndex((prev) => (prev + 1) % EXPORTED_REVIEWS.length);
  };

  const handleModalPrev = () => {
    setActiveReviewIndex((prev) => (prev - 1 + EXPORTED_REVIEWS.length) % EXPORTED_REVIEWS.length);
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#171513] py-16 md:py-24 overflow-hidden font-sans border-t border-stone-200/40">
      
      {/* 🌟 Warm Sandstone Paper Overlay Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Branded Ambient Glows */}
      <div className="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full bg-[#D97706]/[0.05] blur-[110px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-[5%] w-[500px] h-[500px] rounded-full bg-[#D97706]/[0.04] blur-[130px] pointer-events-none" />

      {/* Segment Layout Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Social Moments
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171513]">
              The Tani Modi Guestbook
            </h2>
            <p className="mt-3 text-stone-500 text-sm md:text-base font-light max-w-xl">
              Take a glance at what our visitors share on social media. Click on any card to open the interactive viewer, and explore honest reviews directly from our Hanover Street dining room.
            </p>
          </div>

          {/* Social Brand Indicator tag */}
          <div className="hidden md:flex items-center gap-2 bg-[#171513]/5 border border-stone-200/50 px-4 py-2 rounded-xl">
            <Quote className="w-4 h-4 text-[#D97706]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">#TaniModiEdinburgh</span>
          </div>
        </div>
      </div>

      {/* Slider Core Container */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 z-10">
        
        {/* Navigation Arrows */}
        <div className="absolute right-8 md:right-12 -top-16 flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollLeft
                ? "bg-white border-stone-200 text-[#171513] hover:bg-[#171513] hover:text-[#FAF7F2] hover:border-transparent cursor-pointer shadow-sm"
                : "bg-transparent border-stone-200/30 text-stone-300 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollRight
                ? "bg-white border-stone-200 text-[#171513] hover:bg-[#171513] hover:text-[#FAF7F2] hover:border-transparent cursor-pointer shadow-sm"
                : "bg-transparent border-stone-200/30 text-stone-300 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 px-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {EXPORTED_REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[416px] snap-start select-none"
            >
              {/* Outer Frame Wrapper with warm natural borders - added onClick and cursor pointer */}
              <button
                onClick={() => setActiveReviewIndex(index)}
                className="w-full text-left bg-[#171513] rounded-[36px] p-2.5 sm:p-3 shadow-lg relative aspect-square flex items-center justify-center overflow-hidden group border border-[#D97706]/15 hover:border-[#D97706]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D97706]/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D97706]/50"
              >
                
                {/* Decorative gold internal highlight border inside the black image container */}
                <div className="absolute inset-5 sm:inset-6 border border-[#D97706]/10 rounded-[28px] pointer-events-none z-10" />

                <div className="w-full h-full rounded-[28px] overflow-hidden relative bg-[#FAF9F6]">
                  {/* Native image loader */}
                  <img
                    src={review.imgUrl}
                    alt={review.alt}
                    className="w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      // Graceful fallback graphic re-rendering if direct visual paths are temporarily offline
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'bg-[#D97706]');
                      e.target.parentNode.innerHTML = `
                        <div class="text-center text-[#FAF9F6] font-sans">
                          <span class="text-xs uppercase tracking-[0.25em] font-extrabold opacity-75">Tani Modi Review</span>
                          <h4 class="mt-4 font-serif text-lg leading-tight font-black">${review.alt}</h4>
                          <p class="mt-4 text-[10px] tracking-widest uppercase opacity-60">Asset ${review.id} / 13</p>
                        </div>
                      `;
                    }}
                  />
                  
                  {/* Subtle dark layout contrast gradient on top of image to display clean branding metadata */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute bottom-5 inset-x-5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF9F6] bg-[#D97706] px-3 py-1 rounded-full shadow-sm">
                      Guest Card #{review.id}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#FAF7F2] opacity-80">
                      Edinburgh
                    </span>
                  </div>
                </div>

              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Continuous Progress Indicator Bar */}
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="w-full h-[2.5px] bg-stone-200/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#D97706] transition-all duration-300 rounded-full"
              style={{
                width: `${Math.max(8, scrollProgress)}%`
              }}
            />
          </div>
        </div>

      </div>

      {/* ================= LIGHTBOX OVERLAY / MODAL SCROLLER ================= */}
      {activeReviewIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 select-none animate-fade-in"
          onClick={() => setActiveReviewIndex(null)}
        >
          {/* Top Info Bar & Close Button */}
          <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/60 to-transparent">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold">Tani Modi Review Viewer</span>
              <p className="text-xs text-stone-300 mt-1">
                Card {activeReviewIndex + 1} of {EXPORTED_REVIEWS.length} — {EXPORTED_REVIEWS[activeReviewIndex].alt}
              </p>
            </div>
            
            <button 
              onClick={() => setActiveReviewIndex(null)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Left Arrow Navigation inside Modal */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleModalPrev();
            }}
            className="absolute left-4 md:left-8 z-20 p-4 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Modal Focus Card Content Area */}
          <div 
            className="relative max-w-[90vw] max-h-[75vh] md:max-h-[80vh] flex items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()} // Stop bubbling up and closing modal
          >
            <div className="bg-[#171513] p-3 rounded-[32px] border border-[#D97706]/30 shadow-2xl relative aspect-square max-w-full max-h-full">
              
              {/* Internal gold card border */}
              <div className="absolute inset-5 border border-[#D97706]/15 rounded-[24px] pointer-events-none z-10" />

              <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-[#FAF9F6]">
                <img
                  src={EXPORTED_REVIEWS[activeReviewIndex].imgUrl}
                  alt={EXPORTED_REVIEWS[activeReviewIndex].alt}
                  className="w-full h-full object-contain mx-auto select-none pointer-events-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'p-8', 'bg-[#D97706]', 'aspect-square');
                    e.target.parentNode.innerHTML = `
                      <div class="text-center text-[#FAF9F6] font-sans">
                        <Quote class="w-10 h-10 text-white opacity-40 mx-auto mb-4" />
                        <span class="text-xs uppercase tracking-[0.25em] font-extrabold opacity-75">Tani Modi Review</span>
                        <h4 class="mt-4 font-serif text-xl leading-tight font-black">${EXPORTED_REVIEWS[activeReviewIndex].alt}</h4>
                        <p class="mt-6 text-xs tracking-widest uppercase opacity-60">Card ${activeReviewIndex + 1} of 13</p>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Arrow Navigation inside Modal */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleModalNext();
            }}
            className="absolute right-4 md:right-8 z-20 p-4 bg-white/10 hover:bg-white/20 hover:scale-105 text-white rounded-full transition-all cursor-pointer active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Mini Dot Nav indicators in Overlay */}
          <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5 z-10">
            {EXPORTED_REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveReviewIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeReviewIndex === index 
                    ? "bg-[#D97706] w-5" 
                    : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Global CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </section>
  );
}