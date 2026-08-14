import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: { default: site.title, template: "%s - My Framer Site" },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
