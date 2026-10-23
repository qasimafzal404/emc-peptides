"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080b]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              EMC PEPTIDES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
          </Link>

          {/* Desktop Links (Shop, COA, About, Partner Program, Contact) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <Link href="#bestsellers" className="hover:text-white transition-colors">
              Shop
            </Link>
            <Link href="#coa" className="hover:text-white transition-colors">
              COA
            </Link>
            <Link href="#anatomy" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#process" className="hover:text-white transition-colors">
              Process
            </Link>
            <Link href="#difference" className="hover:text-white transition-colors">
              Why EMC
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right Status & Cart */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Research use only</span>
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors p-2"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="font-mono text-xs font-bold text-cyan-400">{cartCount}</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0d14] px-6 py-6 space-y-4 text-sm font-medium">
          <Link href="#bestsellers" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            Shop
          </Link>
          <Link href="#coa" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            COA
          </Link>
          <Link href="#anatomy" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            About
          </Link>
          <Link href="#process" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            Process
          </Link>
          <Link href="#difference" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            Why EMC
          </Link>
          <Link href="#faq" onClick={() => setMobileOpen(false)} className="block text-slate-300 hover:text-white">
            FAQ
          </Link>
          <div className="pt-3 border-t border-white/5 text-xs font-mono text-slate-400">
            Research use only · Analytical grade
          </div>
        </div>
      )}
    </header>
  );
}
