"use client";

import React, { useEffect, useState, useRef, FormEvent } from "react";
import { 
  Phone, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Activity, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Landmark, 
  Home, 
  Smile, 
  Building2 
} from "lucide-react";

// Main Page Component
export default function AutoFuseAIPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 overflow-hidden font-sans selection:bg-purple-500/30">
      {/* Cursor Glow Overlay */}
      <CursorGlow />

      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-blue-600/5 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">
          <HeroSection />
          <MissedMoneySection />
          <ServicesSplitSection />
          <LiveDemoSection />
          <TestimonialsSection />
          <ProcessSection />
          <FinalCTASection />
        </main>
        <SiteFooter />
      </div>

      {/* Global Styles for Special FX */}
      <StyleFX />
    </div>
  );
}

// Sticky Glassmorphism NavBar
const NavBar: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          {/* Logo: Phone + Wave */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-105">
            <Phone className="h-5 w-5 text-white fill-white/20" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide text-white">
              AutoFuse AI
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-medium text-slate-400 md:flex">
          <a href="#calculator" className="nav-link hover:text-white transition-colors">Missed Revenue</a>
          <a href="#services" className="nav-link hover:text-white transition-colors">Capabilities</a>
          <a href="#demo" className="nav-link hover:text-white transition-colors">Live Demo</a>
          <a href="#testimonials" className="nav-link hover:text-white transition-colors">Results</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={calUrl}
            className="neon-button hidden rounded-full px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-purple-500/20 sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
};

// Hero Section (Centered & Improved)
const HeroSection: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pb-20 pt-24 text-center sm:px-6 lg:px-8 overflow-hidden"
    >
      <Reveal>
        <div className="mx-auto max-w-4xl space-y-10 relative z-10">
          
          {/* Centered Badge - Cleaned Up */}
          <div className="flex justify-center w-full">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-slate-300 backdrop-blur-md shadow-lg shadow-purple-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">Trusted by 20+ businesses worldwide</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Never miss a lead <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                with Voice AI
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed font-light">
              Your 24/7 AI receptionist answers every call, qualifies prospects, and books revenue instantly. No sick days. No missed opportunities.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center pt-2">
            <a
              href={calUrl}
              className="neon-button inline-flex h-14 min-w-[200px] items-center justify-center rounded-full px-8 text-sm font-bold text-slate-950 transition-transform hover:scale-105"
              target="_blank"
              rel="noreferrer"
            >
              Book Strategy Call
            </a>
            
            <a 
              href="#demo"
              className="group inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-bold text-white transition-colors hover:text-purple-400"
            >
              Try Live Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Improved Hero Visual Abstract - Siri Orb Style */}
          <div className="relative mt-20 flex justify-center perspective-1000">
             <div className="relative h-64 w-64 sm:h-80 sm:w-80 flex items-center justify-center">
                {/* Core Orb */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-600 to-cyan-500 blur-[40px] opacity-40 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(124,58,237,0.3)]">
                    <WaveformCircle />
                </div>
             </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

// Section 2: Missed Money Calculator
const MissedMoneySection: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState<string>("5");
  const [clientValue, setClientValue] = useState<string>("800");
  const [closeRate, setCloseRate] = useState<string>("30");

  const parsedMissed = Number.parseFloat(missedCalls) || 0;
  const parsedValue = Number.parseFloat(clientValue) || 0;
  const parsedClose = Number.parseFloat(closeRate) || 0;

  const lostPerMonth = parsedMissed * parsedValue * (parsedClose / 100) * 30;

  return (
    <section
      id="calculator"
      className="relative border-y border-white/5 bg-[#080808] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_70%)]" />
      
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* Copy */}
        <Reveal>
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-purple-400" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300">
                The Cost of Silence
              </p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your missed calls are expensive.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Every time the phone rings and goes to voicemail, you lose money. Use this calculator to see exactly how much revenue leaks out of your business every month.
            </p>
          </div>
        </Reveal>

        {/* Calculator Card */}
        <Reveal delay={120}>
          <div className="glass-card w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Missed Calls / Day
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide">
                    Avg. Client Value ($)
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={clientValue}
                    onChange={(e) => setClientValue(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-medium text-slate-400 uppercase tracking-wide">
                  Closing Rate (%)
                </label>
                <div className="relative">
                    <input
                    type="number"
                    min={0}
                    max={100}
                    value={closeRate}
                    onChange={(e) => setCloseRate(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-500/20 focus:border-purple-500 focus:ring-2 transition-all"
                    />
                    <div className="absolute right-4 top-3 text-slate-500 text-sm pointer-events-none">%</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 shadow-[0_0_30px_rgba(225,29,72,0.1)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-1">
                      Revenue Lost / Month
                    </p>
                    <p className="text-3xl font-bold text-white tracking-tight">
                      {lostPerMonth <= 0
                        ? "$0"
                        : lostPerMonth.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            maximumFractionDigits: 0,
                          })}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// Section 3: Services Split (Inbound vs Outbound)
const ServicesSplitSection: React.FC = () => {
    return (
      <section id="services" className="relative py-24 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16 space-y-4">
               <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Total Voice Coverage.</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">
                   Most agencies only do one. We build complete voice autonomy for your business.
               </p>
            </div>
          </Reveal>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Inbound Card */}
            <Reveal delay={100}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 hover:border-blue-500/30 transition-all duration-500">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <PhoneIncoming className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Inbound Receptionist</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Never put a customer on hold again. The AI answers immediately, answers FAQs, checks your calendar availability, and books appointments directly into your schedule.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle className="h-4 w-4 text-blue-500" /> 24/7 Availability
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle className="h-4 w-4 text-blue-500" /> Instant Scheduling
                        </li>
                    </ul>
                </div>
            </Reveal>

            {/* Outbound Card */}
            <Reveal delay={200}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 hover:border-purple-500/30 transition-all duration-500">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                        <PhoneOutgoing className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Outbound Sales</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Turn old leads into new cash. The AI calls your database, qualifies interest, reactivates dormant customers, and transfers hot leads to your team.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle className="h-4 w-4 text-purple-500" /> Lead Reactivation
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle className="h-4 w-4 text-purple-500" /> Speed-to-Lead (Under 1 min)
                        </li>
                    </ul>
                </div>
            </Reveal>
          </div>
        </div>
      </section>
    );
  };

// Section 4: Live Demo Webhook Form (With Disabled Logic)
const LiveDemoSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  // Check if form is valid
  const isFormValid = fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    setStatus(null);

    try {
      const webhookUrl = "https://hook.eu2.make.com/v44z8mircvlc9lyt4casscehkh2nb531";

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          website,
          source: "autofuse-ai-site-demo",
          timestamp: new Date().toISOString(),
        }),
      });

      setIsLoading(false);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setStatus("error");
    }
  };

  return (
    <section
      id="demo"
      className="relative border-y border-white/5 bg-[#0a0a0a] py-24 overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-gradient-to-b from-purple-900/10 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        {/* Copy */}
        <Reveal>
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-2">
               <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
               </span>
               <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Live Test
              </p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience the speed.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Don't just take our word for it. Enter your number below. Our AI will call you immediately. It sounds human, acts fast, and doesn't take breaks.
            </p>
            <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <span className="text-xs font-bold text-white">01</span>
                    </div>
                    <span className="text-sm text-slate-300">Fill the form</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <span className="text-xs font-bold text-white">02</span>
                    </div>
                    <span className="text-sm text-slate-300">Receive a call instantly</span>
                </div>
            </div>
          </div>
        </Reveal>

        {/* Demo Form */}
        <Reveal delay={140}>
          <div className="glass-card relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(124,58,237,0.15)] backdrop-blur-3xl">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300 uppercase">Full name *</label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="Jordan Good"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300 uppercase">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300 uppercase">Phone number *</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-medium text-slate-300 uppercase">Company website</label>
                  <input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-slate-100 outline-none ring-blue-500/20 focus:border-blue-400 focus:ring-2 transition-all"
                    placeholder="autofuse.ai"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={`mt-4 w-full rounded-xl px-6 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300
                    ${!isFormValid || isLoading 
                        ? "bg-slate-800 text-slate-500 cursor-not-allowed shadow-none" 
                        : "bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/30 hover:brightness-110"}`}
              >
                {isLoading ? "Connecting to AI..." : "Call Me Now"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 p-3 text-xs text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="h-4 w-4" />
                  <span>AI Agent dispatched. Check your phone.</span>
                </div>
              )}
              {status === "error" && (
                <p className="text-center text-xs text-rose-400">
                  Connection failed. Please try again.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// Section 5: Testimonials (Logos & Real Names)
const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      client: "Cornerstone Property",
      role: "Pennsylvania",
      quote: "Extremely thorough. The project was done on time.",
      detail: "Inbound Wizard & Lead Management",
      icon: <Landmark className="h-6 w-6 text-slate-300" />
    },
    {
      client: "Cooper Roofing",
      role: "Vancouver, BC",
      quote: "Our calls feel fast and pro now. It answers quote requests instantly.",
      detail: "Inbound & Outbound Reactivation",
      icon: <Home className="h-6 w-6 text-slate-300" />
    },
    {
      client: "NC Home Buyers",
      role: "North Carolina",
      quote: "The system keeps our pipeline warm and filters leads for us.",
      detail: "Lead Qualification Agent",
      icon: <Building2 className="h-6 w-6 text-slate-300" />
    },
    {
      client: "Grey Street Dentist",
      role: "Australia",
      quote: "Patients book in with no hold time. It works while we treat patients.",
      detail: "Virtual Dental Receptionist",
      icon: <Smile className="h-6 w-6 text-slate-300" />
    },
  ];

  return (
    <section id="testimonials" className="relative bg-[#050505] py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Proven Results.
            </h2>
            <p className="mt-4 text-slate-400">
                We build for high-volume businesses. Real results from real clients.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.client} delay={index * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-purple-500/30 hover:bg-white/[0.04]">
                <div className="mb-6 flex items-center justify-between">
                    {/* Placeholder Logo - Replace with <img src="..." /> if you have the file */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/5 group-hover:border-purple-500/20 transition-colors">
                        {item.icon}
                    </div>
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-purple-500 text-purple-500" />
                        ))}
                    </div>
                </div>
                
                <h3 className="text-sm font-bold text-white mb-1">{item.client}</h3>
                <p className="text-xs text-slate-500 mb-4">{item.role}</p>
                <p className="text-sm italic text-slate-300 mb-6 flex-1">"{item.quote}"</p>
                
                <div className="mt-auto border-t border-white/5 pt-4">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 6: Process (Clean & Numbered)
const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We analyze your current call flow. We identify where you are leaking revenue and map out the solution.",
    },
    {
      num: "02",
      title: "Development",
      desc: "We build your custom voice agent using Retell AI. We script the logic, clone the voice, and integrate it with your CRM.",
    },
    {
      num: "03",
      title: "Deployment",
      desc: "We go live. Your AI starts answering calls, booking deals, and qualifying leads 24/7.",
    },
  ];

  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section id="process" className="relative bg-[#050505] py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Simple Integration.
                    </h2>
                    <p className="text-slate-400">
                        We handle the technical heavy lifting. You just enjoy the extra capacity.
                    </p>
                </div>
                <a
                    href={calUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Start the process <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 100}>
                <div className="relative group h-full">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-lg" />
                    <div className="relative flex flex-col h-full rounded-2xl border border-white/10 bg-black p-8 hover:border-white/20 transition-colors">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-black mb-6">
                            {step.num}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: Final CTA
const FinalCTASection: React.FC = () => {
  const calUrl = "https://cal.com/taha-issaoui-g9ve4z/discovery";

  return (
    <section className="relative overflow-hidden bg-black py-32 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to automate?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Join the businesses using AutoFuse AI to capture every lead, 24/7.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <a
                href={calUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-button inline-flex h-14 min-w-[200px] items-center justify-center rounded-full px-10 text-sm font-bold text-slate-950 transition-transform hover:scale-105"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

// Footer
const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500">
                 <Phone className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-200">AutoFuse AI</span>
        </div>
        <div className="text-[11px] text-slate-600">
          © {new Date().getFullYear()} AutoFuse AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- EFFECTS & HELPERS ---

const CursorGlow: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-screen transition-opacity duration-300">
      <div
        className="h-96 w-96 rounded-full bg-blue-500/5 blur-[80px]"
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

// Better Waveform Circle (Siri Style)
const WaveformCircle: React.FC = () => {
    return (
      <div className="relative flex items-center justify-center h-full w-full">
         <div className="absolute w-24 h-24 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
         <div className="absolute w-32 h-32 rounded-full border border-purple-500/10 animate-[spin_15s_linear_infinite_reverse]" />
         
         <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-purple-400 to-cyan-400 rounded-full"
                    style={{
                        height: '20px',
                        animation: `voiceWave 1.2s ease-in-out infinite ${i * 0.15}s`
                    }}
                />
            ))}
         </div>
      </div>
    );
};

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const StyleFX: React.FC = () => {
  return (
    <style jsx global>{`
      .neon-button {
        background-image: linear-gradient(135deg, #9333ea, #3b82f6);
        box-shadow: 0 0 25px rgba(147, 51, 234, 0.4);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .neon-button:hover {
        box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
        filter: brightness(1.1);
      }
      @keyframes voiceWave {
        0%, 100% { height: 20px; opacity: 0.5; }
        50% { height: 60px; opacity: 1; }
      }
      .perspective-1000 {
        perspective: 1000px;
      }
    `}</style>
  );
};
