"use client";
import Link from 'next/link';
import { useModal } from './ModalContext';

export default function Hero() {
  const { openModal } = useModal();
  return (
    <section className="relative isolate min-h-[92svh] lg:min-h-[100svh] w-full overflow-hidden rounded-b-[1.75rem] sm:rounded-b-[2.25rem] lg:rounded-b-[2.75rem] bg-bg2">
      <img src="/images/hero-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 sm:via-white/80 sm:to-transparent" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/40" aria-hidden="true"></div>
      
      <div className="relative z-10 mx-auto grid min-h-[92svh] lg:min-h-[100svh] max-w-[1340px] items-center px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:pt-36">
        <div className="max-w-2xl">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-bg3/20 bg-bg3/5 px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-action-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-bg3"></span>
            Investigation &amp; Analysis
          </div>
          <h1 className="reveal reveal-delay-1 mt-6 text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
            VaultTrace Recovery
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-[17px] leading-7 text-body sm:text-[19px] sm:leading-8">
            When digital assets are lost or compromised, the first step is accurate technical documentation—not unverified recovery promises.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <button type="button" onClick={openModal} className="btn-shimmer inline-flex items-center justify-center gap-2.5 rounded-full bg-action-1 px-7 py-3.5 text-[15px] font-bold text-action-2 shadow-lg shadow-action-1/25 transition-all hover:opacity-95 hover:shadow-xl hover:shadow-action-1/30 active:scale-[0.98]">
              Request Technical Case Review
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <Link href="#resources" className="inline-flex items-center justify-center rounded-full border border-border bg-white/90 px-6 py-3.5 text-[15px] font-bold text-ink backdrop-blur-sm transition-colors hover:border-ink/40 hover:bg-white active:scale-[0.98]">
              Start Prevention Guide
            </Link>
          </div>
          <div className="reveal reveal-delay-4 mt-9 flex flex-wrap items-center gap-5 sm:gap-6 border-t border-border/60 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] font-bold tracking-tight text-ink sm:text-[32px]">1,200+</span>
              <span className="text-[13px] font-bold leading-tight text-body sm:text-[14px]">cases traced</span>
            </div>
            <span className="hidden h-7 w-px bg-border sm:block" aria-hidden="true"></span>
            <a href="https://wa.me/16469260143" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[14px] font-bold text-white shadow-sm transition-opacity hover:opacity-90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right side floating forensic highlight panel for desktop */}
        <div className="hidden lg:block relative">
          <div className="reveal reveal-delay-2 rounded-3xl border border-white/80 bg-white/70 p-7 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-3 w-3 rounded-full bg-[#25D366]"></span>
                <span className="text-[13px] font-bold tracking-tight text-ink uppercase">Active Forensic Desk</span>
              </div>
              <span className="text-[12px] font-bold text-mute">Confidential intake</span>
            </div>
            
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-border/60 bg-bg1/70 p-4 transition-all hover:bg-bg1">
                <div className="flex items-center justify-between text-[12px] font-bold text-mute">
                  <span>ON-CHAIN ANALYSIS</span>
                  <span className="text-bg3 font-extrabold">Step 01</span>
                </div>
                <p className="mt-1 text-[15px] font-bold text-ink">Multi-Chain Transaction Mapping</p>
                <p className="mt-1 text-[13px] text-body">Tracing fund movements through mixers, smart contracts & exchange deposits.</p>
              </div>

              <div className="rounded-2xl border border-border/60 bg-bg1/70 p-4 transition-all hover:bg-bg1">
                <div className="flex items-center justify-between text-[12px] font-bold text-mute">
                  <span>EVIDENCE DOSSIER</span>
                  <span className="text-bg3 font-extrabold">Step 02</span>
                </div>
                <p className="mt-1 text-[15px] font-bold text-ink">Law-Enforcement Ready Record</p>
                <p className="mt-1 text-[13px] text-body">Structured timeline, wallet signatures, and contractual proof for legal counsel.</p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl bg-bg3/10 px-4 py-3 text-[13px] font-bold text-bg3">
              <span>Zero upfront seed phrase requirement</span>
              <span>100% Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
