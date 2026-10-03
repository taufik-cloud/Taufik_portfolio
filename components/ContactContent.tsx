"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

const contacts = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/taufik832", icon: "linkedin" },
  { label: "Email", href: "mailto:taufiiktfk832@gmail.com", icon: "email" },
  { label: "Instagram", href: "https://www.instagram.com/tauff.ikr?stkn=aGR5bnZxNXVkankw&utm_source=qr", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/6285756695562?text=Halo%20Taufik%2C%20saya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda.", icon: "whatsapp" },
];
function ContactIcon({ icon }: { icon: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {icon === "email" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : icon === "instagram" ? <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" /></> : icon === "linkedin" ? <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3c0-4 6-4 6 0v4" /><circle cx="7" cy="7" r=".7" fill="currentColor" /></> : <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l1.8-5A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="M8 7c-2 2 4 8 6 7l2-2-3-1-1 1-2-2 1-1-1-2H8Z" /></>}
  </svg>;
}
export default function ContactContent() {
  const reducedMotion = useReducedMotion();
  const [status, setStatus] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name") || "").trim();
    const email = String(values.get("email") || "").trim();
    const message = String(values.get("message") || "").trim();
    if (!name || !email || !message) { setStatus("Please complete your name, email, and message."); return; }
    const body = `${message}\n\nFrom: ${name}\nReply email: ${email}`;
    window.location.href = `mailto:taufiiktfk832@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app will open with the message ready to send.");
  }
  const inputClass = "mt-2 w-full rounded-xl border border-white/15 bg-white/[0.025] px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/35 hover:border-white/25 focus:border-ice/60 focus:bg-ice/[0.035]";
  return <section id="contact" aria-labelledby="contact-heading" className="portfolio-section border-t border-white/10 pb-8 pt-8 lg:pt-10">
    <motion.div initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.5 }} className="mx-auto max-w-3xl">
      <form onSubmit={handleSubmit} className="rounded-3xl border border-white/15 bg-navy/20 p-5 backdrop-blur-md sm:p-8">
        <h2 id="contact-heading" className="flex items-center gap-3 text-2xl font-medium tracking-tight text-cream"><span className="text-ice"><ContactIcon icon="email" /></span>Send a Message</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2"><label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.15em] text-cream/60">Your name<input id="contact-name" name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={inputClass + " normal-case tracking-normal"} /></label><label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.15em] text-cream/60">Email<input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@mail.com" className={inputClass + " normal-case tracking-normal"} /></label></div>
        <label htmlFor="contact-message" className="mt-4 block text-[10px] uppercase tracking-[0.15em] text-cream/60">Message<textarea id="contact-message" name="message" required maxLength={4000} rows={4} placeholder="What's on your mind?" className={inputClass + " resize-y normal-case tracking-normal"} /></label>
        <div className="mt-5 flex flex-col items-center gap-2"><motion.button type="submit" whileHover={reducedMotion ? undefined : { y: -2 }} whileTap={reducedMotion ? undefined : { scale: 0.97 }} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-ice/40 bg-ice/5 px-6 py-3 text-sm font-medium text-ice shadow-[0_0_20px_rgba(92,219,255,0.04)] transition-shadow hover:shadow-[0_0_24px_rgba(92,219,255,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"><span aria-hidden="true" className="pointer-events-none absolute inset-x-4 top-1 h-3 rounded-full bg-gradient-to-b from-white/15 to-transparent" /><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4"><path d="m21 3-7 18-4-7-7-4 18-7ZM10 14 21 3" /></svg>Send Message</motion.button><p className="text-[11px] text-cream/45">Opens your email app</p><p role="status" className="text-center text-xs text-ice">{status}</p></div>
      </form>
      <nav aria-label="Contact and social links" className="mt-5 flex justify-center"><div className="flex gap-2 rounded-2xl border border-white/15 bg-white/[0.025] p-2 backdrop-blur-md">{contacts.map(contact => <motion.a key={contact.label} href={contact.href} target={contact.icon === "email" ? undefined : "_blank"} rel={contact.icon === "email" ? undefined : "noopener noreferrer"} aria-label={contact.label} title={contact.label} whileHover={reducedMotion ? undefined : { y: -5, scale: 1.06 }} whileTap={reducedMotion ? undefined : { scale: 0.95 }} className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cream/65 transition-colors hover:border-ice/50 hover:bg-ice/10 hover:text-ice focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"><span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl bg-ice/0 blur-lg transition-colors group-hover:bg-ice/15" /><ContactIcon icon={contact.icon} /></motion.a>)}</div></nav>
    </motion.div>
  </section>;
}