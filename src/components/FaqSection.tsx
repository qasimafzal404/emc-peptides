"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What documentation is provided with each peptide order?",
      a: "Every vial includes an assigned lot number that directly corresponds to an independently generated Certificate of Analysis (COA). This documentation comprises High-Performance Liquid Chromatography (RP-HPLC) purity analysis and Electrospray Ionization Mass Spectrometry (ESI-MS) sequence verification.",
    },
    {
      q: "How are EMC Peptides synthesized and preserved?",
      a: "All compounds are prepared via Solid-Phase Peptide Synthesis (SPPS) using automated Fmoc peptide synthesizers, purified with preparative reverse-phase HPLC, and lyophilized into stable, sterile freeze-dried cakes under an inert argon atmosphere to safeguard against oxidative decay.",
    },
    {
      q: "What are the recommended reconstitution and storage conditions?",
      a: "Lyophilized vials should be maintained at -20°C for extended stability, shielded from light exposure. Upon gentle reconstitution with sterile bacteriostatic water, compounds should be refrigerated at 2°C to 8°C and evaluated within experimental protocol timelines without rigorous vortexing.",
    },
    {
      q: "Who is eligible to purchase from EMC Peptides?",
      a: "Products are strictly intended for qualified laboratory researchers, universities, biotechnology organizations, and independent analytical investigators. Compounds are strictly for in-vitro research and are not approved for human or veterinary therapeutic use.",
    },
    {
      q: "What packaging and cold-chain measures are utilized?",
      a: "All orders are packaged in discrete, tamper-evident secondary containers. Temperature-sensitive items are dispatched with insulated cold-pack liners via rapid trackable courier services across Europe to ensure molecular integrity upon arrival.",
    },
    {
      q: "Can custom batch quantities or synthesis lengths be commissioned?",
      a: "Yes. In addition to our stock catalog, our laboratory partners accommodate custom sequence synthesis, fluorescent tagging, and bulk lot production exceeding 100g. Reach out directly to our scientific team via the contact portal.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090e17] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-3">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            CLEAR ANSWERS · PROTOCOL TRANSPARENCY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Answers, Without Hedging.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Six questions researchers ask most. If you require specialized batch parameters, our technical team responds in writing within 24 hours.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
