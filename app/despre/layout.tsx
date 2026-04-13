import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre Ene Florin — AI Training Specialist, Blockchain Engineer & Systems Engineer din Sibiu, România",
  description:
    "Ene Florin (Florian Ene) este un inginer cu peste 15 ani de experiență în AI, blockchain și cybersecurity din Sibiu, România. Specializat în training AI, smart contracts, LLM fine-tuning și dezvoltare DApps. Activ în ecosistemul crypto din 2009.",
  keywords: [
    "Ene Florin",
    "Florian Ene",
    "AI Training Specialist",
    "Blockchain Engineer",
    "Systems Engineer",
    "Sibiu",
    "România",
    "smart contracts",
    "DApps",
    "LLM fine-tuning",
    "PyTorch",
    "TensorFlow",
    "cybersecurity",
    "crypto",
    "Bitcoin",
    "tutoriale tech",
    "eneflorin.com",
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
    googlebot: {
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
