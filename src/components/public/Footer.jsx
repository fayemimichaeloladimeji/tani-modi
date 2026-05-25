import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("103 Hanover Street, Edinburgh, EH2 1DJ");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#171513] text-[#FAF7F2] border-t border-[#FAF7F2]/10 overflow-hidden font-sans">
      
      {/* 🌟 Organic Cream/Sandstone Backdrop Texture for tactile, premium paper depth */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-[0.06] pointer-events-none scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Ambient Radial Shading to soften the dark base canvas */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-transparent to-transparent pointer-events-none" />

      {/* Synchronization Micro-Dot Matrix Grid with warmth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(217, 119, 6, 0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-3 md:px-4 relative z-10 py-16 md:py-24">
        
        {/* Upper Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* ================= COLUMN 1: BRAND PLATFORM ================= */}
          <div className="lg:col-span-4 space-y-6">
            <a href="/" className="inline-block group">
              {/* Primary brand logo with typographic fallback */}
              <div className="flex flex-col items-start gap-4">
                <img
                  src="/tanimodi-logo-colored.png"
                  alt="Tani Modi logo"
                  className="w-36 h-auto object-contain"
                />
                {/* <span className="font-serif text-2xl md:text-3xl font-extrabold tracking-wide text-[#FAF7F2] group-hover:text-[#D97706] transition-colors duration-300">
                  TANI MODI
                </span> */}
              </div>
            </a>
            
            <p className="text-stone-300 text-base leading-relaxed max-w-sm font-light">
              Cultivating Edinburgh’s legendary independent brunch culture by day, and transitioning into contemporary Pan-African fine dining experiences by night.
            </p>

            {/* Social Links with Premium Hover Micro-Effects */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.instagram.com/tani_modi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-800 bg-[#1F1C1A] flex items-center justify-center text-stone-400 hover:text-[#FAF7F2] hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/TaniModiEdinburgh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-800 bg-[#1F1C1A] flex items-center justify-center text-stone-400 hover:text-[#FAF7F2] hover:border-[#D97706] hover:bg-[#D97706]/10 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
          
            </div>
          </div>

          {/* ================= COLUMN 2: OPERATIONS TIMELINE (Sleek Dual Shift) ================= */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[20px] uppercase tracking-[0.25em] font-bold text-[#D97706]">
              Hours &amp; Services
            </h4>
            <div className="space-y-4">
              <div className="border-l-2 border-[#D97706]/30 pl-3">
                <span className="block text-sm font-semibold tracking-wider text-stone-400 uppercase">
                  ☀️ Daytime Brunch
                </span>
                <span className="block text-base text-[#FAF7F2] font-medium mt-0.5">
                  Monday – Friday
                </span>
                <span className="text-sm text-stone-400">09:00am – 3:30pm</span>
                <span className="block text-base text-[#FAF7F2] font-medium mt-1.5">
                  Saturday – Sunday
                </span>
                <span className="text-sm text-stone-400">09:00am – 3:00pm</span>
              </div>

              <div className="border-l-2 border-stone-800 pl-3">
                <span className="block text-sm font-semibold tracking-wider text-stone-400 uppercase">
                  🌙 Evenings
                </span>
                <span className="block text-base text-stone-300 font-medium mt-0.5">
                  Friday &amp; Saturday Dinner
                </span>
                <span className="text-sm text-[#D97706] font-medium">18:00 – Late (By Booking)</span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: LOCATION PIN ================= */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[20px] uppercase tracking-[0.25em] font-bold text-[#D97706]">
              Location
            </h4>
            <div className="space-y-4">
              <address className="not-italic text-sm text-[#FAF7F2] leading-relaxed font-light">
                103 Hanover Street,<br />
                Edinburgh, EH2 1DJ<br />
                Scotland
              </address>
              
              <div className="space-y-2 pt-1">
                <button
                  onClick={copyAddress}
                  className="group flex items-center gap-1.5 text-left text-sm text-[#D97706] hover:text-[#FAF7F2] transition-colors font-semibold"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  {copied ? "Copied to Clipboard!" : "Copy Address"}
                </button>
                <a
                  href="mailto:hello@tanimodi.co.uk"
                  className="block text-sm text-[#FAF7F2] hover:text-[#D97706] transition-colors font-medium underline underline-offset-4 decoration-stone-800"
                >
                  hello@tanimodi.co.uk
                </a>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 4: NEWSLETTER JOURNAL ARCHITECT ================= */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[20px] uppercase tracking-[0.25em] font-bold text-[#D97706]">
              The Journal Newsletter
            </h4>
            <p className="text-stone-300 text-base leading-relaxed font-light">
              Receive secret off-menu releases, African-Scottish ingredient profiles, and early reservation links.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-4 group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 py-3 bg-[#110F0E] border border-stone-800 rounded-full text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#D97706]/60 transition-all duration-300 pr-28 focus:ring-1 focus:ring-[#D97706]/30"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 rounded-full text-xs uppercase tracking-widest font-bold text-white bg-gradient-to-r from-[#D97706] to-[#B45309] hover:brightness-110 active:scale-95 transition-all duration-200"
              >
                {subscribed ? "Subscribed!" : "Join Us"}
              </button>
            </form>
          </div>

        </div>

        {/* ================= LOWER SUB-BASE TRACK BAR ================= */}
        <div className="pt-8 border-t border-stone-900 space-y-4">
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-sm text-stone-500 font-light text-center">
              © {currentYear} Tani Modi Cafe &amp;. All rights reserved.
            </p>
          </div>
          <a
            href="https://wa.me/08064156507?text=I%20was%20redirected%20here%20from%20tanimodi.co.uk%20and%20would%20like%20to%20inquire%20about%20your%20web%20design%20services.%20Please%20let%20me%20know%20how%20I%20can%20get%20in%20touch!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-500 font-light text-center hover:text-[#D97706] transition-colors block"
          >
            Website designed by MAB AMBIANCE OF KNOWLED LIMITED.
          </a>
        </div>

      </div>

      {/* 🌟 Ambient Brand Glow Elements (Bridges Orange and Cream warmth) */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#D97706]/[0.05] rounded-full blur-[90px] -ml-24 -mb-24 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D97706]/[0.07] rounded-full blur-[120px] -mr-32 -mb-32 pointer-events-none" />
    </footer>
  );
}