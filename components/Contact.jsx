export default function Contact() {
  return (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <img src="/images/contact-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[#0b1028]/55" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#12143a]/70 via-transparent to-[#4f5bea]/25" aria-hidden="true"></div>
      <div className="relative z-10 mx-auto grid max-w-[1340px] gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
        <div className="flex flex-col justify-between rounded-[1.75rem] bg-white/10 p-7 text-white backdrop-blur-md sm:p-9 lg:p-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">Get started</p>
            <h2 className="mt-4 text-[clamp(1.9rem,3.2vw,2.65rem)] font-bold leading-[1.12] tracking-[-0.03em]">Let's talk about your case</h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-white/75 sm:text-[16px]">
              Book a technical case review or send us a message. We'll get back to you within one business day.
            </p>
            <div className="my-7 h-px bg-white/15"></div>
            <p className="text-[15px] leading-7 text-white/75">In a confidential review, we help you:</p>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Assess investigability and on-chain evidence
              </li>
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Identify what must be preserved for counsel
              </li>
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Get clear, realistic next steps — no false promises
              </li>
            </ul>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href="https://wa.me/16469260143" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white/10 px-4 py-3.5 transition-colors hover:bg-white/15">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">WhatsApp us</p>
              <p className="mt-1 text-[14px] font-bold text-white">+1 (646) 926-0143</p>
            </a>
            <a href="mailto:hello@chainhelp.co.uk" className="rounded-xl bg-white/10 px-4 py-3.5 transition-colors hover:bg-white/15">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Email us</p>
              <p className="mt-1 truncate text-[14px] font-bold text-white">hello@chainhelp.co.uk</p>
            </a>
          </div>
        </div>
        <div className="w-full overflow-hidden bg-bg2 rounded-[1.75rem] shadow-[0_20px_60px_rgba(0,0,0,0.18)] h-full">
          <form noValidate className="p-6 sm:p-8 lg:p-9">
            <div className="mb-7 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center text-ink">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                  <path d="M22.5 8.5c1.8.7 3.3 2.2 4 4M20.2 10.8a4.8 4.8 0 0 1 2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
                  <path d="M14.2 21.8c2.4 2.4 5.2 4.1 7.6 4.7.6.2 1.2 0 1.6-.4l1.4-1.4c.5-.5.5-1.3 0-1.8l-2-2a1.3 1.3 0 0 0-1.7-.1l-.9.7c-.3.2-.7.3-1 .1-1-.6-2.1-1.5-3.1-2.5s-1.9-2.1-2.5-3.1c-.2-.3-.1-.7.1-1l.7-.9a1.3 1.3 0 0 0-.1-1.7l-2-2a1.3 1.3 0 0 0-1.8 0l-1.4 1.4c-.4.4-.6 1-.4 1.6.6 2.4 2.3 5.2 4.7 7.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Request a case review</h3>
              <p className="mx-auto mt-2 max-w-sm text-[14px] leading-6 text-body">Share a few details and our team will review your situation confidentially.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">Name</label>
                <input id="lead-name" type="text" placeholder="Your name" autoComplete="name" className="w-full rounded-xl border border-border bg-bg2 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-mute focus:border-ink" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="lead-phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">Phone <span className="text-[#d92d20]">*</span></label>
                  <div className="flex overflow-hidden rounded-xl border bg-bg2 transition-colors focus-within:border-ink border-border">
                    <div className="relative flex shrink-0 items-center border-r border-border bg-bg1">
                      <select aria-label="Country code" className="h-full appearance-none bg-transparent py-3 pl-3 pr-7 text-[13px] font-bold text-ink outline-none" defaultValue="US">
                        <option value="IN">+91</option>
                        <option value="US">+1</option>
                        <option value="GB">+44</option>
                        <option value="AE">+971</option>
                        <option value="CA">+1</option>
                        <option value="AU">+61</option>
                        <option value="SG">+65</option>
                        <option value="DE">+49</option>
                        <option value="FR">+33</option>
                        <option value="NL">+31</option>
                        <option value="SA">+966</option>
                        <option value="QA">+974</option>
                        <option value="MY">+60</option>
                        <option value="ZA">+27</option>
                        <option value="NG">+234</option>
                        <option value="BR">+55</option>
                        <option value="JP">+81</option>
                        <option value="KR">+82</option>
                        <option value="CH">+41</option>
                        <option value="ES">+34</option>
                      </select>
                      <svg className="pointer-events-none absolute right-2 h-3 w-3 text-body" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <input id="lead-phone" type="tel" required inputMode="numeric" placeholder="Phone" autoComplete="tel-national" aria-invalid="false" className="w-full bg-bg2 px-3 py-3 text-[15px] text-ink outline-none placeholder:text-mute" />
                  </div>
                </div>
                <div>
                  <label htmlFor="lead-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">Business email <span className="text-[#d92d20]">*</span></label>
                  <input id="lead-email" type="email" required placeholder="you@example.com" autoComplete="email" aria-invalid="false" className="w-full rounded-xl border border-border bg-bg2 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-mute focus:border-ink" />
                </div>
              </div>
              <label htmlFor="lead-cryptoloss" className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-bg1 px-4 py-3.5 transition-colors hover:border-ink/40">
                <input id="lead-cryptoloss" type="checkbox" className="peer sr-only" />
                <span aria-hidden="true" className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors border-border bg-bg2"></span>
                <span className="text-[14px] leading-5 text-ink">I need help recovering lost or stolen crypto</span>
              </label>
              <div className="flex flex-col gap-4 pt-2">
                <p className="text-[12px] leading-5 text-mute">We'll only use your info to respond to your inquiry.</p>
                <button type="submit" className="btn-shimmer inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-action-1 px-6 text-[15px] font-bold text-action-2 transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-55">
                  <span>Send message</span><span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
