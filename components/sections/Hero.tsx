"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#f0fdf4] to-[#ecfdf5]">
      <div className="absolute left-[18%] top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-chem-yellow/30 blur-3xl" />
      <div className="absolute right-[-4%] top-16 z-0 h-[360px] w-[360px] rounded-full bg-chem-green/35 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-chem-green/10 via-chem-green/5 to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 left-[-2%] hidden z-0 items-center lg:flex">
        <div
          className="h-[420px] w-[420px] -translate-x-10"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/assets/logo/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            opacity: 0.24,
            filter: "grayscale(1) contrast(1.08)",
            mixBlendMode: "multiply"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto grid min-h-[76vh] w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:grid-cols-12 lg:gap-6"
      >
        <div className="space-y-6 sm:space-y-7 lg:col-span-7">
          <span className="inline-flex rounded-full border border-chem-green/30 bg-chem-green/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-chem-green sm:text-sm">
            Environmental, Oil & Gas, Industrial Solutions
          </span>

          <h1 className="max-w-3xl text-[2.05rem] font-bold text-chem-slate sm:text-5xl lg:text-[3.45rem]">
            Solusi Inovatif &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-chem-green to-emerald-600">Berkelanjutan</span> di Bidang <span className="text-chem-green">Lingkungan</span> dan Migas
          </h1>

          <p className="max-w-2xl text-[1.02rem] leading-8 text-chem-slate/76 sm:text-lg">
            PT Chem Energy Semesta membantu perusahaan mencapai performa operasional yang aman,
            patuh regulasi, dan berdaya saing melalui konsultasi strategis, studi risiko, serta
            dukungan produk industri terpercaya.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/services"
              className="rounded-full bg-chem-green px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-chem-green/30 transition-all hover:shadow-xl hover:shadow-chem-green/40 hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              Jelajahi Layanan
            </a>
            <a
              href="/training"
              className="rounded-full border-2 border-chem-yellow bg-white px-7 py-3.5 text-sm font-bold text-chem-green transition-all hover:bg-chem-yellow/10 hover:shadow-md hover:shadow-chem-yellow/30"
            >
              Program Pelatihan
            </a>
          </div>

        </div>

        <div className="relative hidden h-[520px] lg:col-span-5 lg:block">
          <div className="absolute -inset-x-2 inset-y-10 rounded-[52px] bg-gradient-to-br from-chem-yellow/20 via-transparent to-chem-green/22 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[48px] shadow-[0_34px_70px_-30px_rgba(11,22,37,0.55)]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/assets/hero/bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)",
                transform: "scale(1.06)",
                transformOrigin: "center right"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#091729]/12 via-[#0d1f35]/5 to-white/20" />
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute left-6 top-6 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_16px_40px_-24px_rgba(11,22,37,0.55)] backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-chem-slate/55">Trusted Solutions</p>
              <p className="mt-1 text-sm font-semibold text-chem-slate">Environmental & Risk Advisory</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
