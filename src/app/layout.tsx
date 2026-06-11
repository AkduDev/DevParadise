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
