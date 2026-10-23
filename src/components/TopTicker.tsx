import React from "react";

export function TopTicker() {
  const items = [
    "EVERY BATCH TESTED",
    "RESEARCH USE ONLY",
    "USA SHIPPED",
    "FREE SHIPPING ON QUALIFYING ORDERS",
    "≥99% PURITY – HPLC + MASS SPEC",
    "ENDOTOXIN TESTED · STERILITY VERIFIED",
    "COA CERTIFIED",
  ];

  const content = items.map((text, i) => (
    <React.Fragment key={i}>
      <span className="mx-3">{text}</span>
      <span className="text-amber-500 text-[9px]">◆</span>
    </React.Fragment>
  ));

  return (
    <div className="w-full bg-[#061510] text-slate-300 overflow-hidden py-2 text-[10.5px] font-mono tracking-widest uppercase border-b border-emerald-950">
      <div className="animate-ticker whitespace-nowrap">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
