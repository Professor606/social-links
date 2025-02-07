import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import React from 'react';


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad's Social Links",
  description: "Ahmad's Social Media Links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
