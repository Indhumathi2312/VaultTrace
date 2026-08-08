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
    <section id="faqs" className="scroll-mt-24 bg-bg2 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-bg3">FAQ</p>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
            Clear answers before you share a case
          </h2>
        </div>
        <div className="mt-10 border-t border-border sm:mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left sm:py-6"
                >
                  <span className="text-[16px] font-bold leading-snug text-ink sm:text-[18px]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors ${
                      isOpen ? "bg-bg3 text-white border-bg3" : ""
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
                    <p className="pb-5 text-[15px] leading-7 text-body sm:pb-6 sm:pr-16">
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
