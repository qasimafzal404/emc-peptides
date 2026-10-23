"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { ShoppingBag, Check } from "lucide-react";

interface BestSellersProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

interface BestSellerCardItem {
  id: string;
  name: string;
  dosage: string;
  price: number;
  bgColor: string; // Pastel background hex matching the AminoHaus screenshots
  hueShift?: string;
  category: "metabolic" | "repair" | "cognitive" | "longevity";
  purity: string;
  description: string;
  casNumber: string;
  molecularWeight: string;
  sequence: string;
  lotNumber: string;
}

export const BEST_SELLERS_DATA: BestSellerCardItem[] = [
  {
    id: "emc-ipa-10",
    name: "Ipamorelin 10mg",
    dosage: "10MG",
    price: 44.00,
    bgColor: "#d5aba5", // Warm dusty rose (Image 2)
    hueShift: "hue-rotate-[130deg]",
    category: "metabolic",
    purity: "99.5%",
    description: "Selective pentapeptide growth hormone secretagogue.",
    casNumber: "170851-70-4",
    molecularWeight: "711.9 g/mol",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    lotNumber: "EMC-IPA10-01",
  },
  {
    id: "emc-tesa-ipa",
    name: "Tesa / IPA 13/3mg",
    dosage: "3MG",
    price: 84.99,
    bgColor: "#d39791", // Terracotta / clay red (Image 2)
    hueShift: "hue-rotate-[155deg]",
    category: "metabolic",
    purity: "99.4%",
    description: "Dual-action co-lyophilized growth-factor research blend.",
    casNumber: "Co-formulated",
    molecularWeight: "5847.8 g/mol",
    sequence: "Tesamorelin 13mg + Ipamorelin 3mg co-lyophilized blend",
    lotNumber: "EMC-TIPA-03",
  },
  {
    id: "emc-ghk-kpv",
    name: "GHK-Cu / KPV 50/20mg",
    dosage: "20MG",
    price: 69.00,
    bgColor: "#9eaec2", // Steel slate-blue (Image 2)
    hueShift: "hue-rotate-[0deg]",
    category: "repair",
    purity: "99.6%",
    description: "Extracellular matrix and cytoprotective tripeptide blend.",
    casNumber: "Complex",
    molecularWeight: "788.4 g/mol",
    sequence: "GHK-Cu (50mg) + KPV (20mg)",
    lotNumber: "EMC-GKPV-02",
  },
  {
    id: "emc-adamax-10",
    name: "Adamax 1032 10mg",
    dosage: "10MG",
    price: 29.99,
    bgColor: "#cfc7d6", // Lavender / lilac (Image 2)
    hueShift: "hue-rotate-[220deg]",
    category: "cognitive",
    purity: "99.2%",
    description: "Enhanced synthetic ACTH(4-10) neurotrophic derivative.",
    casNumber: "Research only",
    molecularWeight: "1032.2 g/mol",
    sequence: "N-acetyl Semax base with adamantane moiety",
    lotNumber: "EMC-ADX-10",
  },
  {
    id: "emc-bac-water",
    name: "Reconstitution solution 10ml",
    dosage: "10ML",
    price: 14.99,
    bgColor: "#889cb5", // Cool slate grey-blue (Image 3)
    hueShift: "hue-rotate-[190deg]",
    category: "repair",
    purity: "USP Grade",
    description: "Bacteriostatic preservation medium for laboratory peptide reconstitution.",
    casNumber: "100-51-6",
    molecularWeight: "108.1 g/mol",
    sequence: "Sterile water containing 0.9% benzyl alcohol",
    lotNumber: "EMC-BAC-10",
  },
  {
    id: "emc-5amino",
    name: "5-Amino-1MQ 50mg",
    dosage: "50MG",
    price: 49.99,
    bgColor: "#849e9e", // Seafoam / sage slate (Image 3)
    hueShift: "hue-rotate-[50deg]",
    category: "metabolic",
    purity: "99.3%",
    description: "Selective small molecule NNMT inhibitor for cellular energy inquiry.",
    casNumber: "42464-96-0",
    molecularWeight: "286.1 g/mol",
    sequence: "1-Methylquinolin-1-ium-5-amine iodide",
    lotNumber: "EMC-1MQ-50",
  },
  {
    id: "emc-cjc-ipa",
    name: "CJC / IPA 10mg",
    dosage: "10MG",
    price: 59.99,
    bgColor: "#c18c88", // Dusty rose red (Image 3)
    hueShift: "hue-rotate-[145deg]",
    category: "metabolic",
    purity: "99.4%",
    description: "GHRH analogue with growth hormone releasing pentapeptide.",
    casNumber: "Co-lyophilized",
    molecularWeight: "4079.8 g/mol",
    sequence: "CJC-1295 no DAC (5mg) + Ipamorelin (5mg)",
    lotNumber: "EMC-CJIPA-10",
  },
  {
    id: "emc-aod-5",
    name: "AOD 5mg",
    dosage: "5MG",
    price: 49.99,
    bgColor: "#8aa2a2", // Muted sage green (Image 3)
    hueShift: "hue-rotate-[70deg]",
    category: "metabolic",
    purity: "99.1%",
    description: "C-terminal fragment of human growth hormone (Tyr-hGH 177-191).",
    casNumber: "221231-10-3",
    molecularWeight: "1815.1 g/mol",
    sequence: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe",
    lotNumber: "EMC-AOD-05",
  },
];

export function BestSellers({ onAddToCart, onQuickView }: BestSellersProps) {
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  const handleAdd = (item: BestSellerCardItem) => {
    // Map to generic product interface
    const product: Product = {
      id: item.id,
      name: item.name,
      slug: item.id,
      dosage: item.dosage,
      category: item.category,
      categoryLabel: item.category,
      price: item.price,
      purity: item.purity,
      sequence: item.sequence,
      molecularWeight: item.molecularWeight,
      casNumber: item.casNumber,
      lotNumber: item.lotNumber,
      testedDate: "October 2026",
      inStock: true,
      shortDesc: item.description,
      description: item.description,
    };

    onAddToCart(product);
    setAddedMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="bestsellers" className="py-16 sm:py-24 bg-[#f4f1ea] border-t border-[#e2dcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header directly matching Image 2 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#9a782a]" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-[#9a782a]">
                MOST REQUESTED.
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#11161d]">
              Best Sellers
            </h2>
          </div>

          <a
            href="#bestsellers"
            className="text-xs font-mono text-[#4a5568] hover:text-black transition-colors flex items-center gap-1 group"
          >
            <span>View all compounds</span>
            <span className="group-hover:translate-x-1 transition-transform">―</span>
          </a>
        </div>

        {/* 4 Column Product Grid with Pastel Container Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_SELLERS_DATA.map((item) => {
            const isAdded = addedMap[item.id];

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between group"
              >
                <div>
                  {/* Colored Container with 3D Vial standing on it (Images 2 & 3) */}
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    onClick={() => onQuickView(item as any)}
                    className="w-full aspect-[1/1.05] rounded-2xl flex items-center justify-center p-6 mb-4 cursor-pointer relative overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/emc-tesamorelin.png"
                        alt={item.name}
                        width={180}
                        height={180}
                        className={`object-contain max-h-[160px] filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105 ${item.hueShift || ""}`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onQuickView(item as any)}
                    className="font-bold text-base text-[#11161d] hover:text-[#0d211a] transition-colors cursor-pointer line-clamp-1 mb-2"
                  >
                    {item.name}
                  </h3>

                  {/* Dosage Pill Tag */}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0d211a] text-white text-[10px] font-mono font-bold tracking-wider">
                      {item.dosage}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="text-base font-bold text-[#11161d] font-mono mb-4">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Dark Pill "Add to cart" Button (matching Image 2 & 3) */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`w-full py-3 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                    isAdded
                      ? "bg-emerald-700 text-white"
                      : "bg-[#0d211a] hover:bg-[#16382c] text-white"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" />
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
