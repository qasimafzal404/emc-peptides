import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: "variable",
});

const sora = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sora",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "EMC Peptides | Precision Research Compounds",
  description:
    "Lot-verified research peptides with RP-HPLC and mass spectrometry records. Every batch tested. Every result published.",
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
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${sora.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#f4f1ea] text-[#121826] min-h-screen antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
