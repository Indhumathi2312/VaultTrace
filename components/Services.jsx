export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-bg1 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1340px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
          <div>
            <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
              The Problem Scope
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              The Complexity of Digital Asset Incidents
            </h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-bg3"></div>
            <p className="mt-7 text-[16px] leading-8 text-body sm:text-[18px]">
              Digital asset loss is rarely a singular technical failure. It involves complex layers: social engineering tactics, exchange lockouts, smart contract vulnerabilities, and cross-border regulatory frameworks. Generic IT support or basic free tracing tools cannot reconstruct the full narrative required by legal and law-enforcement entities.
            </p>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/80 bg-bg2 p-7 shadow-sm sm:p-9">
            <h3 className="text-[18px] font-bold text-ink flex items-center gap-2.5 border-b border-border/70 pb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg3 text-white text-[13px]">✓</span>
              Specialized Forensic Documentation
            </h3>
            <p className="text-[15px] leading-7 text-body sm:text-[16px]">
              Our center focuses on specialized forensic documentation. We analyze the chain of events—the flow of funds, contractual triggers, and points of potential failure—to create a structured record actionable for legal counsel, compliance officers, or law enforcement.
            </p>
            <p className="text-[15px] leading-7 text-body sm:text-[16px]">
              By providing deeply researched guides on scam taxonomies, forensic methods, and incident timelines, we empower individuals and organizations with objective knowledge to navigate digital asset crises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
