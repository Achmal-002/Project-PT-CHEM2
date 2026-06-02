"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { retailBrands } from "@/constants/retail-products";
import { useReducedMotion } from "framer-motion";

export function RetailShowcase() {
  const [isMounted, setIsMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.section
      id="retail-overview"
      initial={isMounted && !reducedMotion ? { opacity: 0, y: 28 } : { opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-6xl px-5 py-20"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chem-yellow sm:text-sm">Retail</p>
          <h2 className="mt-2 max-w-3xl text-[1.9rem] font-semibold text-chem-slate sm:text-4xl">
            Distributor gas detector untuk kebutuhan monitoring area berisiko
          </h2>
        </div>
        <p className="max-w-md text-[0.95rem] leading-7 text-chem-slate/72">
          Katalog produk terfokus pada perangkat deteksi gas industri dari brand global dengan
          dukungan layanan maintenance.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {retailBrands.map((brand) => (
          <motion.article
            key={brand.brand}
            whileHover={reducedMotion ? undefined : { y: -4 }}
            whileTap={reducedMotion ? undefined : { scale: 0.995 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-3xl border border-chem-yellow/40 bg-gradient-to-br from-white via-[#fffef8] to-[#fff8d9] p-6"
          >
            <h3 className="text-[1.3rem] font-semibold text-chem-slate">{brand.brand}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {brand.products.map((product) => (
                <span
                  key={product}
                  className="rounded-full border border-chem-blue/20 bg-white px-3 py-1 text-[0.85rem] font-semibold text-chem-blue"
                >
                  {product}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
