import { useEffect } from "react";
import { Award } from "lucide-react";

export default function BookATable() {

  // (Removed unused TABLESENSE_WIDGET_URLS — using BOOKING_IFRAME_SRC instead)
  // Booking Form launcher + embedder script (from TableSense account)
  const BOOKING_IFRAME_SRC = "https://booking.tablesense.com/organisation/5452b709-9e79-4344-836c-607fe8429e55/business/345601b2-cee8-42e2-b871-107f567991a1/venue/76cdb9ad-7df6-494f-b7be-99718b225952/launcher";
  const MODAL_SCRIPT_SRC = "https://booking.tablesense.com/assets/modal-embedder.js";

  useEffect(() => {
    if (document.querySelector('script[data-tablesense-embedder]')) return;
    const s = document.createElement('script');
    s.src = MODAL_SCRIPT_SRC;
    s.defer = true;
    s.setAttribute('data-tablesense-embedder', 'true');
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#171513] antialiased font-sans selection:bg-[#D97706]/20">
      
      {/* 🌟 Background Paper Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.9] pointer-events-none"
        
      />

      {/* ================= HEADER HERO BANNER (Matches brick/wood screenshot tone) ================= */}
      <div className="relative w-full h-[380px] md:h-[440px] flex items-center justify-center overflow-hidden bg-neutral-950">
        {/* Brick wall texture overlay matching the screenshot background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-300 scale-105"
          style={{
            backgroundImage: "url('/hero-section-images/tanimodi-3.jpg')"
          }}
        />
        <div className="absolute inset-0  via-transparent to-black/70 z-10" />
        
        {/* Subtle warming copper light gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D97706]/20 via-transparent to-transparent z-10" />

        <div className="relative z-20 text-center mt-12  px-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D97706]/20 border border-[#D97706]/30 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FAF7F2] mb-4 backdrop-blur-sm">
            <Award className="w-3.5 h-3.5 animate-pulse text-[#D97706]" />
            EST. 2013 • HANOVER STREET
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-black tracking-[0.15em] text-white uppercase drop-shadow-md">
            BOOK A TABLE
          </h1>
          <div className="w-24 h-[3px] bg-[#D97706] mx-auto mt-6" />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: TABLESENSE BOOKINGS ================= */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-stone-200/60 pb-5">
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#171513]">
                Reservation Details
              </h2>
            </div>

            {/* TableSense booking widget loads immediately on page load */}
            <div className="space-y-6">
              <p className="text-xl text-stone-600 leading-relaxed">
                Your booking form is ready. Choose a time and confirm your table directly through TableSense.
              </p>
              <div className="relative w-full p-8 h-[450px] aspect-[4/5] sm:aspect-[4/5.5] bg-stone-100 rounded-[32px] border border-stone-200 overflow-hidden shadow-inner">
                <iframe
                  src={BOOKING_IFRAME_SRC}
                  title="TableSense Booking Form"
                  className="w-full h-full border-0"
                  allow="payment; fullscreen"
                  style={{ border: 'none' }}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>

            {/* Support information beneath the form */}
            <div className="pt-6 border-t border-stone-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-400 font-light text-center sm:text-left">
                Secured by TableSENSE booking nodes. Realtime card protection enabled.
              </p>
              <div className="flex gap-1.5 opacity-60">
                <div className="w-7 h-4.5 bg-stone-200 rounded border border-stone-300" />
                <div className="w-7 h-4.5 bg-stone-200 rounded border border-stone-300" />
                <div className="w-7 h-4.5 bg-stone-200 rounded border border-stone-300" />
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: STACKED DIFFERENT CAMPAIGN CARD (Matches Right Side of Screenshot) ================= */}
          <div className="lg:col-span-5">
            <div className="relative bg-emerald-950 rounded-[40px] p-8 md:p-12 shadow-2xl aspect-[4/5.2] overflow-hidden flex flex-col justify-between border border-[#D97706]/15 group">
              
              {/* Botanical background layer matching screenshot */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-[0.35] mix-blend-overlay group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                style={{
                  backgroundImage: "url('/hero-section-images/tanimodi-14.jpg')"
                }}
              />

              {/* Top ambient spotlight shadows */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[#D97706]/[0.05] rounded-full blur-3xl pointer-events-none" />

              {/* Dynamic campaign slogans - perfectly matched to screenshot */}
              <div className="relative z-10 text-center pt-4">
                <div className="space-y-1 md:space-y-2 margin-auto ">
                  <span className="block font-sans text-3xl sm:text-3xl md:text-4xl font-black tracking-widest text-[#FAF7F2] uppercase drop-shadow-sm">
                    INDEPENDENT
                  </span>
                  <span className="block font-sans text-3xl sm:text-3xl md:text-4xl font-black tracking-widest text-[#D97706] uppercase drop-shadow-sm">
                    IRRESISTIBLE
                  </span>
                  <span className="block font-sans text-3xl sm:text-3xl md:text-4xl font-black tracking-widest text-[#D97706] uppercase drop-shadow-sm">
                    INCOMPARABLE
                  </span>
                </div>
                
                {/* Thin typography tracker hashtag */}
                <span className="inline-block font-sans text-xs sm:text-sm font-light tracking-[0.3em] text-[#FAF7F2] uppercase mt-4 md:mt-6 border-t border-white/10 pt-4 w-3/4 mx-auto">
                  #STACKEDDIFFERENT
                </span>
              </div>

              {/* Signature Plated Food Asset floating at base of the graphic */}
              <div className="relative z-10 w-full flex justify-center mt-6">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-[#D97706] overflow-hidden shadow-2xl transform hover:scale-103 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80"
                    alt="Tani Modi Signature Pancakes Stack"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Card Footer Stamp */}
              <div className="relative z-10 text-center pt-4">
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone-400">
                  Edinburgh's Coeliac Haven
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

    </div>
  );
}