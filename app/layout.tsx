import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import Script from "next/script";
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
    icon: "/site_icon_DC1.jpg",
    shortcut: "/site_icon_DC1.jpg",
    apple: "/site_icon_DC1.jpg",
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
      <body suppressHydrationWarning>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1671284467546694');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1671284467546694&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
