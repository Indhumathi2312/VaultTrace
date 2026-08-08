export default function HowItWorks() {
  return (
    <section id="how-we-work" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mute">How we work</p>
          <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">A process built for clarity</h2>
          <p className="mt-4 text-[16px] leading-7 text-body sm:text-[17px]">
            Clear milestones, honest communication, and no false promises. Here's how we move from incident to actionable record.
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border sm:mt-12 lg:rounded-3xl">
          <div className="grid divide-y divide-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            <article tabIndex={0} className="relative px-6 py-8 outline-none transition-colors sm:px-8 sm:py-10 bg-bg2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mute">Step 01</p>
              <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-tight text-ink sm:text-[20px]">Secure intake</h3>
              <p className="mt-3 text-[14px] leading-6 text-body sm:text-[15px] sm:leading-7">
                Share what happened — timeline, wallets, platforms, and evidence you already have. We never ask for your full seed phrase.
              </p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bg3 transition-opacity duration-300 opacity-0" aria-hidden="true"></span>
            </article>
            <article tabIndex={0} className="relative px-6 py-8 outline-none transition-colors sm:px-8 sm:py-10 bg-[#f6f7f9]">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mute">Step 02</p>
              <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-tight text-ink sm:text-[20px]">Technical case review</h3>
              <p className="mt-3 text-[14px] leading-6 text-body sm:text-[15px] sm:leading-7">
                We assess investigability: on-chain activity, documentation gaps, and whether forensic tracing is viable.
              </p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bg3 transition-opacity duration-300 opacity-100" aria-hidden="true"></span>
            </article>
            <article tabIndex={0} className="relative px-6 py-8 outline-none transition-colors sm:px-8 sm:py-10 bg-bg2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mute">Step 03</p>
              <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-tight text-ink sm:text-[20px]">Evidence packaging</h3>
              <p className="mt-3 text-[14px] leading-6 text-body sm:text-[15px] sm:leading-7">
                Build a structured record — wallets, hashes, timelines, and communications ready for counsel or authorities.
              </p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bg3 transition-opacity duration-300 opacity-0" aria-hidden="true"></span>
            </article>
            <article tabIndex={0} className="relative px-6 py-8 outline-none transition-colors sm:px-8 sm:py-10 bg-bg2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-mute">Step 04</p>
              <h3 className="mt-5 text-[18px] font-bold leading-snug tracking-tight text-ink sm:text-[20px]">Clear next steps</h3>
              <p className="mt-3 text-[14px] leading-6 text-body sm:text-[15px] sm:leading-7">
                You get a practical readout: what can be investigated, what to preserve, and realistic paths forward.
              </p>
              <span className="absolute inset-x-0 bottom-0 h-[3px] bg-bg3 transition-opacity duration-300 opacity-0" aria-hidden="true"></span>
            </article>
          </div>
        </div>
        <p className="mt-8 text-center text-[14px] text-body sm:mt-10 sm:text-[15px]">
          Prefer to talk first?{' '}
          <a href="https://wa.me/16469260143" target="_blank" rel="noopener noreferrer" className="font-bold text-bg3 underline underline-offset-2 transition-opacity hover:opacity-80">
            +1 (646) 926-0143
          </a>
        </p>
      </div>
    </section>
  );
}
