export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-bg2 px-0 py-16 sm:py-20 lg:py-24 pl-5">
      <div className="mx-auto">
        <h2 className="text-center text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold tracking-[-0.03em] text-ink">What clients say</h2>
        <div className="mt-12 sm:mt-14">
          <div aria-label="Client reviews" className="flex gap-5 overflow-x-auto pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            <div aria-hidden="true" style={{ display: 'contents' }}>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/alex.png" alt="James K." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">James K.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Founder, DeFi Startup</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">After losing access to my funds, I had no idea where to begin. VaultTrace explained every step clearly and helped me organize everything needed for my case.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/sarah.png" alt="Sarah M." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Sarah M.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Private Investor</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Professional communication from day one. They never made unrealistic promises and gave practical advice that saved me weeks of confusion.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/micheal.png" alt="Michael R." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Michael R.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Compliance Lead</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">The transaction analysis helped me understand exactly what happened to my crypto. I finally knew what options I had.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/marcia.png" alt="Marcia L." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Marcia L.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Family Office Advisor</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Their evidence documentation was meticulous. We handed a clear record to counsel without chasing screenshots across devices.</p>
              </article>
            </div>
            {/* Main carousel items */}
            <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
              <div className="flex items-center gap-3.5">
                <img src="/images/alex.png" alt="James K." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold tracking-tight text-ink">James K.</h3>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Founder, DeFi Startup</p>
                </div>
              </div>
              <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">After losing access to my funds, I had no idea where to begin. VaultTrace explained every step clearly and helped me organize everything needed for my case.</p>
            </article>
            <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
              <div className="flex items-center gap-3.5">
                <img src="/images/sarah.png" alt="Sarah M." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold tracking-tight text-ink">Sarah M.</h3>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Private Investor</p>
                </div>
              </div>
              <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Professional communication from day one. They never made unrealistic promises and gave practical advice that saved me weeks of confusion.</p>
            </article>
            <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
              <div className="flex items-center gap-3.5">
                <img src="/images/micheal.png" alt="Michael R." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold tracking-tight text-ink">Michael R.</h3>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Compliance Lead</p>
                </div>
              </div>
              <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">The transaction analysis helped me understand exactly what happened to my crypto. I finally knew what options I had.</p>
            </article>
            <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
              <div className="flex items-center gap-3.5">
                <img src="/images/marcia.png" alt="Marcia L." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold tracking-tight text-ink">Marcia L.</h3>
                  <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Family Office Advisor</p>
                </div>
              </div>
              <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Their evidence documentation was meticulous. We handed a clear record to counsel without chasing screenshots across devices.</p>
            </article>
            <div aria-hidden="true" style={{ display: 'contents' }}>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/alex.png" alt="James K." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">James K.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Founder, DeFi Startup</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">After losing access to my funds, I had no idea where to begin. VaultTrace explained every step clearly and helped me organize everything needed for my case.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/sarah.png" alt="Sarah M." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Sarah M.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Private Investor</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Professional communication from day one. They never made unrealistic promises and gave practical advice that saved me weeks of confusion.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/micheal.png" alt="Michael R." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Michael R.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Compliance Lead</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">The transaction analysis helped me understand exactly what happened to my crypto. I finally knew what options I had.</p>
              </article>
              <article data-carousel-item="true" className="flex w-[min(92vw,520px)] shrink-0 snap-start flex-col rounded-[1.75rem] bg-[#f3f4f6] px-8 py-9 sm:w-[540px] sm:px-10 sm:py-10">
                <div className="flex items-center gap-3.5">
                  <img src="/images/marcia.png" alt="Marcia L." className="h-12 w-12 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold tracking-tight text-ink">Marcia L.</h3>
                    <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-mute">Family Office Advisor</p>
                  </div>
                </div>
                <p className="mt-6 text-[16px] leading-7 text-ink/85 sm:text-[17px] sm:leading-8">Their evidence documentation was meticulous. We handed a clear record to counsel without chasing screenshots across devices.</p>
              </article>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button type="button" aria-label="Previous" disabled className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eceef2] text-ink/70 transition-opacity hover:bg-[#e4e6eb] disabled:pointer-events-none disabled:opacity-35">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <button type="button" aria-label="Next" disabled className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eceef2] text-ink/70 transition-opacity hover:bg-[#e4e6eb] disabled:pointer-events-none disabled:opacity-35">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3.5 4.5 4.5L6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
