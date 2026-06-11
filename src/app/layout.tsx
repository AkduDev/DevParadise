import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devparadise.com"),
  title: "DevParadise | Software Development & Technology Solutions",
  description:
    "DevParadise is your one-stop technology partner. Custom software development, security camera installations, operating systems, network infrastructure, cloud services, and more.",
  keywords: [
    "DevParadise",
    "software development",
    "security cameras",
    "IT solutions",
    "web development",
    "operating systems",
    "network infrastructure",
    "cloud services",
    "cybersecurity",
    "Cuba technology",
  ],
  authors: [{ name: "DevParadise" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DevParadise | Software Development & Technology Solutions",
    description:
      "From custom software to security installations — your comprehensive technology partner.",
    type: "website",
    siteName: "DevParadise",
    locale: "en_US",
    alternateLocale: "es_ES",
    images: [
      {
        url: "/portfolio-cloud.jpg",
        width: 1200,
        height: 630,
        alt: "DevParadise - Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevParadise | Software Development & Technology Solutions",
    description:
      "From custom software to security installations — your comprehensive technology partner.",
    images: ["/portfolio-cloud.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DevParadise",
              url: "https://devparadise.com",
              logo: "https://devparadise.com/logo.svg",
              description:
                "DevParadise is your one-stop technology partner. Custom software development, security camera installations, operating systems, network infrastructure, cloud services, and more.",
              email: "akdulaydev@gmail.com",
              telephone: "+5355819421",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Habana",
                addressCountry: "CU",
              },
              sameAs: [],
              knowsAbout: [
                "Software Development",
                "Security Cameras",
                "Network Infrastructure",
                "Cloud Services",
                "Cybersecurity",
                "Operating Systems",
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
