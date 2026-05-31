import Link from "next/link";
import { environmentalServices } from "@/constants/services";

export const metadata = {
  title: "Environmental & Sustainability Services | PT Chem Energy Semesta",
  description:
    "Layanan lingkungan meliputi konsultasi PROPER, monitoring lingkungan, noise study, dan evaluasi higienis industri."
};

export default function EnvironmentalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chem-green/5 via-white to-chem-green/3 pt-24 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-6 inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
              Environmental
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-chem-slate leading-tight max-w-4xl">
            {environmentalServices.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-chem-slate/75 max-w-3xl">
            {environmentalServices.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-chem-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-chem-green/25"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-chem-green/30 bg-white px-6 py-3 text-sm font-semibold text-chem-green transition-colors hover:border-chem-green/60 hover:bg-chem-green/5"
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
              Solusi komprehensif untuk kepatuhan dan keberlanjutan lingkungan
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {environmentalServices.subServices.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-chem-green/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f0fdf4] p-6 hover:shadow-lg hover:border-chem-green/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-chem-green to-chem-green/80 flex items-center justify-center text-white font-semibold">
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

      {/* PROPER Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-green/3 to-chem-blue/3">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start mb-12">
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                    Service 1
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
                  {environmentalServices.details.proper.title}
                </h2>
                <p className="text-base leading-7 text-chem-slate/75 mb-6">
                  {environmentalServices.details.proper.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-chem-slate mb-6">
                  Fitur Utama
                </h3>
                <div className="space-y-3">
                  {environmentalServices.details.proper.features.map(
                    (feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-chem-green/10 bg-white p-4 hover:border-chem-green/30 transition-all"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-chem-green shrink-0"></span>
                        <span className="text-sm text-chem-slate/80 leading-6">
                          {feature}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-chem-green/20 bg-gradient-to-br from-chem-green/10 to-chem-green/5 p-8">
                <h3 className="text-lg font-bold text-chem-slate mb-4">
                  Manfaat
                </h3>
                <ul className="space-y-3">
                  {environmentalServices.details.proper.benefits.map(
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
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                Service 2
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {environmentalServices.details.monitoring.title}
            </h2>
            <p className="text-lg text-chem-slate/70 max-w-3xl">
              {environmentalServices.details.monitoring.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {environmentalServices.details.monitoring.scopes.map(
              (scope, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-chem-green/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f0fdf4] p-8 hover:shadow-lg hover:border-chem-green/30 transition-all"
                >
                  <h3 className="text-lg font-bold text-chem-slate mb-4 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-chem-green"></span>
                    {scope.category}
                  </h3>
                  <ul className="space-y-3">
                    {scope.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-3 text-chem-slate/80"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-chem-green/60 shrink-0"></span>
                        <span className="text-sm leading-5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <div className="mt-10 rounded-2xl border border-chem-green/20 bg-gradient-to-br from-chem-green/10 to-chem-green/5 p-8">
            <h3 className="text-lg font-bold text-chem-slate mb-4">
              Manfaat Monitoring Lingkungan
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {environmentalServices.details.monitoring.benefits.map(
                (benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-chem-green shrink-0"></span>
                    <span className="text-sm text-chem-slate/80 leading-6">
                      {benefit}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Noise Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-green/5 via-white to-chem-green/3">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="rounded-2xl border border-chem-green/20 bg-white p-8 md:p-12">
            <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                Service 3
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {environmentalServices.details.noiseStudy.title}
            </h2>

            <p className="text-lg leading-8 text-chem-slate/75 max-w-3xl mb-8">
              {environmentalServices.details.noiseStudy.description}
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Pengukuran Akurat",
                  description:
                    "Menggunakan peralatan kalibrasi standar internasional"
                },
                {
                  title: "Analisis Mendalam",
                  description:
                    "Identifikasi sumber kebisingan dan dampaknya terhadap K3"
                },
                {
                  title: "Rekomendasi Praktis",
                  description:
                    "Solusi teknik dan administratif untuk pengendalian kebisingan"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-chem-green/10 bg-gradient-to-br from-chem-green/5 to-white p-6"
                >
                  <h3 className="font-bold text-chem-slate mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-chem-slate/70">
                    {item.description}
                  </p>
                </div>
              ))}
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
                icon: "🌱",
                title: "Sustainability Focus",
                description:
                  "Komitmen pada pembangunan berkelanjutan dan inovasi hijau untuk industri Anda."
              },
              {
                icon: "📋",
                title: "Compliance Expertise",
                description:
                  "Memahami regulasi KLHK, PROPER, dan standar lingkungan nasional/internasional."
              },
              {
                icon: "📊",
                title: "Data-Driven Solutions",
                description:
                  "Menggunakan data terukur untuk rekomendasi perbaikan yang efektif dan terverifikasi."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-chem-green/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f0fdf4] p-8 text-center hover:shadow-lg hover:border-chem-green/20 transition-all"
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-chem-green via-chem-green to-chem-green/90">
        <div className="mx-auto w-full max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mulai Perjalanan Keberlanjutan Anda Hari Ini
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan rencana aksi peningkatan
            performa lingkungan perusahaan Anda.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-chem-green transition-transform hover:-translate-y-1 shadow-lg"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
