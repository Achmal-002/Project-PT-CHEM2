import Link from "next/link";
import Image from "next/image";
import { processSafetyServices } from "@/constants/services";

export const metadata = {
  title: "Process Safety & Engineering | PT Chem Energy Semesta",
  description:
    "Layanan process safety and engineering mencakup HAZOP/HAZID, system proteksi kebakaran, gas detector, dan perlindungan pernapasan."
};

export default function ProcessSafetyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chem-blue/5 via-white to-chem-blue/3 pt-24 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-6 inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
              Process Safety
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-chem-slate leading-tight max-w-4xl">
            {processSafetyServices.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-chem-slate/75 max-w-3xl">
            {processSafetyServices.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-chem-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-chem-blue/25"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-chem-blue/30 bg-white px-6 py-3 text-sm font-semibold text-chem-blue transition-colors hover:border-chem-blue/60 hover:bg-chem-blue/5"
            >
              Kembali ke Services
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              Layanan Utama
            </h2>
            <p className="text-lg text-chem-slate/70">
              Rangkaian lengkap layanan keselamatan proses untuk industri Anda
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSafetyServices.subServices.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-6 hover:shadow-lg hover:border-chem-green/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chem-green to-chem-blue flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <svg
                    className="w-5 h-5 text-chem-green opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-chem-slate leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAZOP & HAZID Detail Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-blue/3 to-chem-green/3">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                    Featured Service
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
                  {processSafetyServices.details.hazopHazid.title}
                </h2>
                <p className="text-base leading-7 text-chem-slate/75 mb-6">
                  {processSafetyServices.details.hazopHazid.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              {/* Objectives */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-chem-slate mb-6">
                  Tujuan Konsultasi
                </h3>
                <div className="space-y-4">
                  {processSafetyServices.details.hazopHazid.objectives.map(
                    (objective, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-chem-blue/10 bg-white p-5 hover:border-chem-green/30 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-chem-slate mb-2 flex items-center gap-2">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-chem-green/20 text-chem-green text-xs font-bold">
                            ✓
                          </span>
                          {objective.title}
                        </h4>
                        <p className="text-sm text-chem-slate/70 leading-6">
                          {objective.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Benefits */}
              <div className="rounded-2xl border border-chem-green/20 bg-gradient-to-br from-chem-green/10 to-chem-green/5 p-8 mb-10">
                <h3 className="text-xl font-bold text-chem-slate mb-6">
                  Manfaat Layanan
                </h3>
                <ul className="space-y-3">
                  {processSafetyServices.details.hazopHazid.benefits.map(
                    (benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-chem-slate/80"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-chem-green shrink-0"></span>
                        <span className="text-sm leading-6">{benefit}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/assets/ss-photo/hazop-hazid.jpg"
                  alt="Process Safety Inspection"
                  width={600}
                  height={400}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section with Images */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-blue/5 to-transparent">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-12">
            Layanan Tambahan
          </h2>

          {/* Fire Protection Engineering */}
          <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="order-2 lg:order-1">
              <Image
                src="/assets/ss-photo/fire-protection-engineering.jpeg"
                alt="Fire Protection Engineering"
                width={500}
                height={400}
                className="rounded-2xl shadow-md object-cover w-full hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-chem-slate mb-4">
                Sistem Proteksi Kebakaran
              </h3>
              <p className="text-base leading-7 text-chem-slate/75 mb-6">
                Desain dan analisis sistem proteksi kebakaran untuk fasilitas industri dengan standar internasional.
              </p>
              <ul className="space-y-3">
                {[
                  "Perencanaan sistem sprinkle dan hydrant",
                  "Analisis fire separation dan compartmentalization",
                  "Rekomendasi perlengkapan proteksi aktif dan pasif",
                  "Compliance dengan standar NFPA dan FM Global"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-chem-slate/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-chem-green shrink-0"></span>
                    <span className="text-sm leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Site Survey */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl font-bold text-chem-slate mb-4">
                Survei Teknis Lapangan
              </h3>
              <p className="text-base leading-7 text-chem-slate/75 mb-6">
                Inspeksi menyeluruh terhadap kondisi teknis, identifikasi gap keselamatan, dan rekomendasi perbaikan.
              </p>
              <ul className="space-y-3">
                {[
                  "Inspeksi pressure vessel dan piping systems",
                  "Evaluasi sistem instrumentasi dan kontrol",
                  "Penilaian human factors dan prosedur operasi",
                  "Dokumentasi findings dan action plan",
                  "Follow-up monitoring implementasi"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-chem-slate/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-chem-blue shrink-0"></span>
                    <span className="text-sm leading-5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="/assets/ss-photo/technical-site-survey.jpg"
                alt="Technical Site Survey"
                width={500}
                height={400}
                className="rounded-2xl shadow-md object-cover w-full hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-12 text-center">
            Mengapa Memilih Kami?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Expertise & Pengalaman",
                description:
                  "Tim konsultan bersertifikat dengan pengalaman puluhan tahun di industri migas, kimia, dan farmasi."
              },
              {
                icon: "📊",
                title: "Metodologi Terbukti",
                description:
                  "Menggunakan standar internasional (IEC, ASME, API) dalam setiap studi keselamatan proses."
              },
              {
                icon: "🔒",
                title: "Komitmen Keselamatan",
                description:
                  "Fokus utama pada identifikasi risiko dan implementasi kontrol untuk operasi yang aman."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-8 text-center hover:shadow-lg hover:border-chem-blue/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-chem-slate mb-3">
                  {item.title}
                </h3>
                <p className="text-chem-slate/70 leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-chem-blue via-chem-blue to-chem-blue/90">
        <div className="mx-auto w-full max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Meningkatkan Keselamatan Proses Anda?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan diskusi tentang kebutuhan
            keselamatan proses industri Anda.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-chem-blue transition-transform hover:-translate-y-1 shadow-lg"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
