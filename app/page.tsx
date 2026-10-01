"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "@/components/Navbar";
import PortfolioSections from "@/components/PortfolioSections";
import FloatingLabels from "@/components/FloatingLabels";

/* =========================================================
   TYPES
========================================================= */

type Star = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  alpha: number;
  speed: number;
  galaxy: boolean;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

type ShootingStar = {
  x: number;
  y: number;
  length: number;
  speed: number;
  alpha: number;
  angle: number;
};

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [entered, setEntered] = useState(false);

  /* =======================================================
     INTRO TIMER
  ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     GALAXY BACKGROUND
  ======================================================= */

  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;

    const context = canvasElement.getContext("2d");
    if (!context) return;

    const canvas: HTMLCanvasElement = canvasElement;
    const ctx: CanvasRenderingContext2D = context;

    let animationFrame = 0;

    let stars: Star[] = [];
    let ripples: Ripple[] = [];
    let shootingStars: ShootingStar[] = [];

    let galaxyRotation = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };
    function drawCursorGlow() {
    if (!mouse.active) return;

    // glow besar yang halus
    const glow = ctx.createRadialGradient(
      mouse.x,
      mouse.y,
      0,
      mouse.x,
      mouse.y,
      36
    );

    glow.addColorStop(0, "rgba(120,230,255,0.28)");
    glow.addColorStop(0.4, "rgba(80,210,255,0.12)");
    glow.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = glow;

    ctx.beginPath();
    ctx.arc(
      mouse.x,
      mouse.y,
      36,
      0,
      Math.PI * 2
    );
    ctx.fill();

    // titik inti
    ctx.beginPath();
    ctx.arc(
      mouse.x,
      mouse.y,
      5,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "rgba(180,245,255,0.95)";
    ctx.fill();
    }

    /* =====================================================
       RESIZE
    ===================================================== */

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      createStars();
    }

    /* =====================================================
       CREATE STARS
    ===================================================== */

    function createStars() {
      stars = [];

      /* Background stars */

      for (let i = 250; i > 0; i--) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.4,
          alpha: Math.random() * 0.55 + 0.15,
          speed: Math.random() * 0.02 + 0.005,
          galaxy: false,
        });
      }

      /* ===================================================
         SPIRAL GALAXY
      =================================================== */

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const arms = 4;

      for (let i = 0; i < 520; i++) {
  const radius =
    Math.pow(Math.random(), 1.25) * 500;

        const arm = i % arms;

          const spread =
    (Math.random() - 0.5) *
    (0.35 + (radius / 500) * 1.25);
    
        const angle =
          radius * 0.018 +
          (arm / arms) * Math.PI * 2 +
          (Math.random() - 0.5) * 0.95;

        const x =
          centerX +
          Math.cos(angle) * radius;

        const y =
          centerY +
          Math.sin(angle) * radius * 0.55;

        stars.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.02 + 0.005,
          galaxy: true,
        });
      }
    }

    /* =====================================================
       GRID
    ===================================================== */

    function drawGrid() {
      const size = 100;

      ctx.strokeStyle =
        "rgba(100,170,190,0.12)";

      ctx.lineWidth = 1;

      for (
        let x = 0;
        x < window.innerWidth;
        x += size
      ) {
        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(
          x,
          window.innerHeight
        );

        ctx.stroke();
      }

      for (
        let y = 0;
        y < window.innerHeight;
        y += size
      ) {
        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(
          window.innerWidth,
          y
        );

        ctx.stroke();
      }
    }

    /* =====================================================
       GALAXY GLOW
    ===================================================== */

    function drawGalaxyGlow() {
      const centerX =
        window.innerWidth / 2;

      const centerY =
        window.innerHeight / 2;

      const gradient =
        ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          400
        );

      gradient.addColorStop(
        0,
        "rgba(70,180,230,0.11)"
      );

      gradient.addColorStop(
        0.35,
        "rgba(40,120,170,0.045)"
      );

      gradient.addColorStop(
        0.7,
        "rgba(20,70,100,0.015)"
      );

      gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    }

    /* =====================================================
       WATER RIPPLE
    ===================================================== */

    function drawRipples() {
      for (const ripple of ripples) {
        /* Outer */

        ctx.beginPath();

        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.radius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(120,220,250,${ripple.alpha})`;

        ctx.lineWidth = 1.2;

        ctx.stroke();

        /* Inner */

        ctx.beginPath();

        ctx.arc(
          ripple.x,
          ripple.y,
          ripple.radius * 0.5,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(170,235,255,${
            ripple.alpha * 0.35
          })`;

        ctx.lineWidth = 0.8;

        ctx.stroke();

        ripple.radius += 1.8;

        ripple.alpha *= 0.94;
      }

      ripples = ripples.filter(
        (ripple) =>
          ripple.alpha > 0.025 &&
          ripple.radius < 75
      );
    }

    /* =====================================================
       SHOOTING STAR
    ===================================================== */

    function createShootingStar() {
      if (Math.random() > 0.004) {
        return;
      }

      shootingStars.push({
        x:
          Math.random() *
          window.innerWidth,

        y:
          Math.random() *
          window.innerHeight *
          0.45,

        length:
          Math.random() * 70 + 50,

        speed:
          Math.random() * 8 + 8,

        alpha: 1,

        angle:
          Math.PI / 4 +
          (Math.random() - 0.5) *
            0.25,
      });
    }

    function drawShootingStars() {
      createShootingStar();

      for (const star of shootingStars) {
        const endX =
          star.x -
          Math.cos(star.angle) *
            star.length;

        const endY =
          star.y -
          Math.sin(star.angle) *
            star.length;

        const gradient =
          ctx.createLinearGradient(
            star.x,
            star.y,
            endX,
            endY
          );

        gradient.addColorStop(
          0,
          `rgba(220,245,255,${star.alpha})`
        );

        gradient.addColorStop(
          1,
          "rgba(120,210,240,0)"
        );

        ctx.beginPath();

        ctx.moveTo(
          star.x,
          star.y
        );

        ctx.lineTo(
          endX,
          endY
        );

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 1.5;

        ctx.stroke();

        /* Head */

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          1.7,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(230,250,255,${star.alpha})`;

        ctx.fill();

        star.x +=
          Math.cos(star.angle) *
          star.speed;

        star.y +=
          Math.sin(star.angle) *
          star.speed;

        star.alpha *= 0.985;
      }

      shootingStars =
        shootingStars.filter(
          (star) =>
            star.alpha > 0.03 &&
            star.x <
              window.innerWidth + 100 &&
            star.y <
              window.innerHeight + 100
        );
    }

    /* =====================================================
       STARS + GALAXY ROTATION + MAGNET
    ===================================================== */

    function drawStars() {
      /*
        Kita lembutkan dibanding sebelumnya.
      */

      const magnetRadius = 170;
      const magnetStrength = 28;

      const centerX =
        window.innerWidth / 2;

      const centerY =
        window.innerHeight / 2;

      for (const star of stars) {
        let targetBaseX =
          star.baseX;

        let targetBaseY =
          star.baseY;

        /* Galaxy orbit */

        if (star.galaxy) {
          const dx =
            star.baseX - centerX;

          const dy =
            star.baseY - centerY;

          const distance =
            Math.sqrt(
              dx * dx +
              dy * dy
            );

          const originalAngle =
            Math.atan2(dy, dx);

            const normalizedDistance =
  Math.min(distance / 500, 1);

const orbitSpeed =
  0.75 + normalizedDistance * 0.65;

const orbit =
  galaxyRotation * orbitSpeed;
          targetBaseX =
            centerX +
            Math.cos(
              originalAngle + orbit
            ) *
              distance;

          targetBaseY =
            centerY +
            Math.sin(
              originalAngle + orbit
            ) *
              distance *
              0.55;
        }

        /* Magnet */

        const dx =
          mouse.x - targetBaseX;

        const dy =
          mouse.y - targetBaseY;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );

        let targetX =
          targetBaseX;

        let targetY =
          targetBaseY;

        if (
          mouse.active &&
          distance < magnetRadius &&
          distance > 0
        ) {
          const strength =
            Math.pow(
              1 -
                distance /
                  magnetRadius,
              1.6
            ) *
            magnetStrength;

          targetX =
            targetBaseX +
            (dx / distance) *
              strength;

          targetY =
            targetBaseY +
            (dy / distance) *
              strength;
        }

        /* Smooth return */

        star.x +=
          (targetX - star.x) *
          0.1;

        star.y +=
          (targetY - star.y) *
          0.1;

        /* Draw */

        ctx.beginPath();

        ctx.arc(
          star.x,
          star.y,
          star.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(180,230,250,${star.alpha})`;

        ctx.fill();
      }
    }

    /* =====================================================
       MOUSE
    ===================================================== */

    function handleMouseMove(
      event: MouseEvent
    ) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      mouse.active = true;

      /*
        Ripple dibuat jarang supaya
        tidak terlalu ramai.
      */

      if (Math.random() < 0.8) {
        ripples.push({
          x: mouse.x,
          y: mouse.y,
          radius: 7,
          alpha: 0.4,
        });
      }

      if (ripples.length > 6) {
        ripples.shift();
      }
    }

    function handleMouseLeave() {
      mouse.active = false;

      mouse.x = -1000;
      mouse.y = -1000;
    }

    /* =====================================================
       ANIMATE
    ===================================================== */

    function animate() {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      galaxyRotation += 0.00065;

      drawGrid();

      drawGalaxyGlow();

      drawRipples();

      drawShootingStars();

      drawStars();

      drawCursorGlow();
      animationFrame =
        requestAnimationFrame(
          animate
        );
    }

    /* =====================================================
       EVENTS
    ===================================================== */

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseout",
      handleMouseLeave
    );

    window.addEventListener(
      "resize",
      resize
    );

    resize();

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseout",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  /* =========================================================
     UI
  ========================================================= */

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-cream">

            {/* subtle green-blue background glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ delay: entered ? 1.25 : 0, duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 15% 20%,
              rgba(16, 185, 129, 0.14),
              transparent 60%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(59, 130, 246, 0.16),
              transparent 65%
            )
          `,
        }}
      />

      {/* =====================================================
          GALAXY BACKGROUND
          Tidak terlihat ketika intro.
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: entered ? 1 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none fixed inset-0"
      >
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </motion.div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar entered={entered} />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home" className={entered ? "relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-24 pt-48 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16 lg:pl-6 lg:pr-12 lg:pt-40" : "relative z-20 min-h-screen"}>

        {/* ===================================================
            PHOTO
        =================================================== */}

        <motion.div
          layout
          transition={{
            layout: {
              duration: 1.25,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            },
          }}
          className={
            entered
              ? `
                relative
                order-2
                mx-auto
                h-[430px]
                w-[min(340px,85vw)]

                rounded-[32px]
                border
                border-ice/20
                bg-zinc-900
                shadow-[0_0_80px_rgba(151,180,195,0.14)]
              `
              : `
                absolute
                left-1/2
                top-[35%]
                h-[180px]
                w-[180px]
                -translate-x-1/2
                -translate-y-1/2

                rounded-full
                border
                border-white/20
                bg-zinc-900
              `
          }
        >
          <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
          <motion.img
            src="/profile.jpg"
            alt="Taufik di Universitas Sains Malaysia"
            initial={{ scale: 2.8, x: "-19%", y: "17%" }}
            animate={{
              scale: entered ? 1 : 2.8,
              x: entered ? "0%" : "-19%",
              y: entered ? "0%" : "17%",
            }}
            transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ objectPosition: "69% 33%", transformOrigin: "69% 33%" }}
            fetchPriority="high"
            loading="eager"
            className="h-full w-full object-cover"
          />

          <motion.div
            animate={{
              opacity: entered ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />
          </div>
          <FloatingLabels entered={entered} />
        </motion.div>

        {/* ===================================================
            INFORMATION
        =================================================== */}

        <motion.div
          layout
          transition={{ layout: { duration: 1.25, ease: [0.22, 1, 0.36, 1] } }}
          className={entered ? "relative order-1 min-w-0 text-left" : "absolute left-1/2 top-[calc(35%+114px)] w-[90%] max-w-2xl -translate-x-1/2 text-center"}
        >
          <motion.h1 layout className={entered ? "text-6xl font-semibold tracking-tight sm:text-7xl" : "text-5xl font-semibold tracking-tight"}>
            Taufik
          </motion.h1>
          <motion.h2
            layout
            transition={{ layout: { duration: 1.25, ease: [0.22, 1, 0.36, 1] } }}
            className={entered
              ? "mt-5 max-w-2xl text-[22px] font-medium leading-relaxed text-ice sm:text-[26px]"
              : "mx-auto mt-4 max-w-2xl text-lg font-medium leading-relaxed text-ice sm:text-xl"}
          >
            Industrial Engineering Graduate | Data Analytics | Quality Management &amp; Process Improvement
          </motion.h2>
          <AnimatePresence>
            {entered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.75 }}
              >
                <p className="mt-7 max-w-[720px] text-base leading-8 text-cream/90">
                  Industrial Engineering graduate from Hasanuddin University with hands-on experience in data analysis, quality management, operational support, and laboratory coordination. Skilled in statistical analysis, data processing, data visualization, quality improvement, and problem-solving, supported by experience in HSE, research, academic laboratory operations, and organizational projects. Experienced in applying Python, SQL, SPSS, Minitab, Six Sigma DMAIC, FMEA, and process improvement methods to analyze data and support evidence-based decision-making. Eager to build a career in Data Analytics, Supply Chain, Inventory Management, Operations, Industrial Engineering, and Process Improvement.
                </p>
                <div className="institution-tags mt-7 flex min-w-0 flex-nowrap gap-1.5 overflow-x-auto px-1 py-2">
                  {[
                    "Universitas Hasanuddin",
                    "Universitas Sains Malaysia",
                    "PT. Industri Kapal Indonesia",
                    "Statistic and Quality Management Laboratory",
                  ].map((institution) => (
                    <span key={institution} className="institution-glow shrink-0 whitespace-nowrap rounded-lg border border-ice/20 bg-navy/70 px-2 py-1.5 text-[9px] leading-normal text-cream/85 backdrop-blur-lg xl:text-[10px]">
                      {institution}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/CV_TAUFIK_1.pdf" target="_blank" rel="noopener noreferrer" className="hero-glow-link" style={{ "--edge-color": "#97b4c3" } as React.CSSProperties}>
                    <span>View / Download CV</span><span aria-hidden="true">↗</span>
                  </a>
                  <a href="https://wa.me/6285756695562?text=Halo%20Taufik%2C%20saya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda." target="_blank" rel="noopener noreferrer" className="hero-glow-link" style={{ "--edge-color": "#97b4c3" } as React.CSSProperties}>
                    <span>WhatsApp</span><span aria-hidden="true">↗</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1A-WxkVGHyhljLnIwp_exi5pyRV0JnulP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hero-glow-link" style={{ "--edge-color": "#f1e9da" } as React.CSSProperties}>
                    <span>Data Analytics (BNSP)</span><span aria-hidden="true">↗</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
      <PortfolioSections />
    </main>
  );
}