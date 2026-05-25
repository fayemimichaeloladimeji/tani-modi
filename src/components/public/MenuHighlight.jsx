import { useState } from "react";

export default function MenuHighlight({
  tag = " SIGNATURE PLATES",
  title = "Culinary Signature",
  items = [
    {
      id: 1,
      name: "Artisanal Eggs Benedict",
      description:
        "Free-range eggs, house-made hollandaise, toasted sourdough. A timeless classic executed with meticulous precision.",
      price: "£14",
      image:
        "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Seared Scottish Salmon",
      description:
        "Wild-caught salmon, avocado mousse, dill-cured capers, artisan bread. A showcase of Scotland's finest produce.",
      price: "£18",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Truffle Parmesan Risotto",
      description:
        "Creamy arborio rice, black truffle oil, aged parmesan, wild mushrooms. Richness defined.",
      price: "£16",
      image:
        "https://images.unsplash.com/photo-1476124369162-f4978d4ac3d8?w=600&h=400&fit=crop",
    },
  ],
}) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
      
      {/* Structural Micro-Dot Pattern Overlay Sync */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(249, 115, 22, 0.1) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block with Premium Typography Tuning */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full mb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-orange-600 font-black">
              {tag}
            </span>
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none text-stone-900 mt-2">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 italic font-serif font-medium lowercase block md:inline mx-1" : ""}>
                {word}{" "}
              </span>
            ))}
          </h2>
        </div>

        {/* Accordion List Container */}
        <div className="space-y-6">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setExpandedId(expandedId === item.id ? null : item.id)
              }
              className="w-full text-left group focus:outline-none"
            >
              {/* Item Card Canvas */}
              <div
                className={`relative p-6 md:p-8 rounded-[24px] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  expandedId === item.id
                    ? "bg-white border-orange-500/30 shadow-[0_20px_50px_rgba(249,115,22,0.08)] scale-[1.01]"
                    : "bg-white/40 border-orange-500/10 hover:bg-white/90 hover:border-orange-500/20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.02)]"
                } ${expandedId !== null && expandedId !== item.id ? "opacity-50 blur-[0.5px]" : "opacity-100"}`}
              >
                {/* Header Interactive Row */}
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-sans text-lg md:text-xl text-stone-900 font-black tracking-tight group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <span className="font-sans text-lg md:text-xl text-orange-600 font-black tracking-tight">
                      {item.price}
                    </span>
                    
                    {/* Minimal Circular Action Toggle Button */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      expandedId === item.id 
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 border-transparent text-white rotate-45" 
                        : "border-orange-500/20 text-orange-500 group-hover:border-orange-500/40 bg-transparent"
                    }`}>
                      <span className="text-xl font-bold leading-none select-none">+</span>
                    </div>
                  </div>
                </div>

                {/* Smooth Animated Height Expansion Container */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    expandedId === item.id
                      ? "max-h-[500px] opacity-100 mt-6 pt-6 border-t border-stone-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Item Image Display Box */}
                    <div className="md:col-span-1 overflow-hidden rounded-[16px] aspect-[4/3] relative border border-stone-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Description Details Layout */}
                    <div className="md:col-span-2 flex flex-col justify-between h-full py-1">
                      <p className="font-sans text-sm md:text-base text-stone-600 leading-relaxed font-medium">
                        {item.description}
                      </p>
                      
                      <div className="mt-6">
                        <a
                          href="/menus"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block font-sans text-xs uppercase tracking-[0.2em] font-black text-orange-600 hover:text-amber-500 transition-colors duration-300 border-b-2 border-orange-500/20 hover:border-amber-500 pb-1"
                        >
                          View Full Menu →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Global Footer Call To Action Block */}
        <div className="mt-16 md:mt-24 text-center">
          <a
            href="/menus"
            className="group relative px-10 py-4 overflow-hidden rounded-full font-sans text-xs uppercase tracking-[0.25em] font-black inline-block text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-xl shadow-orange-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 active:scale-98"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Explore Full Menu</span>
          </a>
        </div>
        
      </div>

      {/* Atmospheric Spatial Vector Light Orbs */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-gradient-to-br from-orange-200/10 to-amber-100/10 rounded-full blur-[120px] -mr-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-orange-100/10 to-transparent rounded-full blur-[90px] -ml-36 pointer-events-none" />
    </section>
  );
}