export interface Product {
  id: string;
  name: string;
  slug: string;
  dosage: string;
  category: "metabolic" | "repair" | "cognitive" | "longevity";
  categoryLabel: string;
  price: number;
  purity: string;
  sequence: string;
  molecularWeight: string;
  casNumber: string;
  lotNumber: string;
  testedDate: string;
  inStock: boolean;
  shortDesc: string;
  description: string;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "emc-tesa-5",
    name: "Tesamorelin",
    slug: "tesamorelin",
    dosage: "5 MG",
    category: "metabolic",
    categoryLabel: "Metabolic & Growth",
    price: 74.00,
    purity: "99.4%",
    sequence: "Hexenoyl-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2",
    molecularWeight: "5135.9 g/mol",
    casNumber: "218949-48-5",
    lotNumber: "EMC-7402-A",
    testedDate: "October 2026",
    inStock: true,
    featured: true,
    shortDesc: "Growth hormone-releasing factor analog synthesized with high-performance chromatographic refinement.",
    description: "Tesamorelin is a synthetic analogue of growth hormone-releasing factor (GRF). Each vial contains 5mg of sterile lyophilized powder synthesized under strict quality protocols for analytical and laboratory evaluation.",
  },
  {
    id: "emc-bpc-10",
    name: "BPC-157",
    slug: "bpc-157",
    dosage: "10 MG",
    category: "repair",
    categoryLabel: "Cellular Repair",
    price: 52.00,
    purity: "99.6%",
    sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
    molecularWeight: "1419.5 g/mol",
    casNumber: "137525-51-0",
    lotNumber: "EMC-8911-B",
    testedDate: "October 2026",
    inStock: true,
    featured: true,
    shortDesc: "Stable gastric pentadecapeptide investigated in cytoprotective and tissue regeneration pathways.",
    description: "High-purity Body Protection Compound-157 (BPC-157). Prepared via solid-phase peptide synthesis and purified by reverse-phase HPLC.",
  },
  {
    id: "emc-tb-10",
    name: "TB-500 (Thymosin Beta-4)",
    slug: "tb-500",
    dosage: "10 MG",
    category: "repair",
    categoryLabel: "Cellular Repair",
    price: 68.00,
    purity: "99.1%",
    sequence: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser-OH",
    molecularWeight: "4963.5 g/mol",
    casNumber: "77591-33-4",
    lotNumber: "EMC-9104-C",
    testedDate: "September 2026",
    inStock: true,
    featured: true,
    shortDesc: "Synthetic fraction of thymosin beta-4 active domain for actin regulation research.",
    description: "Lyophilized synthetic peptide sequence replicating the active actin-sequestering domain of native Thymosin Beta-4.",
  },
  {
    id: "emc-ghk-50",
    name: "GHK-Cu Copper Peptide",
    slug: "ghk-cu",
    dosage: "50 MG",
    category: "longevity",
    categoryLabel: "Longevity & Matrix",
    price: 49.00,
    purity: "99.5%",
    sequence: "[Gly-His-Lys]·Cu2+",
    molecularWeight: "404.9 g/mol",
    casNumber: "49557-75-7",
    lotNumber: "EMC-6231-A",
    testedDate: "October 2026",
    inStock: true,
    featured: true,
    shortDesc: "Natural tripeptide complexed with divalent copper for extracellular matrix signaling models.",
    description: "Deep blue lyophilized crystal powder consisting of human tripeptide glycyl-L-histidyl-L-lysine complexed with Cu(II).",
  },
  {
    id: "emc-tirz-10",
    name: "Tirzepatide",
    slug: "tirzepatide",
    dosage: "10 MG",
    category: "metabolic",
    categoryLabel: "Metabolic & Growth",
    price: 98.00,
    purity: "99.3%",
    sequence: "Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-Asp-Lys-Ile-Ala-Gln-Lys(diacid)-Ala-Phe-Val-Gln-Trp-Leu-Ile-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Pro-Ser-NH2",
    molecularWeight: "4813.5 g/mol",
    casNumber: "2023788-19-2",
    lotNumber: "EMC-5510-D",
    testedDate: "October 2026",
    inStock: true,
    featured: true,
    shortDesc: "Dual GIP / GLP-1 receptor co-agonist designed for metabolic pathway exploration.",
    description: "39-amino-acid synthetic peptide with dual agonist activity at the glucose-dependent insulinotropic polypeptide and glucagon-like peptide-1 receptors.",
  },
  {
    id: "emc-mots-10",
    name: "MOTS-C",
    slug: "mots-c",
    dosage: "10 MG",
    category: "longevity",
    categoryLabel: "Longevity & Matrix",
    price: 58.00,
    purity: "99.2%",
    sequence: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg",
    molecularWeight: "2174.6 g/mol",
    casNumber: "1627580-64-6",
    lotNumber: "EMC-4428-B",
    testedDate: "October 2026",
    inStock: true,
    featured: false,
    shortDesc: "Mitochondrial-derived peptide regulating cellular homeostasis and metabolic flexibility.",
    description: "Novel 16-amino-acid mitochondrial-encoded peptide synthesized for cellular energetics and AMPK activation study models.",
  },
];

export const CERTIFICATES = [
  {
    lot: "EMC-7402-A",
    compound: "Tesamorelin",
    purity: "99.4%",
    date: "2026-10-18",
    technique: "RP-HPLC (C18 4.6x250mm, 220nm) & ESI-MS",
    status: "Verified Conforming",
    pdfUrl: "#",
  },
  {
    lot: "EMC-8911-B",
    compound: "BPC-157",
    purity: "99.6%",
    date: "2026-10-14",
    technique: "RP-HPLC & MALDI-TOF",
    status: "Verified Conforming",
    pdfUrl: "#",
  },
  {
    lot: "EMC-9104-C",
    compound: "TB-500",
    purity: "99.1%",
    date: "2026-09-28",
    technique: "RP-HPLC & ESI-MS",
    status: "Verified Conforming",
    pdfUrl: "#",
  },
  {
    lot: "EMC-6231-A",
    compound: "GHK-Cu",
    purity: "99.5%",
    date: "2026-10-09",
    technique: "RP-HPLC & ICP-OES",
    status: "Verified Conforming",
    pdfUrl: "#",
  },
  {
    lot: "EMC-5510-D",
    compound: "Tirzepatide",
    purity: "99.3%",
    date: "2026-10-02",
    technique: "RP-HPLC (C18) & HRMS",
    status: "Verified Conforming",
    pdfUrl: "#",
  },
];
