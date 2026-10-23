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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#f4f1ea] text-[#121826] min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
