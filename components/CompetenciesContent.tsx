"use client";



type Level = "Advanced" | "Applied" | "Foundation";
const levels: Record<Level, { bars: number; description: string }> = {
  Advanced: { bars: 3, description: "Repeated use across projects, research, or professional work." },
  Applied: { bars: 2, description: "Hands-on use in a project, coursework, or supporting work." },
  Foundation: { bars: 1, description: "Working knowledge with room for further practical application." },
};
const groups = [
  {
    id: "analytics", title: "Data & Analytics", symbol: "01", color: "text-ice", summary: "From raw data to decisions people can act on.",
    skills: [
      { name: "Excel & Data Processing", level: "Advanced" as Level },
      { name: "SPSS / Minitab", level: "Advanced" as Level },
      { name: "Data Visualization / Power BI", level: "Applied" as Level },
      { name: "Python & Machine Learning", level: "Applied" as Level },
      { name: "SmartPLS & Path Analysis", level: "Applied" as Level },
      { name: "Word & PowerPoint", level: "Applied" as Level },
      { name: "SQL", level: "Foundation" as Level },
    ],
    evidence: "10,000 sales transactions analyzed; 200 student responses modeled; LSTM / BiLSTM research.",
    link: "automotive-project-heading", linkLabel: "Explore analytics project",
  },
  {
    id: "engineering", title: "Industrial Engineering", symbol: "02", color: "text-emerald-300", summary: "Better processes, safer operations, and smarter resource planning.",
    skills: [
      { name: "Quality Management & Six Sigma", level: "Advanced" as Level },
      { name: "FMEA & Pareto Analysis (80/20)", level: "Advanced" as Level },
      { name: "Continuous & Process Improvement", level: "Advanced" as Level },
      { name: "Production Management", level: "Applied" as Level },
      { name: "Supply Chain Management / MRP", level: "Applied" as Level },
      { name: "Business Analysis", level: "Applied" as Level },
      { name: "HIRARC", level: "Foundation" as Level },
    ],
    evidence: "194,544 production units evaluated; 10 lot-sizing methods compared; shipyard safety risks prioritized.",
    link: "tempe-project-heading", linkLabel: "Explore improvement project",
  },
  {
    id: "creative", title: "Creative & Communication", symbol: "03", color: "text-violet-300", summary: "Clear visual communication for reports, events, and digital content.",
    skills: [
      { name: "Figma & Canva", level: "Applied" as Level },
      { name: "CapCut", level: "Applied" as Level },
      { name: "Adobe Illustrator", level: "Foundation" as Level },
      { name: "Adobe After Effects", level: "Applied" as Level },
      { name: "Adobe Photoshop", level: "Foundation" as Level },
    ],
    evidence: "Produced certificates, digital publications, and event materials for professional engineering events.",
    link: "pii-experience-heading", linkLabel: "Explore communication experience",
  },
];

export default function CompetenciesContent() {


  return (
    <div className="mt-6 space-y-8 sm:mt-8">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="relative overflow-hidden rounded-3xl border border-ice/30 bg-gradient-to-br from-ice/10 via-navy/40 to-black/20 p-6 sm:p-7">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ice/10 blur-3xl" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-ice">Professional certification</p>
          <div className="mt-4 flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ice/25 bg-ice/10 text-ice">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7"><circle cx="12" cy="8" r="5" /><path d="m8 12-1 9 5-3 5 3-1-9m-6-4 1.5 1.5L14 7" /></svg>
            </span>
            <div><h3 className="text-2xl font-semibold text-cream">Data Analyst</h3><p className="mt-1 text-sm leading-6 text-ice">Badan Nasional Sertifikasi Profesi (BNSP)</p></div>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-cream/65">A professional credential supporting a practical focus on data analysis and evidence-based decision making.</p>
        </article>
        <article className="rounded-3xl border border-violet-300/25 bg-gradient-to-br from-violet-400/10 via-navy/40 to-black/20 p-6 sm:p-7">
          <p className="text-[11px] uppercase tracking-[0.2em] text-violet-300">English proficiency</p>
          <div className="mt-4 flex items-end justify-between gap-4"><div><h3 className="text-2xl font-semibold text-cream">TOEFL</h3><p className="mt-1 text-sm text-violet-200/80">English language test score</p></div><p className="text-5xl font-semibold tracking-tight text-violet-200">550</p></div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-cream/65">Supporting research reading, academic collaboration, and communication across international learning environments.</p>
        </article>
      </div>
      <div>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-[11px] uppercase tracking-[0.2em] text-ice">Skills in practice</p><h3 className="mt-2 text-2xl font-medium tracking-tight text-cream">An analytical mindset. An engineering toolkit.</h3></div>
          <a href="#project" className="w-fit rounded-full border border-ice/25 px-4 py-2 text-xs text-ice transition-colors hover:bg-ice/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">View project evidence <span aria-hidden="true">↗</span></a>
        </div>
        <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-3">
          {groups.map(group => <article key={group.id} aria-labelledby={group.id + "-skills-heading"} className="flex min-w-0 flex-col rounded-3xl border border-white/15 bg-navy/25 p-5 backdrop-blur-md transition-colors hover:border-ice/35 sm:p-6">
            <div className={"flex items-center justify-between " + group.color}><span className="text-xs uppercase tracking-[0.15em]">Capability {group.symbol}</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d={group.id === "analytics" ? "M4 20V10m8 10V4m8 16v-7M2 20h20" : group.id === "engineering" ? "m12 3 8 4v10l-8 4-8-4V7l8-4Zm0 9 8-5m-8 5L4 7m8 5v9" : "m4 16 12-12 4 4L8 20H4v-4Zm9-9 4 4M4 20h16"} /></svg></div>
            <h4 id={group.id + "-skills-heading"} className="mt-4 text-xl font-medium leading-7 text-cream">{group.title}</h4>
            <p className="mt-2 min-h-12 text-sm leading-6 text-cream/60">{group.summary}</p>
            <ul className="mt-5 space-y-0 divide-y divide-white/10">
              {group.skills.map(skill => <li key={skill.name} className="flex items-center justify-between gap-3 py-3"><span className="text-[13px] leading-5 text-cream/85">{skill.name}</span><div className="shrink-0 text-right"><span className={"text-[10px] font-medium " + group.color}>{skill.level}</span><div aria-hidden="true" className="mt-1 flex justify-end gap-1">{[1, 2, 3].map(bar => <span key={bar} className={"h-1 w-4 rounded-full " + (bar <= levels[skill.level].bars ? "bg-current " + group.color : "bg-white/10")} />)}</div></div></li>)}
            </ul>
            <div className="mt-auto pt-5"><div className="rounded-2xl border border-white/10 bg-black/20 p-4"><p className={"text-[10px] uppercase tracking-[0.15em] " + group.color}>Applied evidence</p><p className="mt-2 text-xs leading-5 text-cream/65">{group.evidence}</p><a href={"#" + group.link} className={"mt-3 inline-block text-xs underline decoration-current/30 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream " + group.color}>{group.linkLabel} <span aria-hidden="true">↗</span></a></div></div>
          </article>)}
        </div>
        <details className="mt-5 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 text-xs leading-5 text-cream/60">
          <summary className="cursor-pointer font-medium text-cream/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">How to read the skill levels</summary>
          <p className="mt-3">Self-assessed levels based on the projects, research, coursework, and experience presented in this portfolio.</p>
          <dl className="mt-3 grid gap-3 sm:grid-cols-3">{(Object.keys(levels) as Level[]).map(level => <div key={level}><dt className="font-medium text-ice">{level}</dt><dd className="mt-1">{levels[level].description}</dd></div>)}</dl>
        </details>
      </div>
    </div>
  );
}