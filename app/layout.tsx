import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenix Portfolio | Full-Stack Developer & Designer",
  description: "Showcasing the work, skills, and projects of Phoenix – a full-stack developer specializing in building beautiful, fast, and modern web applications.",
  keywords: [
    "Phoenix Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "React Developer",
    "Next.js Portfolio",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Phoenix", url: "https://portfolio-temp-seven-alpha.vercel.app/" }],
  creator: "Phoenix",
  metadataBase: new URL("https://portfolio-temp-seven-alpha.vercel.app/"),
  openGraph: {
    title: "Phoenix Portfolio | Full-Stack Developer",
    description: "A developer portfolio showcasing Phoenix's projects, skills, and experience.",
    url: "https://portfolio-temp-seven-alpha.vercel.app/",
    siteName: "Phoenix Portfolio",
    images: [
      {
        url: "/og-image.png", // Place the image in public folder
        width: 1200,
        height: 630,
        alt: "Phoenix Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Portfolio | Full-Stack Developer",
    description: "Explore Phoenix's work, skills, and projects as a full-stack developer.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
