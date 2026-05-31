export const businessDivisions = [
  {
    key: "process-safety",
    label: "Process Safety and Engineering",
    partner: "HAZOPS & HAZID",
    href: "/services/process-safety",
    eyebrow: "Process Safety",
    summary:
      "Kajian keselamatan proses, fasilitasi HAZOP/HAZID, dan engineering advisory untuk membantu operasi industri tetap aman dan terkendali.",
    points: ["HAZOP dan HAZID facilitation", "Risk register dan action tracking", "Engineering review untuk critical process"]
  },
  {
    key: "environmental",
    label: "Environmental",
    partner: "PROPER",
    href: "/services/environmental",
    eyebrow: "Environmental",
    summary:
      "Konsultasi kepatuhan lingkungan dan peningkatan performa PROPER dengan pendekatan yang terukur dan mudah diimplementasikan.",
    points: ["Konsultasi PROPER", "Noise study dan monitoring", "Rencana perbaikan kinerja lingkungan"]
  },
  {
    key: "equipment-retail",
    label: "Equipment and Retail",
    partner: "Honeywell",
    href: "/services/equipment-retail",
    eyebrow: "Equipment & Retail",
    summary:
      "Pengadaan gas detector dan peralatan industri dari brand tepercaya dengan dukungan layanan purna jual dan maintenance.",
    points: ["Gas detector industri", "Maintenance dan calibration", "PPE dan supporting equipment"]
  },
  {
    key: "training",
    label: "Training",
    partner: "LSP",
    href: "/services/training",
    eyebrow: "Training",
    summary:
      "Program pelatihan dan sertifikasi untuk memperkuat kompetensi keselamatan kerja, keselamatan proses, dan lingkungan.",
    points: ["Safety training", "Process safety training", "Certified competence programs"]
  }
] as const;

export type BusinessDivision = (typeof businessDivisions)[number];
