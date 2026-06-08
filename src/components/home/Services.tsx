'use client'

import Link from 'next/link'

const services = [
    {
        number: '01',
        title: 'Bridal Couture',
        description: 'Your wedding day deserves perfection. We craft bespoke bridal gowns that tell your unique love story.',
        href: '/collections',
    },
    {
        number: '02',
        title: 'Native Wear',
        description: 'Celebrating African heritage through contemporary silhouettes. Ankara, Aso-ebi and beyond.',
        href: '/collections',
    },
    {
        number: '03',
        title: 'Corporate Fashion',
        description: 'Dress with authority. Tailored corporate pieces that command presence in every boardroom.',
        href: '/collections',
    },
    {
        number: '04',
        title: 'Bespoke Fashion',
        description: 'Your vision, our craft. Every measurement, fabric and detail designed exclusively for you.',
        href: '/collections',
    },
    {
        number: '05',
        title: 'Event Dresses',
        description: 'From galas to intimate gatherings — statement pieces that make you unforgettable.',
        href: '/collections',
    },
    {
        number: '06',
        title: 'Custom Designs',
        description: 'Bring any inspiration to life. Share your vision and we will create something extraordinary.',
        href: '/quote',
    },
]

export default function Services() {
    return (
        <section
            className="py-20 md:py-32 px-6 md:px-16"
            style={{ backgroundColor: '#FAF8F3' }}
        >
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-8 h-px" style={{ backgroundColor: '#C6A85A' }} />
                        <span
                            className="font-sans text-xs uppercase"
                            style={{ letterSpacing: '0.2em', color: '#C6A85A' }}
                        >
                            What We Create
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2
                            className="font-serif font-light leading-tight"
                            style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: '#0B0B0B' }}
                        >
                            Our Signature
                            <br />
                            <span className="italic" style={{ color: '#C6A85A' }}>Services</span>
                        </h2>
                        <p
                            className="font-sans text-sm leading-relaxed md:max-w-xs"
                            style={{ color: 'rgba(17,17,17,0.5)' }}
                        >
                            Every piece we create is a collaboration between your vision and our craft.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
                >
                    {services.map((service) => (
                        <Link
                            key={service.number}
                            href={service.href}
                            className="group flex flex-col justify-between p-8 transition-colors duration-500"
                            style={{ backgroundColor: '#FAF8F3', minHeight: '220px' }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#0B0B0B'
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#FAF8F3'
                            }}
                        >
                            <div>
                                <span
                                    className="font-serif font-light block mb-4 transition-colors duration-500"
                                    style={{ fontSize: '2.5rem', color: 'rgba(198,168,90,0.3)', lineHeight: 1 }}
                                >
                                    {service.number}
                                </span>
                                <h3
                                    className="font-serif font-light text-xl mb-3 transition-colors duration-500 group-hover:text-white"
                                    style={{ color: '#0B0B0B' }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="font-sans text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/50"
                                    style={{ color: 'rgba(17,17,17,0.5)', fontSize: '0.8rem' }}
                                >
                                    {service.description}
                                </p>
                            </div>

                            <div
                                className="flex items-center gap-2 mt-6 font-sans text-xs uppercase"
                                style={{ letterSpacing: '0.2em', color: '#C6A85A' }}
                            >
                                Explore
                                <svg
                                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}