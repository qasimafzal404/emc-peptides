"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d211a] text-white border-b border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo matching AminoHaus font style */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors lowercase">
              emc peptides
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-200">
            <Link href="#bestsellers" className="hover:text-amber-400 transition-colors">
              Shop
            </Link>
            <Link href="#coa" className="hover:text-amber-400 transition-colors">
              COA
            </Link>
            <Link href="#anatomy" className="hover:text-amber-400 transition-colors">
              About
            </Link>
            <Link href="#process" className="hover:text-amber-400 transition-colors">
              Partner Program
            </Link>
            <Link href="#faq" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Icons (Search, User, Cart) */}
          <div className="flex items-center gap-6">
            <button
              aria-label="Search"
              onClick={() => {
                document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-slate-300 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              aria-label="User Account"
              onClick={() => alert("EMC Peptides Client Portal: Research accounts verified upon first order placement.")}
              className="text-slate-300 hover:text-white transition-colors hidden sm:block"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative text-slate-300 hover:text-white transition-colors flex items-center"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] flex items-center justify-center font-mono">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#091813] border-t border-emerald-950 px-6 py-6 space-y-4 text-sm font-medium">
          <Link href="#bestsellers" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-amber-400">
            Shop
          </Link>
          <Link href="#coa" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-amber-400">
            COA
          </Link>
          <Link href="#anatomy" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-amber-400">
            About
          </Link>
          <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-amber-400">
            Partner Program
          </Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-amber-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
