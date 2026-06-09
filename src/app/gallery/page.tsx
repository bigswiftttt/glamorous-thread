'use client'

import { useState } from 'react'

const categories = ['All', 'Bridal Couture', 'Native Wear', 'Corporate', 'Bespoke', 'Event Wear']

const galleryItems = [
    { id: 1, category: 'Bridal Couture', title: 'Ivory Dream', span: 'large' },
    { id: 2, category: 'Native Wear', title: 'Ankara Grace', span: 'small' },
    { id: 3, category: 'Corporate', title: 'Power Suit', span: 'small' },
    { id: 4, category: 'Bespoke', title: 'Custom Creation', span: 'medium' },
    { id: 5, category: 'Event Wear', title: 'Gala Night', span: 'large' },
    { id: 6, category: 'Bridal Couture', title: 'Golden Veil', span: 'small' },
    { id: 7, category: 'Native Wear', title: 'Adire Elegance', span: 'medium' },
    { id: 8, category: 'Corporate', title: 'Boardroom Ready', span: 'small' },
    { id: 9, category: 'Event Wear', title: 'Red Carpet', span: 'large' },
    { id: 10, category: 'Bespoke', title: 'Vision Made Real', span: 'small' },
    { id: 11, category: 'Bridal Couture', title: 'Lace & Love', span: 'small' },
    { id: 12, category: 'Native Wear', title: 'Heritage Gown', span: 'medium' },
]

const placeholderColors: Record<string, string> = {
    'Bridal Couture': '#E8DDD0',
    'Native Wear': '#D4C4A8',
    'Corporate': '#C8C8C8',
    'Bespoke': '#D8C8B8',
    'Event Wear': '#E0C8C0',
}

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filtered = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory)

    return (
        <main style={{ backgroundColor: '#FAF8F3' }}>

            {/* Page hero */}
            <section
                style={{
                    backgroundColor: '#0B0B0B',
                    paddingTop: '10rem',
                    paddingBottom: '5rem',
                    paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
                    paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
                }}
            >
                <div className="section-inner">
                    <div className="eyebrow">
                        <div className="gold-line" />
                        <span className="text-label" style={{ color: '#C6A85A' }}>
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className="text-display" style={{ color: '#FAF8F3' }}>
                        The Gallery
                    </h1>
                    <p
                        className="text-body mt-6"
                        style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
                    >
                        A glimpse into our world of bespoke fashion.
                        Every piece tells a story.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section
                style={{
                    borderBottom: '1px solid rgba(198,168,90,0.15)',
                    backgroundColor: '#FAF8F3',
                    position: 'sticky',
                    top: '64px',
                    zIndex: 40,
                }}
            >
                <div className="section-inner px-6 md:px-8">
                    <div
                        className="flex items-center gap-0 overflow-x-auto"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="text-label shrink-0"
                                style={{
                                    padding: '1.25rem 1.5rem',
                                    color: activeCategory === cat ? '#C6A85A' : 'rgba(17,17,17,0.4)',
                                    borderBottom: activeCategory === cat
                                        ? '1px solid #C6A85A'
                                        : '1px solid transparent',
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery grid */}
            <section className="section">
                <div className="section-inner">
                    <div
                        style={{
                            columns: '2',
                            columnGap: '1rem',
                        }}
                        className="md:columns-3"
                    >
                        {filtered.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    breakInside: 'avoid',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                }}
                                className="group"
                            >
                                {/* Placeholder image block */}
                                <div
                                    style={{
                                        backgroundColor: placeholderColors[item.category] || '#E0D8D0',
                                        height: item.span === 'large' ? '420px'
                                            : item.span === 'medium' ? '300px'
                                                : '220px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'relative',
                                    }}
                                >
                                    {/* Placeholder text */}
                                    <span
                                        className="text-label"
                                        style={{ color: 'rgba(17,17,17,0.2)' }}
                                    >
                                        {item.category}
                                    </span>

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
                                        style={{
                                            backgroundColor: 'rgba(11,11,11,0)',
                                            opacity: 0,
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget
                                            el.style.backgroundColor = 'rgba(11,11,11,0.7)'
                                            el.style.opacity = '1'
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget
                                            el.style.backgroundColor = 'rgba(11,11,11,0)'
                                            el.style.opacity = '0'
                                        }}
                                    >
                                        <p
                                            className="text-label"
                                            style={{ color: '#C6A85A' }}
                                        >
                                            {item.category}
                                        </p>
                                        <p
                                            className="font-serif font-light text-xl mt-1"
                                            style={{ color: '#FAF8F3' }}
                                        >
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {filtered.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                            <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                No pieces in this category yet.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Note about real images */}
            <section
                className="section"
                style={{ backgroundColor: '#0B0B0B', textAlign: 'center' }}
            >
                <div className="section-inner">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className="eyebrow" style={{ justifyContent: 'center' }}>
                            <div className="gold-line" />
                            <span className="text-label" style={{ color: '#C6A85A' }}>
                                Your Work Belongs Here
                            </span>
                            <div className="gold-line" />
                        </div>

                        <h2 className="text-heading" style={{ color: '#FAF8F3' }}>
                            Ready To Show
                            <br />
                            <span className="italic" style={{ color: '#C6A85A' }}>
                                Your Craft?
                            </span>
                        </h2>

                        <p
                            className="text-body mt-6 mb-10 mx-auto"
                            style={{ color: 'rgba(250,248,243,0.4)', maxWidth: '400px' }}
                        >
                            Upload your portfolio images through the admin dashboard
                            and they will appear here automatically.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/book" className="btn-primary">
                                Book Consultation
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="/collections" className="btn-outline">
                                View Collections
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}