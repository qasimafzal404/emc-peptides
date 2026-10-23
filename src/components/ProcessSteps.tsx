"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Box, Truck } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      step: "01 · ORDER PLACED",
      title: "Verified",
      desc: "Research credentials checked, then the lot is reserved against your order.",
      meta1: "CONFIRMATION · Within 1 hour",
      meta2: "RESERVED · Lot + batch held",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-700" />,
    },
    {
      step: "02 · PULLED FROM COLD",
      title: "Picked",
      desc: "Vials are pulled against the lot on your order and matched to the certificate on file.",
      meta1: "HELD AT · −20 °C",
      meta2: "MATCHED · COA per lot",
      icon: <Box className="w-5 h-5 text-emerald-700" />,
    },
    {
      step: "03 · PACKED COLD",
      title: "Sealed",
      desc: "Lyophilized powder, sealed tamper-evident inside plain, unbranded outer packaging.",
      meta1: "PACKAGING · Plain, unbranded",
      meta2: "SEAL · Tamper-evident",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
    },
    {
      step: "04 · IN TRANSIT",
      title: "Tracked",
      desc: "Dispatched with tracking and the documentation set for that exact lot.",
      meta1: "DISPATCH · Same or next day",
      meta2: "INCLUDED · COA + handling",
      icon: <Truck className="w-5 h-5 text-emerald-700" />,
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#f4f1ea] text-[#11161d] border-t border-[#e2dcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching AminoHaus aesthetic */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#9a782a]" />
            <span className="text-xs font-mono tracking-widest uppercase font-semibold text-[#9a782a]">
              ORDER TO DOORSTEP
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#11161d]">
            Four Steps, <br className="sm:hidden" />
            Documented Throughout<span className="text-[#9a782a]">.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#4a5568] max-w-xl font-normal leading-relaxed">
            From cold reserve storage to tracked arrival, every parcel follows a certified chain of custody.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between space-y-6 border border-[#e2dcd0] shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#f0ede6] pb-3">
                  <span className="text-[10px] font-mono text-[#9a782a] font-bold tracking-wider">
                    {s.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f4f7f4] flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#11161d] mb-1.5 group-hover:text-[#9a782a] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0ede6] space-y-1 font-mono text-[10px]">
                <div className="text-[#334155] font-medium">{s.meta1}</div>
                <div className="text-[#94a3b8]">{s.meta2}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
