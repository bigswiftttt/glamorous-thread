import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Glamorous Thread — Sew and Set Trend',
  description: 'Luxury bespoke fashion tailored to your identity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-text font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}