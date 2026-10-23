"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Plus, Check } from "lucide-react";

interface BestSellersProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export const BEST_SELLERS_LIST: Product[] = [
  {
    id: "emc-tesa-5",
    name: "Tesamorelin",
    slug: "tesamorelin",
    dosage: "5MG",
    category: "metabolic",
    categoryLabel: "Metabolic",
    price: 74.00,
    purity: "99.4%",
    sequence: "Hexenoyl-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2",
    molecularWeight: "5135.9 g/mol",
    casNumber: "218949-48-5",
    lotNumber: "EMC-7402-A",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Growth hormone-releasing factor analog synthesized with high chromatographic refinement.",
    description: "Sterile lyophilized cake under argon atmosphere for metabolic signaling investigation.",
  },
  {
    id: "emc-ipa-10",
    name: "Ipamorelin",
    slug: "ipamorelin-10mg",
    dosage: "10MG",
    category: "metabolic",
    categoryLabel: "Metabolic",
    price: 44.00,
    purity: "99.5%",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    molecularWeight: "711.9 g/mol",
    casNumber: "170851-70-4",
    lotNumber: "EMC-IPA10-01",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Selective pentapeptide growth hormone secretagogue.",
    description: "High-purity lyophilized synthetic secretagogue.",
  },
  {
    id: "emc-tesa-ipa",
    name: "Tesa / IPA 13/3mg",
    slug: "tesa-ipa-13-3mg",
    dosage: "3MG",
    category: "metabolic",
    categoryLabel: "Metabolic",
    price: 84.99,
    purity: "99.2%",
    sequence: "Tesamorelin 13mg + Ipamorelin 3mg co-lyophilized blend",
    molecularWeight: "5847.8 g/mol",
    casNumber: "N/A (Co-formulated)",
    lotNumber: "EMC-TIPA-03",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Dual-action co-lyophilized growth-factor research blend.",
    description: "Formulated for synergistic GH pulse pathway modeling.",
  },
  {
    id: "emc-ghk-kpv",
    name: "GHK-Cu / KPV 50/20mg",
    slug: "ghk-cu-kpv-50-20mg",
    dosage: "20MG",
    category: "repair",
    categoryLabel: "Repair & Recovery",
    price: 69.00,
    purity: "99.6%",
    sequence: "GHK-Cu (50mg) + KPV (20mg)",
    molecularWeight: "788.4 g/mol",
    casNumber: "Complex",
    lotNumber: "EMC-GKPV-02",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Extracellular matrix and cytoprotective tripeptide blend.",
    description: "Dual tissue restoration and anti-inflammatory inquiry peptide.",
  },
  {
    id: "emc-adamax-10",
    name: "Adamax 1032",
    slug: "adamax-1032-10mg",
    dosage: "10MG",
    category: "cognitive",
    categoryLabel: "Cognitive",
    price: 29.99,
    purity: "99.1%",
    sequence: "N-acetyl Semax base with adamantane moiety",
    molecularWeight: "1032.2 g/mol",
    casNumber: "Research only",
    lotNumber: "EMC-ADX-10",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Enhanced synthetic ACTH(4-10) neurotrophic derivative.",
    description: "Investigated for BDNF and TrkB receptor modulation.",
  },
  {
    id: "emc-bac-water",
    name: "Reconstitution solution",
    slug: "reconstitution-solution-10ml",
    dosage: "10ML",
    category: "repair",
    categoryLabel: "Solution",
    price: 14.99,
    purity: "USP Grade",
    sequence: "Sterile water containing 0.9% benzyl alcohol",
    molecularWeight: "N/A",
    casNumber: "100-51-6",
    lotNumber: "EMC-BAC-10",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Bacteriostatic preservation medium for laboratory peptide reconstitution.",
    description: "USP Grade analytical solvent prepared with sterile micro-filtration.",
  },
  {
    id: "emc-5amino",
    name: "5-Amino-1MQ",
    slug: "5-amino-1mq-50mg",
    dosage: "50MG",
    category: "metabolic",
    categoryLabel: "Metabolic",
    price: 49.99,
    purity: "99.3%",
    sequence: "1-Methylquinolin-1-ium-5-amine iodide",
    molecularWeight: "286.1 g/mol",
    casNumber: "42464-96-0",
    lotNumber: "EMC-1MQ-50",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "Selective small molecule NNMT (nicotinamide N-methyltransferase) inhibitor.",
    description: "Investigated in cellular energy metabolism and NAD+ cycling pathways.",
  },
  {
    id: "emc-cjc-ipa",
    name: "CJC / IPA 10mg",
    slug: "cjc-ipa-10mg",
    dosage: "10MG",
    category: "metabolic",
    categoryLabel: "Metabolic",
    price: 59.99,
    purity: "99.4%",
    sequence: "CJC-1295 no DAC (5mg) + Ipamorelin (5mg)",
    molecularWeight: "4079.8 g/mol",
    casNumber: "Co-lyophilized",
    lotNumber: "EMC-CJIPA-10",
    testedDate: "October 2026",
    inStock: true,
    shortDesc: "GHRH analogue with growth hormone releasing pentapeptide.",
    description: "Standard laboratory reference co-agonist preparation.",
  },
];

export function BestSellers({ onAddToCart, onQuickView }: BestSellersProps) {
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  const handleAdd = (p: Product) => {
    onAddToCart(p);
    setAddedMap((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [p.id]: false }));
    }, 1500);
  };

  return (
    <section id="bestsellers" className="py-20 lg:py-28 bg-[#07080b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching AminoHaus */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-1">
              Most Requested.
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Best Sellers
            </h2>
          </div>
          <a
            href="#compounds"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors underline underline-offset-4"
          >
            View all compounds &rarr;
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {BEST_SELLERS_LIST.map((item) => {
            const isTesamorelin = item.id === "emc-tesa-5";
            const isAdded = addedMap[item.id];

            return (
              <div
                key={item.id}
                className="aminohaus-card rounded-xl p-4 sm:p-5 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Dosage Pill */}
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                    <span className="text-slate-400">{item.categoryLabel}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-bold border border-white/10">
                      {item.dosage}
                    </span>
                  </div>

                  {/* Thumbnail / 3D Vial */}
                  <div
                    onClick={() => onQuickView(item)}
                    className="w-full aspect-[4/3] rounded-lg bg-[#0a0d14] border border-white/5 flex items-center justify-center p-3 mb-4 cursor-pointer group-hover:border-cyan-500/30 transition-all overflow-hidden relative"
                  >
                    {isTesamorelin ? (
                      <Image
                        src="/emc-tesamorelin.png"
                        alt={item.name}
                        width={140}
                        height={140}
                        className="object-contain max-h-[120px] filter drop-shadow-[0_10px_20px_rgba(0,240,255,0.25)] group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
                        <div className="w-10 h-14 rounded-md border border-cyan-500/20 bg-cyan-950/20 flex flex-col items-center justify-between p-1.5 shadow-inner">
                          <span className="text-[7px] font-mono text-cyan-400 font-bold">EMC</span>
                          <span className="text-[7px] font-mono text-slate-400">{item.dosage}</span>
                        </div>
                        <span className="text-[9px] font-mono text-slate-500">{item.purity}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Price */}
                  <h3
                    onClick={() => onQuickView(item)}
                    className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-1"
                  >
                    {item.name}
                  </h3>
                  <div className="text-base font-extrabold font-mono text-slate-100 mt-1">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Add to Cart Button matching AminoHaus */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`mt-4 w-full py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    isAdded
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-900 hover:bg-white hover:text-slate-950 text-slate-200 border border-white/10"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to cart</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to cart</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
