"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do you guarantee recovery of lost funds?",
    answer:
      "No. VaultTrace Recovery provides consulting and technical analysis. Outcomes depend on third parties (exchanges, courts, law enforcement), chain conditions, and jurisdiction. We never promise guaranteed recovery.",
  },
  {
    question: "What is a technical case review?",
    answer:
      "A structured assessment of what happened, whether the incident can be investigated on-chain or via documentation, and which evidence must be preserved for counsel or authorities.",
  },
  {
    question: "Should I share my seed phrase?",
    answer:
      "Never share your full seed phrase with anyone who cold-contacts you — including anyone claiming to be from VaultTrace unsolicited. Legitimate reviews do not require your complete seed phrase.",
  },
  {
    question: "How quickly should I act after an incident?",
    answer:
      "As soon as possible. Early documentation preserves transaction trails, communication logs, and platform records that become harder to reconstruct over time.",
  },
  {
    question: "Is this legal or investment advice?",
    answer:
      "No. Nothing on this site is legal or investment advice. We provide educational resources and technical analysis that can support your counsel, compliance team, or relevant authorities.",
  },
  {
    question: "What types of loss can you review?",
    answer:
      "Scam and fraud cases, phishing, DeFi exploits, exchange lockouts, lost access/keys, and other digital asset incidents where forensic tracing or evidence packaging may apply.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[920px]">
        <div className="text-center sm:text-left">
          <span className="inline-block rounded-full bg-bg3/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-bg3">
            Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
            Clear answers before you share a case
          </h2>
        </div>
        
        <div className="mt-10 border-t border-border sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-border transition-colors">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFaq(index);
                  }}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left outline-none hover:text-bg3 focus-visible:text-bg3 transition-colors group"
                >
                  <span className="text-[17px] font-bold leading-snug text-ink sm:text-[19px] group-hover:text-bg3 transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                      isOpen ? "bg-bg3 text-white border-bg3 rotate-180" : "border-border text-ink bg-bg1 group-hover:border-bg3/50"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M7 1.5v11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`origin-center transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      ></path>
                      <path d="M1.5 7h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-[15px] leading-7 text-body sm:pb-7 sm:pr-14 sm:text-[16px] sm:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
