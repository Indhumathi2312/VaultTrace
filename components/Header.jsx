"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useModal } from './ModalContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 rounded-full border border-border/70 bg-bg2/95 px-3 shadow-[0_8px_30px_rgba(11,31,26,0.08)] backdrop-blur-md transition-shadow duration-300 sm:h-16 sm:px-5">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 pl-1" onClick={closeMenu}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-bg3 text-white sm:h-9 sm:w-9" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M3 9.5 9 3l6 6.5M5.5 11.5 9 8l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M4 15h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
            </svg>
          </span>
          <span className="text-[15px] font-bold tracking-tight text-ink sm:text-[16px]">VaultTrace</span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <Link href="#services" className="rounded-full px-3 py-2 text-[14px] font-bold text-ink/75 transition-colors hover:bg-bg1 hover:text-ink">Services</Link>
          <Link href="#how-we-work" className="rounded-full px-3 py-2 text-[14px] font-bold text-ink/75 transition-colors hover:bg-bg1 hover:text-ink">How we work</Link>
          <Link href="#pillars" className="rounded-full px-3 py-2 text-[14px] font-bold text-ink/75 transition-colors hover:bg-bg1 hover:text-ink">Types of loss</Link>
          <Link href="#resources" className="rounded-full px-3 py-2 text-[14px] font-bold text-ink/75 transition-colors hover:bg-bg1 hover:text-ink">Resources</Link>
          <Link href="#faqs" className="rounded-full px-3 py-2 text-[14px] font-bold text-ink/75 transition-colors hover:bg-bg1 hover:text-ink">FAQ</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={openModal} className="btn-shimmer hidden items-center gap-2 rounded-full bg-action-1 px-4 py-2.5 text-[13px] font-bold text-action-2 transition-opacity hover:opacity-90 sm:inline-flex sm:text-[14px]">
            Free case review
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
          <button 
            type="button" 
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden" 
            aria-expanded={isMobileMenuOpen} 
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-auto max-w-[1200px] overflow-hidden rounded-[1.75rem] border border-border/70 bg-bg2/95 px-5 py-6 shadow-[0_8px_30px_rgba(11,31,26,0.08)] backdrop-blur-md">
          <nav className="flex flex-col gap-4" aria-label="Mobile menu">
            <Link href="#services" onClick={closeMenu} className="text-[16px] font-bold text-ink transition-colors hover:text-bg3">Services</Link>
            <Link href="#how-we-work" onClick={closeMenu} className="text-[16px] font-bold text-ink transition-colors hover:text-bg3">How we work</Link>
            <Link href="#pillars" onClick={closeMenu} className="text-[16px] font-bold text-ink transition-colors hover:text-bg3">Types of loss</Link>
            <Link href="#resources" onClick={closeMenu} className="text-[16px] font-bold text-ink transition-colors hover:text-bg3">Resources</Link>
            <Link href="#faqs" onClick={closeMenu} className="text-[16px] font-bold text-ink transition-colors hover:text-bg3">FAQ</Link>
          </nav>
          <div className="mt-6 border-t border-border pt-6 sm:hidden">
             <button type="button" onClick={() => { closeMenu(); openModal(); }} className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-action-1 px-4 py-3 text-[14px] font-bold text-action-2 transition-opacity hover:opacity-90">
                Free case review
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
          </div>
        </div>
      )}
    </header>
  );
}
