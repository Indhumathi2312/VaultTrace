export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-bg1 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1340px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-bg3">The problem</p>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">The Complexity of Digital Asset Incidents</h2>
          <div className="mt-6 h-px w-16 origin-left bg-bg3"></div>
          <p className="mt-7 text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
            Digital asset loss is rarely a singular technical failure. It involves complex layers: social engineering tactics, platform policy decisions (CEX lockouts), smart contract vulnerabilities, and cross-border regulatory frameworks. Generic IT support or basic tracing tools cannot reconstruct the full narrative.
          </p>
        </div>
        <div className="space-y-6 lg:pt-10">
          <p className="text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
            Our center focuses on specialized forensic documentation. We analyze the chain of events—the flow of funds, the contractual triggers, and the points of potential failure (or malice)—to create a structured record that is actionable for your legal counsel, compliance officers, or relevant authorities.
          </p>
          <p className="text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
            This site is built as an educational resource library. By providing deeply researched guides on scam taxonomies, forensic methods, and incident timelines, we aim to empower individuals and organizations with the knowledge needed to navigate crises.
          </p>
        </div>
      </div>
    </section>
  );
}
