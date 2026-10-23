"use client";

import React, { useState } from "react";
import { Mail, X, Check } from "lucide-react";

export function FloatingEmailButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setEmail("");
    }, 2200);
  };

  return (
    <>
      {/* Floating Pill Button on Bottom-Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0d211a] hover:bg-[#16382c] text-white text-xs font-medium shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-900/60 group cursor-pointer"
          aria-label="Email updates"
        >
          <Mail className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>Email updates</span>
        </button>
      </div>

      {/* Subscription Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-[#0d211a] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-emerald-900/80 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">Subscribed Successfully</h3>
                <p className="text-xs text-slate-300">
                  You will receive lot batch notifications and analytical certificates as new compounds release.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-2">
                  <Mail className="w-4 h-4" />
                  <span className="uppercase tracking-widest">EMC Laboratory Dispatch</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  Compound &amp; Batch Updates
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Join our research bulletin for early lot availability, third-party HPLC &amp; Mass Spec reports, and scientific notices.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-email" className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      Institutional / Research Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="lab@institution.edu"
                      className="w-full px-4 py-3 rounded-lg bg-[#07130f] border border-emerald-950 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    Subscribe to Updates
                  </button>

                  <div className="text-[10px] text-slate-500 text-center font-mono">
                    Zero promotional spam. Strict research notifications only.
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
