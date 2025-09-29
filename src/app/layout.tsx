import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights} from "@vercel/speed-insights/next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import FloatingPhoneIcon from "@/components/FloatingPhoneIcon";
import ChatbotWidget from "@/components/ChatbotWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "auto-sell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
  description: "Sell your car instantly with auto-sell.ai. Get free quotes in 30 minutes, same-day payment, and hassle-free car selling across Australia. We buy all cars in any condition!",
  keywords: "sell my car, car buyers Australia, cash for cars, sell car fast, instant car quote, same day payment, car valuation, we buy cars",
  authors: [{ name: "auto-sell.ai" }],
  openGraph: {
    title: "auto-sell.ai - Sell Your Car Fast for Cash | Australia's #1 Car Buyers",
    description: "Get an instant quote for your car. Same-day payment, no hassles, best prices guaranteed. We buy all cars in any condition across Australia.",
    type: "website",
    locale: "en_AU",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://auto-sell.ai',
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
// floating phone icon on entire website. Create component for this and insert in this file. 
// Stands parallel to the chat icon, 
// Remove description, add images for each model. max width of 150px. 3 car models at a time, rotating.  
// {/* Value my car now button to auto-scroll to the top  */} home page 
// incorporate links in the mapping process for home page for brands and types 
// Hero banner for individual car brands to have home page form 
// Styling of home page as trial 
// reviews integration 
// include navigtation link for Contact 
// Maps API integration 
// Footer to include the querystring for brands and types
// Under the Why choose Auto sell AI - each of the value proposition icons need to be clickable to a page explaining the value proposition statement
// blog page integration & supabase authentication 
// regional areas integration pending confirmatio of viability
// remove damaged cars from navigation, add brands & types to navigation with dropdown for each 
// Contact dropdown to include blog, reviews, FAQ 
// fix padding in contact us page. 
// 15th of September Soft launch. Fully functional
// remove emojis & add background images for vehicle types . Logo's for model brands


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
    <head>
      {GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
      )}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#7f1d1d" />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-black via-zinc-900 to-red-900/60`}
      >
      <noscript>
        <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
        {children}

        <ChatbotWidget />
        <Footer />
        <FloatingPhoneIcon />
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}