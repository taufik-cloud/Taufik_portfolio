"use client";

import Image from "next/image";
import { useRef } from "react";

const photos: Record<string, { src: string; alt: string }> = {
  iki: { src: "/iki-experience.png", alt: "PT Industri Kapal Indonesia internship certificate and team wearing safety helmets" },
  laboratory: { src: "/statistics-experience.png", alt: "Statistics and Quality Management Laboratory certificate, coordinator portrait, and practicum group" },
  pii: { src: "/pii-experience.png", alt: "PII engineering events with the organising team wearing red jackets" },
  siclus: { src: "/siclus-program.jpg", alt: "Three-photo collage of SICLUS SRE UNHAS activities and participants" },
  share: { src: "/share-team.jpg", alt: "Nine SHARE Future Leaders Program team members in black and white outfits" },
  hmti: { src: "/hmti-program.png", alt: "Collage of HMTI activities, including members wearing red jackets" },
  "creative-economy": { src: "/hmti-program.png", alt: "Temporary shared photo for the Creative Economy Development program" },
  "supply-chain": { src: "/hmti-program.png", alt: "Temporary shared photo for the Supply Chain and Logistic Indonesia Camp and Seminar" },
};

export function OrganisationPhoto({ id, name, caption = "Program moments" }: { id: string; name: string; caption?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = photos[id];
  return (
    <>
      <button type="button" onClick={() => dialogRef.current?.showModal()} aria-label={"View photo of " + name} aria-haspopup="dialog" className="group block w-full overflow-hidden rounded-xl border border-white/15 bg-black/25 text-left transition-colors hover:border-ice/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
        <div className="relative aspect-video overflow-hidden">
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 220px, 90vw" className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105" />
          <span aria-hidden="true" className="absolute bottom-2 right-2 rounded-lg border border-white/20 bg-black/70 px-2 py-1 text-xs text-cream">â†—</span>
        </div>
        <span className="block border-t border-white/10 px-3 py-2 text-[11px] text-cream/65">{caption} <span className="float-right text-ice">View photo</span></span>
      </button>
      <dialog ref={dialogRef} aria-label={"Photo of " + name} onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 m-auto max-h-[92dvh] w-[94vw] max-w-5xl overflow-auto rounded-2xl border border-ice/25 bg-[#080f18] p-0 text-cream shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3"><p className="text-sm font-medium">{name}</p><button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="Close photo" className="shrink-0 rounded-lg border border-white/15 px-3 py-1.5 text-sm hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-cream">Close Ã—</button></div>
        <div className="relative h-[72dvh]"><Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1100px) 1024px, 94vw" className="object-contain p-3" /></div>
        <p className="px-4 pb-3 text-xs text-cream/50">Press Esc to close</p>
      </dialog>
    </>
  );
}
const organisations = [
  {
    id: "hmti", name: "Himpunan Mahasiswa Teknik Industri FT-UH", initials: "HMTI", category: "Communication & Information", location: "Makassar, South Sulawesi", period: "July 2023–February 2025", accent: "text-ice",
    roles: [{ title: "Communication & Information Staff", period: "July 2023–February 2025", contributions: ["Increased social media engagement by 35% through targeted digital campaigns and promotional strategies for CONSTRAIN, a national-level business case competition involving 45+ university students from across Indonesia.", "Produced 100+ digital content assets, including promotional campaigns, copywriting, and multimedia materials across TikTok, Instagram, YouTube, Spotify, the website, and Twitter.", "Led the Industrial Podcast project across four episodes, identifying speakers, managing recording sessions, overseeing video editing, and distributing content across social media platforms."] }],
    tags: ["Digital Campaigns", "Copywriting", "Content Production", "Podcast Production", "Social Media"],
    highlight: "100+ assets", highlightLabel: "produced across six digital platforms", context: "Including CONSTRAIN campaigns and a four-episode podcast",
  },
  {
    id: "creative-economy", name: "Creative Economy Development Innovation Program", initials: "CED", category: "Community Development", location: "Jeneponto, South Sulawesi", period: "July–August 2025", accent: "text-emerald-300",
    roles: [{ title: "Program Coordinator", period: "July–August 2025", contributions: ["Led a three-day community development program in Sapanang Village focused on converting corn waste into mushroom growing media, engaging a local community of approximately 3,000 corn farmers.", "Coordinated outreach, training, and hands-on demonstrations for 100+ farmers, farmer groups, village officials, and agricultural extension officers, supported by a demonstration facility and cultivation guidebook.", "Led sustainable community programs at Nurul Hidayah Sapanang Islamic Boarding School, including a permanent waste-burning facility, 60 educational posters, and a catfish farming initiative to support waste management, environmental awareness, and food production."] }],
    tags: ["Program Coordination", "Community Outreach", "Sustainable Agriculture", "Training", "Waste Management"],
    highlight: "100+ farmers", highlightLabel: "engaged in hands-on training and demonstrations", context: "Program serving a village community of approximately 3,000 corn farmers",
  },
  {
    id: "siclus", name: "SICLUS – Renewable Energy", initials: "SRE", category: "Marketing, Creative & Event Operations", location: "Makassar, South Sulawesi", period: "May–September 2024", accent: "text-cyan-300",
    roles: [{ title: "Marketing, Creative & Event Operations", period: "May–September 2024", contributions: ["Produced motion-graphic promotional content using Figma, Adobe After Effects, and CapCut that reached 35,000+ viewers and contributed to a 20% increase in competition participants compared with the previous period.", "Managed event operations for an international talk show with 200+ attendees, coordinating technical execution, presentation flow, and support for international guest speakers."] }],
    tags: ["Figma", "Adobe After Effects", "CapCut", "Motion Graphics", "Event Operations"],
    highlight: "35,000+ views", highlightLabel: "reached by motion-graphic promotional content", context: "Contributed to a 20% increase in competition participants",
  },
  {
    id: "supply-chain", name: "Institute Supply Chain and Logistic Indonesia Camp and Seminar", initials: "ISCLI", category: "Publication & Documentation", location: "Makassar, South Sulawesi", period: "September–October 2024", accent: "text-amber-300",
    roles: [{ title: "Staff of Publication and Documentation", period: "September–October 2024", contributions: ["Created and managed visual content for 10+ seminar and camp activities, boosting event visibility by 25% on social media, and designed and distributed personalized certificates for 150+ participants.", "Documented key event moments and produced high-quality archives shared with 200+ participants and stakeholders."] }],
    tags: ["Publication", "Visual Content", "Event Documentation", "Certificate Design", "Social Media"],
    highlight: "10+ activities", highlightLabel: "covered through publication and documentation", context: "Visual content boosted event visibility by 25% on social media",
  },
  {
    id: "share", name: "Do Well Do Good Future Leaders Program (SHARE)", initials: "SH", category: "Marketing & Communication", location: "Makassar, South Sulawesi", period: "September 2023–May 2024", accent: "text-violet-300",
    roles: [{ title: "Marketing & Communication Associate", period: "September 2023–May 2024", contributions: ["Attended 10+ intensive training sessions and completed assignments, project-based learning, and research involving brands such as HUMNS Parfume, Zara, and H&M to strengthen leadership and applied business skills.", "Developed target-audience lists and prepared social media content to support engagement across Do Well Do Good's social media accounts."] }],
    tags: ["Leadership", "Audience Segmentation", "Digital Communication", "Research", "Project-Based Learning"],
    highlight: "10+ sessions", highlightLabel: "of intensive training, research, and project-based learning", context: "Marketing and communication associate",
  },
];

export default function OrganisationsContent() {
  return (
    <div className="mt-6 space-y-5 sm:mt-8">
      {organisations.map(organisation => (
        <article key={organisation.id} aria-labelledby={organisation.id + "-organisation-heading"} className="overflow-hidden rounded-3xl border border-white/15 bg-navy/25 backdrop-blur-md transition-colors hover:border-ice/35">
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:p-6 lg:flex-row lg:items-start">
            <div className="flex min-w-0 items-start gap-4">
              <span aria-hidden="true" className={"flex h-12 w-14 shrink-0 items-center justify-center rounded-2xl border border-current/25 bg-white/5 text-xs font-semibold tracking-wider sm:h-14 sm:w-16 " + organisation.accent}>{organisation.initials}</span>
              <div className="min-w-0"><p className={"text-[10px] uppercase tracking-[0.16em] " + organisation.accent}>{organisation.category}</p><h3 id={organisation.id + "-organisation-heading"} className="mt-1 text-xl font-semibold leading-7 tracking-tight text-cream sm:text-2xl">{organisation.name}</h3><p className="mt-2 flex items-center gap-2 text-xs text-muted"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></svg>{organisation.location}, Indonesia</p></div>
            </div>
            <p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-xs text-cream/80"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-ice"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18" /></svg>{organisation.period}</p>
          </div>
          <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-8">
            <div className="min-w-0">
            <ol className="space-y-6">
              {organisation.roles.map(role => <li key={role.title} className={organisation.roles.length > 1 ? "relative border-l border-ice/25 pl-5" : ""}>
                {organisation.roles.length > 1 && <span aria-hidden="true" className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-ice" />}
                <h4 className={"text-base font-medium leading-6 " + organisation.accent}>{role.title}</h4>
                {organisation.roles.length > 1 && <p className="mt-1 text-xs text-muted">{role.period}</p>}
                <ul className="mt-3 space-y-2">{role.contributions.map(contribution => <li key={contribution} className="flex items-start gap-3 text-sm leading-6 text-cream/75"><span aria-hidden="true" className={"mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current " + organisation.accent} /><span>{contribution}</span></li>)}</ul>
              </li>)}
            </ol>
            <aside className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/20 p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-cream/50">Contribution highlight</p><p className={"mt-3 text-2xl font-semibold tracking-tight " + organisation.accent}>{organisation.highlight}</p><p className="mt-2 text-sm leading-6 text-cream/80">{organisation.highlightLabel}</p><p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-muted">{organisation.context}</p>

            </aside>
            </div>
            <div className="w-full max-w-[320px] self-start lg:max-w-none"><OrganisationPhoto id={organisation.id} name={organisation.name} /></div>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-5 py-4 sm:px-6"><p className="mr-2 text-[10px] uppercase tracking-[0.15em] text-cream/50">Skills applied</p>{organisation.tags.map(tag => <span key={tag} className={"rounded-md border border-white/15 bg-white/[0.025] px-2.5 py-1 text-xs " + organisation.accent}>{tag}</span>)}</div>
        </article>
      ))}
    </div>
  );
}