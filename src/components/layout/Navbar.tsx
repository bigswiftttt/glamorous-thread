'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'Gallery', href: '/gallery' },
]

const dropdownLinks = [
  { label: 'About', href: '/about' },
  { label: 'Measurements', href: '/dashboard/measurements' },
  { label: 'Order Tracking', href: '/track' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isHeroPage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On non-hero pages navbar is always cream
  const alwaysLight = !isHeroPage
  const lightMode = alwaysLight || scrolled

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: lightMode
          ? 'rgba(250,248,243,0.97)'
          : 'transparent',
        borderBottom: lightMode
          ? '1px solid rgba(198,168,90,0.2)'
          : 'none',
        padding: scrolled || alwaysLight ? '12px 0' : '24px 0',
        backdropFilter: lightMode ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-serif text-lg md:text-xl font-light uppercase transition-colors duration-500"
            style={{
              letterSpacing: '0.2em',
              color: lightMode ? '#0B0B0B' : '#FAF8F3',
            }}
          >
            Glamorous
          </span>
          <span
            className="font-serif text-lg md:text-xl font-light uppercase"
            style={{ letterSpacing: '0.2em', color: '#C6A85A' }}
          >
            Thread
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs uppercase transition-colors duration-300"
              style={{
                letterSpacing: '0.25em',
                color: isActive(link.href)
                  ? '#C6A85A'
                  : lightMode
                  ? 'rgba(17,17,17,0.6)'
                  : 'rgba(250,248,243,0.7)',
                borderBottom: isActive(link.href)
                  ? '1px solid rgba(198,168,90,0.4)'
                  : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="font-sans text-xs uppercase transition-colors duration-300 flex items-center gap-1"
              style={{
                letterSpacing: '0.25em',
                color: lightMode ? 'rgba(17,17,17,0.6)' : 'rgba(250,248,243,0.7)',
              }}
            >
              More
              <svg
                className={cn('w-3 h-3 transition-transform duration-300', dropdownOpen && 'rotate-180')}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute top-8 right-0 shadow-lg min-w-48 py-2"
                style={{
                  backgroundColor: '#FAF8F3',
                  border: '1px solid rgba(198,168,90,0.2)',
                }}
              >
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-6 py-3 font-sans text-xs uppercase transition-colors duration-200"
                    style={{
                      letterSpacing: '0.25em',
                      color: isActive(link.href)
                        ? '#C6A85A'
                        : 'rgba(17,17,17,0.6)',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/dashboard"
            className="font-sans text-xs uppercase transition-colors duration-300"
            style={{
              letterSpacing: '0.2em',
              color: lightMode ? 'rgba(17,17,17,0.5)' : 'rgba(250,248,243,0.5)',
            }}
          >
            My Account
          </Link>
          <Link
            href="/book"
            className="font-sans text-xs uppercase transition-colors duration-300"
            style={{
              letterSpacing: '0.25em',
              backgroundColor: '#C6A85A',
              color: '#0B0B0B',
              padding: '12px 24px',
            }}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={cn('block w-6 h-px transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')}
            style={{ backgroundColor: lightMode ? '#0B0B0B' : '#FAF8F3' }}
          />
          <span
            className={cn('block w-6 h-px transition-all duration-300', menuOpen && 'opacity-0')}
            style={{ backgroundColor: lightMode ? '#0B0B0B' : '#FAF8F3' }}
          />
          <span
            className={cn('block w-6 h-px transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')}
            style={{ backgroundColor: lightMode ? '#0B0B0B' : '#FAF8F3' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-8 flex flex-col gap-6"
          style={{
            backgroundColor: '#FAF8F3',
            borderTop: '1px solid rgba(198,168,90,0.2)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs uppercase transition-colors duration-300"
              style={{
                letterSpacing: '0.25em',
                color: isActive(link.href) ? '#C6A85A' : 'rgba(17,17,17,0.7)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: '1px', backgroundColor: 'rgba(198,168,90,0.2)' }} />
          {dropdownLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs uppercase transition-colors duration-300"
              style={{
                letterSpacing: '0.25em',
                color: isActive(link.href) ? '#C6A85A' : 'rgba(17,17,17,0.7)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ height: '1px', backgroundColor: 'rgba(198,168,90,0.2)' }} />
          <Link
            href="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-xs uppercase"
            style={{ letterSpacing: '0.25em', color: 'rgba(17,17,17,0.5)' }}
          >
            My Account
          </Link>
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-xs uppercase text-center"
            style={{
              letterSpacing: '0.25em',
              backgroundColor: '#C6A85A',
              color: '#0B0B0B',
              padding: '16px 24px',
            }}
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  )
}