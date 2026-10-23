"use client";

import React from "react";
import { Product } from "@/data/products";
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, (subtotal / shippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0a0e17] border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              <h2 className="text-lg font-bold text-white tracking-wide">
                Laboratory Requisition ({items.reduce((c, i) => c + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3 bg-slate-900/60 border-b border-slate-800 text-xs">
            <div className="flex items-center justify-between text-slate-300 mb-1.5">
              <span>Cold-Chain Express Shipping</span>
              <span className="font-bold text-cyan-400">
                {subtotal >= shippingThreshold
                  ? "UNLOCKED FREE"
                  : `Add €${(shippingThreshold - subtotal).toFixed(2)} more`}
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-base font-semibold text-white">Your Basket is Empty</div>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Select research compounds from the catalog to review specifications and order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs tracking-wide transition-colors"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex gap-4 items-center justify-between"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-white">{product.name}</h3>
                    <div className="text-[11px] font-mono text-cyan-400">
                      {product.dosage} · Lot {product.lotNumber}
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-200">
                      €{(product.price * quantity).toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950">
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="p-1.5 text-slate-400 hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center font-mono text-xs text-white">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="p-1.5 text-slate-400 hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950/90 space-y-4">
              <div className="flex items-baseline justify-between text-slate-300">
                <span className="text-sm">Subtotal (Excl. Tax)</span>
                <span className="text-2xl font-black font-mono text-white">
                  €{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="text-[11px] text-slate-500 leading-tight">
                * Research chemical orders are dispatched in compliance with EU research material handling guidelines.
              </div>

              <button
                onClick={() =>
                  alert(
                    `Proceeding to checkout protocol for €${subtotal.toFixed(
                      2
                    )}. In production, this redirects securely to the payment gateway.`
                  )
                }
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed To Protocol Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
