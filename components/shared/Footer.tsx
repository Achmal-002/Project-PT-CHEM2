export function Footer() {
  return (
    <footer className="bg-chem-slate border-t-4 border-chem-green">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-12 text-center md:flex-row md:text-left">
        <div className="space-y-1">
          <p className="text-sm font-bold text-white">© {new Date().getFullYear()} PT Chem Energy Semesta</p>
          <p className="text-sm text-white/80">Our goal is to be a good company partner with the best service</p>
        </div>
        <div className="inline-flex items-center gap-2">
          <div className="h-1 w-8 bg-chem-green rounded-full"></div>
          <span className="text-xs font-semibold uppercase tracking-widest text-chem-yellow">Excellence in Service</span>
          <div className="h-1 w-8 bg-chem-yellow rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
