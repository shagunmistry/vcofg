import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { StructuredData, templeOrganizationSchema, websiteSchema } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Vedic Center of Greenville - Hindu Temple & Spiritual Center",
    template: "%s | Vedic Center of Greenville"
  },
  description: "Hindu temple and spiritual center serving the Greenville-Spartanburg area. Located in Mauldin, SC. Daily worship, cultural programs, and community services.",
  keywords: ["Hindu temple", "Vedic Center", "Greenville", "Spartanburg", "Mauldin SC", "Hindu worship", "spiritual center", "cultural programs", "Indian community", "temple services"],
  authors: [{ name: "Vedic Center of Greenville" }],
  creator: "Vedic Center of Greenville",
  publisher: "Vedic Center of Greenville",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vcofg.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vcofg.org',
    siteName: 'Vedic Center of Greenville',
    title: 'Vedic Center of Greenville - Hindu Temple & Spiritual Center',
    description: 'Hindu temple and spiritual center serving the Greenville-Spartanburg area. Located in Mauldin, SC. Daily worship, cultural programs, and community services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vedic Center of Greenville - Hindu Temple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedic Center of Greenville - Hindu Temple & Spiritual Center',
    description: 'Hindu temple and spiritual center serving the Greenville-Spartanburg area. Located in Mauldin, SC.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData data={templeOrganizationSchema} />
        <StructuredData data={websiteSchema} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
