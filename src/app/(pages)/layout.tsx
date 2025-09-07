import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../providers/theme-provider";
import { Toaster } from "@/shared/ui/sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveatSans = Caveat({
  variable: "--font-caveat-sans",
});

export const metadata: Metadata = {
  title: "Family budget",
  description: "Family budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveatSans.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
