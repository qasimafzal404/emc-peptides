"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ClosingCta() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#070e1b] text-white overflow-hidden border-t border-white/5">
      {/* Background Floating Vials drifting subtly matching Screenshot 5 */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top Left Floating Vial */}
        <div className="absolute -top-6 -left-8 w-32 sm:w-40 opacity-25 filter blur-[1px] -rotate-12 float-left hue-rotate-[140deg]">
          <Image
            src="/emc-tesamorelin.png"
            alt="Drifting Vial"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Bottom Left Floating Vial */}
        <div className="absolute bottom-6 left-12 w-28 sm:w-36 opacity-30 filter blur-[0.5px] rotate-45 float-right">
          <Image
            src="/emc-tesamorelin.png"
            alt="Drifting Vial"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Top Center-Right Floating Vial */}
        <div className="absolute top-10 right-1/4 w-24 opacity-20 filter blur-[1px] rotate-12 float-center hue-rotate-[210deg]">
          <Image
            src="/emc-tesamorelin.png"
            alt="Drifting Vial"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Far Right Top Floating Vial */}
        <div className="absolute top-16 -right-6 w-28 opacity-25 filter blur-[0.5px] -rotate-45 float-left hue-rotate-[260deg]">
          <Image
            src="/emc-tesamorelin.png"
            alt="Drifting Vial"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        {/* Bottom Right Floating Vial */}
        <div className="absolute -bottom-10 right-8 w-36 sm:w-44 opacity-35 filter blur-[0.5px] rotate-12 float-right hue-rotate-[180deg]">
          <Image
            src="/emc-tesamorelin.png"
            alt="Drifting Vial"
            width={170}
            height={170}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Gold Rule */}
        <div className="flex items-center justify-center">
          <span className="w-8 h-[1.5px] bg-[#c59b27]" />
        </div>

        {/* Section Heading matching Screenshot 5 */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Research Begins With <br />
          Better Standards<span className="text-[#c59b27]">.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Ten compounds, each batch assayed by an independent U.S. laboratory and published against its lot number. Orders are processed within one to two business days and ship FedEx 2Day.
        </p>

        {/* Pill Buttons matching Screenshot 5 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#bestsellers"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#070e1b] font-medium text-sm transition-all tracking-wide flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
          >
            <span>Explore the catalogue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#coa"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium transition-all flex items-center justify-center cursor-pointer"
          >
            See the certificates
          </a>
        </div>

      </div>
    </section>
  );
}
