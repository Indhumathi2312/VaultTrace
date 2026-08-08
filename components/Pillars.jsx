"use client";
import Link from 'next/link';
import { useModal } from './ModalContext';

export default function Pillars() {
  const { openModal } = useModal();
  return (
    <section id="pillars" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1340px]">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
            Investigation Pillars & Loss Types
          </span>
          <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            Pillars of Investigation & Analysis
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-body sm:text-[18px]">
            Four specialized workstreams that turn confusion into a structured, actionable incident record.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2">
          <article className="group relative flex flex-col justify-between rounded-3xl border border-border bg-bg2 p-8 transition-all hover:border-bg3/40 hover:bg-bg1/60 hover:shadow-lg sm:p-9 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bg3/10 text-[14px] font-bold text-bg3">01</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-mute">DeFi & Multi-Chain</span>
              </div>
              <h3 className="mt-6 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Blockchain Forensic Tracing</h3>
              <p className="mt-4 text-[15px] leading-7 text-body">
                Technical analysis to follow asset movements across multiple chains, smart contracts, and mixing services. We identify touchpoints for deeper investigation.
              </p>
            </div>
            <Link href="#how-we-work" className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-bg3 transition-colors hover:text-ink">
              Learn about tracing
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>

          <article className="group relative flex flex-col justify-between rounded-3xl border border-border bg-bg2 p-8 transition-all hover:border-bg3/40 hover:bg-bg1/60 hover:shadow-lg sm:p-9 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bg3/10 text-[14px] font-bold text-bg3">02</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-mute">Law Enforcement Ready</span>
              </div>
              <h3 className="mt-6 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Incident & Evidence Documentation</h3>
              <p className="mt-4 text-[15px] leading-7 text-body">
                Creating meticulous, legally defensible reports detailing the timeline, involved wallets, contracts, and communication logs for law enforcement submission.
              </p>
            </div>
            <Link href="#how-we-work" className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-bg3 transition-colors hover:text-ink">
              View documentation process
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>

          <article className="group relative flex flex-col justify-between rounded-3xl border border-border bg-bg2 p-8 transition-all hover:border-bg3/40 hover:bg-bg1/60 hover:shadow-lg sm:p-9 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bg3/10 text-[14px] font-bold text-bg3">03</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-mute">Fraud Research</span>
              </div>
              <h3 className="mt-6 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Scam & Fraud Intelligence Hub</h3>
              <p className="mt-4 text-[15px] leading-7 text-body">
                In-depth research on emerging scam patterns (e.g., pig butchering, synthetic identity theft, flash loan exploitation) to understand vulnerabilities and prevention.
              </p>
            </div>
            <Link href="#resources" className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-bg3 transition-colors hover:text-ink">
              Access the Scam Taxonomy
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>

          <article className="group relative flex flex-col justify-between rounded-3xl border border-border bg-bg2 p-8 transition-all hover:border-bg3/40 hover:bg-bg1/60 hover:shadow-lg sm:p-9 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-bg3/10 text-[14px] font-bold text-bg3">04</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-mute">Access & Exchange Lockouts</span>
              </div>
              <h3 className="mt-6 text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Account & Access Review</h3>
              <p className="mt-4 text-[15px] leading-7 text-body">
                Technical guidance for recovering access after lost keys, account lockouts, or exchange freezes. We explain technical possibilities and limitations.
              </p>
            </div>
            <Link href="#resources" className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-bg3 transition-colors hover:text-ink">
              Read the Security Guide
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-bg3 p-8 text-white shadow-xl sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <p className="text-[20px] font-bold tracking-tight sm:text-[22px]">Unsure where your case fits?</p>
            <p className="mt-2 text-[15px] leading-6 text-white/80">Start with a free technical case review. We assess investigability before recommending next steps.</p>
          </div>
          <button type="button" onClick={openModal} className="btn-shimmer inline-flex shrink-0 items-center rounded-full bg-white px-6 py-3.5 text-[14px] font-bold text-bg3 transition-transform hover:scale-105 active:scale-95">
            Free case review
          </button>
        </div>
      </div>
    </section>
  );
}
