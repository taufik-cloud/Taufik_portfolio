"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const menu = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Competencies", href: "#competencies" },
  { label: "Organisation", href: "#organisation" },
];

export default function Navbar({ entered = true }: { entered?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
      const current = menu.filter((item) => {
        const section = document.getElementById(item.href.slice(1));
        return section && section.getBoundingClientRect().top <= 180;
      }).at(-1);
      setActive(current?.href ?? "");
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0 }}
      animate={{
        opacity: entered ? 1 : 0,
        top: scrolled ? 0 : 24,
        width: scrolled ? "100%" : "92%",
        borderRadius: scrolled ? 0 : 24,
        backgroundColor: scrolled ? "rgba(9, 22, 40, 0.94)" : "rgba(20, 41, 69, 0.58)",
        borderColor: scrolled ? "rgba(151, 180, 195, 0.08)" : "rgba(151, 180, 195, 0.18)",
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
        opacity: { delay: entered && !reducedMotion ? 0.65 : 0, duration: reducedMotion ? 0 : 0.75 },
      }}
      style={{ pointerEvents: entered ? "auto" : "none" }}
      inert={!entered}
      className="fixed left-1/2 z-50 -translate-x-1/2 border text-cream shadow-[0_12px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-5">
        <a href="#home" className="w-fit rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice">
          <span className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">Taufik</span>
            <span className="rounded-md border border-ice/20 bg-ice/5 px-2 py-0.5 text-[10px] font-medium text-ice">S.T</span>
          </span>
          <span className="mt-1 block text-xs text-muted">Industrial Engineering &bull; Unhas</span>
        </a>
        <div className="navbar-menu flex min-w-0 items-center gap-1 overflow-x-auto overflow-y-hidden pb-1 lg:gap-2 lg:pb-1">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={`relative shrink-0 rounded-xl px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ice ${active === item.href ? "bg-ice/10 text-ice" : "text-muted hover:bg-white/5 hover:text-cream"}`}
            >
              {item.label}
              {active === item.href && (
                <motion.span layoutId="active-menu" transition={{ duration: reducedMotion ? 0 : 0.3 }} className="absolute inset-x-3 -bottom-1 h-px bg-ice" />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}