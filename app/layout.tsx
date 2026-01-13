import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js on Hostico",
  description: "Deployed via GitHub Actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
