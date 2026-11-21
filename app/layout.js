import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata = {
  title: {
    default: `${site.name} | Tek Paket, Tek Fiyat, Full Ekspertiz`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/logo-color.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
