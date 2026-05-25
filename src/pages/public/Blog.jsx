import React, { useState, useMemo } from 'react';
import BLOG_POSTS from '../../data/blogPosts';

// blog posts moved to src/data/blogPosts.js
const CATEGORIES = ['All Stories', 'Inside the Kitchen', 'Farin Road', 'Recipes & Tips', 'News & Community'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts based on Category selection and Live Search input
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All Stories' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Identify the standalone hero featured post
  const featuredPost = useMemo(() => BLOG_POSTS.find(p => p.featured), []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900 antialiased selection:bg-amber-200">
      
      {/* 1. Header Section */}
      <header className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8 text-center md:text-left">
        <span className="text-xs  mt-16 font-semibold tracking-widest uppercase text-amber-700 block mb-3">
          The Tani Modi Journal
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-neutral-900 mb-4">
          Stories From Our Kitchen
        </h1>
        <p className="max-w-2xl text-neutral-600 text-lg leading-relaxed">
          From legendary fluffy morning pancake stacks on Hanover Street to innovative modern Pan-African evening dining curated by Chef Tunde Abifarin.
        </p>
      </header>

      {/* 2. Controls Tier: Live Filter & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-neutral-200 pb-6">
          {/* Scrollable Category Row */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth -mx-4 px-4 md:mx-0 md:px-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900'
                }`}>
                {category}
              </button>
            ))}
          </div>

          {/* Quick Search Field */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search journals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
            />
            <span className="absolute right-3.5 top-2.5 text-neutral-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* 3. Featured Post Spotlight Banner (Only shows when searching all/none filtered out) */}
        {featuredPost && selectedCategory === 'All Stories' && !searchQuery && (
          <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-neutral-200/60 rounded-3xl p-6 md:p-8 mb-16 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-neutral-100 aspect-[16/10] lg:aspect-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase bg-amber-50 text-amber-800 px-2.5 py-1 rounded">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-neutral-400">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-neutral-900 mb-4 group-hover:text-amber-800 transition-colors duration-300">
                  <a href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</a>
                </h2>
                <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold font-serif">
                    {featuredPost.author.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-800">{featuredPost.author.name}</p>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider">{featuredPost.author.role}</p>
                  </div>
                </div>
                <a href={`/blog/${featuredPost.slug}`} className="inline-flex items-center text-xs font-semibold tracking-wider uppercase text-neutral-900 group-hover:text-amber-800 gap-1 transition-colors">
                  Read Article <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* 4. Dual Feed Layout: Content Feed + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Grid Content */}
          <div className="lg:col-span-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-neutral-100 rounded-2xl">
                <p className="text-neutral-400 mb-2">No matching stories found.</p>
                <button onClick={() => { setSelectedCategory('All Stories'); setSearchQuery(''); }} className="text-sm font-semibold text-amber-800 underline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts
                  .filter(post => !(post.featured && selectedCategory === 'All Stories' && !searchQuery)) // prevent duplicates on default view
                  .map((post) => (
                    <article key={post.id} className="group flex flex-col justify-between bg-white border border-neutral-200/50 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
                      <div>
                        <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[16/10] mb-4">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[11px] font-semibold tracking-wider text-amber-700 uppercase">{post.category}</span>
                          <span className="text-neutral-300 text-xs">•</span>
                          <span className="text-neutral-400 text-xs">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-serif tracking-tight text-neutral-900 mb-2 group-hover:text-amber-800 transition-colors">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h3>
                        <p className="text-base text-neutral-600 line-clamp-3 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-neutral-50 mt-4">
                        <span className="text-xs text-neutral-400">{post.readTime}</span>
                        <a href={`/blog/${post.slug}`} className="text-xs font-semibold uppercase text-neutral-800 group-hover:text-amber-700 transition-colors">
                          Read More
                        </a>
                      </div>
                    </article>
                  ))}
              </div>
            )}
          </div>

          {/* Sticky Sidebar Right Side */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="lg:sticky lg:top-24 space-y-8">
              
              {/* Box 1: Dynamic Conversion Promo */}
              <div className="bg-neutral-900 text-white rounded-2xl p-6 relative overflow-hidden shadow-sm">
                <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-amber-500/10 rounded-full blur-xl" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  Reservations
                </span>
                <h3 className="text-xl font-serif tracking-tight mt-3 mb-2 text-white">
                  Experience Tani Modi Live
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  Love reading our culinary journeys? Drop down into our Hanover Street basement space to taste our famous brunch or weekend evening fusion menus.
                </p>
                <a 
                  href="/bookings" 
                  className="block w-full text-center bg-white text-neutral-900 rounded-full py-2.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:bg-amber-400"
                >
                  Book A Table
                </a>
              </div>

              {/* Box 2: Quick Trending Topics */}
              <div className="bg-white border border-neutral-200/60 rounded-2xl p-6">
                <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-800 mb-4 pb-2 border-b border-neutral-100">
                  Popular Journals
                </h4>
                <ul className="space-y-4">
                  <li className="group flex gap-3">
                    <span className="text-xl font-serif text-neutral-300 font-bold group-hover:text-amber-700 transition-colors">01</span>
                    <div>
                      <a href="/blog/perfecting-the-gluten-free-pancake" className="text-xs font-medium text-neutral-800 hover:text-amber-800 transition-colors line-clamp-2">
                        How We Perfected Edinburgh’s Favorite Gluten-Free Pancakes
                      </a>
                    </div>
                  </li>
                  <li className="group flex gap-3">
                    <span className="text-xl font-serif text-neutral-300 font-bold group-hover:text-amber-700 transition-colors">02</span>
                    <div>
                      <a href="/blog/introducing-farin-road-pan-african-dining" className="text-xs font-medium text-neutral-800 hover:text-amber-800 transition-colors line-clamp-2">
                        Introducing Farin Road: Bringing Modern Pan-African Flavors to the Capital
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </main>

      {/* 5. Newsletter Signup Bar */}
      <section className="bg-neutral-950 text-white py-16 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-2">
            Join Our Table
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Get exclusive seasonal recipes from Chef Tunde, invitations to supper clubs, and early priority access to weekend dinner table bookings.
          </p>

          {subscribed ? (
            <div className="max-w-md mx-auto bg-neutral-900 border border-amber-500/20 rounded-xl p-4 text-sm text-amber-400 font-medium">
              ✨ Thank you! You’ve been added to our secret dining circle list.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex items-center border-b border-white/20 focus-within:border-amber-400 transition-colors pb-1">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm py-2 px-1 text-white placeholder-neutral-500 focus:outline-none"
              />
              <button 
                type="submit" 
                className="text-xs uppercase font-semibold tracking-widest text-amber-400 pl-4 pr-1 py-2 hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
