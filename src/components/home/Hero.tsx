'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Hero() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative min-h-screen bg-ink flex flex-col justify-center overflow-hidden">

            {/* Background texture */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A85A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Gold accent line — left */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="max-w-4xl">

                    {/* Eyebrow */}
                    <div className={cn(
                        'flex items-center gap-4 mb-8 transition-all duration-1000',
                        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}>
                        <div className="w-12 h-px bg-gold" />
                        <span className="font-sans text-xs tracking-widest uppercase text-gold">
                            Luxury Bespoke Fashion
                        </span>
                    </div>

                    {/* Main headline */}
                    <h1 className={cn(
                        'font-serif text-cream transition-all duration-1000 delay-200',
                        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    )}>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight">
                            Luxury Fashion
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mt-2">
                            Tailored To
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mt-2 italic text-gold">
                            Your Identity
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className={cn(
                        'mt-8 font-sans text-cream/50 text-sm tracking-widest uppercase max-w-md leading-relaxed transition-all duration-1000 delay-300',
                        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}>
                        Bridal Couture · Native Wear · Bespoke Fashion
                        <br />
                        Corporate · Event · Custom Designs
                    </p>

                    {/* CTA Buttons */}
                    <div className={cn(
                        'flex flex-col sm:flex-row gap-4 mt-12 transition-all duration-1000 delay-500',
                        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    )}>
                        <Link
                            href="/book"
                            className="inline-flex items-center justify-center gap-3 bg-gold text-ink font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300 group"
                        >
                            Book Consultation
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        <Link
                            href="/collections"
                            className="inline-flex items-center justify-center gap-3 border border-cream/20 text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:border-gold/50 hover:text-gold transition-colors duration-300"
                        >
                            View Collections
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom tagline */}
            <div className={cn(
                'absolute bottom-10 left-0 right-0 flex justify-center transition-all duration-1000 delay-700',
                loaded ? 'opacity-100' : 'opacity-0'
            )}>
                <span className="font-serif italic text-gold/50 text-sm tracking-widest">
                    Sew and Set Trend
                </span>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2">
                <span className="font-sans text-xs tracking-widest uppercase text-cream/30 [writing-mode:vertical-lr]">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
            </div>

        </section>
    )
}