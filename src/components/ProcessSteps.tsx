import React from "react";
import { CheckCircle2, ShieldCheck, Box, Truck } from "lucide-react";

export function ProcessSteps() {
  const steps = [
    {
      step: "ORDER PLACED",
      title: "Verified",
      desc: "Research credentials checked, then the lot is reserved against your order.",
      meta1: "CONFIRMATION · Within 1 hour",
      meta2: "RESERVED · Lot + batch held",
      icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: "PULLED FROM COLD",
      title: "Picked",
      desc: "Vials are pulled against the lot on your order and matched to the certificate on file.",
      meta1: "HELD AT · −20 °C",
      meta2: "MATCHED · COA per lot",
      icon: <Box className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: "PACKED COLD",
      title: "Sealed",
      desc: "Lyophilized powder, sealed tamper-evident inside plain, unbranded outer packaging.",
      meta1: "PACKAGING · Plain, unbranded",
      meta2: "SEAL · Tamper-evident",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: "IN TRANSIT",
      title: "Tracked",
      desc: "Dispatched with tracking and the documentation set for that exact lot.",
      meta1: "DISPATCH · Same or next day",
      meta2: "INCLUDED · COA + handling",
      icon: <Truck className="w-5 h-5 text-cyan-400" />,
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#090c13] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-2">
          <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            Order to doorstep
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Four Steps, Documented Throughout.
          </h2>
          <p className="text-slate-400 text-sm">
            From cold reserve storage to tracked arrival, every parcel follows a certified chain of custody.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="aminohaus-card rounded-xl p-6 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-wider">
                    {s.step}
                  </span>
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1 font-mono text-[10px] text-slate-500">
                <div className="text-slate-400">{s.meta1}</div>
                <div>{s.meta2}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
