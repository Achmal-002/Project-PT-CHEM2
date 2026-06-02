"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { partners } from "@/constants/partners";

export function PartnerSlider() {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const slideItems = useMemo(() => [...partners, ...partners], []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) {
        return;
      }

      const width = trackRef.current.scrollWidth / 2;
      setLoopWidth(width);
      if (Math.abs(x.get()) > width) {
        x.set(0);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [x]);

  useAnimationFrame((_, delta) => {
    if (reducedMotion || isPaused || loopWidth === 0) {
      return;
    }

    const speed = 42;
    const travel = (delta / 1000) * speed;
    const nextX = x.get() - travel;
    x.set(nextX <= -loopWidth ? nextX + loopWidth : nextX);
  });

  return (
    <motion.section
      id="partners-overview"
      initial={isMounted && !reducedMotion ? { opacity: 0, y: 28 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-20"
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chem-blue sm:text-sm">
            Strategic Partners
          </p>
          <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold text-chem-slate sm:text-4xl">
            Didukung mitra sertifikasi dan brand global terpercaya
          </h2>
        </div>
        <p className="max-w-md text-[0.95rem] leading-7 text-chem-slate/72">
          Slider bergerak otomatis dan berhenti saat diarahkan pointer untuk memudahkan pembacaan.
        </p>
      </div>

      <div
        className="overflow-hidden rounded-3xl border border-chem-blue/10 bg-gradient-to-r from-[#fdfefe] via-[#f1f8ff] to-[#edf5ff] py-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => setIsPaused(false)}
      >
        <motion.div ref={trackRef} className="flex w-max gap-4 px-5" style={{ x }}>
          {slideItems.map((partner, index) => (
            <article
              key={`${partner.name}-${index}`}
              className="w-[290px] rounded-2xl border border-chem-green/20 bg-white/95 p-5 shadow-sm"
            >
              <h3 className="text-[1.02rem] font-semibold text-chem-slate">{partner.name}</h3>
              <p className="mt-2 text-[0.93rem] leading-7 text-chem-slate/72">{partner.role}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
