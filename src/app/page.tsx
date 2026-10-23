"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsTicker } from "@/components/StatsTicker";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CoaLookup } from "@/components/CoaLookup";
import { TheStandard } from "@/components/TheStandard";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product, PRODUCTS } from "@/data/products";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }, // Default with 1 Tesamorelin 5mg in cart
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
    <div className="min-h-screen flex flex-col bg-[#07090e]">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero with Mockup Display */}
        <Hero
          onAddToCart={() => handleAddToCart(PRODUCTS[0])}
          onSelectProduct={() => setQuickViewProduct(PRODUCTS[0])}
        />

        {/* 2. Stats Ticker */}
        <StatsTicker />

        {/* 3. Product Catalog with Category Tabs */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
        />

        {/* 4. Lot Verification & COA Chromatogram Lookup */}
        <CoaLookup />

        {/* 5. Vial Hierarchy & The EMC Standard */}
        <TheStandard />

        {/* 6. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Quick View Spec Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
