import Link from "next/link";
import { trainingServices } from "@/constants/services";

export const metadata = {
  title: "Training & Competency Development | PT Chem Energy Semesta",
  description:
    "Program pelatihan profesional peningkatan kompetensi di industri Oil & Gas, Petrochemical dengan standar nasional/internasional dan aspek HSSE."
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chem-blue/5 via-white to-chem-yellow/3 pt-24 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-6 inline-flex items-center rounded-full border border-chem-yellow/30 bg-chem-yellow/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-chem-yellow mr-2"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-chem-slate">
              Training
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-chem-slate leading-tight max-w-4xl">
            {trainingServices.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-chem-slate/75 max-w-3xl">
            {trainingServices.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-chem-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-chem-blue/25"
            >
              Daftar Sekarang
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

      {/* Programs Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              Program Pelatihan
            </h2>
            <p className="text-lg text-chem-slate/70">
              Berbagai program pelatihan tersertifikasi untuk peningkatan kompetensi di industri
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(trainingServices.programs).map(([key, program]) => (
              <div
                key={key}
                className="group rounded-2xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-8 hover:shadow-lg hover:border-chem-blue/30 transition-all"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-chem-blue to-chem-blue/80 text-white font-bold text-lg">
                    {program.trainings.length}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-chem-slate mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-chem-slate/70 mb-4">
                  {program.trainings.length} program pelatihan tersedia
                </p>
                <div className="pt-4 border-t border-chem-blue/10">
                  <p className="text-xs font-semibold text-chem-blue uppercase tracking-wider">
                    Lihat Detail →
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Training Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-blue/3 to-transparent">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-blue mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
                Program 1
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {trainingServices.programs.safety.title}
            </h2>
            <p className="text-lg text-chem-slate/70">
              Program dasar keselamatan kerja untuk semua level industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingServices.programs.safety.trainings.map((training, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-chem-blue/10 bg-white px-5 py-4 hover:shadow-md hover:border-chem-blue/30 transition-all flex items-start gap-3"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-chem-blue/20 text-chem-blue text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm font-medium text-chem-slate">{training}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Safety Training Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                Program 2
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {trainingServices.programs.processSafety.title}
            </h2>
            <p className="text-lg text-chem-slate/70">
              Program lanjutan untuk profesional keselamatan proses di industri migas dan kimia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingServices.programs.processSafety.trainings.map(
              (training, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-chem-green/10 bg-gradient-to-br from-white to-chem-green/3 px-5 py-4 hover:shadow-md hover:border-chem-green/30 transition-all flex items-start gap-3"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-chem-green/20 text-chem-green text-xs font-bold">
                    ⚡
                  </span>
                  <span className="text-sm font-medium text-chem-slate">
                    {training}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Environmental Training Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-green/3 to-transparent">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-green/20 bg-chem-green/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-green mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-green">
                Program 3
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {trainingServices.programs.environmental.title}
            </h2>
            <p className="text-lg text-chem-slate/70">
              Program pelatihan lingkungan dan keberlanjutan untuk industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingServices.programs.environmental.trainings.map(
              (training, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-chem-green/10 bg-white px-5 py-4 hover:shadow-md hover:border-chem-green/30 transition-all flex items-start gap-3"
                >
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-chem-green/20 text-chem-green text-xs font-bold">
                    🌱
                  </span>
                  <span className="text-sm font-medium text-chem-slate">
                    {training}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Security Training Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-yellow/20 bg-chem-yellow/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-yellow mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-slate">
                Program 4
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {trainingServices.programs.security.title}
            </h2>
            <p className="text-lg text-chem-slate/70">
              Program pelatihan keamanan industri dan respons keadaan darurat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingServices.programs.security.trainings.map((training, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-chem-yellow/10 bg-gradient-to-br from-white to-chem-yellow/5 px-5 py-4 hover:shadow-md hover:border-chem-yellow/30 transition-all flex items-start gap-3"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-chem-yellow/20 text-chem-slate text-xs font-bold">
                  🔒
                </span>
                <span className="text-sm font-medium text-chem-slate">
                  {training}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-blue/5 to-chem-blue/3">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-12 text-center">
            Mengapa Program Pelatihan Kami?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "👨‍🏫",
                title: "Instruktur Berpengalaman",
                description:
                  "Trainer bersertifikat internasional dengan pengalaman industri puluhan tahun di lapangan."
              },
              {
                icon: "📜",
                title: "Sertifikasi Terstandar",
                description:
                  "Program mengikuti standar internasional (ISO, ASME, API) dengan sertifikat yang diakui industri."
              },
              {
                icon: "🎯",
                title: "Praktis & Aplikatif",
                description:
                  "Kombinasi teori dan praktik langsung dengan studi kasus nyata dari industri."
              },
              {
                icon: "🏢",
                title: "Customized Programs",
                description:
                  "Program dapat disesuaikan dengan kebutuhan spesifik industri dan perusahaan Anda."
              },
              {
                icon: "📊",
                title: "Career Development",
                description:
                  "Mendukung pengembangan karir dengan program competency ladder yang terstruktur."
              },
              {
                icon: "🤝",
                title: "Support Berkelanjutan",
                description:
                  "Dukungan pasca-training, konsultasi, dan sesi refresher untuk memastikan implementasi sukses."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-chem-blue/10 bg-white p-8 text-center hover:shadow-lg hover:border-chem-blue/20 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-chem-slate mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-chem-slate/70 leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-chem-blue via-chem-blue to-chem-blue/90">
        <div className="mx-auto w-full max-w-6xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tingkatkan Kompetensi Tim Anda Hari Ini
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk diskusi kebutuhan pelatihan, jadwal, dan penawaran khusus untuk
            program in-house atau open training.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-chem-blue transition-transform hover:-translate-y-1 shadow-lg"
            >
              Daftar Sekarang
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
