import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { ScrollRuler } from "@/components/ScrollRuler";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import "./globals.css";

const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumenden.com"),
  title: {
    default: `${site.brand} · ${site.name}`,
    template: `%s · ${site.brand}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.brand} · ${site.name}`,
    description: site.tagline,
    url: "https://lumenden.com",
    siteName: site.brand,
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} ${sans.variable} ${mono.variable}`}>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollRuler />
      </body>
    </html>
  );
}
