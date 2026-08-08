"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: 'US',
    phone: '',
    email: '',
    needHelp: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s()\-]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Enter a valid email address';
    }
    return errs;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <img src="/images/contact-bg.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-[#0b1028]/60" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#12143a]/75 via-transparent to-[#4f5bea]/30" aria-hidden="true"></div>
      
      <div className="relative z-10 mx-auto grid max-w-[1340px] gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
        <div className="flex flex-col justify-between rounded-3xl bg-white/10 p-8 text-white backdrop-blur-md sm:p-10 border border-white/15">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
              Get Started
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.2vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Let's talk about your case
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-white/80 sm:text-[16px]">
              Book a technical case review or send us a message. We'll get back to you within one business day.
            </p>
            <div className="my-7 h-px bg-white/15"></div>
            <p className="text-[15px] font-bold leading-7 text-white">In a confidential review, we help you:</p>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Assess investigability and on-chain evidence
              </li>
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Identify what must be preserved for counsel
              </li>
              <li className="flex items-start gap-3 text-[15px] leading-6 text-white/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bg3 text-white">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="m1.5 5 2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                Get clear, realistic next steps — no false promises
              </li>
            </ul>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <a href="https://wa.me/16469260143" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/20 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">WhatsApp us</p>
              <p className="mt-1 text-[14px] font-bold text-white">+1 (646) 926-0143</p>
            </a>
            <a href="mailto:hello@chainhelp.co.uk" className="rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/20 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">Email us</p>
              <p className="mt-1 truncate text-[14px] font-bold text-white">hello@chainhelp.co.uk</p>
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden bg-bg2 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] h-full border border-border">
          {isSubmitted ? (
            <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[440px]">
              <div className="h-16 w-16 rounded-full bg-bg3/10 text-bg3 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-[24px] font-bold text-ink">Inquiry Received</h3>
              <p className="mt-3 text-[15px] leading-7 text-body max-w-md">
                Thank you <span className="font-bold text-ink">{formData.name || 'for reaching out'}</span>. Our forensic team has received your details and will get back to you confidentially within one business day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', countryCode: 'US', phone: '', email: '', needHelp: true });
                }}
                className="mt-8 rounded-full border border-border bg-bg1 px-6 py-2.5 text-[14px] font-bold text-ink transition-colors hover:bg-bg2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 lg:p-9">
              <div className="mb-7 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-bg3/10 text-bg3">
                  <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <path d="M22.5 8.5c1.8.7 3.3 2.2 4 4M20.2 10.8a4.8 4.8 0 0 1 2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M14.2 21.8c2.4 2.4 5.2 4.1 7.6 4.7.6.2 1.2 0 1.6-.4l1.4-1.4c.5-.5.5-1.3 0-1.8l-2-2a1.3 1.3 0 0 0-1.7-.1l-.9.7c-.3.2-.7.3-1 .1-1-.6-2.1-1.5-3.1-2.5s-1.9-2.1-2.5-3.1c-.2-.3-.1-.7.1-1l.7-.9a1.3 1.3 0 0 0-.1-1.7l-2-2a1.3 1.3 0 0 0-1.8 0l-1.4 1.4c-.4.4-.6 1-.4 1.6.6 2.4 2.3 5.2 4.7 7.6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold tracking-tight text-ink sm:text-[24px]">Request a case review</h3>
                <p className="mx-auto mt-2 max-w-sm text-[14px] leading-6 text-body">Share a few details and our team will review your situation confidentially.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="lead-name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">
                    Name <span className="text-[#d92d20]">*</span>
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    autoComplete="name"
                    className={`w-full rounded-xl border bg-bg2 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-mute ${
                      errors.name ? 'border-[#d92d20] bg-red-50/20' : 'border-border focus:border-bg3'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 flex items-center gap-1.5 text-[12px] font-bold text-[#d92d20]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lead-phone" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">Phone <span className="text-[#d92d20]">*</span></label>
                    <div className={`flex overflow-hidden rounded-xl border bg-bg2 transition-colors ${errors.phone ? 'border-[#d92d20] bg-red-50/20' : 'border-border focus-within:border-bg3'}`}>
                      <div className="relative flex shrink-0 items-center border-r border-border bg-bg1">
                        <select
                          name="countryCode"
                          aria-label="Country code"
                          value={formData.countryCode}
                          onChange={(e) => handleInputChange('countryCode', e.target.value)}
                          className="h-full appearance-none bg-transparent py-3 pl-3 pr-7 text-[13px] font-bold text-ink outline-none"
                        >
                          <option value="US">+1</option>
                          <option value="IN">+91</option>
                          <option value="GB">+44</option>
                          <option value="AE">+971</option>
                          <option value="CA">+1</option>
                          <option value="AU">+61</option>
                          <option value="SG">+65</option>
                          <option value="DE">+49</option>
                          <option value="FR">+33</option>
                        </select>
                        <svg className="pointer-events-none absolute right-2 h-3 w-3 text-body" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        id="lead-phone"
                        name="phone"
                        type="tel"
                        required
                        inputMode="numeric"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        autoComplete="tel-national"
                        className="w-full bg-transparent px-3 py-3 text-[15px] text-ink outline-none placeholder:text-mute"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] font-bold text-[#d92d20]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.14em] text-mute">Business email <span className="text-[#d92d20]">*</span></label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      autoComplete="email"
                      className={`w-full rounded-xl border bg-bg2 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-mute ${
                        errors.email ? 'border-[#d92d20] bg-red-50/20' : 'border-border focus:border-bg3'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] font-bold text-[#d92d20]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <label htmlFor="lead-cryptoloss" className="flex cursor-pointer items-center gap-3.5 rounded-xl border border-border bg-bg1 px-4 py-3.5 transition-colors hover:border-bg3/50">
                  <div className="relative flex items-center justify-center">
                    <input
                      id="lead-cryptoloss"
                      name="needHelp"
                      type="checkbox"
                      checked={formData.needHelp}
                      onChange={(e) => setFormData({ ...formData, needHelp: e.target.checked })}
                      className="peer sr-only"
                    />
                    <div className="h-5 w-5 rounded-md border border-border bg-bg2 transition-colors peer-checked:bg-bg3 peer-checked:border-bg3 flex items-center justify-center text-white">
                      {formData.needHelp && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[14px] font-bold text-ink">I need help recovering lost or stolen crypto</span>
                </label>

                <div className="flex flex-col gap-4 pt-2">
                  <p className="text-[12px] leading-5 text-mute">We'll only use your info to respond to your inquiry.</p>
                  <button
                    type="submit"
                    className="btn-shimmer inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-action-1 px-7 text-[15px] font-bold text-action-2 transition-opacity hover:opacity-95 shadow-md shadow-action-1/20 active:scale-98"
                  >
                    <span>Send message</span><span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
