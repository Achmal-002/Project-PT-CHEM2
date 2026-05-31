/**
 * Retail Products Data Structure
 * Contains gas detectors, safety equipment, and accessories
 */

export interface RetailProduct {
  id: string;
  name: string;
  category: "gas-detector" | "safety-equipment" | "accessory";
  image: string;
  description?: string;
}

export interface HydraulicPump {
  id: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  specifications: {
    maxSupply: string;
    maxOutputPressure: string;
  };
  features: string[];
}

/**
 * Complete Gas Detector and Safety Products Catalog
 * All products from company profile with exact names
 */
export const retailProducts: RetailProduct[] = [
  // Industrial Scientific (ISC) Products
  {
    id: "isc-tango-tx2",
    name: "ISC-TANGO TX2",
    category: "gas-detector",
    image: "/assets/equipment/isc-tango-tx2.png",
    description: "Portable multi-gas detector with touchscreen display"
  },
  {
    id: "isc-radius-bz1",
    name: "ISC-RADIUS BZ1",
    category: "gas-detector",
    image: "/assets/equipment/isc-radius-bz1.png",
    description: "Wireless gas detection system"
  },
  {
    id: "isc-m40",
    name: "ISC-M40",
    category: "gas-detector",
    image: "/assets/equipment/isc-m40.png",
    description: "Industrial gas monitor"
  },
  {
    id: "isc-ventis-mx4",
    name: "ISC-VENTIS MX4",
    category: "gas-detector",
    image: "/assets/equipment/isc-ventis-mx4.png",
    description: "Multi-gas detector for confined spaces"
  },
  {
    id: "isc-ventis-pro5",
    name: "ISC-VENTIS PRO5",
    category: "gas-detector",
    image: "/assets/equipment/isc-ventis-pro5.png",
    description: "Advanced 5-gas detector"
  },
  {
    id: "isc-ibrid-mx6",
    name: "ISC-IBRID MX6",
    category: "gas-detector",
    image: "/assets/equipment/isc-ibrid-mx6.png",
    description: "Hybrid gas detection device"
  },

  // Honeywell / BW Technologies Products
  {
    id: "bw-max-xtii",
    name: "BW-MAX XTII",
    category: "gas-detector",
    image: "/assets/equipment/bw-max-xtii.png",
    description: "Multi-gas detector with large display"
  },
  {
    id: "bw-solo",
    name: "BW-SOLO",
    category: "gas-detector",
    image: "/assets/equipment/bw-solo.png",
    description: "Single-gas or dual-gas detector"
  },
  {
    id: "bw-gas-alert-micro-clip-xl",
    name: "BW-GAS ALERT MICRO CLIP XL",
    category: "gas-detector",
    image: "/assets/equipment/bw-gas-alert-micro-clip-xl.png",
    description: "Compact clip-on gas detector"
  },
  {
    id: "bw-rigrat",
    name: "BW-RIGRAT",
    category: "gas-detector",
    image: "/assets/equipment/bw-rigrat.png",
    description: "Personal gas alert device"
  },

  // Supporting Equipment and Accessories
  {
    id: "air-cylinder",
    name: "AIR CYLINDER",
    category: "accessory",
    image: "/assets/equipment/air-cylinder.png",
    description: "Portable air cylinder for respiratory protection"
  },
  {
    id: "calibration-cylinder",
    name: "CALIBRATION CYLINDER",
    category: "accessory",
    image: "/assets/equipment/calibration-cylinder.png",
    description: "Calibration gas cylinder for detector maintenance"
  },
  {
    id: "junction-box",
    name: "JUNCTION BOX",
    category: "accessory",
    image: "/assets/equipment/junction-box.png",
    description: "Electrical junction box for system integration"
  },

  // Safety Equipment
  {
    id: "applus-scba-a3000",
    name: "APPLUS-SCBA A3000",
    category: "safety-equipment",
    image: "/assets/equipment/applus-scba-a3000.png",
    description: "Self-contained breathing apparatus - A3000 series"
  },
  {
    id: "applus-scba-a6000",
    name: "APPLUS-SCBA A6000",
    category: "safety-equipment",
    image: "/assets/equipment/applus-scba-a6000.png",
    description: "Self-contained breathing apparatus - A6000 series"
  },
  {
    id: "ppe",
    name: "PPE",
    category: "safety-equipment",
    image: "/assets/equipment/ppe.png",
    description: "Personal protective equipment and accessories"
  }
];

/**
 * Featured Hydraulic Pump Product
 * MUTU FLOW MASTER II - Heavy-duty industrial pump
 */
export const hydraulicPump: HydraulicPump = {
  id: "flow-master-ii",
  name: "FLOW MASTER II",
  brand: "MUTU",
  image: "/assets/equipment/flow-master-ii.png",
  description:
    "Professional-grade rotary driven hydraulic pump designed for heavy-duty industrial applications. The FLOW MASTER II delivers reliable performance and precision engineering for demanding operational environments.",
  specifications: {
    maxSupply: "2000 psi (207 bar)",
    maxOutputPressure: "3500 psi"
  },
  features: [
    "Rotary driven design for consistent performance",
    "Maximum supply pressure: 2000 psi (207 bar)",
    "Maximum output pressure: 3500 psi",
    "Precision-engineered for industrial applications",
    "Durable construction for heavy-duty use",
    "Reliable performance in demanding environments"
  ]
};

/**
 * Products organized by category for easy filtering
 */
export const productsByCategory = {
  gasDetectors: retailProducts.filter((p) => p.category === "gas-detector"),
  safetyEquipment: retailProducts.filter((p) => p.category === "safety-equipment"),
  accessories: retailProducts.filter((p) => p.category === "accessory")
};

/**
 * Legacy brand structure (kept for backward compatibility)
 */
export const retailBrands = [
  {
    brand: "Industrial Scientific (ISC)",
    products: ["ISC-TANGO TX2", "ISC-RADIUS BZ1", "ISC-M40", "ISC-VENTIS MX4", "ISC-VENTIS PRO5", "ISC-IBRID MX6"]
  },
  {
    brand: "Honeywell / BW Technologies",
    products: ["BW-MAX XTII", "BW-SOLO", "BW-GAS ALERT MICRO CLIP XL", "BW-RIGRAT"]
  },
  {
    brand: "Supporting Equipment",
    products: ["AIR CYLINDER", "CALIBRATION CYLINDER", "JUNCTION BOX", "APPLUS-SCBA A3000", "APPLUS-SCBA A6000", "PPE"]
  }
] as const;
