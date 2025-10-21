import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import ScrollProgress from "@/components/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { BackgroundSquares } from "@/components/bg-squares";
import Footer from "@/components/footer/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan | Front-End Web Developer",
  description:
    "Hey! I'm Ryan, a front-end web developer passionate about crafting modern, responsive, and interactive web experiences.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "Creative Developer",
    "Portfolio",
    "Next.js Developer",
    "Hey Ryan",
    "Ryan Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              position="bottom-right"
              toastOptions={{ duration: 3000 }}
            />
            <BackgroundSquares />
            <ScrollProgress />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
