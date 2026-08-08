"use client";
import { useRef, useState, useEffect } from 'react';

const reviewsData = [
  {
    name: "James K.",
    role: "Founder, DeFi Startup",
    image: "/images/alex.png",
    comment: "After losing access to my funds, I had no idea where to begin. VaultTrace explained every step clearly and helped me organize everything needed for my case."
  },
  {
    name: "Sarah M.",
    role: "Private Investor",
    image: "/images/sarah.png",
    comment: "Professional communication from day one. They never made unrealistic promises and gave practical advice that saved me weeks of confusion."
  },
  {
    name: "Michael R.",
    role: "Compliance Lead",
    image: "/images/micheal.png",
    comment: "The transaction analysis helped me understand exactly what happened to my crypto. I finally knew what options I had."
  },
  {
    name: "Marcia L.",
    role: "Family Office Advisor",
    image: "/images/marcia.png",
    comment: "Their evidence documentation was meticulous. We handed a clear record to counsel without chasing screenshots across devices."
  }
];

export default function Reviews() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollBy = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1340px]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
              Client Feedback
            </span>
            <h2 className="mt-4 text-[clamp(2rem,3.4vw,2.85rem)] font-bold tracking-[-0.03em] text-ink">
              What clients say
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => scrollBy('left')}
              disabled={!canScrollLeft}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg1 text-ink transition-all hover:bg-bg3 hover:text-white hover:border-bg3 active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3.5 5.5 8 10 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => scrollBy('right')}
              disabled={!canScrollRight}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg1 text-ink transition-all hover:bg-bg3 hover:text-white hover:border-bg3 active:scale-95 disabled:pointer-events-none disabled:opacity-35"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div
            ref={scrollRef}
            aria-label="Client reviews"
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviewsData.map((review, i) => (
              <article
                key={i}
                className="flex w-[min(90vw,480px)] shrink-0 snap-start flex-col justify-between rounded-3xl border border-border bg-bg1/50 p-7 sm:w-[500px] sm:p-9 transition-all hover:bg-bg1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3.5 border-b border-border/60 pb-5">
                    <img src={review.image} alt={review.name} className="h-12 w-12 shrink-0 rounded-2xl object-cover border border-border/80" />
                    <div className="min-w-0">
                      <h3 className="text-[17px] font-bold tracking-tight text-ink">{review.name}</h3>
                      <p className="mt-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-bg3">{review.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-[15px] leading-7 text-body sm:text-[16px] sm:leading-8">
                    "{review.comment}"
                  </p>
                </div>
                
                <div className="mt-6 flex items-center gap-1 text-[#F7931A]">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
