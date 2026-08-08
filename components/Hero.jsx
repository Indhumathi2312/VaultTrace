"use client";
import Link from 'next/link';
import { useModal } from './ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[2.25rem] lg:rounded-b-[2.75rem]">
      <img src="/images/hero-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20 sm:via-white/75 sm:to-transparent" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto flex h-full min-h-[100svh] max-w-[1340px] items-center px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <div className="max-w-2xl">
          <p className="reveal text-[12px] font-bold uppercase tracking-[0.22em] text-action-1">
            <span className="mr-3 text-ink/40" aria-hidden="true">+</span>Investigation &amp; analysis
          </p>
          <h1 className="reveal reveal-delay-1 mt-5 text-[clamp(2.35rem,5vw,4.15rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink">VaultTrace Recovery</h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-lg text-[17px] leading-7 text-body sm:text-[19px] sm:leading-8">When digital assets are lost or compromised, the first step is accurate documentation—not recovery promises.</p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={openModal} className="btn-shimmer inline-flex items-center justify-center gap-2 rounded-full bg-action-1 px-6 py-3.5 text-[15px] font-bold text-action-2 transition-opacity hover:opacity-90">
              Request Technical Case Review
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <Link href="#resources" className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-6 py-3.5 text-[15px] font-bold text-ink backdrop-blur-sm transition-colors hover:border-ink/30 hover:bg-white">
              Start Prevention Guide
            </Link>
          </div>
          <div className="reveal reveal-delay-4 mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">1,200+</span>
              <span className="text-[13px] font-bold leading-tight text-body sm:text-[14px]">cases traced</span>
            </div>
            <span className="hidden h-8 w-px bg-border sm:block" aria-hidden="true"></span>
            <a href="https://wa.me/16469260143" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
