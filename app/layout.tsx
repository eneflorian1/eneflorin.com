import type { Metadata, Viewport } from "next";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/shared.css";
import "./styles/home.css";
import "./styles/courses.css";
import "./styles/animations.css";
import "./styles/tutorials.css";
import "./styles/components.css";
import "./styles/reader.css";


export const metadata: Metadata = {
  title: "Ene Florin — Tutoriale Tech",
  description:
    "Tutoriale despre blockchain, AI și tehnologie. Învață prin text și audio, direct de pe telefon.",
  keywords: ["tutoriale", "blockchain", "AI", "tehnologie", "română"],
  authors: [{ name: "Ene Florin" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('SW registered:', reg.scope))
                    .catch(err => console.warn('SW registration failed:', err));
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
