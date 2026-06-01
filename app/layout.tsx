import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Digital Chitra | Your Digital Growth Healer",
  description:
    "Book a free 1:1 consultation and get a customized digital marketing growth plan for your Nepal-based business.",
  icons: {
    icon: "/site_icon_DC1.png",
    shortcut: "/site_icon_DC1.png",
    apple: "/site_icon_DC1.png",
  },
  keywords: [
    "digital marketing consultant Nepal",
    "free digital marketing consultation",
    "business growth strategy Nepal",
    "lead generation consultant",
    "digital growth plan Nepal",
  ],
  openGraph: {
    title: "Digital Chitra | Your Digital Growth Healer",
    description:
      "Get a customized digital marketing strategy designed to bring more leads, customers, and consistent business growth.",
    type: "website",
    locale: "en_US",
    siteName: "Digital Chitra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Chitra | Your Digital Growth Healer",
    description:
      "Book your free 1:1 consultation and receive a customized growth plan tailored to your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
