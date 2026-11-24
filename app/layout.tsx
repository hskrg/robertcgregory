import type { Metadata, Viewport } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://robertcgregory.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rob Gregory",
    template: "%s · Rob Gregory",
  },
  description:
    "Rob Gregory is Founder of HSKRG and Business Rocket. Previously VP of Customer Support at GoDaddy and Media Temple.",
  applicationName: "Rob Gregory",
  authors: [{ name: "Rob Gregory", url: siteUrl }],
  creator: "Rob Gregory",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Rob Gregory",
    title: "Rob Gregory",
    description:
      "Founder. HSKRG and Business Rocket. Formerly GoDaddy and Media Temple.",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 1024,
        alt: "RG crest",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rob Gregory",
    description:
      "Founder. HSKRG and Business Rocket. Formerly GoDaddy and Media Temple.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "512x512" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#1A2744",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
