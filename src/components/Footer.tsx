"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#05080f] text-slate-400 text-xs border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        
        {/* Top Footer: Brand & 3 Link Columns matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white lowercase">
                emc peptides
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm font-light leading-relaxed">
              Precision research compounds, documented batch by batch.
            </p>
          </div>

          {/* Links Col 1 (Spans 2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#bestsellers" className="hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Track order
                </a>
              </li>
              <li>
                <a href="#difference" className="hover:text-white transition-colors">
                  Partner Program
                </a>
              </li>
              <li>
                <a href="#coa" className="hover:text-white transition-colors">
                  COA
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 (Spans 2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#anatomy" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Legal (Spans 3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Terms &amp; conditions policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Return &amp; Refund Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Shipping Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Partner program Terms</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Disclaimer</span>
              </li>
            </ul>
          </div>

        </div>

        {/* FDA Disclaimer Box matching Screenshot 5 exactly */}
        <div className="border border-amber-500/35 bg-[#080d16] rounded-xl p-6 sm:p-8 space-y-5 text-[11px] leading-relaxed">
          
          {/* Header */}
          <div className="flex items-center gap-2 text-[#e5b945] font-mono text-xs font-semibold">
            <span>◇</span>
            <span className="tracking-wide">FDA Disclaimer</span>
          </div>

          {/* Core Warning Statement */}
          <p className="text-slate-300 font-light">
            These products have not been evaluated or approved by the United States Food and Drug Administration. No statement made by EMC Peptides and no information, published on this website, has been reviewed by the Food and Drug Administration. Nothing offered or described here is intended to diagnose, treat, cure, mitigate, or prevent any disease or health condition.
          </p>

          {/* 3 Bullet Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3 border-t border-white/5 text-[10.5px] text-slate-400">
            
            <div className="space-y-1.5">
              <div className="font-mono text-slate-200 font-bold uppercase tracking-wider text-[10px]">
                • NOT A DOMESTIC CONSUMER PRODUCT
              </div>
              <p className="font-light leading-relaxed">
                EMC Peptides products are supplied strictly for in-vitro laboratory research and analytical reference use by qualified professionals. They are not drugs, foods, food additives, dietary supplements, cosmetics, or household chemicals.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-mono text-slate-200 font-bold uppercase tracking-wider text-[10px]">
                • NOT FOR HUMAN OR VETERINARY USE
              </div>
              <p className="font-light leading-relaxed">
                They must not be consumed, injected, ingested, inhaled, applied topically, or otherwise administered to any person or animal. No instruction on this site is medical advice, a treatment recommendation, or a dosing instruction.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-mono text-slate-200 font-bold uppercase tracking-wider text-[10px]">
                • BUYER RESPONSIBILITY
              </div>
              <p className="font-light leading-relaxed">
                By purchasing, the buyer confirms they are a qualified researcher acquiring the material for lawful laboratory research, and accepts full responsibility for its handling, storage, use, and disposal in compliance with all applicable laws.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Payment Security */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; 2026 EMC Peptides. All rights reserved. Research compounds for qualified laboratory use only.
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">ISO/IEC 17025 ASSAYED</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">PURITY VERIFIED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
