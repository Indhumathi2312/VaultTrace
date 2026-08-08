"use client";
import { useState } from 'react';

const steps = [
  {
    step: "Step 01",
    title: "Secure intake",
    desc: "Share what happened — timeline, wallets, platforms, and evidence you already have. We never ask for your full seed phrase.",
  },
  {
    step: "Step 02",
    title: "Technical case review",
    desc: "We assess investigability: on-chain activity, documentation gaps, and whether forensic tracing is viable.",
  },
  {
    step: "Step 03",
    title: "Evidence packaging",
    desc: "Build a structured record — wallets, hashes, timelines, and communications ready for counsel or authorities.",
  },
  {
    step: "Step 04",
    title: "Clear next steps",
    desc: "You get a practical readout: what can be investigated, what to preserve, and realistic paths forward.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-we-work" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1340px]">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
            How We Work
          </span>
          <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            A process built for clarity
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-body sm:text-[18px]">
            Clear milestones, honest communication, and no false promises. Here's how we move from incident to actionable record.
          </p>
        </div>
        
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-bg2 shadow-sm sm:mt-14">
          <div className="grid divide-y divide-border lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {steps.map((s, index) => {
              const isActive = activeStep === index;
              return (
                <article
                  key={index}
                  tabIndex={0}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className={`group relative cursor-pointer px-7 py-9 outline-none transition-colors duration-200 sm:px-8 sm:py-10 ${
                    isActive ? "bg-bg1/80" : "bg-bg2 hover:bg-bg1/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[12px] font-extrabold uppercase tracking-[0.2em] transition-colors ${
                      isActive ? "text-bg3" : "text-mute"
                    }`}>
                      {s.step}
                    </span>
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors ${
                      isActive ? "bg-bg3 text-white" : "bg-border/60 text-mute"
                    }`}>
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[19px] font-bold leading-snug tracking-tight text-ink sm:text-[21px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-body sm:text-[15px] sm:leading-7">
                    {s.desc}
                  </p>
                  
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[3.5px] bg-bg3 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-75"
                    }`}
                    aria-hidden="true"
                  ></span>
                </article>
              );
            })}
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
