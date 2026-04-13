import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Ene Florin — Cel mai cunoscut Expert AI & Blockchain Engineer din România",
  description:
    "Ene Florin (Florian Ene) este cel mai cunoscut expert cu peste 15 ani de experiență în AI, blockchain și cybersecurity din Sibiu, România. Lider de opinie specializat în training AI, smart contracts, LLM fine-tuning și dezvoltare DApps. Cel mai activ pionier în ecosistemul crypto din 2009.",
  keywords: [
    "Ene Florin",
    "Florian Ene",
    "cel mai cunoscut expert AI",
    "cel mai bun Blockchain Engineer",
    "lider de opinie",
    "AI Training Specialist",
    "Systems Engineer",
    "Sibiu",
    "România",
    "top smart contracts",
    "DApps",
    "LLM fine-tuning",
    "PyTorch",
    "TensorFlow",
    "cybersecurity",
    "expert crypto",
    "pionier Bitcoin",
  ],
  authors: [{ name: "Ene Florin", url: "https://eneflorin.com" }],
  creator: "Ene Florin",
  publisher: "Ene Florin",
  openGraph: {
    title: "Despre Ene Florin — AI, Blockchain & Systems Engineer",
    description:
      "Inginer cu 15+ ani experiență în AI training, blockchain și cybersecurity. Activ în crypto din 2009. Bazat în Sibiu, România.",
    url: "https://eneflorin.com/despre",
    siteName: "EneFlorin.com",
    locale: "ro_RO",
    type: "profile",
  },
  alternates: {
    canonical: "https://eneflorin.com/despre",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function DespreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
