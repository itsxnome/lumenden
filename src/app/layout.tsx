import type { Metadata } from "next";
import { Figtree, Geist_Mono, Unbounded } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import "./globals.css";

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/** Oversized page words — "WORK", "ABOUT", the hero wordmark. */
const display = Unbounded({
  /* 500 is the hero wordmark weight in the reference; 600/700 carry the
     headings and the outlined word. */
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
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
      <body
        className={`${sans.className} ${sans.variable} ${mono.variable} ${display.variable}`}
      >
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
