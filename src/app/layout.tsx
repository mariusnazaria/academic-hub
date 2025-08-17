import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AcademicHub.md - Pregătire la Matematică",
  description: "Centru de pregătire la matematică cu profesori experimentați. Cursuri pentru clasele 9 și 12, simulări de examen și materiale didactice.",
  keywords: "matematică, pregătire, cursuri, simulări, examen, clasa 9, clasa 12",
  authors: [{ name: "AcademicHub.md" }],
  openGraph: {
    title: "AcademicHub.md - Pregătire la Matematică",
    description: "Centru de pregătire la matematică cu profesori experimentați",
    type: "website",
    locale: "ro_RO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
