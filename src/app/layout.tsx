import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/components/navbar";
import Footer from "@components/components/footer";
import ToastProvider from "@components/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Wellness Crunch",
  description:
    "Stay updated with The Wellness Crunch! Get the latest health trends, news, and product recommendations in just 5 minutes. Sign up for expert insights delivered to your inbox.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ToastProvider />
        {children}
        <GoogleAnalytics gaId="G-K74CJFTVS1" />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
