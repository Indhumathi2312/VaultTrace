import Link from 'next/link';

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-bg3">Services</p>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
            Pillars of Investigation & Analysis
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-body">
            Four specialized workstreams that turn confusion into a structured, actionable incident record.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-16 sm:grid-cols-2">
          <article className="group bg-bg2 p-7 transition-colors hover:bg-bg1 sm:p-9 lg:p-10">
            <p className="text-[13px] font-bold tracking-[0.2em] text-bg3">01</p>
            <h3 className="mt-4 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Blockchain Forensic Tracing</h3>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-body">
              Technical analysis to follow asset movements across multiple chains, smart contracts, and mixing services. We identify touchpoints for deeper investigation.
            </p>
            <Link href="#how-we-work" className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-ink transition-colors group-hover:text-bg3">
              Learn about tracing
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </article>
          <article className="group bg-bg2 p-7 transition-colors hover:bg-bg1 sm:p-9 lg:p-10">
            <p className="text-[13px] font-bold tracking-[0.2em] text-bg3">02</p>
            <h3 className="mt-4 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Incident & Evidence Documentation</h3>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-body">
              Creating meticulous, legally defensible reports detailing the timeline, involved wallets, contracts, and communication logs for law enforcement submission.
            </p>
            <Link href="#how-we-work" className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-ink transition-colors group-hover:text-bg3">
              View documentation process
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </article>
          <article className="group bg-bg2 p-7 transition-colors hover:bg-bg1 sm:p-9 lg:p-10">
            <p className="text-[13px] font-bold tracking-[0.2em] text-bg3">03</p>
            <h3 className="mt-4 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Scam & Fraud Intelligence Hub</h3>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-body">
              In-depth research on emerging scam patterns (e.g., pig butchering, synthetic identity theft, flash loan exploitation) to understand vulnerabilities and prevention.
            </p>
            <Link href="#resources" className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-ink transition-colors group-hover:text-bg3">
              Access the Scam Taxonomy
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </article>
          <article className="group bg-bg2 p-7 transition-colors hover:bg-bg1 sm:p-9 lg:p-10">
            <p className="text-[13px] font-bold tracking-[0.2em] text-bg3">04</p>
            <h3 className="mt-4 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Account & Access Review</h3>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-body">
              Technical guidance for recovering access after lost keys, account lockouts, or exchange freezes. We explain technical possibilities and limitations.
            </p>
            <Link href="#resources" className="mt-7 inline-flex items-center gap-2 text-[14px] font-bold text-ink transition-colors group-hover:text-bg3">
              Read the Security Guide
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </article>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-bg3 px-7 py-8 sm:mt-12 sm:flex-row sm:items-center sm:px-10 sm:py-9">
          <div className="max-w-xl">
            <p className="text-[20px] font-bold tracking-tight text-white sm:text-[22px]">Unsure where your case fits?</p>
            <p className="mt-2 text-[15px] leading-6 text-white/75">Start with a free technical case review. We assess investigability before recommending next steps.</p>
          </div>
          <button type="button" className="btn-shimmer inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-bg3 transition-opacity hover:opacity-90">
            Free case review
          </button>
        </div>
      </div>
    </section>
  );
}
