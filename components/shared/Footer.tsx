import Image from "next/image";
import Link from "next/link";
import { businessDivisions } from "@/constants/business-divisions";

export function Footer() {
  // Use business divisions for service links to ensure correct hrefs
  const services = businessDivisions;

  const quickLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Hubungi Kami", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 - Company Profile */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/assets/logo/logo.png" alt="PT Chem Energy Semesta" width={180} height={30} className="object-contain" />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              PT Chem Energy Semesta adalah mitra terpercaya dalam menyediakan solusi inovatif dan berkelanjutan di bidang lingkungan, keselamatan proses, pelatihan industri, dan retail peralatan keselamatan.
            </p>

            <div className="mt-4 flex items-center gap-3">
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 inline-block">Layanan Kami</h3>
            <div className="h-1 w-12 bg-chem-green rounded-sm mb-4" />
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={s.href} className="text-sm text-gray-300 hover:text-chem-green transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Tautan Cepat</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-gray-300 hover:text-chem-green transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Kontak & Alamat</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-chem-yellow">{mailSvg}</span>
                <a href="mailto:info@ptchem.co.id" className="text-sm text-gray-300 hover:text-chem-green transition-colors">
                  info@ptchem.co.id
                </a>
                <div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2026 PT CHEM ENERGY SEMESTA. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-chem-green transition-colors">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="hover:text-chem-green transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* SVG ICONS */
const linkedinSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24h4V7h-4v17zM8.5 7v17h4v-9.5c0-5 6-5.4 6 0V24h4v-10c0-9.33-10-9-12-4.4V7h-4z" />
  </svg>
);

const instagramSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zM19.5 6a1.2 1.2 0 11-1.2-1.2A1.2 1.2 0 0119.5 6z" />
  </svg>
);

const facebookSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0022 12z" />
  </svg>
);

const youtubeSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.8 3.5 12 3.5 12 3.5s-7.8 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.6.6 9.4.6 9.4.6s7.8 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
  </svg>
);

const mapPinSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
  </svg>
);

const phoneSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2c1.2.5 2.6.8 4 .8a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.4.3 2.8.8 4a1 1 0 01-.2 1.1L6.6 10.8z" />
  </svg>
);

const mailSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const clockSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm1 12.6V7a1 1 0 10-2 0v6a1 1 0 00.5.87l4 2a1 1 0 10.9-1.74z" />
  </svg>
);
