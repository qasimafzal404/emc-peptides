"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { X, CheckCircle, ShieldCheck, Download, Plus } from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function QuickViewModal({
  product,
  onClose,
  onAddToCart,
}: QuickViewModalProps) {
  if (!product) return null;

  const isFeatured = product.id === "emc-tesa-5";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#0a0e17] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden z-10 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
          
          {/* Left Column Preview */}
          <div className="sm:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center">
            {isFeatured ? (
              <Image
                src="/emc-tesamorelin.png"
                alt={product.name}
                width={200}
                height={200}
                className="object-contain max-h-[190px] drop-shadow-[0_10px_20px_rgba(0,240,255,0.25)]"
              />
            ) : (
              <div className="w-24 h-32 rounded-xl border border-cyan-500/30 bg-cyan-950/20 flex flex-col items-center justify-between p-3 my-4">
                <span className="text-xs font-mono text-cyan-400 font-bold">EMC</span>
                <span className="text-[10px] font-mono text-slate-300">{product.dosage}</span>
              </div>
            )}
            <div className="mt-4 text-xs font-mono text-cyan-400">
              Lot {product.lotNumber}
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              Verified {product.testedDate}
            </div>
          </div>

          {/* Right Column Specifications */}
          <div className="sm:col-span-7 space-y-4">
            <div>
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                {product.categoryLabel}
              </div>
              <h2 className="text-2xl font-bold text-white">{product.name}</h2>
              <div className="text-xl font-black font-mono text-white mt-1">
                €{product.price.toFixed(2)}{" "}
                <span className="text-xs font-normal text-slate-400">/ vial</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Scientific Specs Table */}
            <div className="space-y-2 text-xs font-mono bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Purity (HPLC):</span>
                <span className="text-emerald-400 font-bold">{product.purity}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">CAS Registry:</span>
                <span className="text-slate-200">{product.casNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Molecular Weight:</span>
                <span className="text-slate-200">{product.molecularWeight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Physical Form:</span>
                <span className="text-slate-200">Sterile Lyophilized Cake</span>
              </div>
            </div>

            {/* Sequence preview */}
            <div className="text-[10px] font-mono bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-slate-400 break-all">
              <span className="text-cyan-400 font-bold block mb-0.5">PEPTIDE SEQUENCE:</span>
              {product.sequence}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="flex-1 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add {product.dosage} to Cart</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
