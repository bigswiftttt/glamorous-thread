import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glamorous Thread — Sew and Set Trend',
  description: 'Luxury bespoke fashion tailored to your identity. Bridal couture, native wear, corporate and event fashion.',
  keywords: 'luxury fashion, bespoke tailoring, bridal couture, Lagos fashion designer',
  openGraph: {
    title: 'Glamorous Thread',
    description: 'Luxury Fashion Tailored To Your Identity',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cream text-text font-sans">
        {children}
      </body>
    </html>
  )
}