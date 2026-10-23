"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "01 Do you ship cold? Why don’t my orders come with ice packs?",
      a: "No — and they don’t need to. Our products ship as lyophilized (freeze-dried) powder, which is stable at ambient temperature for normal shipping durations. Cold-chain packaging is designed for materials already in solution, which are far more sensitive to temperature. In dry powder form, the water that drives degradation has already been removed, so transit durations at room temperature do not meaningfully alter peptide fidelity.",
    },
    {
      q: "02 How should I store the product when it arrives?",
      a: "Lyophilized powder should be stored in a dry, dark environment at −20 °C for extended preservation (up to 24–36 months). Once reconstituted with sterile bacteriostatic water, compounds must be kept refrigerated between 2 °C and 8 °C, shielded from UV light, and used within experimental timelines.",
    },
    {
      q: "03 Can you tell me how to reconstitute it?",
      a: "Reconstitution parameters vary depending on your specific protocol, compound solubility, and target concentration. Generally, researchers introduce sterile bacteriostatic water slowly down the inside wall of the vial under sterile laminar flow, allowing the lyophilized puck to dissolve gently without agitation or vortexing.",
    },
    {
      q: "04 What does “research use only” actually mean?",
      a: "It means compounds are synthesized and qualified strictly for in-vitro laboratory analysis, molecular modeling, and preclinical research. They are not cleared, approved, or sold for human or veterinary medicinal use, clinical therapy, cosmetics, or dietary supplementation.",
    },
    {
      q: "05 Where can I find the Certificate of Analysis?",
      a: "Every single lot number printed on your vial is published in our open COA directory. You can enter your lot code directly into our online Batch Verification tool above to view and download the complete RP-HPLC and mass spectrometry testing report.",
    },
    {
      q: "06 What does a COA tell me — and what doesn’t it?",
      a: "A Certificate of Analysis tells you the tested chemical identity (verified via mass spectrometry against expected molecular weight) and chromatographic purity percentage (analyzed by reverse-phase HPLC). It confirms the chemical integrity and lot conformance of the powder inside that specific batch.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090c13] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Answers, without hedging.
          </h2>
          <p className="text-slate-400 text-sm">
            Six questions we are asked most. If you need anything else, our team answers in writing within one business day.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="aminohaus-card rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {f.a}
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
