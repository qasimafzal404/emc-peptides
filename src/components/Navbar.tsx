"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <span className="font-black text-cyan-400 tracking-tighter text-xl">EMC</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-widest text-lg text-white group-hover:text-cyan-300 transition-colors">
                EMC PEPTIDES
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400 font-mono uppercase">
                Analytical Grade Synthesis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#compounds" className="hover:text-cyan-400 transition-colors">
              Compounds
            </Link>
            <Link href="#coa-lookup" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>Lot Verification</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-mono">COA</span>
            </Link>
            <Link href="#standard" className="hover:text-cyan-400 transition-colors">
              The Standard
            </Link>
            <Link href="#faq" className="hover:text-cyan-400 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESEARCH USE ONLY</span>
            </div>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-850 text-slate-200 transition-all flex items-center gap-2 group"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-slate-300 group-hover:text-cyan-400 transition-colors" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">Basket</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold text-slate-950 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f0ff]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-6 space-y-4">
          <Link
            href="#compounds"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Compounds Catalog
          </Link>
          <Link
            href="#coa-lookup"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Batch Verification (COA)
          </Link>
          <Link
            href="#standard"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            The EMC Standard
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-cyan-400"
          >
            Frequently Answered
          </Link>
          <div className="pt-4 border-t border-slate-800/80">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>STRICTLY FOR LABORATORY INQUIRY</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
