"use client";

import { useState } from 'react';
import { useModal } from './ModalContext';

export default function CaseReviewModal() {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    email: '',
    countryCode: 'US +1',
    phone: '',
  });

  if (!isOpen) return null;

  const nextStep = () => {
    setErrorMsg('');
    if (step === 1) {
      if (!formData.name.trim()) {
        setErrorMsg('Please enter your full name');
        return;
      }
    } else if (step === 3) {
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        setErrorMsg('Please enter a valid email address');
        return;
      }
    } else if (step === 4) {
      if (!formData.phone.trim() || !/^[0-9+\s()\-]{7,20}$/.test(formData.phone.trim())) {
        setErrorMsg('Please enter a valid phone number');
        return;
      }
      setStep(5); // Go to success confirmation step
      return;
    }
    if (step < 5) setStep(step + 1);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setStep(1);
      setErrorMsg('');
      setFormData({ name: '', amount: '', email: '', countryCode: 'US +1', phone: '' });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
        aria-hidden="true"
      ></div>
      
      <div className="relative w-full max-w-[500px] rounded-3xl bg-white shadow-2xl overflow-hidden flex flex-col border border-border">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5 sm:px-7 sm:py-5">
          <h2 className="text-[17px] font-bold tracking-tight text-ink sm:text-[18px]">
            {step === 5 ? 'Request Submitted' : 'Free Technical Case Review'}
          </h2>
          <button 
            type="button" 
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-bg1"
            aria-label="Close modal"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12m0-12L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>

        <div className="p-5 sm:p-7 flex-1">
          {/* Progress Bar */}
          {step <= 4 && (
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s} 
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${s <= step ? 'bg-bg3' : 'bg-[#e5e7eb]'}`}
                ></div>
              ))}
            </div>
          )}

          {/* Step 1: Name */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-[20px] font-bold tracking-tight text-ink sm:text-[22px] mb-5">
                What's your name?
              </h3>
              <div className={`relative flex items-center overflow-hidden rounded-2xl border transition-colors ${errorMsg ? 'border-[#d92d20] bg-red-50/20' : 'border-border bg-[#f9fafb] focus-within:border-bg3'}`}>
                <input 
                  type="text" 
                  placeholder="Your full name" 
                  className="w-full bg-transparent px-5 py-4 text-[15px] outline-none placeholder:text-mute text-ink"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({...formData, name: e.target.value});
                    if (errorMsg) setErrorMsg('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && nextStep()}
                  autoFocus
                />
                <div className="pr-3">
                   <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.name.trim()}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg3 text-white disabled:opacity-40 transition-opacity hover:opacity-90 active:scale-95"
                    aria-label="Next step"
                   >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                       <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                     </svg>
                   </button>
                </div>
              </div>
              {errorMsg && (
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-bold text-[#d92d20]">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {errorMsg}
                </p>
              )}
              <div className="mt-7 border-l-2 border-bg3 pl-4 py-1">
                <p className="text-[13px] leading-relaxed text-body">
                  Share transaction IDs or wallet details when you can — it strengthens your case review.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Amount */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-[20px] font-bold tracking-tight text-ink sm:text-[22px] mb-5">
                Estimated loss amount?
              </h3>
              <div className="flex flex-col gap-3">
                {['Less than $10k', '$10k - $50k', 'More than $50k'].map((amt) => (
                  <button 
                    key={amt}
                    type="button"
                    onClick={() => { setFormData({...formData, amount: amt}); nextStep(); }}
                    className={`w-full rounded-2xl border px-5 py-4 text-left text-[15px] font-bold transition-all ${formData.amount === amt ? 'border-bg3 bg-bg3/5 text-bg3' : 'border-border bg-[#f9fafb] text-ink hover:border-bg3/50'}`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <div className="mt-7 border-l-2 border-bg3 pl-4 py-1">
                <p className="text-[13px] leading-relaxed text-body">
                  Missing transaction logs or wallet history? We help reconstruct timelines during intake.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Email */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-[20px] font-bold tracking-tight text-ink sm:text-[22px] mb-5">
                What's your email address?
              </h3>
              <div className={`relative flex items-center overflow-hidden rounded-2xl border transition-colors ${errorMsg ? 'border-[#d92d20] bg-red-50/20' : 'border-border bg-[#f9fafb] focus-within:border-bg3'}`}>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="w-full bg-transparent px-5 py-4 text-[15px] outline-none placeholder:text-mute text-ink"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({...formData, email: e.target.value});
                    if (errorMsg) setErrorMsg('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && nextStep()}
                  autoFocus
                />
                <div className="pr-3">
                   <button 
                    type="button"
                    onClick={nextStep}
                    disabled={!formData.email.trim()}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-bg3 text-white disabled:opacity-40 transition-opacity hover:opacity-90 active:scale-95"
                    aria-label="Next step"
                   >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                       <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                     </svg>
                   </button>
                </div>
              </div>
              {errorMsg && (
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-bold text-[#d92d20]">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {errorMsg}
                </p>
              )}
              <div className="mt-7 border-l-2 border-bg3 pl-4 py-1">
                <p className="text-[13px] leading-relaxed text-body">
                  We send confidential technical review reports directly to your email.
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Phone */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-[20px] font-bold tracking-tight text-ink sm:text-[22px] mb-5">
                Your phone / WhatsApp number
              </h3>
              <div className={`relative flex items-center overflow-hidden rounded-2xl border transition-colors ${errorMsg ? 'border-[#d92d20] bg-red-50/20' : 'border-border bg-[#f9fafb] focus-within:border-bg3'}`}>
                <div className="flex shrink-0 items-center border-r border-border bg-transparent">
                   <select 
                    className="h-full appearance-none bg-transparent py-4 pl-4 pr-7 text-[13px] font-bold text-ink outline-none"
                    value={formData.countryCode}
                    onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                   >
                     <option value="US +1">US +1</option>
                     <option value="IN +91">IN +91</option>
                     <option value="GB +44">GB +44</option>
                     <option value="AE +971">AE +971</option>
                     <option value="CA +1">CA +1</option>
                   </select>
                   <svg className="pointer-events-none absolute right-2 h-3 w-3 text-body" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" clipRule="evenodd"></path>
                   </svg>
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone number" 
                  className="w-full bg-transparent px-4 py-4 text-[15px] outline-none placeholder:text-mute text-ink"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    if (errorMsg) setErrorMsg('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && nextStep()}
                  autoFocus
                />
              </div>
              {errorMsg && (
                <p className="mt-2 flex items-center gap-1.5 text-[13px] font-bold text-[#d92d20]">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/><path d="M6 3v4M6 9h0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {errorMsg}
                </p>
              )}
              <p className="mt-2 text-[12px] text-mute">We can reach you faster via WhatsApp for urgent intake.</p>
              
              <div className="mt-6 border-l-2 border-bg3 pl-4 py-1">
                <p className="text-[13px] leading-relaxed text-body">
                  Lost funds or access recently? Our forensic team prioritizes fresh incident trails.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Success Confirmation */}
          {step === 5 && (
            <div className="animate-in fade-in zoom-in-95 duration-300 text-center py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-bg3/10 text-bg3 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-[22px] font-bold tracking-tight text-ink">Case Review Submitted</h3>
              <p className="mt-3 text-[14px] leading-6 text-body">
                Thank you <span className="font-bold text-ink">{formData.name}</span>. We've logged your case inquiry. Our analysts will reach out via <span className="font-bold text-ink">{formData.email}</span> / WhatsApp within one business day.
              </p>
              <div className="mt-6 rounded-2xl bg-bg1 p-4 text-left text-[13px] text-body border border-border">
                <p className="font-bold text-ink mb-1">Intake Summary:</p>
                <p>• Estimated Amount: {formData.amount || 'Not specified'}</p>
                <p>• Phone: {formData.countryCode} {formData.phone}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center gap-3 border-t border-border p-5 sm:px-7 pt-4 bg-[#fbfbfb]">
          {step < 5 ? (
            <>
              <a
                href="https://wa.me/16469260143"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-[14px] font-bold transition-opacity hover:opacity-90 bg-[#25d366] text-white shadow-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path>
                </svg>
                WhatsApp
              </a>
              <button 
                type="button" 
                onClick={nextStep}
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full px-4 text-[14px] font-bold transition-all hover:opacity-90 bg-bg3 text-white shadow-md shadow-bg3/20 active:scale-98"
              >
                {step === 4 ? 'Submit Case' : 'Continue →'}
              </button>
            </>
          ) : (
            <button 
              type="button" 
              onClick={handleClose}
              className="w-full h-12 rounded-full bg-bg3 text-white font-bold text-[14px] shadow-md shadow-bg3/20 transition-opacity hover:opacity-90"
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
