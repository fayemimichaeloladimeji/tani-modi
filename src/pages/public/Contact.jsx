import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowUpRight, Copy, Check, Users, Sparkles } from "lucide-react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry", // Default to help pre-classify messages
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubjectSelect = (subj) => {
    setFormData((current) => ({ ...current, subject: subj }));
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("103 Hanover Street, Edinburgh, EH2 1DJ");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF9F6] text-[#171513] selection:bg-[#D97706]/20 font-sans">
      
      {/* 🌟 Luxury organic textured paper background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80')"
        }}
      />

      {/* Decorative Brand Top Lighting */}
      <div className="absolute inset-x-0 top-0 h-[450px] bg-gradient-to-b from-[#D97706]/10 via-[#D97706]/0 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-12 hidden lg:block w-[500px] h-[500px] rounded-full bg-[#D97706]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute left-[-100px] top-[30%] hidden lg:block w-[400px] h-[400px] rounded-full bg-[#D97706]/[0.02] blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 z-10">
        
        {}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D97706]/10 text-xs font-semibold uppercase tracking-widest text-[#D97706] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#171513] leading-[1.1]">
            Get in touch with the <span className="underline decoration-[#D97706]/30 decoration-wavy">Tani Modi</span> &amp; Farin Road team.
          </h1>
          <p className="mt-6 text-stone-600 text-xl md:text-xl leading-relaxed max-w-2xl font-light">
            Whether you are booking a special daytime family table, planning a weekend night reservation for Chef Tunde’s Pan-African culinary experience, or discussing custom hire events, we’re here to craft your moment.
          </p>
        </div>

        {/* Dynamic Split Column Grid Layout */}
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          
          {/* ================= LEFT SIDE: PREMIUM CONTACT FORM ================= */}
          {}
          <div className="lg:col-span-7 rounded-[32px] border border-stone-200/60 bg-white shadow-[0_32px_64px_rgba(23,21,19,0.03)] p-8 md:p-12">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#D97706] font-bold">
                  Speak With Us
                </h2>
                <p className="mt-1 font-serif text-2xl font-extrabold text-[#171513]">
                  Send an online letter
                </p>
              </div>
              <div className="self-start sm:self-center rounded-2xl bg-[#D97706]/10 text-[#D97706] p-3.5">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>

            {success && (
              <div className="mb-8 rounded-2xl border border-emerald-200/60 bg-emerald-50/50 p-5 text-xl text-emerald-800 flex items-center gap-3 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="font-medium">Thank you! Your message has been received. Our team will get back to you shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Input Group: Name and Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col">
                  <span className="mb-2 uppercase tracking-[0.15em] font-semibold text-stone-500 text-[10px]">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Elena Rossi"
                    className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-xl text-[#171513] outline-none transition duration-300 focus:border-[#D97706] focus:bg-white focus:ring-4 focus:ring-[#D97706]/5 placeholder-stone-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <span className="mb-2 uppercase tracking-[0.15em] font-semibold text-stone-500 text-[10px]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-xl text-[#171513] outline-none transition duration-300 focus:border-[#D97706] focus:bg-white focus:ring-4 focus:ring-[#D97706]/5 placeholder-stone-400"
                    required
                  />
                </div>
              </div>

              {/* Advanced Feature: Custom Interactive Subject Selector Badges */}
              <div className="flex flex-col">
                <span className="mb-3 uppercase tracking-[0.15em] font-semibold text-stone-500 text-[10px]">
                  What are you planning?
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "General Inquiry",
                    "Brunch Table",
                    "Farin Road Dinners",
                    "Private Takeover"
                  ].map((subj) => (
                    <button
                      type="button"
                      key={subj}
                      onClick={() => handleSubjectSelect(subj)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 border ${
                        formData.subject === subj
                          ? "bg-[#171513] text-white border-[#171513] shadow-sm"
                          : "bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400 hover:text-[#171513]"
                      }`}
                    >
                      {subj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input: Custom Message Field */}
              <div className="flex flex-col">
                <span className="mb-2 uppercase tracking-[0.15em] font-semibold text-stone-500 text-[10px]">
                  Your Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details of your plans, preferred dates, guests limit, or dietary requirements."
                  rows="5"
                  className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3.5 text-xl text-[#171513] outline-none transition duration-300 focus:border-[#D97706] focus:bg-white focus:ring-4 focus:ring-[#D97706]/5 resize-none placeholder-stone-400"
                  required
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#D97706] to-[#B45309] px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold text-white shadow-md shadow-[#D97706]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#D97706]/20 active:scale-98"
              >
                Send Message
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* ================= RIGHT SIDE: INFO CARDS & CONTACT METRICS ================= */}
          {}
          <aside className="lg:col-span-5 space-y-8">
            
            {/* Direct Connect Details Card */}
            <div className="rounded-[32px] border border-stone-200/60 bg-[#171513] text-[#FAF7F2] p-8 shadow-md">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97706] font-bold">
                Quick Reach
              </span>
              <h3 className="mt-3 font-serif text-3xl font-extrabold tracking-tight text-[#FAF7F2]">
                Our lines are open.
              </h3>
              <p className="mt-3 text-stone-300 text-xl leading-relaxed font-light">
                For prompt requests or urgent updates regarding your table reservation today, call our team directly.
              </p>

              <div className="mt-8 space-y-4">
                
                {/* Contact Row: Phone */}
                <div className="flex items-center gap-4 bg-[#23201D] border border-stone-800/80 p-4 rounded-2xl transition duration-300 hover:border-[#D97706]/40">
                  <div className="rounded-xl bg-[#D97706]/10 text-[#D97706] p-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-stone-400 font-bold">
                      Phone Number
                    </span>
                    <a href="tel:+441312251100" className="block text-xl text-white font-medium hover:text-[#D97706] transition mt-0.5">
                      +44 131 225 1100
                    </a>
                  </div>
                </div>

                {/* Contact Row: Email */}
                <div className="flex items-center gap-4 bg-[#23201D] border border-stone-800/80 p-4 rounded-2xl transition duration-300 hover:border-[#D97706]/40">
                  <div className="rounded-xl bg-[#D97706]/10 text-[#D97706] p-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-stone-400 font-bold">
                      Email Address
                    </span>
                    <a href="mailto:hello@tanimodi.co.uk" className="block text-xl text-white font-medium hover:text-[#D97706] transition mt-0.5">
                      hello@tanimodi.co.uk
                    </a>
                  </div>
                </div>

                {/* Contact Row: Location Map Pin */}
                <div className="flex items-start gap-4 bg-[#23201D] border border-stone-800/80 p-4 rounded-2xl transition duration-300 hover:border-[#D97706]/40">
                  <div className="rounded-xl bg-[#D97706]/10 text-[#D97706] p-3 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[9px] uppercase tracking-widest text-stone-400 font-bold">
                      Address Location
                    </span>
                    <p className="text-xl text-white font-medium mt-0.5 leading-relaxed">
                      103 Hanover Street, Edinburgh, EH2 1DJ
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#D97706] hover:text-white transition"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy Coordinates
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Structured Dual-Service Opening Hours Card */}
            {}
            <div className="rounded-[32px] border border-stone-200/60 bg-white p-8 shadow-[0_32px_64px_rgba(23,21,19,0.01)]">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97706] font-bold">
                Hours &amp; Residencies
              </span>
              <h3 className="mt-3 font-serif text-2xl font-extrabold text-[#171513] leading-none mb-6">
                Operational Timelines
              </h3>
              
              <div className="space-y-4">
                
                {/* Service Block 1: Daytime Brunch */}
                <div className="p-4 rounded-2xl border border-stone-100 bg-stone-50/50 flex items-start gap-4">
                  <div className="rounded-xl bg-[#D97706]/10 text-[#D97706] p-2.5 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                      ☀️ Daytime Cafe &amp; Brunch
                    </h4>
                    <ul className="mt-2 text-xs font-medium text-stone-700 space-y-1">
                      <li><span className="text-[#171513] font-bold">Mon – Fri:</span> 09:00am – 3:00pm</li>
                      <li><span className="text-[#171513] font-bold">Sat – Sun:</span> 09:30am – 3:30pm</li>
                    </ul>
                  </div>
                </div>

                {/* Service Block 2: Evening Dinner Residency */}
                {/* <div className="p-4 rounded-2xl border border-stone-100 bg-stone-50/50 flex items-start gap-4">
                  <div className="rounded-xl bg-[#D97706]/10 text-[#D97706] p-2.5 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold">
                      🌙 Farin Road Fine Dining
                    </h4>
                    <ul className="mt-2 text-xs font-medium text-stone-700 space-y-1">
                      <li><span className="text-[#171513] font-bold">Fri &amp; Sat Dinner:</span> 18:00 – Late</li>
                      <li className="text-[#D97706] text-[10px] font-bold tracking-wide uppercase mt-1">✓ Essential Advance Booking Only</li>
                    </ul>
                  </div>
                </div> */}

              </div>
            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}