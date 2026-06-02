import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        chem: {
          green: "#09B36B",
          yellow: "#F4A633",
          slate: "#111827",
          blue: "#0f4fa8"
        }
      },
      boxShadow: {
        glow: "0 20px 45px -15px rgba(9, 179, 107, 0.4)",
        "glow-yellow": "0 20px 45px -15px rgba(244, 166, 51, 0.35)",
        "bold": "0 10px 30px -8px rgba(9, 179, 107, 0.3)"
      },
      backgroundImage: {
        "gradient-bold": "linear-gradient(135deg, #09B36B 0%, #06933a 100%)"
      }
    }
  },
  plugins: []
};

export default config;
