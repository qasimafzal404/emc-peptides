import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/5 text-slate-400 text-xs">
      {/* Main Footer Links matching AminoHaus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Col 1: Explore */}
          <div className="space-y-3">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
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

          {/* Col 2: Brand */}
          <div className="space-y-3">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              EMC Peptides
            </div>
            <ul className="space-y-2 text-xs">
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

          {/* Col 3: Legal */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Return & Refund Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Shipping Policy</span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors">Disclaimer</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Accepted Payments */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              Payments Accepted
            </div>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 font-bold">VISA</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 font-bold">MASTERCARD</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 font-bold">AMEX</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 font-bold">DISCOVER</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
              Discrete, secure checkout processing for authorized institutional purchasing.
            </p>
          </div>

        </div>

        {/* FDA Disclaimer Block matching AminoHaus */}
        <div className="mt-12 pt-8 border-t border-white/5 space-y-4 text-[11px] text-slate-400 leading-relaxed font-light">
          <div className="text-white font-bold font-mono text-xs uppercase tracking-wide">
            FDA Disclaimer
          </div>
          <p>
            These products have not been evaluated or approved by the United States Food and Drug Administration. No statement made by EMC Peptides, and no information published on this website, has been evaluated by the Food and Drug Administration. Nothing offered or described here is intended to diagnose, treat, cure, mitigate, or prevent any disease or health condition.
          </p>
          <div className="text-white font-bold font-mono text-xs uppercase tracking-wide pt-2">
            Not a regulated consumer product · Not for human or veterinary use
          </div>
          <p>
            EMC Peptides products are supplied strictly for in-vitro laboratory research and analytical reference use by qualified professionals. They are not drugs, foods, food additives, dietary supplements, cosmetics, medical devices, or household chemicals. They must not be consumed, injected, ingested, inhaled, applied topically, or otherwise administered to any person or animal.
          </p>
          <div className="text-white font-bold font-mono text-xs uppercase tracking-wide pt-2">
            Buyer responsibility
          </div>
          <p>
            By purchasing, the buyer confirms they are a qualified researcher acquiring the material for lawful laboratory research, and accepts full responsibility for its handling, storage, use, and disposal in compliance with all applicable federal, state, and local laws.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 EMC Peptides. All rights reserved. Research compounds for qualified laboratory use only.
          </div>
          <div className="flex gap-4">
            <span>HPLC CERTIFIED</span>
            <span>STERILE SEALED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
