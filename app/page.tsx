"use client";

import { useState } from "react";
import {
  ArrowRight, BrainCircuit, Code2, Smartphone, Settings2, UsersRound,
  ShieldCheck, Cloud, Zap, Rocket, Target, LockKeyhole, TrendingUp,
  Menu, X, Mail, MapPin
} from "lucide-react";

const services = [
  { title: "AI Solutions", icon: BrainCircuit, text: "Intelligent solutions that automate processes, generate insights, and help businesses make smarter decisions." },
  { title: "Web Development", icon: Code2, text: "Modern, responsive, high-performance websites and digital platforms built around your goals." },
  { title: "Mobile App Development", icon: Smartphone, text: "Fast, scalable, user-focused mobile experiences for modern devices and businesses." },
  { title: "Software Development", icon: Settings2, text: "Custom software engineered to solve complex problems and streamline your operations." },
  { title: "IT Consulting", icon: UsersRound, text: "Practical technology guidance to help you make confident IT decisions and strategies." },
  { title: "Cybersecurity", icon: ShieldCheck, text: "Security-focused solutions designed to protect your data, systems, applications, and operations." },
  { title: "Cloud Services", icon: Cloud, text: "Scalable cloud solutions designed to improve flexibility, performance, reliability, and growth." },
  { title: "Energy Solutions", icon: Zap, text: "Sales, supply, installation, and setup of solar energy systems for homes, businesses, and organizations." },
];

const values = [
  { title: "Innovative Solutions", icon: Rocket, text: "Driving digital transformation" },
  { title: "Client Focused Approach", icon: Target, text: "Your success is our mission" },
  { title: "Secure & Reliable Systems", icon: LockKeyhole, text: "Security at every layer" },
  { title: "Scalable Technologies", icon: TrendingUp, text: "Built for growth and the future" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const close = () => setMenu(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" onClick={close} className="flex items-center gap-3">
            <LogoMark />
            <div>
              <div className="text-xl font-black tracking-[.16em]">VILLION</div>
              <div className="text-[9px] font-bold tracking-[.48em] text-[#d8a52b]">TECHNOLOGIES</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            {["Home","About","Services","Why Villion","Contact"].map((x) => (
              <a key={x} href={`#${x.toLowerCase().replace(" ", "-")}`} className="transition hover:text-[#f5d36a]">{x}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full border border-[#d8a52b] px-5 py-2.5 text-sm font-bold text-[#f5d36a] transition hover:bg-[#d8a52b] hover:text-black md:block">GET IN TOUCH</a>
          <button aria-label="Open menu" onClick={() => setMenu(!menu)} className="rounded-lg border border-white/15 p-2 md:hidden">{menu ? <X /> : <Menu />}</button>
        </div>
        {menu && <nav className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
          {["Home","About","Services","Why Villion","Contact"].map((x) => (
            <a key={x} onClick={close} href={`#${x.toLowerCase().replace(" ", "-")}`} className="block py-3 text-white/90">{x}</a>
          ))}
        </nav>}
      </header>

      <section id="home" className="hero-glow grid-bg relative flex min-h-screen items-center pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.35em] text-[#e01b24]">Welcome to Villion</p>
            <h1 className="text-5xl font-black leading-[.95] tracking-tight sm:text-7xl">
              TECHNOLOGY.<br />
              INNOVATION.<br />
              <span className="gold-text">POSSIBILITY.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              We build innovative digital and technology solutions that help businesses solve real problems, operate smarter, and prepare for the future.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#b77910] via-[#f5d36a] to-[#b77910] px-6 py-4 font-extrabold text-black shadow-lg shadow-yellow-500/10">LET&apos;S BUILD TOGETHER <ArrowRight size={18}/></a>
              <a href="#services" className="inline-flex items-center gap-3 rounded-lg border border-[#e01b24] px-6 py-4 font-extrabold text-white hover:bg-[#e01b24]/10">EXPLORE OUR SERVICES <ArrowRight size={18}/></a>
            </div>
          </div>
          <div className="relative flex min-h-[420px] items-center justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
            <div className="relative text-center">
              <LogoMark large />
              <div className="mt-8 h-px w-72 bg-gradient-to-r from-transparent via-[#e01b24] to-transparent" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[.45em] text-[#d8a52b]">Built for the future</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {values.map(({title, icon: Icon, text}) => (
            <div key={title} className="flex gap-4 px-4 py-5">
              <div className="grid size-12 shrink-0 place-items-center rounded-full border border-[#d8a52b] text-[#f5d36a]"><Icon size={22}/></div>
              <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-white/50">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[.35em] text-[#e01b24]">What we do</p>
          <h2 className="mt-2 text-4xl font-black sm:text-5xl">OUR <span className="gold-text">SERVICES</span></h2>
          <div className="mx-auto mt-5 h-1 w-20 bg-gradient-to-r from-[#e01b24] to-[#d8a52b]" />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({title, icon: Icon, text}) => (
            <article key={title} className="service-card red-glow rounded-2xl p-6">
              <div className="mb-6 grid size-14 place-items-center rounded-xl border border-[#d8a52b]/40 bg-[#d8a52b]/5 text-[#f5d36a]"><Icon size={28}/></div>
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              <div className="mt-6 h-1 w-10 bg-[#e01b24]" />
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-5 px-5 pb-24 lg:grid-cols-3 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[.025] p-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e01b24]">About Villion</p>
          <h2 className="mt-3 text-3xl font-black">Technology Built Around Possibility.</h2>
          <p className="mt-5 leading-7 text-white/60">Villion Technologies is a forward-thinking technology company committed to delivering innovative solutions that create meaningful value for businesses and communities.</p>
          <p className="mt-4 leading-7 text-white/60">We bring technology and practical problem-solving together to help our clients move forward with confidence.</p>
        </div>
        <div className="rounded-2xl border border-[#e01b24]/40 bg-gradient-to-br from-[#350509] to-[#0b0b0c] p-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#d8a52b]">Our Vision</p>
          <h2 className="mt-5 text-4xl font-black leading-tight">Building technology that moves <span className="gold-text">businesses forward.</span></h2>
          <p className="mt-6 leading-7 text-white/60">We envision a future where innovative technology empowers businesses, strengthens communities, creates opportunities, and makes it possible to achieve more.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[.025] p-8">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e01b24]">Founder & CEO</p>
          <h2 className="mt-3 text-3xl font-black">Vincent Okoye</h2>
          <p className="mt-2 font-semibold text-[#f5d36a]">Founder & CEO, Villion Technologies</p>
          <p className="mt-5 leading-7 text-white/60">Leading Villion Technologies with a vision to create innovative solutions that address real-world challenges and deliver long-term value.</p>
        </div>
      </section>

      <section id="why-villion" className="border-y border-[#e01b24]/30 bg-gradient-to-r from-[#1a0204] via-black to-[#1a0204]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div><p className="text-xs font-bold uppercase tracking-[.3em] text-[#d8a52b]">Why Villion</p><h2 className="mt-3 text-4xl font-black">Innovation <span className="gold-text">with purpose.</span></h2></div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Innovative","Client-Focused","Secure & Reliable","Scalable"].map((x) => <div key={x} className="rounded-xl border border-white/10 p-5"><h3 className="font-bold text-[#f5d36a]">{x}</h3><p className="mt-2 text-sm leading-6 text-white/50">Technology should solve problems, improve experiences, and create opportunities.</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/[.025] p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-[#e01b24]">Get in touch</p>
            <h2 className="mt-3 text-4xl font-black">LET&apos;S BUILD SOMETHING <span className="gold-text">GREAT TOGETHER.</span></h2>
            <p className="mt-5 max-w-lg leading-7 text-white/60">Have a project in mind or need expert technology advice? Tell us what you&apos;re looking to build, improve, automate, secure, or transform.</p>
            <div className="mt-8 flex items-center gap-3 text-white/60"><Mail className="text-[#f5d36a]" size={20}/> Company email coming soon</div>
            <div className="mt-4 flex items-center gap-3 text-white/60"><MapPin className="text-[#f5d36a]" size={20}/> Location details coming soon</div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required aria-label="Your name" placeholder="Your Name" className="rounded-lg border border-white/10 bg-black/60 px-4 py-4 outline-none focus:border-[#d8a52b]" />
              <input required type="email" aria-label="Your email" placeholder="Your Email" className="rounded-lg border border-white/10 bg-black/60 px-4 py-4 outline-none focus:border-[#d8a52b]" />
            </div>
            <input required aria-label="Subject" placeholder="Your Subject" className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-4 outline-none focus:border-[#d8a52b]" />
            <textarea required aria-label="Message" placeholder="Your Message" rows={6} className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-4 outline-none focus:border-[#d8a52b]" />
            <button className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#e01b24] px-6 py-4 font-extrabold transition hover:bg-[#b60f17]">{sent ? "MESSAGE READY TO SEND" : "SEND MESSAGE"} <ArrowRight size={18}/></button>
            <p className="text-xs text-white/35">This demo form currently validates in the browser; we will connect it to your company email after launch.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#d8a52b]/30 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div><a href="#home" className="flex items-center gap-3"><LogoMark/><div><div className="text-xl font-black tracking-[.16em]">VILLION</div><div className="text-[9px] font-bold tracking-[.48em] text-[#d8a52b]">TECHNOLOGIES</div></div></a><p className="mt-5 text-sm leading-6 text-white/45">Technology. Innovation. Possibility.</p></div>
          <div><h3 className="font-bold text-[#f5d36a]">Quick Links</h3><div className="mt-4 space-y-2 text-sm text-white/55">{["Home","About","Services","Why Villion","Contact"].map(x=><a className="block hover:text-white" key={x} href={`#${x.toLowerCase().replace(" ","-")}`}>{x}</a>)}</div></div>
          <div><h3 className="font-bold text-[#f5d36a]">Services</h3><div className="mt-4 space-y-2 text-sm text-white/55">{services.map(s=><div key={s.title}>{s.title}</div>)}</div></div>
          <div><h3 className="font-bold text-[#f5d36a]">Villion Technologies</h3><p className="mt-4 text-sm leading-6 text-white/45">Innovative technology and solar energy solutions built for a better future.</p></div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/35">© {new Date().getFullYear()} Villion Technologies. All Rights Reserved.</div>
      </footer>
    </main>
  );
}

function LogoMark({ large=false }: { large?: boolean }) {
  return (
    <div className={`relative ${large ? "size-80" : "size-12"} shrink-0`} aria-label="Villion Technologies eagle V logo">
      <svg viewBox="0 0 120 100" className="h-full w-full drop-shadow-[0_0_15px_rgba(245,211,106,.25)]" role="img">
        <defs>
          <linearGradient id="gold" x1="0" x2="1"><stop stopColor="#9d670b"/><stop offset=".5" stopColor="#ffe58b"/><stop offset="1" stopColor="#a86e0e"/></linearGradient>
        </defs>
        <path d="M10 12 L50 42 L60 92 L70 42 L110 12 L75 63 L60 98 L45 63 Z" fill="url(#gold)" />
        <path d="M11 12 L4 7 L23 28 L37 35 L26 22 Z M109 12 L116 7 L97 28 L83 35 L94 22 Z" fill="#f5d36a"/>
        <path d="M60 27 C49 27 44 37 50 44 C53 48 57 50 60 52 C63 50 67 48 70 44 C76 37 71 27 60 27 Z" fill="#fff3c4"/>
        <circle cx="64" cy="35" r="2" fill="#050505"/>
      </svg>
    </div>
  );
}
