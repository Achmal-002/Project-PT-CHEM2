export const services = [
  {
    title: "Konsultasi PROPER",
    slug: "proper",
    category: "Environment",
    description:
      "Penilaian kinerja lingkungan sesuai standar KLHK dengan pendekatan compliance hingga beyond compliance.",
    highlight: "Kepatuhan + Inovasi Hijau",
    points: [
      "Pemetaan gap dokumen dan implementasi",
      "Strategi kenaikan performa PROPER",
      "Roadmap perbaikan berkelanjutan"
    ],
    badge: "KLHK Alignment"
  },
  {
    title: "Proteksi Kebakaran",
    slug: "fire-protection",
    category: "Safety",
    description:
      "Konsultasi, instalasi, maintenance, dan refill untuk sistem proteksi kebakaran industri.",
    highlight: "APAR, Hydrant, Fire Alarm",
    points: [
      "Audit kesiapan proteksi kebakaran",
      "Instalasi sistem hydrant dan alarm",
      "Program maintenance dan hydrotest"
    ],
    badge: "Gunnebo Product Line"
  },
  {
    title: "Noise Study",
    slug: "noise-study",
    category: "Safety",
    description:
      "Pengukuran, analisis, dan pemodelan kebisingan untuk mitigasi dampak K3 di lingkungan kerja.",
    highlight: "Data-Driven Mitigation",
    points: [
      "Pengukuran kebisingan area kritikal",
      "Simulasi skenario pengendalian",
      "Rekomendasi engineering control"
    ],
    badge: "Occupational Safety Focus"
  },
  {
    title: "Studi HAZOP & HAZID",
    slug: "hazop-hazid",
    category: "Safety",
    description:
      "Analisis risiko sistem industri migas, kimia, dan farmasi untuk operasi yang aman dan efisien.",
    highlight: "Safety Critical Review",
    points: [
      "Identifikasi bahaya proses end-to-end",
      "Analisis deviasi parameter operasi",
      "Prioritas mitigasi risiko operasional"
    ],
    badge: "HAZOP Study Indonesia"
  }
] as const;

export const processSafetyServices = {
  title: "Process Safety & Risk Management Solution",
  shortDescription:
    "Layanan keselamatan proses dan manajemen risiko untuk industri migas, petrokimia, kimia, farmasi, dan nuklir.",
  subServices: [
    "Sistem Dan Peralatan Proteksi Kebakaran",
    "Gas Detector & Perlindungan Pernapasan",
    "Studi Keselamatan Proses (HAZOP, HAZID, SIL, LOPA, FERA, PSM, SECE, dll)",
    "Inspeksi Teknis, Pemeliharaan, Dan Kalibrasi Peralatan Keselamatan"
  ],
  details: {
    hazopHazid: {
      title: "HAZOP & HAZID STUDY",
      description:
        "Jasa ahli untuk melakukan studi analisis risiko (HAZOP) dan identifikasi bahaya (HAZID) pada sistem dan proses industri. Mencakup fasilitas migas, kimia, farmasi, dan nuklir.",
      objectives: [
        {
          title: "Identifikasi Bahaya",
          description:
            "Menemukan potensi risiko dan masalah operasional dalam desain atau sistem yang sudah ada."
        },
        {
          title: "Evaluasi Risiko",
          description:
            "Menilai kemungkinan dan dampak dari bahaya yang teridentifikasi untuk menentukan peringkat risiko."
        },
        {
          title: "Rekomendasi Mitigasi",
          description:
            "Menyediakan langkah-langkah perbaikan dan pengendalian yang efektif untuk mengurangi risiko."
        },
        {
          title: "Keamanan Proses",
          description:
            "Memastikan sistem dan proses dapat berjalan dengan aman, efisien, dan sesuai dengan regulasi."
        }
      ],
      benefits: [
        "Meningkatkan keselamatan operasional",
        "Meminimalkan kerugian finansial akibat kecelakaan",
        "Memastikan kesesuaian standar keselamatan internasional"
      ]
    }
  }
} as const;

export const environmentalServices = {
  title: "Environmental & Sustainability Services",
  shortDescription:
    "Layanan lingkungan komprehensif mencakup pemantauan, penilaian, pelaporan, dan konsultasi kepatuhan regulasi lingkungan.",
  subServices: [
    "Pemantauan Dan Penilaian Lingkungan",
    "Pelaporan Dan Pemenuhan Regulasi Lingkungan",
    "Pendampingan PROPER",
    "Evaluasi Higienis Industri (kebisingan, getaran, pencahayaan, iklim kerja)"
  ],
  details: {
    proper: {
      title: "Konsultasi Pendampingan PROPER",
      description:
        "Mendorong perusahaan patuh terhadap aturan dan melakukan inisiatif beyond compliance (efisiensi energi, pengelolaan limbah, inovasi hijau, kegiatan sosial) sesuai instrumen KLHK.",
      features: [
        "Memetakan posisi dan celah (gap) penilaian PROPER",
        "Menyusun langkah perbaikan strategis",
        "Memaksimalkan peluang meraih peringkat terbaik",
        "Mempersiapkan pelaporan dokumen pendukung secara tepat dan akurat"
      ],
      benefits: [
        "Meningkatkan performa lingkungan perusahaan",
        "Memenuhi kewajiban regulasi KLHK",
        "Mencapai peringkat PROPER yang lebih baik"
      ]
    },
    monitoring: {
      title: "Jasa Lingkungan Pemantauan (Environmental Monitoring)",
      description:
        "Layanan pemantauan lingkungan komprehensif mencakup kualitas udara, air, dan aspek fisika lingkungan di lokasi industri.",
      scopes: [
        {
          category: "Pemantauan Kualitas Udara",
          items: [
            "Udara Ambien",
            "Kebauan",
            "Emisi Sumber bergerak & tidak bergerak"
          ]
        },
        {
          category: "Pemantauan Kualitas Air",
          items: [
            "Air Limbah Industri & Domestik",
            "Air Permukaan & Air Tanah",
            "Air Bersih & Minum"
          ]
        },
        {
          category: "Fisika Lingkungan",
          items: [
            "Pengukuran Kebisingan & Getaran",
            "Pencahayaan Tempat Kerja",
            "Iklim Kerja"
          ]
        },
        {
          category: "Layanan Pelaporan & Konsultasi",
          items: [
            "Penyusunan Laporan RKL-RPL / UKL-UPL",
            "Pendampingan Pelaporan SIMPEL"
          ]
        }
      ],
      benefits: [
        "Memenuhi kewajiban pelaporan lingkungan",
        "Menyediakan data akurat dan terukur",
        "Memastikan kepatuhan regulasi lingkungan",
        "Mendukung pencapaian peringkat PROPER yang baik"
      ]
    },
    noiseStudy: {
      title: "Jasa Noise Study",
      description:
        "Layanan profesional pengukuran, analisis, dan konsultasi tingkat kebisingan di lingkungan kerja untuk mengidentifikasi sumber kebisingan, mengevaluasi dampak, dan memberikan rekomendasi pengendalian."
    }
  }
} as const;

export const equipmentRetailServices = {
  title: "Penyedia Peralatan Pencegahan Kebakaran & Jasa Retail",
  shortDescription:
    "Penyedia lengkap peralatan keselamatan fire protection, gas detector, dan industrial equipment dari brand terpercaya internasional.",
  fireEquipment: {
    title: "Fire Safety Equipment",
    description:
      "Penyedia lengkap sistem pencegahan dan pemadam kebakaran dengan produk dan layanan terpadu.",
    services: [
      "Alat Pemadam Api Ringan (APAR)",
      "Alat Pemadam Api Berat (APAB)",
      "Sistem Pemadam Kebakaran Otomatis",
      "Fire Alarm System",
      "Hydrant System",
      "Jasa Instalasi & Perawatan",
      "Refill APAR & APAB",
      "Hydrotest Tabung APAR"
    ],
    mainPartner: "GUNNEBO"
  },
  gasDetector: {
    title: "Gas Detector & Safety Products Showcase",
    description:
      "Produk deteksi gas dan peralatan keselamatan dari manufaktur terkemuka untuk berbagai aplikasi industri.",
    products: [
      "ISC-TANGO TX2",
      "ISC-RADIUS BZ1",
      "ISC-M40",
      "ISC-VENTIS MX4",
      "ISC-VENTIS PRO5",
      "ISC-IBRID MX6",
      "BW-MAX XTII",
      "BW-SOLO",
      "BW-GAS ALERT MICRO CLIP XL",
      "BW-RIGRAT",
      "AIR CYLINDER",
      "CALIBRATION CYLINDER",
      "JUNCTION BOX",
      "APPLUS-SCBA A3000/A6000",
      "PPE"
    ]
  },
  hydraulicPump: {
    title: "Industrial Hydraulic Pump (MUTU)",
    product: "FLOW MASTER II rotary driven hydraulic pump",
    specifications: {
      maxSupply: "2000 psi (207 bar)",
      maxOutputPressure: "3500 psi"
    }
  }
} as const;

export const trainingServices = {
  title: "Training Competency Development",
  shortDescription:
    "Layanan pelatihan profesional peningkatan kompetensi tenaga kerja di industri Oil & Gas, Petrochemical, dan industri umum berbasis standar nasional/internasional serta aspek HSSE.",
  programs: {
    safety: {
      title: "Safety Training",
      trainings: [
        "ISO 45001",
        "Contractor Health Safety Environment Management System (CHSEMS)",
        "Confined Space Entry",
        "Lock Out Tag Out (LOTO)",
        "Fire Fighting & Fire Drill",
        "First Aid & Emergency Response",
        "H2S Awareness",
        "Gas Testing & Monitoring",
        "Simultaneous Operations (SIMOPS)"
      ]
    },
    processSafety: {
      title: "Process Safety Training",
      trainings: [
        "Process Safety Management (PSM)",
        "HAZOP",
        "HAZID",
        "Layer of Protection Analysis (LOPA)",
        "Quantitative Risk Assessment (QRA)",
        "Management of Change (MOC)",
        "Loss Prevention & Asset Integrity"
      ]
    },
    environmental: {
      title: "Environmental Training",
      trainings: [
        "Environmental & PROPER Awareness",
        "Waste Management (Limbah B3 & Non-B3)",
        "Air & Water Pollution Control",
        "Environmental Monitoring & Reporting",
        "ISO 14001"
      ]
    },
    security: {
      title: "Security Training",
      trainings: [
        "Industrial Security Awareness",
        "Access Control & Facility Protection",
        "Emergency Security Response",
        "Crisis Management & ICS",
        "Security Risk Assessment",
        "Integrated Community Based Security Training"
      ]
    }
  }
} as const;
