'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
            style={{ backgroundColor: '#0B0B0B' }}
        >
            {/* Gold accent line */}
            <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,168,90,0.4), transparent)' }}
            />

            {/* Content */}
            <div className="relative z-10 section-inner px-6 md:px-8 pt-32 pb-20">

                {/* Eyebrow */}
                <div
                    className="eyebrow"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'all 1s ease',
                    }}
                >
                    <div className="gold-line" />
                    <span className="text-label" style={{ color: '#C6A85A' }}>
                        Luxury Bespoke Fashion
                    </span>
                </div>

                {/* Headline */}
                <div
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'all 1s ease 0.2s',
                    }}
                >
                    <h1 className="text-display" style={{ color: '#FAF8F3' }}>
                        <span className="block">Luxury Fashion</span>
                        <span className="block mt-1">Tailored To</span>
                        <span className="block mt-1 italic" style={{ color: '#C6A85A' }}>
                            Your Identity
                        </span>
                    </h1>
                </div>

                {/* Subtext */}
                <div
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'all 1s ease 0.35s',
                    }}
                >
                    <p
                        className="text-label mt-6"
                        style={{ color: 'rgba(250,248,243,0.45)', lineHeight: 2 }}
                    >
                        Bridal Couture · Native Wear · Bespoke Fashion
                        <br />
                        Corporate · Event · Custom Designs
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row gap-3 mt-10"
                    style={{
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
                        transition: 'all 1s ease 0.5s',
                    }}
                >
                    <Link href="/book" className="btn-primary">
                        Book Consultation
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>

                    <Link href="/collections" className="btn-outline">
                        View Collections
                    </Link>
                </div>

            </div>

            {/* Tagline */}
            <div
                className="absolute bottom-8 left-0 right-0 flex justify-center"
                style={{
                    opacity: loaded ? 1 : 0,
                    transition: 'all 1s ease 0.7s',
                }}
            >
                <span
                    className="font-serif italic text-sm"
                    style={{ letterSpacing: '0.2em', color: 'rgba(198,168,90,0.5)' }}
                >
                    Sew and Set Trend
                </span>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-6 md:right-10 flex flex-col items-center gap-2">
                <span
                    className="text-label"
                    style={{
                        color: 'rgba(250,248,243,0.3)',
                        writingMode: 'vertical-lr',
                    }}
                >
                    Scroll
                </span>
                <div
                    className="w-px h-10"
                    style={{ background: 'linear-gradient(to bottom, rgba(250,248,243,0.3), transparent)' }}
                />
            </div>

        </section>
    )
}