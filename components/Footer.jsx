"use client";
import Link from 'next/link';
import { useModal } from './ModalContext';

export default function Footer() {
  const { openModal } = useModal();
  return (
    <>
      <footer className="border-t border-border bg-bg2 pb-24 md:pb-0">
        <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
            <div className="max-w-md">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg3 text-white" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9.5 9 3l6 6.5M5.5 11.5 9 8l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M4 15h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                  </svg>
                </span>
                <span className="text-[17px] font-bold tracking-tight text-ink">VaultTrace Recovery</span>
              </Link>
              <p className="mt-4 text-[14px] leading-6 text-body">Crypto asset recovery consulting and blockchain investigation support.</p>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-mute">Navigate</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer navigate">
                <Link href="#services" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">Services</Link>
                <Link href="#how-we-work" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">How we work</Link>
                <Link href="#pillars" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">Types of loss</Link>
                <Link href="#contact" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">Contact</Link>
              </nav>
            </div>
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-mute">Resources</p>
              <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer resources">
                <Link href="#resources" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">All guides</Link>
                <Link href="#resources" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">Blog</Link>
                <Link href="#faqs" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">Seed phrase security</Link>
                <Link href="#faqs" className="text-[14px] font-bold text-ink transition-opacity hover:opacity-60">FAQ</Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <p className="text-[12px] leading-6 text-mute">
              VaultTrace Recovery provides consulting and technical analysis. Outcomes depend on third parties (exchanges, courts, law enforcement), chain conditions, and jurisdiction. Nothing on this site is legal or investment advice. Never share your full seed phrase with anyone who cold-contacts you.
            </p>
            <p className="mt-4 text-[13px] text-body">© 2026 VaultTrace Recovery. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/16469260143"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+5rem))] right-4 z-[85] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6 md:h-[60px] md:w-[60px]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/35 opacity-60 [animation-duration:2.4s]" aria-hidden="true"></span>
        <svg className="relative h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
        </svg>
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[12px] font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">Chat on WhatsApp</span>
      </a>

      {/* Mobile Sticky Bar */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
        <div className="pointer-events-auto mx-auto flex max-w-md gap-2 rounded-full border border-border/80 bg-bg2/95 p-1.5 shadow-[0_-4px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
          <a
            href="https://wa.me/16469260143"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-[14px] font-bold transition-opacity hover:opacity-90 border border-[#25D366]/30 bg-[#25D366] text-white"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
            </svg>
            WhatsApp
          </a>
          <button type="button" onClick={openModal} className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-[14px] font-bold transition-opacity hover:opacity-90 btn-shimmer bg-action-1 text-action-2">
            <span>Free case review</span>
          </button>
        </div>
      </div>
    </>
  );
}
