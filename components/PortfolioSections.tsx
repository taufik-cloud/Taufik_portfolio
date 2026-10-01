"use client";

import { motion, useReducedMotion } from "motion/react";

const sections = [
  { id: "about", title: "About", subtitle: "A little more about me.", description: "Bagian ini akan berisi perkenalan, latar belakang pendidikan, dan hal-hal yang ingin saya kerjakan.", cards: ["My background", "What drives me", "Beyond the numbers"] },
  { id: "experience", title: "Experience", subtitle: "Learning by doing.", description: "Tempat untuk perjalanan profesional, pengalaman magang, dan cerita pembelajaran. Isinya masih sementara.", cards: ["Experience 01", "Experience 02", "Experience 03"] },
  { id: "project", title: "Project", subtitle: "From questions to solutions.", description: "Kumpulan proyek akan ditampilkan di sini. Untuk sekarang, kartu ini membantu melihat layout dan animasinya.", cards: ["Analytics project", "Process improvement", "Research & exploration"] },
  { id: "competencies", title: "Competencies", subtitle: "Tools, methods, and curiosity.", description: "Bagian untuk keterampilan teknis dan cara kerja. Detail kompetensi dapat ditambahkan nanti.", cards: ["Data & analytics", "Industrial engineering", "Problem solving"] },
  { id: "organisation", title: "Organisation", subtitle: "Growing together.", description: "Cerita tentang organisasi, kolaborasi, dan kontribusi akan mengisi bagian ini.", cards: ["Organisation 01", "Community & teamwork", "Leadership & contribution"] },
];

export default function PortfolioSections() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className="portfolio-section flex min-h-[85svh] flex-col justify-center border-t border-white/10 py-24 lg:py-32">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reducedMotion ? 0 : 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-ice/70">
              <span>0{index + 1} / {section.title}</span>
              <span className="h-px w-16 bg-ice/30" />
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{section.title}</h2>
                <p className="mt-4 text-lg text-cream/70">{section.subtitle}</p>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted">{section.description}</p>
            </div>
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
          </motion.div>
        </section>
      ))}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-muted">
        <span>Taufik &bull; Industrial Engineering, Unhas</span>
        <a href="#home" className="text-ice/70 transition-colors hover:text-ice">Back to top &uarr;</a>
      </footer>
    </div>
  );
}