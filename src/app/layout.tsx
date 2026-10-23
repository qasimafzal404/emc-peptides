import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EMC Peptides | Precision Synthesis & Analytical Batch Verification",
  description:
    "High-purity research compounds synthesized for advanced laboratory research. Verified with lot-level RP-HPLC and mass spectrometry records.",
  icons: {
    icon: "/emc-tesamorelin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
