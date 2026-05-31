import Link from "next/link";
import { businessDivisions } from "@/constants/business-divisions";

export const metadata = {
  title: "Service | PT Chem Energy Semesta",
  description: "Empat divisi bisnis PT Chem Energy Semesta: process safety and engineering, environmental, equipment and retail, serta training."
};

export default function ServicesPage() {
  return (
    <div className="bg-white pb-20 pt-10">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-12 pt-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chem-green">Service</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-chem-slate sm:text-5xl">
            Empat divisi bisnis dengan fokus yang jelas dan jalur detail yang lebih spesifik
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-chem-slate/75">
            Menu service sekarang mengikuti struktur bisnis utama perusahaan. Klik salah satu divisi
            untuk melihat ringkasan cepat, lalu lanjutkan ke halaman detail jika dibutuhkan.
          </p>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <div className="inline-flex items-center rounded-full border border-chem-blue/18 bg-chem-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-chem-blue">
            HAZOPS, PROPER, Honeywell, LSP
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-5">
        {businessDivisions.map((division) => (
          <article
            id={division.key}
            key={division.key}
            className="rounded-[28px] border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-6 shadow-sm sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-chem-green">
                  {division.eyebrow}
                </p>
                <h2 className="mt-2 text-[1.55rem] font-semibold text-chem-slate sm:text-[1.9rem]">
                  {division.label} ({division.partner})
                </h2>
              </div>

              <Link
                href={division.href}
                className="rounded-full border border-chem-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-chem-blue transition-colors hover:border-chem-green hover:text-chem-green"
              >
                Buka halaman
              </Link>
            </div>

            <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-chem-slate/75">
              {division.summary}
            </p>

            <ul className="mt-5 grid gap-2 md:grid-cols-3">
              {division.points.map((point) => (
                <li key={point} className="flex items-center justify-start gap-2 rounded-2xl border border-chem-blue/8 bg-white/75 px-4 py-3 text-sm leading-6 text-chem-slate/80">
                  <span className="r h-1.5 w-1.5 shrink-0 rounded-full bg-chem-blue" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-chem-blue px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Konsultasi
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-chem-blue/20 bg-white px-5 py-2.5 text-sm font-semibold text-chem-blue transition-colors hover:border-chem-green hover:text-chem-green"
              >
                Tentang Kami
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
