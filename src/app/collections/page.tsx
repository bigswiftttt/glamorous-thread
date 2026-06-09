const collections = [
    {
        id: 'bridal-couture',
        title: 'Bridal Couture',
        description: 'Your wedding day is the most important day of your life. We craft bespoke bridal gowns that capture your personality, your love story, and your vision of perfection.',
        pieces: '12 pieces',
        season: 'All Season',
    },
    {
        id: 'native-wear',
        title: 'Native Wear',
        description: 'A celebration of African heritage through contemporary silhouettes. Ankara, Aso-ebi, Adire and beyond — reimagined for the modern woman.',
        pieces: '18 pieces',
        season: 'All Season',
    },
    {
        id: 'corporate-elegance',
        title: 'Corporate Elegance',
        description: 'Dress with authority. Our corporate collection combines sharp tailoring with feminine grace — pieces that command presence in every boardroom and event.',
        pieces: '10 pieces',
        season: 'All Season',
    },
    {
        id: 'bespoke-fashion',
        title: 'Bespoke Fashion',
        description: 'Pure collaboration. You bring the vision, we bring the craft. Every measurement, fabric choice and finishing detail is designed exclusively around you.',
        pieces: 'Custom',
        season: 'All Season',
    },
    {
        id: 'event-wear',
        title: 'Event Wear',
        description: 'From black-tie galas to intimate celebrations — statement pieces that make you the most unforgettable person in the room.',
        pieces: '15 pieces',
        season: 'All Season',
    },
    {
        id: 'custom-designs',
        title: 'Custom Designs',
        description: 'No brief is too bold. Share an inspiration image, a mood, a feeling — and we will translate it into something extraordinary and uniquely yours.',
        pieces: 'Unlimited',
        season: 'All Season',
    },
]

export default function CollectionsPage() {
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
                            Our Work
                        </span>
                    </div>
                    <h1 className="text-display" style={{ color: '#FAF8F3' }}>
                        The Collections
                    </h1>
                    <p
                        className="text-body mt-6"
                        style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
                    >
                        Every category represents a world of possibility.
                        Browse our work and find the style that speaks to you.
                    </p>
                </div>
            </section>

            {/* Collections list */}
            <section className="section">
                <div className="section-inner">
                    <div
                        className="flex flex-col"
                        style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
                    >
                        {collections.map((collection, i) => (
                            <div key={collection.id} style={{ backgroundColor: '#FAF8F3' }}>
                                <div className="grid grid-cols-1 md:grid-cols-12">

                                    {/* Number */}
                                    <div
                                        className="hidden md:flex items-start justify-center pt-10"
                                        style={{
                                            gridColumn: 'span 1',
                                            borderRight: '1px solid rgba(198,168,90,0.15)',
                                        }}
                                    >
                                        <span
                                            className="font-serif font-light"
                                            style={{
                                                fontSize: '0.75rem',
                                                color: 'rgba(198,168,90,0.5)',
                                                letterSpacing: '0.2em',
                                            }}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div
                                        className="p-8 md:p-10"
                                        style={{ gridColumn: 'span 8' }}
                                    >
                                        <h2 className="text-heading mb-4" style={{ color: '#0B0B0B' }}>
                                            {collection.title}
                                        </h2>
                                        <p
                                            className="text-body"
                                            style={{ color: 'rgba(17,17,17,0.55)', maxWidth: '560px' }}
                                        >
                                            {collection.description}
                                        </p>

                                        <div className="flex items-center gap-8 mt-8">
                                            <a
                                                href="/book"
                                                className="text-label inline-flex items-center gap-2"
                                                style={{
                                                    color: '#C6A85A',
                                                    borderBottom: '1px solid rgba(198,168,90,0.3)',
                                                    paddingBottom: '3px',
                                                }}
                                            >
                                                Book Consultation
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>

                                            <a
                                                href="/quote"
                                                className="text-label"
                                                style={{ color: 'rgba(17,17,17,0.4)' }}
                                            >
                                                Request Quote
                                            </a>
                                        </div>
                                    </div>

                                    {/* Meta */}
                                    <div
                                        className="hidden md:flex flex-col justify-center gap-6 p-10"
                                        style={{
                                            gridColumn: 'span 3',
                                            borderLeft: '1px solid rgba(198,168,90,0.15)',
                                        }}
                                    >
                                        <div>
                                            <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>
                                                Pieces
                                            </p>
                                            <p
                                                className="font-serif font-light mt-1"
                                                style={{ fontSize: '1.2rem', color: '#0B0B0B' }}
                                            >
                                                {collection.pieces}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>
                                                Season
                                            </p>
                                            <p
                                                className="font-serif font-light mt-1"
                                                style={{ fontSize: '1.2rem', color: '#0B0B0B' }}
                                            >
                                                {collection.season}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section >

            {/* Bottom CTA */}
            < section
                className="section text-center"
                style={{ backgroundColor: '#0B0B0B' }
                }
            >
                <div className="section-inner">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <div className="eyebrow" style={{ justifyContent: 'center' }}>
                            <div className="gold-line" />
                            <span className="text-label" style={{ color: '#C6A85A' }}>
                                Not Sure Where To Start?
                            </span>
                            <div className="gold-line" />
                        </div>

                        <h2 className="text-heading" style={{ color: '#FAF8F3' }}>
                            Let Us Guide
                            <br />
                            <span className="italic" style={{ color: '#C6A85A' }}>Your Choice</span>
                        </h2>

                        <p
                            className="text-body mt-6 mb-10 mx-auto"
                            style={{ color: 'rgba(250,248,243,0.4)', maxWidth: '400px' }}
                        >
                            Book a free consultation and we will help you find the
                            perfect style for your occasion.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/book" className="btn-primary">
                                Book Free Consultation
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="/gallery" className="btn-outline">
                                View Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </section >

        </main >
    )
}