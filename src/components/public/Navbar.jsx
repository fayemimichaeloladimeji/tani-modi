import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Milestone,Menu,MailQuestionMark, BookOpen, CalendarDays,MapPinCheck,BetweenVerticalEnd } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 Navigation Array with Lucide Icons
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Our Story", href: "/about", icon: Milestone },
    { name: "Menus List", href: "/menus", icon: Menu },
    {name: "Book A Table", href: "/book-a-table", icon: BetweenVerticalEnd },
    
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: MailQuestionMark },
     { name: "Visit Us", href: "/visit-tani-modi", icon: MapPinCheck },

  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:px-8 md:pt-6 transition-all duration-500">
      <nav
        className={`max-w-7xl  mx-auto bg-white transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
          isScrolled
            ? "bg-amber-50/95 backdrop-blur-xl border-orange-500/30 shadow-[0_20px_50px_rgba(249,115,22,0.08)] px-6 py-3.5"
            : "bg-orange-50/90 backdrop-blur-md border-orange-500/15 shadow-sm px-8 py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Identity / Logo Area */}
          <Link to="/" className="flex items-center group relative z-50">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/tanimodi-logo-colored.png"
              alt="Tani Modi Logo"
              className="h-15 md:h-15 w-auto relative transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </Link>

          {/* Center Links (Capsule Menu with Adaptive Micro-Icons) */}
          <div className="hidden md:flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full p-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-sans text-xs uppercase tracking-[0.2em] font-black py-2.5 px-5 transition-all duration-300 rounded-full group overflow-hidden ${
                    isActive ? "text-white" : "text-stone-900"
                  }`}
                >
                  {/* Content Container handling layout alignments */}
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                    <span className={`transition-transform duration-500 ease-out group-hover:scale-110 ${
                      isActive ? "text-white" : "text-orange-500 group-hover:text-white"
                    }`}>
                      <link.icon className="w-7 h-7 stroke-current" />
                    </span>
                    {link.name}
                  </span>

                  {/* Smooth hover block expansion backdrop */}
                  <span
                    className={`absolute inset-0 rounded-full group-hover:scale-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center -z-0 ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 scale-100"
                        : "bg-gradient-to-r from-orange-500 to-amber-500 scale-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Button - Reservations Button with Icon Link */}
          <div className="hidden md:block">
            <Link
              to="/book-a-table"
              className="group relative px-6 py-3 overflow-hidden rounded-full font-sans text-xs uppercase tracking-[0.2em] font-black inline-flex items-center gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CalendarDays className="w-7 h-7 stroke-current relative z-10 transition-transform duration-500 group-hover:rotate-12" />

              <span className="relative z-10">Reservations</span>
            </Link>
          </div>

          {/* Mobile Responsive Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 rounded-full bg-orange-500/15 text-stone-900 border border-orange-500/30 focus:outline-none transition-all duration-300"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-3 flex flex-col justify-between relative">
              <span
                className={`w-5 h-0.5 bg-stone-900 rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-stone-900 rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "w-0 opacity-0" : ""
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-stone-900 rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Full-Screen Overlay with Icons */}
        <div
          className={`fixed inset-0 w-screen h-screen bg-amber-50/98 backdrop-blur-2xl flex flex-col justify-between p-12 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto scale-100"
              : "opacity-0 pointer-events-none scale-105"
          }`}
        >
          <div className="h-16"></div>

          <div className="flex flex-col space-y-6 my-auto text-left pl-4 border-l-2 border-orange-500/40">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-orange-600 font-black mb-2">
              Tani Modi Experience
            </span>

            {navLinks.map((link, idx) => {
              const isMobileActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-sans text-3xl font-black uppercase tracking-tight transition-all duration-300 hover:translate-x-3 flex items-center gap-4 ${
                    isMobileActive
                      ? "text-orange-600"
                      : "text-stone-900 hover:text-orange-600"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : "0ms",
                  }}
                >
                  <span className={`w-7 h-7 flex items-center justify-center scale-125 ${
                    isMobileActive ? "text-orange-600" : "text-stone-400"
                  }`}>
                    <link.icon className="w-5 h-5 stroke-current" />
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="w-full mt-auto">
            <Link
              to="/book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-sans text-xs uppercase tracking-widest font-bold rounded-full shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-300"
            >
              <CalendarDays className="w-4 h-4 stroke-current" />
              Book A Table
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}