import Link from "next/link";
import { equipmentRetailServices } from "@/constants/services";

export const metadata = {
  title: "Equipment & Retail | PT Chem Energy Semesta",
  description:
    "Penyedia peralatan fire protection, gas detector, dan industrial equipment dari brand ternama internasional seperti Gunnebo dan Honeywell."
};

export default function EquipmentRetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-chem-yellow/10 via-white to-chem-yellow/5 pt-24 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-6 inline-flex items-center rounded-full border border-chem-yellow/30 bg-chem-yellow/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-chem-yellow mr-2"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-chem-slate">
              Equipment & Retail
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-chem-slate leading-tight max-w-4xl">
            {equipmentRetailServices.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-chem-slate/75 max-w-3xl">
            {equipmentRetailServices.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-chem-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-chem-blue/25"
            >
              Hubungi Penjualan
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

      {/* Fire Safety Equipment Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-chem-blue mr-2"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
                    Category 1
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
                  {equipmentRetailServices.fireEquipment.title}
                </h2>
                <p className="text-base leading-7 text-chem-slate/75 mb-6">
                  {equipmentRetailServices.fireEquipment.description}
                </p>
                <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2">
                  <span className="font-semibold text-sm text-chem-blue">
                    Partner: {equipmentRetailServices.fireEquipment.mainPartner}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipmentRetailServices.fireEquipment.services.map(
                  (service, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-5 hover:shadow-md hover:border-chem-blue/30 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-chem-blue shrink-0 group-hover:bg-chem-green transition-colors"></span>
                        <p className="text-sm font-medium text-chem-slate leading-6">
                          {service}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Detector Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-blue/3 to-chem-yellow/3">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-chem-blue mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
                Category 2
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {equipmentRetailServices.gasDetector.title}
            </h2>
            <p className="text-lg text-chem-slate/70 max-w-3xl">
              {equipmentRetailServices.gasDetector.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipmentRetailServices.gasDetector.products.map((product, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-chem-blue/10 bg-white px-5 py-4 hover:shadow-md hover:border-chem-blue/30 transition-all flex items-start gap-3"
              >
                <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-chem-blue to-chem-green/80 text-white text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm font-medium text-chem-slate">
                  {product}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hydraulic Pump Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="rounded-2xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] p-8 md:p-12">
            <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-chem-blue mr-2"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
                Category 3
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-4">
              {equipmentRetailServices.hydraulicPump.title}
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-chem-slate mb-4">
                  Produk
                </h3>
                <p className="text-lg font-semibold text-chem-blue mb-6 inline-block px-4 py-3 rounded-lg bg-chem-blue/10 border border-chem-blue/20">
                  {equipmentRetailServices.hydraulicPump.product}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-chem-slate mb-4">
                  Spesifikasi Teknis
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-chem-blue/10 bg-white p-4">
                    <p className="text-sm text-chem-slate/60 mb-1">
                      Pasokan Maksimum
                    </p>
                    <p className="text-lg font-bold text-chem-blue">
                      {
                        equipmentRetailServices.hydraulicPump.specifications
                          .maxSupply
                      }
                    </p>
                  </div>
                  <div className="rounded-lg border border-chem-blue/10 bg-white p-4">
                    <p className="text-sm text-chem-slate/60 mb-1">
                      Tekanan Output Maksimum
                    </p>
                    <p className="text-lg font-bold text-chem-blue">
                      {
                        equipmentRetailServices.hydraulicPump.specifications
                          .maxOutputPressure
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-chem-yellow/5 to-chem-blue/5">
        <div className="mx-auto w-full max-w-6xl px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-12 text-center">
            Mengapa Memilih Kami?
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🏭",
                title: "Brand Terpercaya",
                description:
                  "Distributor resmi dari manufaktur internasional terkemuka dengan garansi dan dukungan teknis penuh."
              },
              {
                icon: "🔧",
                title: "Layanan Purna Jual",
                description:
                  "Instalasi, maintenance, kalibrasi, dan spare parts dengan teknisi bersertifikat dan responsif."
              },
              {
                icon: "⚡",
                title: "Solusi Lengkap",
                description:
                  "Satu tempat untuk semua kebutuhan peralatan keselamatan fire protection dan gas detection."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-chem-blue/10 bg-white p-8 text-center hover:shadow-lg hover:border-chem-blue/20 transition-all"
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
            Butuh Peralatan Keselamatan Berkualitas?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Hubungi tim penjualan kami untuk konsultasi kebutuhan peralatan,
            penawaran harga, dan jadwal pengiriman yang fleksibel.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-semibold text-chem-blue transition-transform hover:-translate-y-1 shadow-lg"
          >
            Hubungi Tim Penjualan
          </Link>
        </div>
      </section>
    </div>
  );
}
