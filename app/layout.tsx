import type { Metadata } from "next";
import { Poppins, Italiana } from 'next/font/google';

import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const italiana = Italiana({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana',
  weight: ['400']
});

export const metadata: Metadata = {
  title: "Unifolio - A portfolio template for students",
  description: "Unifolio is a portfolio template for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased ${italiana.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
