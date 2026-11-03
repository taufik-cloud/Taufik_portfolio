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

const certifications = [
  {
    title: "Supply Chain Management and Analytics",
    organization: "Unilever",
    date: "September 2026",
    description: "Supply chain management and analytics training.",
    href: "https://drive.google.com/file/d/1QHpCyT5oHlMMCR0-X6Z14igyyKdY7cWk/view?usp=sharing",
  },
  {
    title: "Bootcamp Data Analyst",
    organization: "DQLab",
    date: "Agustus - September 2026",
    description: "Modules: Excel, SQL, Python, Power BI, data visualization, data cleaning, data analysis, DAX, Power Query, and data management. Cases: AutoPulse and DQLab Store sales, XYZ.com customer analytics, branch sales distribution, customer acquisition and retention, sales and revenue analysis, SQL exercises, and Power BI dashboards.",
    href: "https://drive.google.com/file/d/1we5A0kFpuNYL0OFLMbddmlioP6DMmiRI/view?usp=sharing",
  },
  {
    title: "Bootcamp Data Analyst",
    organization: "Karirnex by PT Ebiz Karisma Internasional",
    date: "Agustus 2026",
    description: "Modules: introduction to data analytics, data formatting and cleansing, systematic data analysis, Google BigQuery and SQL, Google Colab and Python, and data visualization and dashboards with Power BI.",
    href: "https://drive.google.com/file/d/1hVRlALLdF7ZKn4qzrQ_D0WfHD8_Ua4nU/view?usp=sharing",
  },
  {
    title: "Data Analyst Certification",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "Professional certification",
    description: "Credential in data analysis supporting evidence-based decision making.",
    href: "https://drive.google.com/file/d/1A-WxkVGHyhljLnIwp_exi5pyRV0JnulP/view?usp=sharing",
  },
  {
    title: "TOEFL",
    organization: "English language proficiency | Score 550",
    date: "English proficiency test",
    description: "English language proficiency for research, academic collaboration, and international learning environments.",
    href: "https://drive.google.com/file/d/1QmSoivHM8DHsizo_WzSnasP3gCZb1CJr/view?usp=sharing",
  },
];
export default function CompetenciesContent() {


  return (
    <div className="mt-6 space-y-8 sm:mt-8">
      <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {certifications.map((certification) => (
          <article key={certification.title + certification.organization} className="flex min-w-0 flex-col rounded-3xl border border-ice/20 bg-gradient-to-br from-ice/[0.07] via-navy/40 to-black/20 p-4 transition-colors hover:border-ice/40 sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-ice">Certificate / Training</p>
            <h3 className="mt-3 text-base font-semibold leading-6 text-cream">{certification.title}</h3>
            <p className="mt-1 text-xs leading-5 text-ice/90">{certification.organization}</p>
            <p className="mt-2 text-[10px] text-cream/45">{certification.date}</p>
            <p className="mt-3 flex-1 text-[11px] leading-5 text-cream/65">{certification.description}</p>
            <a href={certification.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ice/25 px-3 py-2 text-[11px] text-ice transition-colors hover:bg-ice/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream">
              View certificate <span aria-hidden="true">&#8599;</span>
            </a>
          </article>
        ))}
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