"use client";

import React, { useState } from "react";
import { TopTicker } from "@/components/TopTicker";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BestSellers } from "@/components/BestSellers";
import { AnatomySection } from "@/components/AnatomySection";
import { JustAdded } from "@/components/JustAdded";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ResearchFields } from "@/components/ResearchFields";
import { CoaLookup } from "@/components/CoaLookup";
import { TheStandard } from "@/components/TheStandard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FaqSection } from "@/components/FaqSection";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { FloatingEmailButton } from "@/components/FloatingEmailButton";
import { Product, PRODUCTS } from "@/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }, // Default: 1x Tesamorelin 5MG
  ]);
  const [cartOpen, setCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#07080b]">
      {/* 1. Announcement Marquee Ticker */}
      <TopTicker />

      {/* 2. Minimalist Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section with 3D Floating Mockup in Loop */}
        <Hero
          onExplore={() => {
            document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
          }}
          onAddToCart={() => handleAddToCart(PRODUCTS[0])}
        />

        {/* 4. Most Requested. / Best Sellers */}
        <div id="shop">
          <BestSellers
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        </div>

        {/* 5. Inside the vial / Anatomy of Precision */}
        <AnatomySection />

        {/* 6. Newly catalogued. / Just Added */}
        <JustAdded />

        {/* 7. Order to doorstep / Four Steps, Documented Throughout */}
        <ProcessSteps />

        {/* 8. Research catalogue / 04 fields / Choose a research direction */}
        <ResearchFields />

        {/* 9. Certificate of analysis / Every Lot, On Record */}
        <div id="coa">
          <CoaLookup />
        </div>

        {/* 10. The system doesn't move / Fixed across compounds */}
        <TheStandard />

        {/* 11. Why EMC Peptides / The Difference, Line by Line (Comparison Matrix) */}
        <ComparisonTable />

        {/* 12. Questions / Answers, without hedging (6 FAQs) */}
        <FaqSection />

        {/* 13. Begin / Research Begins With Better Standards */}
        <ClosingCta />
      </main>

      {/* 14. Footer with FDA disclaimer and accepted payment badges */}
      <Footer />

      {/* Interactive Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Interactive Quick View Chemical Spec Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Bottom-Left Email Updates Button (AminoHaus Style) */}
      <FloatingEmailButton />
    </div>
  );
}
