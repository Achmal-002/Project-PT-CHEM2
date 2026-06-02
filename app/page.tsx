import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export const metadata: Metadata = {
  title: "Chem Energy Semesta - Konsultasi PROPER, HAZOP Study, Distributor Gas Detector",
  description:
    "PT Chem Energy Semesta menghadirkan Process Safety and Engineering, layanan environmental, equipment and retail, serta training untuk sektor industri.",
  keywords: [
    "Process Safety and Engineering",
    "Konsultasi PROPER",
    "HAZOP Study Indonesia",
    "Distributor Gas Detector",
    "Training",
    "Honeywell"
  ]
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT Chem Energy Semesta",
    slogan: "Our goal is to be a good company partner with the best service",
    description:
      "Solusi inovatif dan berkelanjutan di bidang lingkungan, migas, dan industri.",
    url: "https://ptchemenergysemesta.co.id",
    areaServed: "Indonesia",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Safety and Engineering"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Konsultasi PROPER"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equipment and Retail"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training"
        }
      }
    ]
  };

  return (
    <div className="space-y-3 md:space-y-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />

      <div className="bg-white">
        <ServiceGrid />
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-3">
        <div className="grid gap-4 rounded-[28px] border-2 border-chem-green bg-gradient-to-r from-chem-green/5 via-chem-green/3 to-chem-yellow/8 p-6 sm:grid-cols-2 sm:p-8 shadow-lg">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-chem-yellow sm:text-sm">About Us</p>
            <h2 className="mt-3 text-2xl font-bold text-chem-slate sm:text-[2rem]">
              Profil perusahaan, nilai, dan pengalaman kami ada di halaman About Us.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end sm:self-end">
            <a
              href="/about"
              className="rounded-full border-2 border-chem-green bg-white px-6 py-3 text-sm font-bold text-chem-green transition-all hover:bg-chem-green/5 hover:shadow-md"
            >
              Buka About Us
            </a>
            <a
              href="/contact"
              className="rounded-full bg-chem-green px-6 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700 shadow-lg shadow-chem-green/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
