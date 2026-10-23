import React from "react";

export function TopTicker() {
  const tickerText =
    "USA SHIPPED · FREE SHIPPING ON QUALIFYING ORDERS · ≥99% PURITY - HPLC + MASS SPEC · ENDOTOXIN TESTED · STERILITY VERIFIED · COA CERTIFIED · EVERY BATCH TESTED · RESEARCH USE ONLY · ";

  return (
    <div className="w-full bg-[#040608] border-b border-white/5 overflow-hidden py-2 text-[11px] font-mono tracking-wider text-slate-300">
      <div className="animate-marquee whitespace-nowrap">
        <span className="mx-4">{tickerText}</span>
        <span className="mx-4">{tickerText}</span>
        <span className="mx-4">{tickerText}</span>
        <span className="mx-4">{tickerText}</span>
      </div>
    </div>
  );
}
