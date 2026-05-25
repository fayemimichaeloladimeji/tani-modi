import React, { useState, useMemo } from "react";
import { Coffee, Search, Sparkles, AlertTriangle, Leaf, Award, Wine, Flame, ChevronRight } from "lucide-react";

// Full menu database meticulously parsed from the uploaded PDF
const MENU_DATA = {
  classicsBrunch: {
    title: "Classics Brunch",
    subtitle: "Hearty, comforting plates to kickstart your Edinburgh mornings.",
    items: [
      {
        name: "The Scotsman",
        price: 17.00,
        description: "Bacon, sausage, egg, haggis, black pudding, baked beans, tomato, truffled mushroom, tattie scone & toasted sourdough.",
        tags: ["Classic"],
        allergens: ["Contains Gluten"]
      },
      {
        name: "Light Breakfast",
        price: 14.50,
        description: "Two eggs, bacon, sausage, baked beans, tomato & toasted sourdough.",
        tags: ["Classic"]
      },
      {
        name: "The Green-Scot",
        price: 16.50,
        description: "Tempeh bacon, vegan haggis, vegan sausage, scrambled tofu, beans, tomatoes, mushrooms, a tattie scone, and sourdough.",
        tags: ["Vegan", "Vegetarian"],
        isVegan: true,
        isVegetarian: true
      },
      {
        name: "Egg Benedict",
        price: 14.50,
        description: "Back bacon, poached eggs, erbe miste hollandaise sauce on toasted sourdough.",
        tags: ["Classic"]
      },
      {
        name: "Royal Salmon",
        price: 15.50,
        description: "Smoked salmon, poached eggs, erbe miste hollandaise sauce on toasted sourdough.",
        tags: ["Classic", "Seafood"]
      }
    ]
  },
  breakfastBaps: {
    title: "Breakfast Baps",
    subtitle: "Your custom morning sandwich roll. Choose your favorite fillings.",
    items: [
      {
        name: "Single Item Bap",
        price: 5.75,
        description: "One filling item of your choice in a fresh morning roll.",
        notes: "Options: bacon, sausage, eggs, haggis, black pudding, mushroom, tattie scone, veggie haggis, scrambled tofu, tempeh bacon."
      },
      {
        name: "Double Item Bap",
        price: 7.00,
        description: "Two filling items of your choice in a fresh morning roll.",
        notes: "Options: bacon, sausage, eggs, haggis, black pudding, mushroom, tattie scone, veggie haggis, scrambled tofu, tempeh bacon."
      },
      {
        name: "Triple Item Bap",
        price: 8.00,
        description: "Three filling items of your choice in a fresh morning roll.",
        notes: "Options: bacon, sausage, eggs, haggis, black pudding, mushroom, tattie scone, veggie haggis, scrambled tofu, tempeh bacon."
      }
    ]
  },
  sweetPancakes: {
    title: "Sweet Pancakes",
    subtitle: "Tani Modi's legendary double-stacked pancakes. Vegan & Gluten-free stacks available upon request.",
    items: [
      {
        name: "Bacon Pancake Stack",
        price: 13.95,
        description: "Crispy back bacon, pure maple syrup, scattered with crunchy bacon crumbs.",
        tags: ["GF Option", "Best Seller"],
        isGF: true
      },
      {
        name: "Sesame Crunch Stack",
        price: 14.25,
        description: "Sliced banana, sesame coconut crunch, drizzled with sweet tahini caramel.",
        tags: ["GF Option", "Vegetarian", "Vegan Option"],
        isGF: true,
        isVegetarian: true
      },
      {
        name: "Peach Pavlova Stack",
        price: 14.50,
        description: "Juicy peaches, crushed meringues, raspberries, house red berry sauce, and fresh cream.",
        tags: ["GF Option", "Vegetarian"],
        isGF: true,
        isVegetarian: true
      },
      {
        name: "Pistachio Pancake Stack",
        price: 15.25,
        description: "Rich pistachio cream, fresh hand-picked strawberries, and shaved white chocolate.",
        tags: ["GF Option", "Vegetarian", "Signature"],
        isGF: true,
        isVegetarian: true
      },
      {
        name: "Blueberry Pancake Stack",
        price: 14.75,
        description: "Plump blueberries, sweet meringues, tangy lemon curd, candied lemon peel, and cool yoghurt.",
        tags: ["GF Option", "Vegetarian"],
        isGF: true,
        isVegetarian: true
      },
      {
        name: "Rocky Road Pancake Stack",
        price: 14.45,
        description: "Gourmet brownie chunks, fluffy marshmallows, toasted coconut flakes, and rich chocolate sauce.",
        tags: ["GF Option", "Vegetarian"],
        isGF: true,
        isVegetarian: true
      },
      {
        name: "The Legendary Tani Stack",
        price: 17.75,
        description: "A massive 3-stack pancake masterpiece loaded with chocolate sauce, brownie chunks, signature pistachio cream, fresh berries, banana slices, whipped cream, marshmallows, and crushed meringue.",
        tags: ["GF Option", "Ultimate", "Signature"],
        isGF: true,
        isVegetarian: true
      }
    ]
  },
  taniModiClassics: {
    title: "Tani Modi Classics",
    subtitle: "Custom creative brunch designs built on sourdough slices.",
    items: [
      {
        name: "Avocado Sourdough Toast",
        price: 13.25,
        description: "Smashed pea & avocado, peas, breakfast tomatoes, crumbled feta, and fresh rocket.",
        tags: ["Vegetarian", "Vegan Option"],
        isVegetarian: true,
        additions: "Add poached eggs or organic tofu for +£1.75"
      },
      {
        name: "Veggie Bruschetta",
        price: 13.50,
        description: "Creamy hummus, roasted mediterranean vegetables, fresh rocket, sweet balsamic glaze, and crispy onion.",
        tags: ["Vegan", "Vegetarian"],
        isVegan: true,
        isVegetarian: true,
        additions: "Add poached eggs or organic tofu for +£1.75"
      },
      {
        name: "Kilted Eggs",
        price: 14.75,
        description: "Traditional Scottish haggis, black pudding, perfectly poached eggs, and erbe miste hollandaise on toasted sourdough.",
        tags: ["Scottish Classic"]
      },
      {
        name: "Farmers Poached Eggs",
        price: 14.25,
        description: "Vegetarian haggis, sautéed field mushrooms, poached eggs, and rich erbe miste hollandaise on toasted sourdough.",
        tags: ["Vegetarian"],
        isVegetarian: true
      },
      {
        name: "Tuscan Braised Beans",
        price: 14.00,
        description: "Slow-braised white beans cooked with sweet onions, vine tomatoes, and fresh garden herbs, topped with soft poached eggs.",
        tags: ["Vegetarian"],
        isVegetarian: true,
        additions: "Add premium sausage for +£1.75"
      },
      {
        name: "Eggs Purgatorio",
        price: 14.25,
        description: "Fried eggs nestled in a rustic, aromatic roasted vegetable and tomato sauce matrix.",
        tags: ["Vegetarian"],
        isVegetarian: true,
        additions: "Add premium Feta cheese for +£2.00"
      }
    ]
  },
  lunch: {
    title: "Lunch Selection",
    subtitle: "Served fresh daily from 12:00 PM. Gourmet warm sandwiches and local salads.",
    items: [
      {
        name: "Soup of the Day",
        price: 6.95,
        description: "Chef's daily choice of freshly made seasonal soup, served with toasted artisan sourdough.",
        tags: ["Fresh Daily", "Comfort"]
      },
      {
        name: "Green Hummus Salad Bowl",
        price: 12.75,
        description: "Pea and spinach hummus base, olives, garden peas, green olives, and seasoned crispy chickpeas.",
        tags: ["Vegan", "Vegetarian", "Healthy"],
        isVegan: true,
        isVegetarian: true
      },
      {
        name: "Insalata Contadina",
        price: 11.95,
        description: "Sweet bell peppers, cucumber, vine tomatoes, kalamata olives, crumbled feta, and crisp organic leaves.",
        tags: ["Vegetarian", "Healthy"],
        isVegetarian: true,
        additions: "Add Chargrilled Chicken +£3.75, Salmon +£4.75, or Avocado +£2.75"
      },
      {
        name: "Meatball Panini",
        price: 12.95,
        description: "House-made savory Italian meatballs, rich tomato sugo, and melted mature cheddar cheese.",
        tags: ["Warm Press", "Hearty"]
      },
      {
        name: "Pesto Chicken Wrap",
        price: 12.45,
        description: "Succulent chicken breast, sundried tomato pesto, light mayo, fresh rocket, and pickled cucumber spears.",
        tags: ["Warm Press"]
      },
      {
        name: "The Salmon Club",
        price: 14.75,
        description: "Poached/smoked salmon, house pickled cucumber, fried eggs, organic rocket, sliced tomato, and zesty red pesto.",
        tags: ["Seafood Premium"]
      },
      {
        name: "Grilled Field Mushroom Melt",
        price: 11.45,
        description: "Marinated field mushrooms, rich red pesto, pickled red onion, rocket, and melted mozzarella.",
        tags: ["Vegetarian", "Warm Press"],
        isVegetarian: true
      },
      {
        name: "Balmoral Melt",
        price: 14.95,
        description: "Grilled chicken, crispy bacon, traditional Scottish haggis, pickled onion, mature cheddar, and garlic mayo in a toasted melt.",
        tags: ["Best Seller", "Scottish Premium"]
      }
    ]
  },
  drinksAndSips: {
    title: "Drinks & Specialty Brews",
    subtitle: "Expertly curated hot coffees, cold-pressed elixirs, organic teas, and daytime cocktails.",
    categories: [
      {
        groupName: "Hot Coffee Brews",
        items: [
          { name: "Cafe Latte", price: "£3.75 / £4.00", desc: "Rafiki specialty roast with silky steamed milk." },
          { name: "Cappuccino", price: "£3.75 / £4.00", desc: "Perfect thirds of espresso, milk, and dense foam." },
          { name: "Flat White", price: "£3.75", desc: "Intense double ristretto shot with microfoam milk." },
          { name: "Mocha", price: "£3.95 / £4.45", desc: "Espresso combined with premium hot cocoa." },
          { name: "Americano", price: "£3.35 / £3.55", desc: "Water-drawn smooth double shot espresso." },
          { name: "Macchiato", price: "£2.95 / £3.35", desc: "Espresso marked with a tiny cloud of microfoam." },
          { name: "Espresso", price: "£2.85 / £3.05", desc: "Intense, complex signature Rafiki blend extraction." },
          { name: "Chai Latte", price: "£4.90", desc: "Spiced aromatic black tea blend with milk." },
          { name: "Dirty Chai", price: "£5.35", desc: "Our spiced chai latte spiked with a shot of espresso." },
          { name: "Pistachio Latte", price: "£5.35", desc: "Rafiki espresso with steamed milk and roasted pistachio." }
        ]
      },
      {
        groupName: "Tani Modi Specials & Cold Brews",
        items: [
          { name: "Raspberry Refresher", price: "£4.50", desc: "Iced sweet-tart berry infusion." },
          { name: "Orange Espresso", price: "£4.75", desc: "A double shot of espresso poured over fresh orange juice." },
          { name: "Lemon Elderflower", price: "£4.50", desc: "Botanical fizzy citrus refresher." },
          { name: "Iced Cafe Latte", price: "£4.25" },
          { name: "Iced Americano", price: "£3.90" },
          { name: "Iced Mocha", price: "£4.95" },
          { name: "Iced Pistachio Latte", price: "£5.50" },
          { name: "Iced Tiramisu Latte", price: "£5.50", desc: "Signature cold dessert coffee stack." }
        ]
      },
      {
        groupName: "Daytime Alcohol",
        items: [
          { name: "Raspberry Bellini", price: "£6.75", desc: "Classic prosecco fizz with house sweet raspberry purée." },
          { name: "Mimosa", price: "£6.75", desc: "Sparkling Prosecco with cold-pressed orange juice." },
          { name: "Peroni Beer", price: "£5.50" },
          { name: "Holyrood Pale Ale", price: "£5.50", desc: "Premium locally brewed Edinburgh pale ale." },
          { name: "Scottish Fruits Cider", price: "£5.25" },
          { name: "False Bay Red Wine", price: "£6.00" },
          { name: "False Bay White Wine", price: "£6.00" },
          { name: "Vitelli Prosecco NV 20cl", price: "£9.95" }
        ]
      },
      {
        groupName: "Tea & Alternatives",
        items: [
          { name: "Pot of Tea for One", price: "£3.55", desc: "Artisan loose-leaf. Choose: Breakfast, Earl Grey, Chai, Peppermint, Green, Berry Hibiscus, Chamomile, Jasmine, Lemongrass & Ginger, Decaf, or Rooibos." },
          { name: "Coco House Hot Chocolate", price: "£4.25", desc: "Rich house blend chocolate. Vegan milk available." },
          { name: "Salted Caramel Hot Chocolate", price: "£4.50", desc: "Whipped cream, marshmallows, and caramel sauce." },
          { name: "Italian Hot Chocolate", price: "£5.00", desc: "Super thick traditional cocoa with cream and marshmallows." }
        ]
      }
    ]
  }
};

const CATEGORIES = [
  { id: "all", label: "Full Menu" },
  { id: "brunch", label: "Classics Brunch" },
  { id: "pancakes", label: "Sweet Pancakes" },
  { id: "taniClassics", label: "Sourdough & Classics" },
  { id: "lunch", label: "Lunch (from 12pm)" },
  { id: "drinks", label: "Coffee, Drinks & Alcohol" }
];

export default function MenuList() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("none"); // 'none' | 'gf' | 'vegan' | 'vegetarian'

  // Filter logic across the parsed database
  const matchesFilterAndSearch = (item) => {
    const textToSearch = `${item.name} ${item.description || item.desc || ""}`.toLowerCase();
    const matchesSearch = textToSearch.includes(searchQuery.toLowerCase());
    
    if (dietFilter === "gf" && !item.isGF) return false;
    if (dietFilter === "vegan" && !item.isVegan) return false;
    if (dietFilter === "vegetarian" && !item.isVegetarian) return false;

    return matchesSearch;
  };

  // Memoized filter calculation
  const filteredMenu = useMemo(() => {
    const results = {};
    
    if (activeCategory === "all" || activeCategory === "brunch") {
      results.classicsBrunch = {
        ...MENU_DATA.classicsBrunch,
        items: MENU_DATA.classicsBrunch.items.filter(matchesFilterAndSearch)
      };
      results.breakfastBaps = {
        ...MENU_DATA.breakfastBaps,
        items: MENU_DATA.breakfastBaps.items.filter(matchesFilterAndSearch)
      };
    }
    
    if (activeCategory === "all" || activeCategory === "pancakes") {
      results.sweetPancakes = {
        ...MENU_DATA.sweetPancakes,
        items: MENU_DATA.sweetPancakes.items.filter(matchesFilterAndSearch)
      };
    }
    
    if (activeCategory === "all" || activeCategory === "taniClassics") {
      results.taniModiClassics = {
        ...MENU_DATA.taniModiClassics,
        items: MENU_DATA.taniModiClassics.items.filter(matchesFilterAndSearch)
      };
    }
    
    if (activeCategory === "all" || activeCategory === "lunch") {
      results.lunch = {
        ...MENU_DATA.lunch,
        items: MENU_DATA.lunch.items.filter(matchesFilterAndSearch)
      };
    }

    // Filter drinks
    if (activeCategory === "all" || activeCategory === "drinks") {
      results.drinksAndSips = {
        ...MENU_DATA.drinksAndSips,
        categories: MENU_DATA.drinksAndSips.categories.map(group => ({
          ...group,
          items: group.items.filter(matchesFilterAndSearch)
        })).filter(group => group.items.length > 0)
      };
    }

    return results;
  }, [activeCategory, searchQuery, dietFilter]);

  // Quick check if everything returned empty
  const isMenuEmpty = useMemo(() => {
    let count = 0;
    Object.values(filteredMenu).forEach(section => {
      if (section.items) count += section.items.length;
      if (section.categories) {
        section.categories.forEach(group => {
          count += group.items.length;
        });
      }
    });
    return count === 0;
  }, [filteredMenu]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#171513] antialiased font-sans selection:bg-[#D97706]/20">
      
      {/* 🌟 Background Paper Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Hero Header Section */}
      <header className="relative py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12 z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-stone-200/60 pb-10">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D97706]/10 text-xs font-bold uppercase tracking-widest text-[#D97706]">
                <Award className="w-3.5 h-3.5 animate-pulse" />
                Tripadvisor Traveler's Choice (2023 - 2025)
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#171513]">
              The Brunch Journal
            </h1>
            <p className="mt-4 text-stone-600 text-base md:text-lg font-light max-w-2xl leading-relaxed">
              We source exceptional seasonal ingredients with absolute care. All of our pancake stacks can be prepared <strong className="font-bold text-[#D97706]">Gluten-Free &amp; Coeliac safe</strong> upon request.
            </p>
          </div>

          {/* Sourdough Promos: Coffee & Cake Deal Box */}
          <div className="relative p-8 bg-[#171513] text-[#FAF9F6] rounded-[28px] max-w-xs md:max-w-sm overflow-hidden shadow-lg border border-[#D97706]/20">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#D97706]/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-[#D97706] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              Weekday Deal
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Coffee &amp; Cake Deal — £6.95
            </h3>
            <p className="text-stone-300 text-sm mt-2.5 leading-relaxed">
              Enjoy any hot specialty coffee brew paired with our fresh daily bake. Offered exclusively Monday through Friday.
            </p>
          </div>
        </div>
      </header>

      {/* Main Filter Panel & Controls */}
      <section className="sticky top-0 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/50 z-30 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Scrollable Category List */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth -mx-6 px-6 lg:mx-0 lg:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-[#171513] text-white border-[#171513] shadow-sm"
                    : "bg-white text-stone-600 border-stone-200/70 hover:border-stone-400 hover:text-[#171513]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Buttons and Search Input combo */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-full border border-stone-200/60 self-start sm:self-auto">
              <button
                onClick={() => setDietFilter(dietFilter === "gf" ? "none" : "gf")}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                  dietFilter === "gf"
                    ? "bg-[#D97706] text-white shadow"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                GF/Coeliac
              </button>
              <button
                onClick={() => setDietFilter(dietFilter === "vegan" ? "none" : "vegan")}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                  dietFilter === "vegan"
                    ? "bg-[#D97706] text-white shadow"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Vegan
              </button>
              <button
                onClick={() => setDietFilter(dietFilter === "vegetarian" ? "none" : "vegetarian")}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                  dietFilter === "vegetarian"
                    ? "bg-[#D97706] text-white shadow"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Vegetarian
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-stone-200 rounded-full py-2.5 pl-4 pr-10 text-xs focus:outline-none focus:border-[#D97706] focus:ring-1 focus:ring-[#D97706] transition-colors"
              />
              <span className="absolute right-3.5 top-3 text-stone-400">
                <Search className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Menu Layout Feed */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 z-10 relative">
        
        {/* Empty Search Feedback */}
        {isMenuEmpty ? (
          <div className="text-center py-20 bg-white border border-stone-200/50 rounded-3xl max-w-xl mx-auto">
            <AlertTriangle className="w-8 h-8 text-[#D97706] mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-stone-800">No matching culinary items</h3>
            <p className="text-stone-500 text-sm mt-2 max-w-sm mx-auto">
              We couldn't find any items matching your active combination of dietary criteria and search terms. Try loosening your filters.
            </p>
            <button
              onClick={() => { setDietFilter("none"); setSearchQuery(""); }}
              className="mt-6 px-6 py-2.5 bg-[#171513] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D97706] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-24">
            
            {/* 1. CLASSICS BRUNCH FEED */}
            {filteredMenu.classicsBrunch && filteredMenu.classicsBrunch.items.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-10">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.classicsBrunch.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.classicsBrunch.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {filteredMenu.classicsBrunch.items.map((item, idx) => (
                    <div key={idx} className="group flex flex-col justify-between p-8 bg-white border border-stone-200/55 hover:border-[#D97706]/40 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-sans text-xl font-extrabold uppercase tracking-wide text-[#171513] group-hover:text-[#D97706] transition-colors leading-tight">
                            {item.name}
                          </h4>
                          {/* Beautiful, larger, bolder brand price */}
                          <span className="font-serif text-[30px] font-black text-[#D97706] whitespace-nowrap bg-[#D97706]/5 border border-[#D97706]/10 px-4 py-1.5 rounded-xl tracking-tight animate-pulse">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-stone-600 text-base font-normal mt-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-stone-100">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="text-xs uppercase font-extrabold tracking-wider bg-stone-100 text-stone-600 px-3 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. BREAKFAST BAPS */}
            {filteredMenu.breakfastBaps && filteredMenu.breakfastBaps.items.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-10">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.breakfastBaps.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.breakfastBaps.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {filteredMenu.breakfastBaps.items.map((item, idx) => (
                    <div key={idx} className="p-8 bg-white border border-stone-200/55 rounded-[28px] flex flex-col justify-between shadow-sm hover:border-[#D97706]/20 transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-center mb-5">
                          <span className="text-xs uppercase font-extrabold tracking-widest text-[#D97706] bg-[#D97706]/5 px-3 py-1 rounded">Custom Bap</span>
                          <span className="font-serif text-lg font-black text-[#171513] animate-pulse">£{item.price.toFixed(2)}</span>
                        </div>
                        <h4 className="font-sans text-xl font-extrabold uppercase tracking-wide text-[#171513] mb-3 leading-tight">{item.name}</h4>
                        <p className="text-stone-600 text-base font-normal leading-relaxed">{item.description}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-stone-100">
                        <p className="text-xs text-stone-400 italic font-medium leading-relaxed">{item.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. SWEET PANCAKES FEED */}
            {filteredMenu.sweetPancakes && filteredMenu.sweetPancakes.items.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-10">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.sweetPancakes.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.sweetPancakes.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredMenu.sweetPancakes.items.map((item, idx) => (
                    <div key={idx} className="group flex flex-col justify-between p-8 bg-white border border-stone-200/55 hover:border-[#D97706]/40 rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-start gap-3 mb-5">
                          <h4 className="font-sans text-lg font-extrabold uppercase tracking-wide text-[#171513] group-hover:text-[#D97706] transition-colors leading-snug">
                            {item.name}
                          </h4>
                          {/* Redesigned Bold Price */}
                          <span className="font-serif text-lg font-black text-[#D97706] bg-[#D97706]/5 border border-[#D97706]/10 px-3 py-1.5 rounded-lg whitespace-nowrap tracking-tight animate-pulse">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-stone-600 text-base font-normal leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-stone-100">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.tags?.map((tag, i) => (
                            <span key={i} className="text-[10px] uppercase font-extrabold tracking-wider bg-stone-100 text-stone-500 px-2.5 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full flex items-center gap-1">
                          <Leaf className="w-3.5 h-3.5" /> Coeliac Friendly GF
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. TANI MODI SOURDOUGH CLASSICS */}
            {filteredMenu.taniModiClassics && filteredMenu.taniModiClassics.items.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-10">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.taniModiClassics.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.taniModiClassics.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {filteredMenu.taniModiClassics.items.map((item, idx) => (
                    <div key={idx} className="group flex flex-col justify-between p-8 bg-white border border-stone-200/55 hover:border-[#D97706]/40 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="font-sans text-xl font-extrabold uppercase tracking-wide text-[#171513] group-hover:text-[#D97706] transition-colors leading-tight">
                            {item.name}
                          </h4>
                          {/* Large Beautiful Bold Price */}
                          <span className="font-serif text-xl font-black text-[#D97706] whitespace-nowrap bg-[#D97706]/5 border border-[#D97706]/10 px-4 py-1.5 rounded-xl tracking-tight animate-pulse">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-stone-600 text-base font-normal mt-4 leading-relaxed">
                          {item.description}
                        </p>
                        {item.additions && (
                          <p className="text-xs font-semibold text-[#D97706] mt-3 italic leading-relaxed">
                            💡 {item.additions}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-stone-100">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="text-xs uppercase font-bold tracking-wider bg-stone-100 text-stone-600 px-3 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. LUNCH FEED */}
            {filteredMenu.lunch && filteredMenu.lunch.items.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-10">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.lunch.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.lunch.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredMenu.lunch.items.map((item, idx) => (
                    <div key={idx} className="group flex flex-col justify-between p-8 bg-white border border-stone-200/55 hover:border-[#D97706]/40 rounded-[28px] shadow-sm hover:shadow-md transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <h4 className="font-sans text-lg font-extrabold uppercase tracking-wide text-[#171513] group-hover:text-[#D97706] transition-colors leading-snug">
                            {item.name}
                          </h4>
                          {/* Premium Bold Price Tag */}
                          <span className="font-serif text-lg font-black text-[#D97706] bg-[#D97706]/5 border border-[#D97706]/10 px-3 py-1.5 rounded-lg whitespace-nowrap tracking-tight animate-pulse">
                            £{item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-stone-600 text-base font-normal leading-relaxed">
                          {item.description}
                        </p>
                        {item.additions && (
                          <p className="text-xs font-semibold text-[#D97706] mt-3 italic leading-relaxed">
                            {item.additions}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-6 pt-4 border-t border-stone-100">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="text-xs uppercase font-bold tracking-wider bg-stone-100 text-stone-500 px-3 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. COFFEE, SPECIALTY DRINKS & ALCOHOL */}
            {filteredMenu.drinksAndSips && filteredMenu.drinksAndSips.categories.length > 0 && (
              <div>
                <div className="border-b border-stone-200/60 pb-5 mb-12">
                  <h2 className="font-serif text-4xl font-black text-[#171513] tracking-tight">
                    {filteredMenu.drinksAndSips.title}
                  </h2>
                  <p className="text-stone-500 text-sm mt-2 font-light">{filteredMenu.drinksAndSips.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {filteredMenu.drinksAndSips.categories.map((catGroup, idx) => (
                    <div key={idx} className="bg-white border border-stone-200/40 rounded-[32px] p-8 sm:p-10 shadow-sm hover:border-[#D97706]/20 transition-all duration-300">
                      <h3 className="font-serif text-2xl font-black text-[#D97706] border-b border-stone-100 pb-4 mb-8 flex items-center gap-2.5">
                        {catGroup.groupName === "Daytime Alcohol" ? <Wine className="w-6 h-6 text-[#D97706]" /> : <Coffee className="w-6 h-6 text-[#D97706]" />}
                        {catGroup.groupName}
                      </h3>

                      <ul className="space-y-8">
                        {catGroup.items.map((drinkItem, i) => (
                          <li key={i} className="flex justify-between items-start gap-4 group">
                            <div className="space-y-1">
                              <h5 className="font-sans text-base font-extrabold uppercase tracking-wide text-stone-800 group-hover:text-[#D97706] transition-colors leading-tight">
                                {drinkItem.name}
                              </h5>
                              {drinkItem.desc && (
                                <p className="text-sm text-stone-500 font-light leading-relaxed">{drinkItem.desc}</p>
                              )}
                            </div>
                            <span className="font-serif text-base font-black text-[#D97706] bg-[#D97706]/5 border border-[#D97706]/10 px-3 py-1 rounded-lg whitespace-nowrap tracking-tight animate-pulse">
                              {drinkItem.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Syrup / Milk customization Callout */}
                <div className="mt-12 bg-[#171513]/5 border border-stone-200/50 p-8 rounded-[32px] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <p className="text-sm text-stone-600 font-medium leading-relaxed">
                    ☕ <span className="text-stone-900 font-bold">SYRUP &amp; NON-DAIRY OPTION (+£0.75):</span> Oat and coconut milk alternatives; Vanilla, caramel and hazelnut syrups available.
                  </p>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#D97706]/5 border border-[#D97706]/10 px-4 py-1.5 rounded-xl self-start sm:self-auto">
                    Rafiki Coffee beans
                  </span>
                </div>
              </div>
            )}

          </div>
        )}
      </main>

      {/* Booking Conversion CTA */}
      <section className="bg-[#171513] text-[#FAF7F2] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80')" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-[#D97706]/[0.05] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs tracking-[0.3em] font-extrabold uppercase text-[#D97706] block mb-4">
            Hanover Street Reservations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight text-white">
            Ready to taste our stacks?
          </h2>
          <p className="text-stone-300 text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Our cozy Edinburgh basement dining room gets highly popular during weekends. Reserve your breakfast or brunch table in advance to avoid disappointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/bookings" 
              className="px-10 py-5 bg-[#D97706] hover:bg-white hover:text-[#171513] rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#D97706]/20"
            >
              Reserve Brunch Table
            </a>
            <a 
              href="mailto:hello@tanimodi.co.uk" 
              className="text-xs uppercase font-bold tracking-widest text-white hover:text-[#D97706] transition-colors"
            >
              Email For Events
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}