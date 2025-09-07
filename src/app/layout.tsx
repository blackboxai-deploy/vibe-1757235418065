import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logo Generator - HUT Desa ke-33",
  description: "AI-powered logo generator untuk HUT Desa ke-33 tahun dengan tema Seni dan Budaya. Desain modern dengan nilai filosofi mendalam.",
  keywords: ["logo", "desa", "HUT", "AI", "design", "budaya", "seni", "ABY SYA'BI"],
  authors: [{ name: "ABY SYA'BI" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>" />
      </head>
      <body className={inter.className}>
        <div className="antialiased">
          {children}
        </div>
      </body>
    </html>
  );
}