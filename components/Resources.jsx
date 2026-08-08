import Link from 'next/link';

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-24 bg-bg1 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1340px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
          <div>
            <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
              Resource Library
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              Forensic Knowledge &amp; Prevention
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-body sm:text-[18px]">
              Our Research Center and guides are built to provide definitive answers to every "what happened?" and "what next?" question after a digital asset incident.
            </p>
            <p className="mt-4 text-[16px] leading-8 text-body sm:text-[18px]">
              By examining real-world attack vectors, you gain an objective understanding of the threat landscape — essential for effective incident response and prevention.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl border border-border bg-bg2 p-6 shadow-sm transition-all hover:shadow-md">
              <span className="inline-block rounded-full bg-bg3/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-bg3">Technical Risks</span>
              <ul className="mt-5 space-y-3.5">
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">DeFi exploit vectors</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Cross-chain bridge risks</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Approval drainers</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-bg2 p-6 shadow-sm transition-all hover:shadow-md">
              <span className="inline-block rounded-full bg-bg3/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-bg3">Fraud Patterns</span>
              <ul className="mt-5 space-y-3.5">
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Social engineering</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Man-in-the-middle attacks</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Synthetic identity theft</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-bg2 p-6 shadow-sm transition-all hover:shadow-md">
              <span className="inline-block rounded-full bg-bg3/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-bg3">Operational</span>
              <ul className="mt-5 space-y-3.5">
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Hardware wallet security</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Cold storage protocols</li>
                <li className="border-t border-border/70 pt-3 text-[14px] leading-5 font-bold text-ink">Seed phrase hygiene</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3 sm:mt-14 border-t border-border/70 pt-8">
          <Link href="#resources" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            All guides
          </Link>
          <Link href="#resources" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            Exploit Taxonomies
          </Link>
          <Link href="#faqs" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            Seed phrase security FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
