"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { businessDivisions } from "@/constants/business-divisions";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Service",
    href: "/services",
    children: businessDivisions.map((division) => ({
      label: `${division.label}`,
      href: division.href
    }))
  },
  { label: "Contact Us", href: "/contact" }
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-t-4 border-chem-green",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-chem-green/10"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3 text-sm font-bold tracking-[0.18em] text-chem-green">
          <span className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-chem-green bg-white/85 shadow-[0_8px_18px_-12px_rgba(9,179,107,0.45)]">
            <Image
              src="/assets/logo/logo.png"
              alt="Logo PT Chem Energy Semesta"
              fill
              sizes="40px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="hidden sm:inline">PT CHEM ENERGY SEMESTA</span>
          <span className="sm:hidden">PT CHEM</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {!('children' in item) ? (
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-chem-slate transition-colors hover:text-chem-green"
                >
                  {item.label}
                </Link>
              ) : (
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-chem-slate transition-colors hover:text-chem-green"
                    aria-expanded={isServicesOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={cn(
                      "absolute left-0 top-full mt-3 w-72 rounded-2xl border-2 border-chem-green bg-white/95 p-3 shadow-lg backdrop-blur-xl transition-all duration-200",
                      isServicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    )}
                    role="menu"
                  >
                    <div className="flex flex-col gap-1">
                      {(item as any).children.map((c: any) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="rounded-xl px-3 py-2 text-sm font-medium text-chem-slate/85 transition-colors hover:bg-chem-green/10 hover:text-chem-green"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-chem-green bg-white/80 text-chem-green hover:bg-chem-green/5 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={cn(
          "border-t border-chem-blue/10 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "max-h-[260px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <div key={item.href} className="flex flex-col">
              {!('children' in item) ? (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-chem-slate/85 transition-colors hover:bg-chem-blue/5 hover:text-chem-blue"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-medium text-chem-slate/85 transition-colors hover:bg-chem-blue/5 hover:text-chem-blue"
                    aria-expanded={isServicesOpen}
                  >
                    <span>{item.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div className={cn("ml-3 mt-1 flex flex-col overflow-hidden transition-all duration-200", isServicesOpen ? "max-h-64" : "max-h-0") }>
                    {(item as any).children.map((c: any) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-chem-slate/70 transition-colors hover:bg-chem-blue/5 hover:text-chem-blue"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
