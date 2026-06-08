'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
            scrolled
                ? 'bg-cream/95 backdrop-blur-sm border-b border-gold/20 py-3'
                : 'bg-transparent py-6'
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex flex-col leading-none">
                    <span className="font-serif text-xl font-light tracking-widest text-ink uppercase">
                        Glamorous
                    </span>
                    <span className="font-serif text-xl font-light tracking-widest text-gold uppercase">
                        Thread
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-sans text-xs tracking-widest uppercase text-ink/70 hover:text-gold transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="font-sans text-xs tracking-widest uppercase text-ink/70 hover:text-gold transition-colors duration-300 flex items-center gap-1"
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
                            <div className="absolute top-8 right-0 bg-cream border border-gold/20 shadow-lg min-w-48 py-2">
                                {dropdownLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setDropdownOpen(false)}
                                        className="block px-6 py-3 font-sans text-xs tracking-widest uppercase text-ink/70 hover:text-gold hover:bg-gold/5 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/book"
                        className="font-sans text-xs tracking-widest uppercase bg-gold text-ink px-6 py-3 hover:bg-gold-dark transition-colors duration-300"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={cn('block w-6 h-px bg-ink transition-all duration-300', menuOpen && 'rotate-45 translate-y-2')} />
                    <span className={cn('block w-6 h-px bg-ink transition-all duration-300', menuOpen && 'opacity-0')} />
                    <span className={cn('block w-6 h-px bg-ink transition-all duration-300', menuOpen && '-rotate-45 -translate-y-2')} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-8 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-sans text-xs tracking-widest uppercase text-ink/70 hover:text-gold transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-gold/20" />
                    {dropdownLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-sans text-xs tracking-widest uppercase text-ink/70 hover:text-gold transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-gold/20" />
                    <Link
                        href="/book"
                        onClick={() => setMenuOpen(false)}
                        className="font-sans text-xs tracking-widest uppercase bg-gold text-ink px-6 py-4 text-center hover:bg-gold-dark transition-colors"
                    >
                        Book Appointment
                    </Link>
                </div>
            )}
        </nav>
    )
}