import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // prevents layout shift while fonts load
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Infragenix Nigeria Limited | Multi-Sectoral Solutions Provider",
  description:
    "Infragenix Nigeria Limited is a multi-sectoral solutions provider delivering top-tier services to governments, businesses, and communities across infrastructure, energy, ICT, and construction sectors.",
  keywords: [
    "Infragenix Nigeria Limited",
    "Infrastructure",
    "Engineering",
    "Construction",
    "ICT Solutions",
    "Energy",
    "Facility Management",
  ],
  authors: [{ name: "Infragenix Nigeria Limited" }],
  creator: "Infragenix Nigeria Limited",
  publisher: "Infragenix Nigeria Limited",
  metadataBase: new URL("https://infragenixng.com"),
  openGraph: {
    title: "Infragenix Nigeria Limited",
    description:
      "Delivering innovative infrastructure, ICT, and engineering solutions for a sustainable future.",
    url: "https://infragenixng.com",
    siteName: "Infragenix Nigeria Limited",
    images: [
      {
        url: "/favicon.ico", // optional – place an image in /public for link previews
        width: 1200,
        height: 630,
        alt: "Infragenix Nigeria Limited",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infragenix Nigeria Limited",
    description:
      "Delivering multi-sectoral infrastructure, ICT, and engineering solutions across Nigeria.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
