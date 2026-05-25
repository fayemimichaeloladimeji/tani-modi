import { useState, useEffect } from "react";
import { FileText, Download, Eye, Award, Sparkles } from "lucide-react";

// Curated menus configuration linking to your assets folder
const MENU_DOCUMENTS = [
  {
    id: "all-menus",
    title: "Tani Modi Menus",
    subtitle: "A single downloadable menu collection for Brunch, Drinks and Farin Road dining.",
    pdfUrl: "/tani-modi-brunch-menu.pdf",
    icon: Sparkles,
    color: "#D97706",
    pages: 2,
    previewItems: [
      { name: "Pistachio Pancake Stack", price: "£15.25" },
      { name: "Rafiki Espresso", price: "£4.75" },
      { name: "Sub-Saharan Braised Ribs", price: "£26.50" },
      { name: "Coeliac-Safe Stack Option", price: "Included" },
    ]
  }
];

export default function MenuPdfViewer() {
  const [activeMenu, setActiveMenu] = useState(MENU_DOCUMENTS.length > 0 ? MENU_DOCUMENTS[0] : null); // Menu object opened inline by default
  const [iframeError, setIframeError] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openPdfModal = (menu) => {
    setActiveMenu(menu);
    setIframeError(false);
  };

  const handleDownload = (menu) => {
    setIsDownloading(true);
    // Mimicking download sequence
    setTimeout(() => {
      setIsDownloading(false);
      // Fallback action: Open in new tab if direct file trigger fails
      window.open(menu.pdfUrl, "_blank");
    }, 1000);
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#171513] py-20 md:py-32 overflow-hidden font-sans border-t border-stone-200/40">
      
      {/* 🌟 Warm Sandstone Paper Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute right-[-10%] top-[10%] w-[450px] h-[450px] rounded-full bg-[#D97706]/[0.05] blur-[110px] pointer-events-none" />
      <div className="absolute left-[-15%] bottom-[5%] w-[500px] h-[500px] rounded-full bg-[#D97706]/[0.04] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-3">
            <Award className="w-10 h-10 animate-pulse" />
            Tripadvisor Traveler's Choice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171513]">
            Our Printed Menus
          </h2>
          <p className="mt-4 text-stone-500 text-xl md:text-xl font-light leading-relaxed">
            Prefer the tactile feel of our physical menu cards? Download our beautiful printed layouts directly or view them within our smart interactive reader.
          </p>
        </div>

        {/* Single document launch card */}
        <div className="grid grid-cols-1 gap-8">
          {MENU_DOCUMENTS.map((menu) => {
            const IconComponent = menu.icon;
            return (
              <div 
                key={menu.id}
                className="bg-white border border-stone-200/50 rounded-[32px] p-8 shadow-sm hover:shadow-xl hover:border-[#D97706]/30 hover:-translate-y-1 transform transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Decorative Icon & Color Stamp */}
                  <div className="flex items-center justify-between mb-8">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
                      style={{ backgroundColor: menu.color }}
                    >
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold bg-stone-50 px-3 py-1 rounded-md border border-stone-100">
                      {menu.pages} {menu.pages > 1 ? "Pages" : "Page"} PDF
                    </span>
                  </div>

                  {/* Header Titles */}
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-[#171513] group-hover:text-[#D97706] transition-colors">
                    {menu.title}
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm font-light mt-2.5 leading-relaxed">
                    {menu.subtitle}
                  </p>

                  {/* Micro Preview Box */}
                  <div className="mt-6 bg-stone-50/50 border border-stone-100 rounded-2xl p-4 space-y-2.5">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#D97706] block mb-1">
                      Featured in this list
                    </span>
                    {menu.previewItems.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-stone-700 font-medium">{item.name}</span>
                        <span className="text-stone-400 font-serif font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-8">
                  <button
                    onClick={() => openPdfModal(menu)}
                    className="flex items-center justify-center gap-1.5 py-3 border border-stone-200 hover:border-[#171513] hover:bg-[#171513] hover:text-white rounded-full text-[10px] uppercase tracking-widest font-black text-stone-800 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Open PDF
                  </button>
                  <button
                    onClick={() => handleDownload(menu)}
                    className="flex items-center justify-center gap-1.5 py-3 bg-[#D97706] hover:bg-[#171513] text-white rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-300 cursor-pointer shadow-md shadow-[#D97706]/10"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Inline PDF viewer embedded below the menu card */}
      {activeMenu && (
        <div className="mt-16 rounded-[40px] border border-stone-200/70 bg-stone-100 shadow-xl overflow-hidden">
          <div className="flex flex-col gap-4 p-6 bg-white/90 border-b border-stone-200 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#D97706]">
                <FileText className="w-4 h-4" />
                Menu Document Viewer
              </span>
              <h3 className="mt-3 text-2xl font-black text-[#171513]">{activeMenu.title}</h3>
              <p className="mt-2 text-sm text-stone-500 max-w-2xl">{activeMenu.subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleDownload(activeMenu)}
                disabled={isDownloading}
                className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#D97706] hover:bg-[#171513] text-white rounded-full text-[10px] uppercase tracking-widest font-black transition-all duration-300 shadow-md shadow-[#D97706]/15"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-bold text-stone-500 bg-stone-50 rounded-full border border-stone-200">
                {activeMenu.pages} Pages
              </span>
            </div>
          </div>

          <div className="w-full h-[70vh] md:h-[80vh] bg-white">
            {!iframeError ? (
              <iframe
                src={`${activeMenu.pdfUrl}#toolbar=1`}
                title={`${activeMenu.title} Viewer`}
                className="w-full h-full border-0"
                onError={() => setIframeError(true)}
              />
            ) : (
              <div className="h-full p-10 flex flex-col justify-center items-center text-center text-stone-600">
                <p className="text-lg font-semibold text-stone-800 mb-3">Unable to preview the PDF.</p>
                <p className="max-w-xl text-sm leading-relaxed mb-6">
                  We couldn't display the document inline. Use the button below to open the menu in a new tab instead.
                </p>
                <button
                  onClick={() => window.open(activeMenu.pdfUrl, "_blank")}
                  className="px-6 py-3 bg-[#D97706] hover:bg-[#171513] text-white rounded-full uppercase text-[10px] tracking-[0.28em] font-black transition-all duration-300"
                >
                  Open PDF in New Tab
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Transition Keyframes */}
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