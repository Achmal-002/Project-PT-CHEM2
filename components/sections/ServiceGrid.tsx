"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { businessDivisions } from "@/constants/business-divisions";

export function ServiceGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id="business-divisions"
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-14 md:py-16"
    >
      <div className="mb-10 grid items-end gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-chem-yellow sm:text-sm">
            Business Divisions
          </p>
          <h2 className="mt-3 max-w-3xl text-[1.9rem] font-bold text-chem-slate sm:text-4xl">
            Empat divisi bisnis utama dengan <span className="text-chem-green">ruang lingkup</span> yang jelas dan terfokus
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-chem-slate/75">
            Ringkasan ini menampilkan struktur layanan secara singkat. Detail lengkap tersedia di
            halaman masing-masing divisi agar navigasi lebih cepat dan fokus.
          </p>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div className="inline-flex items-center rounded-full border border-chem-green/30 bg-chem-green/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-chem-green">
            Detail ada di tiap halaman
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {businessDivisions.map((division) => (
          <motion.article
            key={division.key}
            whileHover={reducedMotion ? undefined : { y: -5 }}
            whileTap={reducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-3xl border-2 border-chem-green bg-gradient-to-br from-white to-chem-green/5 p-6 shadow-lg hover:shadow-xl hover:shadow-chem-green/20 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-chem-yellow">
                {division.eyebrow}
              </p>
              <span className="rounded-full border-2 border-chem-yellow bg-chem-yellow/10 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-chem-yellow">
                {division.partner}
              </span>
            </div>

            <h3 className="mt-4 text-[1.25rem] font-bold text-chem-slate">{division.label}</h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-chem-slate/78">{division.summary}</p>

            <ul className="mt-6 space-y-3">
              {division.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-chem-slate">
                  <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-chem-green" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Link
                href={division.href}
                className="inline-flex items-center rounded-full bg-chem-green px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700 hover:-translate-y-1 shadow-lg shadow-chem-green/30 hover:shadow-xl"
              >
                Lihat detail
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
