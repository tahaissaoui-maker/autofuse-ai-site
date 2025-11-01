import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*******************************************************
 AutoFuse AI — Voice AI Agency (Inflate‑style, compact)
 Single‑file React + Tailwind SPA (< 1000 lines)
 Header pages: Solutions • Case studies • How it works
 Notes:
  - No pricing shown
  - Cal.com CTA included
  - "Try now" form posts to provided Make webhook
*******************************************************/

/********************
 * Config & Content *
 ********************/
const CAL_URL = "https://cal.com/taha-issaoui-g9ve4z/discovery";
const WEBHOOK_URL = "https://hook.eu2.make.com/v44z8mircvlc9lyt4casscehkh2nb531";

const NAV = [
  { label: "Solutions", route: "solutions" },
  { label: "Case studies", route: "case-studies" },
  { label: "How it works", route: "how-it-works" },
];

const INTEGRATIONS = [
  "Retell AI",
  "Vapi",
  "ElevenLabs",
  "Twilio",
  "Salesforce",
  "Make.com",
  "Zapier",
  "HubSpot",
  "Airtable",
  "Slack",
];

const TESTIMONIALS = [
  {
    company: "Landscaping Company",
    headline: "Voice AI Wizard for inbound booking",
    quote:
      "Completed quickly and guided us through building an AI Voice Assistant. Thorough, knowledgeable, and helpful.",
    stars: 5,
    tag: "Voice Agent",
  },
  {
    company: "Dental Practice",
    headline: "Virtual AI Receptionist",
    quote:
      "Our phone flow was rebuilt with Retell AI. Patients get scheduled automatically and we save time daily.",
    stars: 5,
    tag: "Healthcare",
  },
  {
    company: "Property Management",
    headline: "Salesforce + Retell AI Integration",
    quote: "Seamless integration and clear automation expertise. Highly recommend!",
    stars: 5,
    tag: "Integration",
  },
];

const CASE_STUDIES = [
  {
    id: "lux-travel",
    industry: "Luxury Travel",
    title: "Instant Lead Callback Voice Agent",
    summary:
      "AI receptionist calls new leads within seconds, captures intent, and books discovery calls automatically.",
    impact: ["165+ extra bookings / mo", "Sub‑60s lead response", "24/7 availability"],
    badges: ["Voice AI", "Lead Qualifying", "Scheduling"],
  },
  {
    id: "pm-company",
    industry: "Property Management",
    title: "Answering & Routing 200+ Monthly Calls",
    summary: "Agent answers, routes, and schedules maintenance. Integrated with Salesforce + job scheduler.",
    impact: ["3 hours saved daily", "Faster lead handling", "Happier tenants"],
    badges: ["Salesforce", "Telephony", "Scheduling"],
  },
  {
    id: "managed-it",
    industry: "Managed IT",
    title: "AI Support Line Resolves 60% of Calls",
    summary: "Automated after‑hours support verifies customers and resolves common tickets.",
    impact: ["60% calls resolved", "200+ calls/month handled", "Night & weekend coverage"],
    badges: ["Triage", "Knowledge Base", "Ticketing"],
  },
];

/*****************
 * Tiny utilities *
 *****************/
function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

function useHashRoute(defaultRoute = "home") {
  const [route, setRoute] = useState(() =>
    typeof window !== "undefined" && window.location.hash
      ? window.location.hash.replace("#", "")
      : defaultRoute
  );
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace("#", "") || defaultRoute);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [defaultRoute]);
  const push = (r) => {
    if (typeof window !== "undefined") window.location.hash = r;
    setRoute(r);
  };
  return [route, push];
}

function useMouseTrail() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const { clientX: x, clientY: y } = e;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return ref;
}

/***************************************
 * Background effects (grid + spotlight)
 ***************************************/
const BackgroundFX = () => {
  const trailRef = useMouseTrail();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(40,40,40,0.6),transparent_50%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.8), rgba(0,0,0,0.2) 60%, transparent)",
        }}
      />
      <div
        ref={trailRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(200px_200px_at_var(--x)_var(--y), rgba(99,102,241,0.18), transparent 60%)",
        }}
      />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
    </div>
  );
};

/****************
 * Header / Nav *
 ****************/
const Header = ({ route, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <header id="app-header" className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" onClick={(e)=>{e.preventDefault(); onNavigate("home");}} className="group inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 p-[2px]">
            <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-[#0a0a0a]">
              <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
                <defs>
                  <linearGradient id="af-g" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <path d="M2 10c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4" fill="none" stroke="url(#af-g)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">AutoFuse <span className="text-indigo-400">AI</span></span>
        </a>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
          {NAV.map((item)=> (
            <a key={item.label} href={`#${item.route}`} onClick={(e)=>{e.preventDefault(); onNavigate(item.route);}} className={classNames("rounded-full px-3 py-2 text-sm transition hover:bg-white/5", route===item.route?"text-white":"text-zinc-300 hover:text-white")}>{item.label}</a>
          ))}
        </nav>
        <a href={CAL_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex ml-4 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white hover:opacity-95">Book a Strategy Call</a>

        <button onClick={()=>setOpen(s=>!s)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white" aria-label="Toggle menu">
          <svg width="18" height="18" viewBox="0 0 18 18" className="opacity-90"><path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5"/></svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="md:hidden border-t border-white/10">
            <div className="space-y-1 px-4 py-4">
              {NAV.map((item)=> (
                <a key={item.label} href={`#${item.route}`} onClick={(e)=>{e.preventDefault(); setOpen(false); onNavigate(item.route);}} className="block rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white">{item.label}</a>
              ))}
              <a href={CAL_URL} target="_blank" rel="noreferrer" className="block rounded-lg bg-white/5 px-3 py-2 text-white hover:bg-white/10">Book a Free Call</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

/****************
 * Hero / Home  *
 ****************/
const HomePage = ({ onNavigate }) => (
  <div className="relative">
    <section className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="md:col-span-2">
          <div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
            Building custom AI Automations & Agents
          </div>
          <h1 className="mt-5 text-center text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Scale fast and cut costs with <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">AI workers</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-center text-zinc-300">We build AI Voice, Chat & Automation Agents tailored to your workflows — boosting revenue and saving time, 24/7.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={CAL_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-white transition hover:bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90 group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              Book a discovery call
            </a>
            <button onClick={()=>onNavigate("solutions")} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-zinc-200 hover:bg-white/5">Explore solutions</button>
          </div>
          <p className="mt-6 text-center text-xs text-zinc-400">
            Works with your existing stack • No platform lock-in • You fully own the agent
          </p>
          <SoundWaves />
        </div>

        
      </div>
    </section>

    <TryCallSection />

    {/* Popular Agentic Services */}
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:pb-16">
      <HeaderBlock eyebrow="SOLUTIONS" title="Popular Agentic Services" subtitle="Automate phone calls, chat conversations, and daily tasks with reliable, human‑like Agents."/>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ServiceCard title="Voice Agents" desc="Qualify leads, schedule meetings, and instantly route them to the right rep — no human needed." bullets={["Inbound & outbound","CRM updates","Appointment booking","Post‑call notes"]} gradient="from-indigo-500/20 via-sky-500/10 to-transparent"/>
        <ServiceCard title="Chat Agents" desc="Answer instantly, resolve FAQs, and guide every user to the right place — all in real time." bullets={["Website widget","Knowledge base","Smart routing","Analytics"]} gradient="from-sky-500/20 via-cyan-400/10 to-transparent"/>
        <ServiceCard title="Automation Agents" desc="Capture buyer intent, engage leads, and solve requests automatically — with a human tone." bullets={["Workflows","Integrations","Data sync","Human handoff"]} gradient="from-cyan-400/20 via-teal-400/10 to-transparent"/>
      </div>
    </section>

    {/* Benefits */}
    <section className="mx-auto max-w-7xl px-4 py-12">
      <HeaderBlock eyebrow="BENEFITS" title="What you get" subtitle="Fast response, happier customers, and more time for your team."/>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{title:"Instant replies, 24/7",desc:"Pick up calls instantly — even at night — so you don’t lose leads or keep customers waiting."},{title:"Save time for your team",desc:"Agents handle repetitive calls so your team can focus on high‑value work."},{title:"Works with your systems",desc:"Connect to your CRM, schedulers, and tools for a seamless fit."},{title:"You fully own the agent",desc:"Once built, it’s yours — no platform lock‑in."}].map((b)=> <Benefit key={b.title} {...b}/>) }
      </div>
    </section>

    {/* Integrations Marquee */}
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-zinc-400">Works with</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-zinc-300/90">
              {INTEGRATIONS.concat(INTEGRATIONS).map((n,i)=> (
                <span key={i} className="mx-6 inline-flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"/>{n}</span>
              ))}
            </div>
          </div>
          <a href="#solutions" onClick={(e)=>{e.preventDefault(); onNavigate("solutions");}} className="rounded-full bg-white/5 px-4 py-2 text-xs text-zinc-200 hover:bg-white/10">View solutions</a>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="mx-auto max-w-7xl px-4 py-12 sm:py-20">
      <HeaderBlock eyebrow="TESTIMONIALS" title="Our success stories" subtitle="Real client feedback from recent builds."/>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{TESTIMONIALS.map((t,i)=> <Testimonial key={i} {...t}/> )}</div>
      <div className="mt-10 flex justify-center"><a href={CAL_URL} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-white hover:opacity-95">Book a free call</a></div>
    </section>
  </div>
);

/****************
 * Solutions    *
 ****************/
const SolutionsPage = () => {
  const blocks = [
    {title:"Voice Agents",desc:"Deploy receptionists, outbound callers, and post‑call note takers. Book meetings, route calls, and update your CRM.",bullets:["Inbound IVR / Smart routing","Calendar booking","Lead qualification","CRM updates & notes","Workflows via Make/Zapier"],accent:"from-indigo-500/30 via-sky-500/10 to-transparent"},
    {title:"Chat Agents",desc:"Instant answers on your site and support channels. Pulls from your docs and guides users to the right step.",bullets:["Website widget + handoff","Knowledge grounding","Identity & context","Analytics"],accent:"from-sky-500/30 via-cyan-400/10 to-transparent"},
    {title:"Automation Agents",desc:"Let agents execute real work — create tickets, update records, and trigger workflows across your stack.",bullets:["Make.com & Zapier","Salesforce, HubSpot, Airtable","CRM bi‑directional sync","Human approval checkpoints"],accent:"from-cyan-400/30 via-teal-400/10 to-transparent"},
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <HeaderBlock eyebrow="SOLUTIONS" title="Intelligent AI solutions designed for growth" subtitle="We build bespoke Voice, Chat & Automation Agents that your team can trust in production."/>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{blocks.map((b)=> <ServiceCard key={b.title} {...b}/>)}</div>
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <CompareCard/>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-xl font-semibold text-white">Works with your existing systems</h3>
          <p className="mt-2 text-sm text-zinc-300">We connect to your CRM, schedulers, calendars & workflows, fitting right into your business without adding complexity.</p>
          <div className="mt-4 flex flex-wrap gap-2">{INTEGRATIONS.slice(0,10).map((n)=> <span key={n} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{n}</span>)}</div>
        </div>
      </div>
    </div>
  );
};

/****************
 * Case Studies  *
 ****************/
const CaseStudiesPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
    <HeaderBlock eyebrow="CASE STUDIES" title="Real outcomes from production agents" subtitle="A snapshot of recent projects and the impact they delivered."/>
    <div className="mt-10 grid gap-6 md:grid-cols-3">{CASE_STUDIES.map((cs)=> <CaseStudyCard key={cs.id} {...cs}/>)}</div>
    <div className="mt-16 flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-10 text-center">
      <h3 className="text-xl font-semibold text-white">Have a use case in mind?</h3>
      <p className="max-w-2xl text-sm text-zinc-300">We’ll map your ideal conversation, connect your tools, and launch a reliable agent. Start with a discovery call.</p>
      <a href={CAL_URL} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-5 py-2.5 text-white hover:bg-white/20">Book a discovery call</a>
    </div>
  </div>
);

/****************
 * How It Works  *
 ****************/
const HowItWorksPage = () => {
  const steps = [
    { n: "01", title: "Introductory Call", desc: "We learn about your business and figure out what kind of agent you need." },
    { n: "02", title: "Discovery", desc: "We plan from start to finish and design for high impact." },
    { n: "03", title: "Development", desc: "We build the agent & automations and connect your systems." },
    { n: "04", title: "Testing & Launch", desc: "Rigorous testing, then go‑live with monitoring in place." },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
      <HeaderBlock eyebrow="HOW IT WORKS" title="Getting started is easy" subtitle="A clear process from call to launch so you always know what’s next."/>
      <div className="mt-10 grid gap-6 lg:grid-cols-4">{steps.map((s)=> (
        <motion.div key={s.n} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.4}} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <div className="text-sm text-zinc-400">{s.n}</div>
          <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
          <p className="mt-2 text-sm text-zinc-300">{s.desc}</p>
        </motion.div>
      ))}</div>
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <CompareCard/>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-xl font-semibold text-white">Why top teams choose us</h3>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li className="flex items-start gap-2"><Dot/> Experienced prompt engineers & automation builders</li>
            <li className="flex items-start gap-2"><Dot/> Complete custom development with rigorous testing</li>
            <li className="flex items-start gap-2"><Dot/> Connections with major agent platforms and telephony</li>
          </ul>
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">Book a discovery call</a>
        </div>
      </div>
    </div>
  );
};

/****************
 * Components   *
 ****************/
const HeaderBlock = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    <div className="text-xs font-medium tracking-wider text-zinc-400">{eyebrow}</div>
    <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-2 text-sm text-zinc-300">{subtitle}</p>}
  </div>
);

const ServiceCard = ({ title, desc, bullets = [], gradient = "from-indigo-500/20 via-sky-500/10 to-transparent" }) => (
  <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6">
    <div className={classNames("pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br blur-xl", gradient)} />
    <div className="relative">
      <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"><span className="h-1.5 w-1.5 rounded-full bg-zinc-500"/>Agent type</div>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">{bullets.map((b,i)=> <li key={i} className="flex items-start gap-2"><Dot/>{b}</li>)}</ul>
    </div>
  </motion.div>
);

// Benefit card used in Home > Benefits
const Benefit = ({ title, desc }) => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
    <div className="flex items-start gap-3">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
      <div>
        <h3 className="text-white font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      </div>
    </div>
  </div>
);

// CompareCard — used on Solutions & How It Works
const CompareCard = () => (
  <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
    <h3 className="text-xl font-semibold text-white">Manual vs. With an AI Agent</h3>
    <div className="mt-4 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="text-sm font-medium text-zinc-300">Before (Manual)</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
          <li>Missed calls & slow response times</li>
          <li>Repetitive Q&A handled by staff</li>
          <li>Notes scattered across tools</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
        <div className="text-sm font-medium text-zinc-300">After (AI Agent)</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
          <li>Instant answers & call routing 24/7</li>
          <li>Bookings & updates sent to your CRM</li>
          <li>Structured notes for every interaction</li>
        </ul>
      </div>
    </div>
  </div>
);

const CaseStudyCard = ({ industry, title, summary, impact = [], badges = [] }) => (
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6">
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-transparent blur-xl" />
    <div className="relative">
      <div className="text-xs text-zinc-400">{industry}</div>
      <h3 className="mt-2 text-center text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-center text-sm text-zinc-300">{summary}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-300">{impact.map((i,idx)=> <li key={idx} className="flex items-start gap-2"><Dot/>{i}</li>)}</ul>
      <div className="mt-4 flex flex-wrap gap-2">{badges.map((b)=> <span key={b} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-zinc-300">{b}</span>)}</div>
    </div>
  </div>
);

const Testimonial = ({ company, headline, quote, stars = 5, tag }) => (
  <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}} transition={{duration:0.4}} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
    <div className="flex items-center justify-between"><div className="text-sm text-zinc-400">{company}</div><span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">{tag}</span></div>
    <h4 className="mt-2 text-white">{headline}</h4>
    <p className="mt-2 text-sm text-zinc-300">“{quote}”</p>
    <div className="mt-3"><StarRow n={stars}/></div>
  </motion.div>
);

const StarRow = ({ n = 5 }) => (
  <div className="flex items-center gap-0.5 text-amber-300">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 20 20" className={i < n ? "opacity-100" : "opacity-30"}><path fill="currentColor" d="M10 1.8l2.47 5.01 5.53.78-4 3.9.94 5.5L10 14.9l-4.94 2.1.94-5.5-4-3.9 5.53-.78L10 1.8z"/></svg>
    ))}
  </div>
);

const Dot = () => <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500"/>;

const Spinner = () => (
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" className="fill-none stroke-white/20" strokeWidth="3"/><path d="M22 12a10 10 0 00-10-10" className="fill-none stroke-white" strokeWidth="3"/></svg>
);

// Animated sound waves (pure SVG, no extra CSS)
const SoundWaves = () => (
  <svg viewBox="0 0 1200 150" className="mx-auto mt-8 w-full max-w-4xl" aria-hidden="true">
    <defs>
      <linearGradient id="waveGrad" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path d="M0 80 C 150 20, 300 140, 450 80 S 750 20, 900 80 S 1050 140, 1200 80" fill="none" stroke="url(#waveGrad)" strokeOpacity="1" strokeWidth="2" strokeLinecap="round" strokeDasharray="200 600">
      <animate attributeName="stroke-dashoffset" from="0" to="-800" dur="5s" repeatCount="indefinite" />
    </path>
    <path d="M0 88 C 150 28, 300 148, 450 88 S 750 28, 900 88 S 1050 148, 1200 88" fill="none" stroke="url(#waveGrad)" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeDasharray="200 600">
      <animate attributeName="stroke-dashoffset" from="0" to="-800" dur="6s" repeatCount="indefinite" />
    </path>
    <path d="M0 96 C 150 36, 300 156, 450 96 S 750 36, 900 96 S 1050 156, 1200 96" fill="none" stroke="url(#waveGrad)" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeDasharray="200 600">
      <animate attributeName="stroke-dashoffset" from="0" to="-800" dur="7s" repeatCount="indefinite" />
    </path>
    <path d="M0 104 C 150 44, 300 164, 450 104 S 750 44, 900 104 S 1050 164, 1200 104" fill="none" stroke="url(#waveGrad)" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" strokeDasharray="200 600">
      <animate attributeName="stroke-dashoffset" from="0" to="-800" dur="8s" repeatCount="indefinite" />
    </path>
    <path d="M0 112 C 150 52, 300 172, 450 112 S 750 52, 900 112 S 1050 172, 1200 112" fill="none" stroke="url(#waveGrad)" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeDasharray="200 600">
      <animate attributeName="stroke-dashoffset" from="0" to="-800" dur="9s" repeatCount="indefinite" />
    </path>
  </svg>
);

/******************************
 * Try‑now lead capture (Home)
 ******************************/
const TryCallSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [status, setStatus] = useState("idle");
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const tryCall = async (e) => {
    e.preventDefault();
    // guard: all fields required
    if (!form.name || !form.email || !form.phone || !form.company) {
      setStatus("error");
      return;
    }
    try {
      setStatus("submitting");
      const payload = { source: "autofuse-try-call", action: "try_now", ...form, callMe: true, timestamp: new Date().toISOString() };
      const res = await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("Webhook error");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", company: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center">
        <div className="text-xs text-zinc-400">TRY IT</div>
        <h3 className="mt-2 text-2xl font-semibold text-white">Try Our Voice Agent</h3>
        <p className="mt-2 text-sm text-zinc-300">Enter your details and click <span className="text-white/90">Try now</span>. Our agent will call you.</p>
        <form onSubmit={tryCall} className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-4">
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"/>
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"/>
          <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone number" required className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"/>
          <input name="company" value={form.company} onChange={onChange} placeholder="Company" required className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"/>
          <div className="sm:col-span-4 mt-2 flex justify-center">
            <button type="submit" disabled={status==="submitting" || !form.name || !form.email || !form.phone || !form.company} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-white hover:opacity-95 disabled:opacity-60">
              {status==="submitting" ? <Spinner/> : null}
              {status==="submitting" ? "Processing…" : "Try now"}
            </button>
          </div>
        </form>
        {status==="success" && <p className="mt-3 text-sm text-emerald-400">Got it — check your phone shortly.</p>}
        {status==="error" && <p className="mt-3 text-sm text-rose-400">Something went wrong — please try again.</p>}
      </div>
    </section>
  );
};

/***********
 * Footer   *
 ***********/
const Footer = () => (
  <footer className="mt-20 border-t border-white/10 px-4 py-10 text-sm text-zinc-400">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 p-[2px]">
          <div className="relative flex h-full w-full items-center justify-center rounded-[10px] bg-[#0a0a0a]">
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><defs><linearGradient id="af-g-f" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#06b6d4"/></linearGradient></defs><path d="M2 10c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4" fill="none" stroke="url(#af-g-f)" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </div>
        </div>
        <span className="text-white">AutoFuse <span className="text-indigo-400">AI</span></span>
      </div>
      <nav className="mx-auto flex flex-wrap items-center justify-center gap-4">
        <a href="#solutions" className="hover:text-zinc-200">Solutions</a>
        <a href="#case-studies" className="hover:text-zinc-200">Case studies</a>
        <a href="#how-it-works" className="hover:text-zinc-200">How it works</a>
      </nav>
      <div className="text-xs">© {new Date().getFullYear()} AutoFuse AI. All rights reserved.</div>
    </div>
  </footer>
);

/****************
 * Router / App *
 ****************/
function RouterView({ route, onNavigate }) {
  return (
    <main>
      {route === "home" && <HomePage onNavigate={onNavigate} />}
      {route === "solutions" && <SolutionsPage />}
      {route === "case-studies" && <CaseStudiesPage />}
      {route === "how-it-works" && <HowItWorksPage />}
    </main>
  );
}

export default function App() {
  const [route, navigate] = useHashRoute("home");
  useEffect(() => { document.documentElement.classList.add("bg-[#0a0a0a]"); }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <BackgroundFX />
      <Header route={route} onNavigate={navigate} />
      <RouterView route={route} onNavigate={navigate} />
      <Footer />
      <style>{`
        .animate-marquee { display:inline-block; animation: marquee 24s linear infinite; }
        @keyframes marquee { 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }
      `}</style>
    </div>
  );
}
