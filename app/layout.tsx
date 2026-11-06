import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DevAgentation } from "@/components/site/DevAgentation";
import { PageIntro } from "@/components/site/PageIntro";

export const metadata: Metadata = {
  title: { default: site.title, template: "%s — Moneta" },
  description: site.description,
  icons: { icon: "/assets/moneta/brandmark.svg" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: [{ url: "/assets/moneta/share.png", width: 1200, height: 630, alt: "Moneta — Your money, under control." }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageIntro>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        </PageIntro>
        <DevAgentation />
      </body>
    </html>
  );
}
