"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import CompetenciesContent from "./CompetenciesContent";
import ContactContent from "./ContactContent";
import OrganisationsContent, { OrganisationPhoto } from "./OrganisationsContent";
import { useEffect, useState } from "react";

const sections = [
  { id: "about", title: "About", subtitle: "A little more about my background, education, and research.", description: "Bagian ini akan berisi perkenalan, latar belakang pendidikan, dan hal-hal yang ingin saya kerjakan.", cards: ["My background", "What drives me", "Beyond the numbers"] },
  { id: "experience", title: "Experience", subtitle: "A collection of professional experiences, internships, and hands-on projects where I applied analytical, technical, and problem-solving skills to real-world challenges", description: "Tempat untuk perjalanan profesional, pengalaman magang, dan cerita pembelajaran. Isinya masih sementara.", cards: ["Experience 01", "Experience 02", "Experience 03"] },
  { id: "organisation", title: "Organisations", subtitle: "", description: "", cards: ["Organisation 01", "Community & teamwork", "Leadership & contribution"] },
  { id: "project", title: "Project", subtitle: "Engineering Projects & Real Operational Solutions", description: "", cards: ["Analytics project", "Process improvement", "Research & exploration"] },
  { id: "competencies", title: "Competencies", subtitle: "", description: "", cards: ["Data & analytics", "Industrial engineering", "Problem solving"] },
];

const coursework = [
  "Statistics & Quality Management", "Lean Manufacturing", "Quality Engineering",
  "Business Statistics", "Data Analytics", "Production Management",
  "Statistical Process Control (SPC)", "Operations Research", "Supply Chain Management",
];
const methods = ["LSTM", "BiLSTM", "Deep Learning", "Supervised and Unsupervised Learning", "Data Mining", "Latent Dirichlet Allocation", "DINESERV", "Service Quality", "Natural Language Processing"];
const languages = [
  { name: "Bahasa Indonesia", proficiency: "Native Speaker", credential: "Native" },
  { name: "English", proficiency: "Professional Proficiency", credential: "TOEFL 550" },
];
const aboutCard = "min-w-0 rounded-[20px] border border-white/10 bg-navy/25 p-6 backdrop-blur-md transition-[transform,border-color] duration-300 hover:border-ice/30 motion-safe:hover:-translate-y-0.5 sm:p-8";
const aboutLabel = "text-[11px] font-medium uppercase tracking-[0.18em] text-ice";

function AcademicIcon({ kind }: { kind: "school" | "book" | "location" | "award" }) {
  const paths = {
    school: "M12 3 1 9l4 2.18v6L12 21l7-3.82v-6L21 10v7h2V9L12 3Zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9ZM17 16l-5 2.73L7 16v-3.73L12 15l5-2.73V16Z",
    book: "M21 4c-2.3-.7-5.8-.5-9 1-3.2-1.5-6.7-1.7-9-1L1 5v15l2-1c2.5-.8 5.5-.5 9 1 3.5-1.5 6.5-1.8 9-1l2 1V5l-2-1ZM11 17.5c-2.5-.9-5.2-1.2-8-.7V6c2.8-.5 5.5-.2 8 1v10.5Zm10-.7c-2.8-.5-5.5-.2-8 .7V7c2.5-1.2 5.2-1.5 8-1v10.8Z",
    location: "M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 17c-2.5-3.1-5-6.9-5-10a5 5 0 0 1 10 0c0 3.1-2.5 6.9-5 10Zm0-12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    award: "M12 2a7 7 0 0 0-4 12.74V22l4-2 4 2v-7.26A7 7 0 0 0 12 2Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-2 11.71a7 7 0 0 0 4 0v3.05l-2-1-2 1v-3.05Z",
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-ice/80"><path d={paths[kind]} /></svg>;
}
function PaperPublication({ headingId, university = "usm" }: { headingId: string; university?: "hasanuddin" | "usm" }) {
  const isHasanuddin = university === "hasanuddin";
  const paperMethods = isHasanuddin ? ["Six Sigma DMAIC", "Pareto Analysis", "P-Chart", "DPMO", "Fault Tree Analysis (FTA)", "Failure Mode and Effects Analysis (FMEA)", "Kaizen 5S", "5W+1H", "Quality Cost Analysis", "Continuous Improvement"] : methods;
  return (
        <article aria-labelledby={headingId} className={aboutCard}>
          <h3 id={headingId} className={aboutLabel}>Paper publication</h3>
          <p className="mt-3 text-lg font-medium leading-relaxed tracking-tight text-cream sm:text-xl sm:leading-relaxed">{isHasanuddin ? "Pengendalian Kualitas Produk Tempe Menggunakan Metode Six Sigma DMAIC dan Analisis Biaya Kualitas di Pabrik Tempe XYZ Makassar" : "Sentiment Analysis Using Deep Learning (LSTM and BiLSTM) and Topic Modeling Based on DINESERV Dimensions to Improve Service Quality in a Quick-Service Restaurant"}</p>
          <p className="mt-2 text-sm leading-6 text-ice">{isHasanuddin ? "TALENTA Conference Series: Energy & Engineering, 2026" : "International Journal for Quality Research, 2026"}</p>
          {isHasanuddin ? (
            <ul className="mt-3 list-disc space-y-2 pl-4 text-justify text-sm leading-6 text-muted marker:text-ice/60">
              <li>Analyzed <strong className="font-medium text-cream/90">194,544 production units</strong> and <strong className="font-medium text-cream/90">305 defective products</strong> across <strong className="font-medium text-cream/90">30 production days</strong> to evaluate production quality and identify critical defect types.</li>
              <li>Applied <strong className="font-medium text-cream/90">Six Sigma DMAIC, Pareto analysis, P-Chart, DPMO, FTA, and FMEA</strong> to measure process performance, identify root causes, and prioritize quality improvement opportunities.</li>
              <li>Developed <strong className="font-medium text-cream/90">continuous improvement recommendations using Kaizen 5S and 5W+1H</strong>, supported by quality-cost analysis to address waste, rework, and other quality-related costs.</li>
            </ul>
          ) : (
            <>
          <p className="mt-2 border-l-2 border-ice/25 pl-4 text-sm leading-6 text-muted">Conducted with academic collaboration involving a lecturer from Universiti Sains Malaysia (USM).</p>
          <p className="mt-3 text-justify text-sm leading-6 text-muted">Scraped 13,800 customer reviews from metadata. LSTM and BiLSTM models were used to identify sentiment patterns, with BiLSTM achieving 96.83% accuracy. Negative reviews were then analyzed using LDA topic modeling across five DINESERV dimensions: Responsiveness, Reliability, Tangibles, Empathy, and Assurance to identify actionable service issues. The most prominent complaints involved long waiting times and slow order fulfillment, followed by food quality and order accuracy, facility cleanliness and comfort, employee attentiveness, and service information clarity.</p>
            </>
          )}
          <div className="mt-4">
            <h4 className={aboutLabel}>Methods</h4>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {paperMethods.map((method) => <li key={method} className="about-badge-glow rounded-md border border-ice/15 px-2.5 py-1 text-xs leading-5 text-ice/90">{method}</li>)}
            </ul>
          </div>
        </article>
  );
}
function AboutContent() {
  return (
    <div>
      <div className="flex items-center gap-4 sm:gap-6">
<h2 className="text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl lg:text-[52px]">Universitas Hasanuddin</h2>
<Image src="/unhas-logo.png" alt="Logo Universitas Hasanuddin" width={64} height={64} className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16" />
</div>
      <div className="mt-2 grid items-center gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs leading-5 text-cream/90">
            <AcademicIcon kind="school" />
            <span>Bachelor of Industrial Engineering (S.T.)</span>
          </p>
          <p className="mt-1 flex items-start gap-2 text-xs leading-5 text-muted">
            <AcademicIcon kind="location" />
            <span>Makassar, South Sulawesi <span className="mx-1">&bull;</span> Aug 2022 &ndash; Sep 2026</span>
          </p>
          <p className="mt-1 inline-flex items-center gap-2 rounded-md border border-ice/20 bg-ice/5 px-2.5 py-1 text-xs">
            <AcademicIcon kind="award" />
            <span className="text-ice">GPA</span><span className="text-cream">3.69 / 4.00</span>
          </p>
        </div>
        <aside aria-labelledby="languages-heading" className="min-w-0 w-full justify-self-end rounded-[20px] border border-white/10 bg-navy/25 px-4 py-2 backdrop-blur-md lg:max-w-[440px]">
          <h3 id="languages-heading" className={aboutLabel}>Communication</h3>
          <dl className="mt-2 grid grid-cols-1 gap-y-2 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:divide-x sm:divide-white/10">
            {languages.map((language) => (
              <div key={language.name} className="min-w-0 sm:pr-2 sm:last:pl-3 sm:last:pr-0">
                <dt className="text-sm font-medium text-cream">{language.name}</dt>
                <dd className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[11px] leading-5 text-muted"><span>{language.proficiency}</span><span className="about-badge-glow rounded-md border border-ice/20 bg-ice/5 px-2 py-0.5 text-xs text-cream">{language.credential}</span></dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
      <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <PaperPublication headingId="research-heading" university="hasanuddin" />
        <div className="flex min-w-0 flex-col">
          <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-ice">
            <AcademicIcon kind="book" />Relevant Coursework
          </h3>
          <ul className="mt-3 grid flex-1 auto-rows-fr grid-cols-1 gap-1">
            {coursework.map((course) => (
              <li key={course} className="flex min-w-0 items-center rounded-lg border border-ice/20 bg-navy/20 px-2.5 py-1 text-[11px] leading-4 text-cream/90 backdrop-blur-sm transition-colors hover:border-ice/50 hover:bg-navy/60">{course}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className="mt-14 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
        <div className="flex items-center gap-4 sm:gap-6">
<h2 className="text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl lg:text-[52px]">Universiti Sains Malaysia</h2>
<Image src="/usm-logo-transparent.png" alt="Logo Universiti Sains Malaysia" width={80} height={80} className="h-14 w-14 shrink-0 object-contain sm:h-20 sm:w-20" />
</div>
        <p className="mt-3 flex items-center gap-2 text-xs leading-5 text-cream/90">
          <AcademicIcon kind="school" /><span>International Student Exchange</span>
        </p>
        <p className="mt-1 flex items-start gap-2 text-xs leading-5 text-muted">
          <AcademicIcon kind="location" /><span>Penang, Malaysia <span className="mx-1">&bull;</span> March&ndash;August 2026</span>
        </p>
        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <PaperPublication headingId="usm-research-heading" />
        <div className="min-w-0 self-start">
            <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-ice">
              <AcademicIcon kind="book" />Relevant Coursework
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-1">
              {["Business Statistics", "Production Management", "Data Analytics", "Environmental Management"].map((course) => (
                <li key={course} className="flex min-w-0 items-center rounded-lg border border-ice/20 bg-navy/20 px-2.5 py-1 text-[11px] leading-4 text-cream/90 backdrop-blur-sm transition-colors hover:border-ice/50 hover:bg-navy/60">{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const experiences = [
  {
    id: "iki", company: "PT Industri Kapal Indonesia (PERSERO)", type: "Internship",
    role: "Occupational Health, Safety, and Environment (HSE) Intern", period: "February–July 2025",
    focus: ["HSE Data", "Risk Assessment", "Audit Documentation", "Continuous Improvement"],
    methods: ["Excel", "Word", "Regression Analysis", "FMEA", "Hierarchy of Controls"],
    contributions: [
      "Managed HSE data, incident records, risk assessments, and audit documentation to support safety evaluation and continuous improvement.",
      "Conducted research on HSE management effectiveness using regression analysis, FMEA, and Hierarchy of Controls to identify key risks and recommend improvement.",
    ],
  },
  {
    id: "laboratory", company: "Statistical And Quality Management Laboratory", type: "Laboratory",
    role: "Lab Practicum Coordinator & Assistant Coordinator", period: "October 2023–June 2025",
    focus: ["Statistical Analysis", "Quality Management", "Research", "Practicum Coordination"],
    methods: ["Excel", "SPSS", "SmartPLS", "Minitab", "Six Sigma DMAIC", "FTA", "FMEA", "Kaizen", "Cost of Quality"],
    contributions: [
      "Taught and guided students in statistical analysis and quality management, including data collecting, processing, and interpretation using EXCEL, SPSS, SmartPLS, and Minitab for practicum objectives.",
      "Co-authored a published research paper on quality control using Six Sigma DMAIC, FTA, FMEA, Kaizen, and Cost of Quality analysis to identify production defects and develop continuous improvement recommendations.",
      "Coordinated Industrial Engineering laboratory practicums for approximately 90 students, ensuring effective session execution, procedural compliance, and providing direct academic guidance throughout the learning process.",
    ],
  },
  {
    id: "pii", company: "Persatuan Insinyur Indonesia (PII)", type: "Professional Association",
    role: "Data Administration and Event Operations", period: "December 2023–December 2024",
    focus: ["Participant Data", "Event Documentation", "Digital Publications", "Online Session Hosting"],
    methods: ["Excel", "Word", "Figma", "Canva"],
    contributions: [
      "Managed participant data entry, verification, and event documentation for 800+ engineers across multiple professional engineering events.",
      "Produced certificates, digital publications, and supporting event materials while coordinating administrative and communication needs.",
      "Served as an online session host for engineer candidates presenting their professional projects, managing presentation flow and assisting participants throughout each session.",
    ],
  },
];

function ExperienceContent() {
  return <div className="mt-10 space-y-6 sm:mt-12">{experiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}</div>;
}
function ExperienceCard({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <article aria-labelledby={`${experience.id}-experience-heading`} className="overflow-hidden rounded-[20px] border border-ice/25 bg-navy/25 backdrop-blur-md">
      <div className="flex flex-col gap-4 border-b border-white/10 p-4 sm:px-6 sm:py-5 lg:flex-row lg:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-16 shrink-0 items-center justify-center self-center sm:h-14 sm:w-[72px]">
              <Image src={experience.id === "iki" ? "/iki-logo-transparent.png" : experience.id === "laboratory" ? "/statistics-lab-logo-transparent.png" : "/pii-logo.png"} alt={"Logo " + experience.company} width={72} height={56} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 id={`${experience.id}-experience-heading`} className="text-xl font-semibold tracking-tight text-cream sm:text-2xl">{experience.company}</h3>
              <span className="rounded-full border border-ice/20 bg-ice/5 px-3 py-1 text-sm text-ice">{experience.type}</span>
            </div>
            <p className="mt-1.5 max-w-xl text-lg font-medium leading-7 text-ice">{experience.role}</p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 lg:items-end">
          <p className="inline-flex w-fit items-center gap-2 rounded-lg border border-ice/20 bg-white/[0.03] px-3 py-1.5 text-sm text-cream">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-ice"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18" /></svg>
            {experience.period}
          </p>
          <p className="flex items-center gap-2 text-sm text-muted"><AcademicIcon kind="location" />Makassar, South Sulawesi</p>
        </div>
      </div>
      <div className="grid items-start gap-5 p-4 sm:px-6 sm:py-5 lg:grid-cols-[minmax(0,1fr)_220px]">
        <div className="flex flex-wrap items-center gap-2 lg:col-span-2">
          <p className={`${aboutLabel} mr-2`}>Key focus</p>
          {experience.focus.map((focus) => <span key={focus} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-cream/90">{focus}</span>)}
        </div>
        <h4 className={`text-xs font-medium uppercase tracking-[0.12em] text-ice lg:col-span-2`}>Responsibilities &amp; contributions</h4>
        <ul className="space-y-2">
          {experience.contributions.map((contribution) => (
            <li key={contribution} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-black/20 px-3 py-2.5 text-base leading-6 text-cream/90 sm:px-4">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-1 h-5 w-5 shrink-0 text-ice"><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>
              <span>{contribution}</span>
            </li>
          ))}
        </ul>
        <div className="w-full max-w-[280px] lg:max-w-none"><OrganisationPhoto id={experience.id} name={experience.company} caption="Experience moments" /></div>
        <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-3 lg:col-span-2">
          <p className="mr-2 text-sm text-muted">Applied methods</p>
          {experience.methods.map((method) => <span key={method} className="rounded-md border border-ice/15 px-2.5 py-1 text-sm text-ice">{method}</span>)}
        </div>

      </div>
    </article>
  );
}
const projects = [
  {
    "id": "automotive",
    "title": "National Automotive Sales Intelligence",
    "image": "/automotive-sales-dashboard.png",
    "alt": "National automotive sales Power BI dashboard",
    "description": "Built an interactive national automotive sales dashboard to transform 10,000 transaction records into actionable insights on sales performance, transaction status, branch contribution, product categories, and geographic distribution across Indonesia.",
    "scope": "Analyzed 10,000 transactions across 10 branches, covering monthly performance, completion trends, category contribution, payment behavior, branch performance, and national sales distribution. The dashboard recorded Rp2.768T in completed sales from 8,966 completed transactions with an 89.66% completion rate.",
    "tech": [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Modeling",
      "Sales Analytics",
      "Geospatial Analysis"
    ]
  },
  {
    "id": "tempe",
    "title": "Six Sigma Quality Improvement for Tempe Production",
    "company": "UD Tempe Asli HB Makasar",
    "image": "/tempe-six-sigma-paper.png",
    "alt": "TALENTA Conference Series paper on Six Sigma DMAIC and quality cost analysis for tempe production",
    "description": "Analyzed 194,544 production units and 305 defects over 30 days to evaluate process quality and identify critical defect patterns. Six Sigma DMAIC was used to measure process capability, trace root causes, prioritize risks, and develop continuous improvement actions.",
    "scope": "Defect prioritization, process stability analysis, DPMO and sigma measurement, root-cause analysis, FMEA risk prioritization, Kaizen improvement planning, and quality-cost evaluation.",
    "tech": [
      "Six Sigma DMAIC",
      "Pareto",
      "SPC",
      "DPMO",
      "FTA",
      "FMEA",
      "Kaizen 5S",
      "5W+1H",
      "Cost of Quality",
      "Minitab",
      "Excel"
    ]
  },
  {
    "id": "sentiment",
    "title": "Customer Sentiment & Service Quality Intelligence",
    "image": "/customer-sentiment-paper.png",
    "alt": "Research paper on LSTM and BiLSTM sentiment analysis and DINESERV service quality",
    "description": "Built a deep learning and topic-modeling pipeline to analyze customer reviews, classify sentiment, and uncover recurring service-quality issues in a quick-service restaurant.",
    "scope": "Processed 7,450 recent Google Maps reviews from a metadata pool of approximately 14,200 reviews, compared LSTM and BiLSTM for sentiment classification, and applied LDA across five DINESERV dimensions to identify actionable service-quality problems.",
    "tech": [
      "Python",
      "TensorFlow/Keras",
      "LSTM",
      "BiLSTM",
      "NLP",
      "LDA",
      "DINESERV",
      "Google Colab"
    ]
  },
  {
    "id": "smk3",
    "title": "Statistical Analysis of SMK3 Effectiveness and Occupational Safety Risk",
    "company": "PT INDUSTRI KAPAL INDONESIA (PERSERO)",
    "image": "/smk3-safety-analysis.png",
    "alt": "SPSS regression output, FMEA hazard prioritization, and fault tree analysis for shipyard occupational safety",
    "description": "Evaluated SMK3 effectiveness and operational safety risks in shipyard activities using worker-perception data, statistical analysis, FMEA, and FTA to support continuous improvement toward zero accident.",
    "scope": "Analyzed questionnaire data from 33 workers, tested the influence of K3 management support and K3 program implementation on zero-accident performance, and prioritized hazards across welding, crane operations, work at height, confined spaces, and ship-maintenance activities.",
    "tech": [
      "SPSS",
      "Excel",
      "Regression Analysis",
      "FMEA",
      "FTA",
      "RPN",
      "Hierarchy of Controls",
      "SMK3",
      "Occupational Safety"
    ]
  },
  {
    "id": "facility-layout",
    "title": "Facility Layout Optimization Using Systematic Layout Planning",
    "company": "UD Naga Mas Kecap Dua Jempol",
    "image": "/facility-layout-optimization.png",
    "alt": "Activity relationship diagram, activity relationship chart, and measured food-production facility layout",
    "description": "Redesigned the production facility layout for UD Naga Mas Kecap Dua Jempol, a manufacturer of soy sauce, chili sauce, tomato sauce, vinegar, and syrup. Applied SLP to improve material flow, reduce transportation waste, and create a more efficient production sequence.",
    "scope": "Evaluated 14 functional areas through on-site measurement, ARC, and ARD analysis, then developed two alternative layouts using process-layout and product-flow approaches.",
    "tech": [
      "SLP",
      "ARC",
      "ARD",
      "Process Layout",
      "Product Layout",
      "Facility Planning",
      "Material Handling"
    ]
  },
  {
    "id": "forecasting",
    "title": "Time-Series Forecasting & Production Cost Optimization",
    "image": "/forecasting-production-cost.png",
    "alt": "Spreadsheet comparing forecasting accuracy and Level, Chase, and Subcontract production-planning strategies",
    "description": "Built a demand forecasting and production-planning model using 18 months of historical data to improve forecast accuracy and identify the most cost-efficient production strategy.",
    "scope": "Compared four forecasting approaches using MAD, MSE, MFE, and MAPE, selected a 5-month Moving Average for 12-month demand planning, and evaluated Level, Subcontract, and Chase strategies based on production capacity and cost.",
    "result": "Forecasted 16,356 nail units and 10,131 wood units for the next planning horizon. Chase Strategy achieved the lowest modeled production cost at Rp465.95M and Rp462.28M, delivering up to ~63% cost reduction versus alternative planning strategies.",
    "tech": [
      "Time-Series Forecasting",
      "Moving Average",
      "Exponential Smoothing",
      "MAPE",
      "Aggregate Planning",
      "Chase Strategy",
      "MPS",
      "Cost Optimization"
    ]
  },
  {
    "id": "mrp-lot-sizing",
    "title": "MRP Lot-Sizing Analysis & Inventory Cost Optimization",
    "image": "/mrp-lot-sizing-analysis.png",
    "alt": "Material requirements planning spreadsheet comparing lot-sizing calculations and inventory costs for nails and wood",
    "description": "Built a 12-month material requirements planning model to optimize ordering schedules and inventory cost across two production materials.",
    "scope": "Compared 10 lot-sizing techniques using demand, ordering cost, holding cost, gross/net requirements, and planned order releases to determine the most cost-efficient replenishment strategy for each material.",
    "result": "LTC and PPB achieved the lowest modeled cost for nails at Rp13.43M, while LUC and Silver Meal minimized wood inventory cost to Rp22.20M—up to ~61% lower than alternative methods evaluated.",
    "tech": [
      "MRP",
      "Inventory Optimization",
      "EOQ",
      "LUC",
      "LTC",
      "PPB",
      "Silver Meal",
      "Wagner-Whitin",
      "Lot Sizing"
    ]
  },
  {
    "id": "student-satisfaction-sem",
    "title": "Structural Equation Modeling of Student Satisfaction Drivers",
    "image": "/student-satisfaction-sem.png",
    "alt": "SPSS ANOVA and coefficient tables, SmartPLS student satisfaction path model, and direct and mediated hypothesis test results",
    "description": "Built a PLS-SEM model using 200 student responses to quantify how department facilities and service quality influence student satisfaction through direct and mediated relationships.",
    "scope": "Modeled three latent constructs across 17 survey indicators, validated the measurement model, evaluated R²/Q² and model fit, and tested direct and indirect effects using SmartPLS bootstrapping.",
    "result": "Facilities significantly improved service quality (β = 0.474, p < 0.001), while service quality significantly influenced student satisfaction (β = 0.396, p < 0.001). A significant mediation effect was also identified through the path Facilities → Service Quality → Satisfaction (β = 0.188, p < 0.001).",
    "tech": [
      "PLS-SEM",
      "Excel",
      "SmartPLS",
      "SPSS",
      "Path Analysis",
      "Bootstrapping",
      "Mediation Analysis",
      "R² / Q²",
      "Validity & Reliability"
    ]
  }
];

function ProjectContent() {
  return <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>;
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [tab, setTab] = useState<"scope" | "result" | "tech">("scope");
  const tabs: ("scope" | "result" | "tech")[] = "result" in project && project.result ? ["scope", "result", "tech"] : ["scope", "tech"];
  const reducedMotion = useReducedMotion();
  return (
    <>
      <motion.article
        whileHover={reducedMotion ? undefined : { y: -8, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="project-card group relative overflow-hidden rounded-3xl border border-[#5cdbff]/25 bg-navy/15 backdrop-blur-md"
        aria-labelledby={project.id + "-project-heading"}
      >
        <div className="overflow-hidden border-b border-ice/10 bg-midnight/60">
          <Image src={project.image} alt={project.alt} width={1530} height={863} sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw" className="project-preview aspect-video w-full object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06] motion-safe:group-hover:-rotate-[0.5deg]" />
        </div>
        <div className="p-5 sm:p-6">
          <h3 id={project.id + "-project-heading"} className="text-xl font-medium leading-snug tracking-tight text-cream">{project.title}</h3>
          {"company" in project && project.company && <p className="mt-2 text-sm font-medium leading-5 text-ice">{project.company}</p>}
          <p className="mt-3 text-justify text-[13px] leading-6 text-cream/60">{project.description}</p>
          <div className="mt-5 flex gap-2" role="tablist" aria-label="Project details">
            {tabs.map((value) => <button key={value} type="button" role="tab" id={project.id + "-tab-" + value} aria-controls={project.id + "-panel-" + value} aria-selected={tab === value} onClick={() => setTab(value)} className={"rounded-full px-4 py-1.5 text-xs uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream " + (tab === value ? "bg-cream text-navy" : "bg-white/5 text-cream/60 hover:bg-white/10 hover:text-cream")}>{value}</button>)}
          </div>
          <div className="mt-4" role="tabpanel" id={project.id + "-panel-" + tab} aria-labelledby={project.id + "-tab-" + tab}>
            {tab === "scope" ? <p className="text-justify text-sm leading-6 text-cream/60">{project.scope}</p> : tab === "result" && "result" in project ? <p className="text-justify text-sm leading-6 text-cream/60">{project.result}</p> : <ul className="flex flex-wrap gap-2">{project.tech.map((tool) => <li key={tool} className="rounded-full border border-[#5cdbff]/30 bg-[#5cdbff]/10 px-3 py-1.5 text-xs text-[#5cdbff]">{tool}</li>)}</ul>}
          </div>
        </div>
      </motion.article>
    </>
  );
}

export default function PortfolioSections() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const selector = '[class*="rounded"][class*="border"]';
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("material-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    const register = () => {
      document.querySelectorAll<HTMLElement>(".portfolio-section " + selector).forEach((element) => {
        if (element.closest("nav, header") || element.classList.contains("material-surface")) return;
        element.classList.add("material-surface");
        // Reveal outer cards only, so nested badges do not animate all at once.
        if (!reducedMotion && !element.parentElement?.closest(selector)) observer.observe(element);
      });
    };
    register();
    const mutations = new MutationObserver(register);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.querySelectorAll(".material-surface").forEach((element) => element.classList.remove("material-surface", "material-revealed"));
    };
  }, [reducedMotion]);
  return (
    <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`portfolio-section flex flex-col border-t border-white/10 ${section.id === "about" ? "justify-start pb-8 pt-5 lg:pb-10 lg:pt-6" : section.id === "project" ? "justify-start pt-8 pb-12 lg:pt-10 lg:pb-16" : section.id === "experience" ? "justify-start pt-8 pb-8 lg:pt-10 lg:pb-10" : (section.id === "competencies" || section.id === "organisation") ? "justify-start pt-6 pb-10 lg:pt-8 lg:pb-12" : "min-h-[85svh] justify-center py-24 lg:py-32"}`}>
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: reducedMotion ? 0 : 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-ice/70">
              <span>0{index + 1} / {section.title}</span>
              <span className="h-px w-16 bg-ice/30" />
            </div>
            {section.id !== "about" && (
            <div className={section.id === "project" ? "flex flex-col items-center text-center" : "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"}>
              <div>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{section.title}</h2>
                {section.subtitle && <p className="mt-4 max-w-3xl text-base leading-7 text-cream/70">{section.subtitle}</p>}
              </div>
              {section.id !== "about" && section.id !== "experience" && section.description && <p className="max-w-md text-sm leading-7 text-muted">{section.description}</p>}
            </div>
            )}
            {section.id === "about" ? <AboutContent /> : section.id === "experience" ? <ExperienceContent /> : section.id === "project" ? <ProjectContent /> : section.id === "competencies" ? <CompetenciesContent /> : section.id === "organisation" ? <OrganisationsContent /> : (
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {section.cards.map((title, cardIndex) => (
                <motion.article
                  key={title}
                  whileHover={reducedMotion ? undefined : { y: -6 }}
                  className="group min-h-56 rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm transition-colors hover:border-ice/25 hover:bg-ice/[0.04]"
                >
                  <span className="text-xs text-ice/50">0{cardIndex + 1}</span>
                  <h3 className="mt-8 text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">Konten sementara. Detail dan informasi akan ditambahkan di sini.</p>
                  <div aria-hidden="true" className="mt-6 h-px w-10 bg-gradient-to-r from-steel/50 to-ice/50 transition-all group-hover:w-20" />
                </motion.article>
              ))}
            </div>
            )}
          </motion.div>
        </section>
      ))}
      <ContactContent />
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-muted">
        <span>Taufik &bull; Industrial Engineering, Unhas</span>
        <a href="#home" className="text-ice/70 transition-colors hover:text-ice">Back to top &uarr;</a>
      </footer>
    </div>
  );
}