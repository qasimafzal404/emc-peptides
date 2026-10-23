import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070a] border-t border-slate-900 text-slate-400 text-xs">
      {/* Top Disclaimer Band */}
      <div className="bg-slate-950 border-b border-slate-900/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px]">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="font-bold">MANDATORY COMPLIANCE DISCLOSURE:</span>
          </div>
          <p className="text-[11px] text-slate-400 max-w-4xl">
            All compounds supplied by EMC Peptides are synthesized exclusively for qualified institutional in-vitro and preclinical laboratory research. They are not intended, approved, or sold for human or veterinary administration, diagnostics, cosmetics, or therapeutic use.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 rounded bg-slate-900 border border-cyan-500/30 text-cyan-400 font-black text-sm">
                EMC
              </div>
              <span className="text-white font-extrabold tracking-widest text-base">
                EMC PEPTIDES
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Setting the European standard for research compound consistency. Analytical purity, verifiable lot records, and cold-chain integrity delivered direct to verified research facilities.
            </p>
            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
              <span>EU Dispatch Operational · Cold Express Live</span>
            </div>
          </div>

          {/* Catalog Categories */}
          <div className="space-y-3">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              Research Categories
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#compounds" className="hover:text-cyan-400 transition-colors">
                  Metabolic & Growth
                </a>
              </li>
              <li>
                <a href="#compounds" className="hover:text-cyan-400 transition-colors">
                  Cellular Tissue Repair
                </a>
              </li>
              <li>
                <a href="#compounds" className="hover:text-cyan-400 transition-colors">
                  Longevity & Mitochondrial
                </a>
              </li>
              <li>
                <a href="#compounds" className="hover:text-cyan-400 transition-colors">
                  Custom Synthesis Protocols
                </a>
              </li>
            </ul>
          </div>

          {/* Quality & Legal */}
          <div className="space-y-3">
            <div className="font-mono text-white text-xs font-bold tracking-wider uppercase">
              Quality Assurance
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#coa-lookup" className="hover:text-cyan-400 transition-colors">
                  Lot Verification & COA
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-cyan-400 transition-colors">
                  Analytical Methodology
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Inquiries
                </a>
              </li>
              <li>
                <span className="text-slate-400">Institutional Terms & Conditions</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} EMC Peptides. All rights reserved. Analytical compounds for laboratory use only.
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px]">
            <span>HPLC ACCREDITATION</span>
            <span>ARGON SEALED</span>
            <span>COLD-CHAIN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
