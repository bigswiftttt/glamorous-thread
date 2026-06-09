import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Glamorous Thread — Sew and Set Trend',
  description: 'Luxury bespoke fashion tailored to your identity.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || ''
  const hideFooter = pathname.startsWith('/dashboard') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup')

  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FAF8F3' }}>
        <Navbar />
        {children}
        {!hideFooter && <Footer />}
      </body>
    </html>
  )
}