"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { trainingGroups } from "@/constants/training-detail";
import { useReducedMotion } from "framer-motion";

export function TrainingShowcase() {
  const [isMounted, setIsMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      id="training-overview"
      initial={isMounted && !reducedMotion ? { opacity: 0, y: 28 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-20"
    >
      <div className="mb-10 max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chem-green sm:text-sm">Training</p>
        <h2 className="mt-2 text-[1.9rem] font-semibold text-chem-slate sm:text-4xl">
          Program pelatihan dan sertifikasi untuk peningkatan kompetensi profesional
        </h2>
        <p className="mt-4 max-w-3xl text-[0.96rem] leading-8 text-chem-slate/72">
          PT Chem Energy Semesta menyediakan pelatihan yang berfokus pada keselamatan kerja,
          keselamatan proses, keamanan industri, dan pengelolaan lingkungan untuk mendukung operasi
          yang aman, patuh, dan siap audit.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {trainingGroups.map((group) => (
          <motion.article
            key={group.title}
            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.01 }}
            whileTap={reducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-chem-blue/10 bg-white/95 px-5 py-5 shadow-sm"
          >
            <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-chem-green to-chem-blue" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-chem-blue/70">Training Area</p>
            <h3 className="mt-1 text-[1.03rem] font-semibold leading-7 text-chem-slate">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center justify-start gap-2 text-sm leading-6 text-chem-slate/78">
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-chem-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
