"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export interface JustAddedItem {
  id: string;
  name: string;
  category: string;
  price: string;
  bgColor: string;
  hueShift?: string;
  dosage: string;
}

const JUST_ADDED_ITEMS: JustAddedItem[] = [
  {
    id: "emc-snap8",
    name: "Snap 8 10mg",
    category: "REPAIR & RECOVERY",
    price: "From $29.99",
    bgColor: "#d5aba5", // Dusty rose pastel
    hueShift: "hue-rotate-[130deg]",
    dosage: "10MG",
  },
  {
    id: "emc-ta1",
    name: "TA1 10mg",
    category: "REPAIR & RECOVERY",
    price: "From $39.99",
    bgColor: "#d39791", // Terracotta pastel
    hueShift: "hue-rotate-[160deg]",
    dosage: "10MG",
  },
  {
    id: "emc-vip",
    name: "VIP 10mg",
    category: "COGNITIVE & MOOD",
    price: "From $49.99",
    bgColor: "#cfc7d6", // Lavender / lilac pastel
    hueShift: "hue-rotate-[220deg]",
    dosage: "10MG",
  },
  {
    id: "emc-pinealon",
    name: "Pinealon 10mg",
    category: "COGNITIVE & MOOD",
    price: "From $49.99",
    bgColor: "#9eaec2", // Steel slate pastel
    hueShift: "hue-rotate-[45deg]",
    dosage: "10MG",
  },
];

export function JustAdded() {
  return (
    <section className="py-20 lg:py-24 bg-[#f4f1ea] text-[#11161d] border-t border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Image 5 */}
        <div className="flex items-baseline justify-between mb-10 pb-4 border-b border-[#e2dcd0]">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#11161d]">
            Just Added
          </h2>
          <a
            href="#bestsellers"
            className="text-xs font-mono tracking-wider uppercase text-[#4a5568] hover:text-[#11161d] transition-colors flex items-center gap-1 group"
          >
            <span>View all compounds</span>
            <span className="text-[#9a782a] group-hover:translate-x-1 transition-transform">―</span>
          </a>
        </div>

        {/* 4 Pastel Product Cards matching Image 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {JUST_ADDED_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 border border-[#e8e2d5] flex flex-col group cursor-pointer"
              onClick={() => {
                document.getElementById("bestsellers")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Pastel Colored Container with Standing 3D Mockup */}
              <div
                className="w-full aspect-[4/5] relative flex items-center justify-center p-6 overflow-hidden transition-transform duration-500 group-hover:brightness-95"
                style={{ backgroundColor: item.bgColor }}
              >
                {/* Dosage Pill top-right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs text-[#11161d] font-mono text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                  {item.dosage}
                </div>

                {/* Standing 3D Vial */}
                <div className={`relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 ${item.hueShift || ""}`}>
                  <Image
                    src="/emc-tesamorelin.png"
                    alt={item.name}
                    width={220}
                    height={220}
                    className="object-contain max-h-[190px] drop-shadow-[0_12px_20px_rgba(0,0,0,0.18)]"
                  />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#9a782a] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-[#11161d] text-lg group-hover:text-[#9a782a] transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#f0ede6]">
                  <span className="text-sm font-mono font-medium text-[#11161d]">
                    {item.price}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-[#f4f1ea] flex items-center justify-center text-[#11161d] group-hover:bg-[#0d211a] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
