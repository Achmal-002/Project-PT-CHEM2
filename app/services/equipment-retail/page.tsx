import Link from "next/link";
import Image from "next/image";
import { equipmentRetailServices } from "@/constants/services";
import { retailProducts, hydraulicPump } from "@/constants/retail-products";

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

          {/* Product Grid - Responsive across all screen sizes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {retailProducts.map((product) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-xl border border-chem-blue/10 bg-white shadow-md hover:shadow-lg hover:border-chem-blue/30 transition-all duration-300"
              >
                {/* Product Image Container */}
                <div className="relative h-40 md:h-48 w-full bg-gradient-to-br from-chem-blue/5 to-chem-blue/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-chem-blue/0 group-hover:bg-chem-blue/5 transition-colors duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-5">
                  <h3 className="font-bold text-sm md:text-base text-chem-slate leading-tight mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-xs md:text-sm text-chem-slate/70 line-clamp-2 mb-3">
                      {product.description}
                    </p>
                  )}

                  {/* Category Badge */}
                  <div className="flex items-center justify-between pt-3 border-t border-chem-blue/10">
                    <span className="inline-flex items-center rounded-full bg-chem-blue/10 px-2.5 py-1 text-xs font-semibold text-chem-blue">
                      {product.category === "gas-detector" && "🔍 Gas Detector"}
                      {product.category === "safety-equipment" && "🛡️ Safety"}
                      {product.category === "accessory" && "⚙️ Accessory"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Product Count Summary */}
          <div className="mt-12 text-center">
            <p className="text-chem-slate/70">
              Menampilkan <span className="font-bold text-chem-blue">{retailProducts.length}</span> produk berkualitas tinggi dari brand terpercaya internasional
            </p>
          </div>
        </div>
      </section>

      {/* Hydraulic Pump Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="rounded-2xl border border-chem-blue/10 bg-gradient-to-br from-white via-[#fbfdff] to-[#f3f8ff] overflow-hidden">
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-5 lg:items-center">
              {/* Left: Product Image */}
              <div className="lg:col-span-2 relative h-64 md:h-80 bg-gradient-to-br from-chem-blue/10 to-chem-blue/5 flex items-center justify-center overflow-hidden">
                <Image
                  src={hydraulicPump.image}
                  alt={hydraulicPump.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain p-6 md:p-8"
                  priority
                />
              </div>

              {/* Right: Product Details */}
              <div className="lg:col-span-3 p-6 md:p-8">
                <div className="inline-flex items-center rounded-full border border-chem-blue/20 bg-chem-blue/5 px-4 py-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-chem-blue mr-2"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-chem-blue">
                    Featured Product
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-chem-slate mb-2">
                  {hydraulicPump.name}
                </h2>

                <p className="text-lg font-semibold text-chem-blue mb-4">
                  {hydraulicPump.brand}
                </p>

                <p className="text-base leading-7 text-chem-slate/80 mb-6">
                  {hydraulicPump.description}
                </p>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="rounded-lg border border-chem-blue/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-chem-blue/70 mb-1">
                      Max Supply Pressure
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-chem-slate">
                      {hydraulicPump.specifications.maxSupply}
                    </p>
                  </div>
                  <div className="rounded-lg border border-chem-blue/10 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-chem-blue/70 mb-1">
                      Max Output Pressure
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-chem-slate">
                      {hydraulicPump.specifications.maxOutputPressure}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-chem-slate mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {hydraulicPump.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm md:text-base text-chem-slate/80"
                      >
                        <span className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-chem-blue/20">
                          <span className="h-2 w-2 rounded-full bg-chem-blue"></span>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-chem-blue px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-chem-blue/25"
                >
                  Request Quote
                  <span>→</span>
                </Link>
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
