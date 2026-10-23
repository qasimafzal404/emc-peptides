"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, PRODUCTS } from "@/data/products";
import { Plus, Eye, Check, Shield, FileText } from "lucide-react";

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

export function ProductCatalog({ onAddToCart, onQuickView }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Compounds" },
    { id: "metabolic", label: "Metabolic & Growth" },
    { id: "repair", label: "Cellular Repair" },
    { id: "longevity", label: "Longevity & Matrix" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section id="compounds" className="py-20 lg:py-28 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              RESEARCH CATALOG · OCTOBER 2026
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Analytical-Grade Compounds.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Each compound is synthesized via solid-phase methodology, lyophilized into sealed vials, and paired with verifiable lot chromatography.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === c.id
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((p) => {
            const isFeatured = p.id === "emc-tesa-5";
            const isJustAdded = addedId === p.id;

            return (
              <div
                key={p.id}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between relative group"
              >
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                    {p.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {p.purity} HPLC
                  </span>
                </div>

                {/* Compound Graphic / Preview */}
                <div className="w-full aspect-[4/3] rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-center p-4 mb-5 relative overflow-hidden group-hover:border-cyan-500/30 transition-colors">
                  {isFeatured ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src="/emc-tesamorelin.png"
                        alt={p.name}
                        width={180}
                        height={180}
                        className="object-contain max-h-[160px] filter drop-shadow-[0_10px_20px_rgba(0,240,255,0.2)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="w-16 h-20 rounded-lg border border-cyan-500/20 bg-cyan-950/20 flex flex-col items-center justify-between p-2 shadow-inner">
                        <span className="text-[8px] font-mono text-cyan-400 font-bold">EMC</span>
                        <div className="w-full h-0.5 bg-cyan-400/40" />
                        <span className="text-[8px] font-mono text-slate-400">{p.dosage}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">Lot: {p.lotNumber}</span>
                    </div>
                  )}

                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800">
                      {p.dosage}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-lg font-black font-mono text-white">
                      €{p.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {p.shortDesc}
                  </p>
                  <div className="text-[10px] font-mono text-slate-500 pt-1 flex items-center justify-between">
                    <span>CAS: {p.casNumber}</span>
                    <span>MW: {p.molecularWeight}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  <button
                    onClick={() => onQuickView(p)}
                    className="px-3 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-800 hover:border-slate-700"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-400" />
                    <span>Spec Sheet</span>
                  </button>

                  <button
                    onClick={() => handleAdd(p)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      isJustAdded
                        ? "bg-emerald-500 text-white"
                        : "bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add To Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
