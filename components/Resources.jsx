import Link from 'next/link';

export default function Resources() {
  return (
    <section id="resources" className="scroll-mt-24 bg-bg1 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-bg3">Resource library</p>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">Building Topical Authority</h2>
            <p className="mt-6 text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
              Our Research Center and guides are designed not just for search engines, but to be definitive answers to every “how” and “what next?” question after an incident.
            </p>
            <p className="mt-4 text-[16px] leading-7 text-body sm:text-[17px] sm:leading-8">
              By consuming our guides, you gain an objective understanding of the threat landscape — the most valuable component of any successful incident response.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-bg2 px-5 py-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-bg3">Technical Risks</p>
              <ul className="mt-4 space-y-3">
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">DeFi exploit vectors</li>
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Advanced bridge vulnerability analysis</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-bg2 px-5 py-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-bg3">Fraud Patterns</p>
              <ul className="mt-4 space-y-3">
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Romance scam tactics</li>
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Identifying man-in-the-middle attacks</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-bg2 px-5 py-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-bg3">Operational Guidance</p>
              <ul className="mt-4 space-y-3">
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Hardware wallet security</li>
                <li className="border-t border-border pt-3 text-[14px] leading-5 font-bold text-ink first:border-t-0 first:pt-0">Secure communication & cold storage</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3 sm:mt-14">
          <Link href="#faqs" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            All guides
          </Link>
          <Link href="#faqs" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            Blog
          </Link>
          <Link href="#faqs" className="inline-flex items-center rounded-full border border-border bg-bg2 px-5 py-2.5 text-[14px] font-bold text-ink transition-colors hover:border-bg3 hover:text-bg3">
            Seed phrase security
          </Link>
        </div>
      </div>
    </section>
  );
}
