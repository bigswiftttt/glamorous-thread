export default function Testimonials() {
    const testimonials = [
        {
            quote: 'My bridal gown was beyond anything I imagined. Every detail was perfect and I felt like royalty on my wedding day.',
            name: 'Adaeze O.',
            title: 'Bride, Lagos',
        },
        {
            quote: 'Glamorous Thread understood my vision immediately. The corporate pieces they made have completely elevated my wardrobe.',
            name: 'Funmi A.',
            title: 'Executive, Abuja',
        },
        {
            quote: 'I have never received so many compliments on an outfit. The craftsmanship is truly world class.',
            name: 'Chisom E.',
            title: 'Event, Port Harcourt',
        },
    ]

    return (
        <section className="section" style={{ backgroundColor: '#FAF8F3' }}>
            <div className="section-inner">

                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="eyebrow" style={{ justifyContent: 'center' }}>
                        <div className="gold-line" />
                        <span className="text-label" style={{ color: '#C6A85A' }}>
                            Client Stories
                        </span>
                        <div className="gold-line" />
                    </div>
                    <h2 className="text-heading" style={{ color: '#0B0B0B' }}>
                        Words From Our
                        <span className="italic" style={{ color: '#C6A85A' }}> Clients</span>
                    </h2>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(1, 1fr)',
                        gap: '1px',
                        backgroundColor: 'rgba(198,168,90,0.15)',
                    }}
                    className="md:grid-cols-3"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: '#FAF8F3',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        fontFamily: 'Cormorant Garamond, Georgia, serif',
                                        fontSize: '3rem',
                                        color: '#C6A85A',
                                        lineHeight: 1,
                                        opacity: 0.4,
                                        display: 'block',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    &ldquo;
                                </span>
                                <p className="text-subheading" style={{ color: '#0B0B0B' }}>
                                    {t.quote}
                                </p>
                            </div>

                            <div
                                style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1.5rem',
                                    borderTop: '1px solid rgba(198,168,90,0.2)',
                                }}
                            >
                                <p
                                    className="text-body"
                                    style={{ color: '#0B0B0B', fontWeight: 500 }}
                                >
                                    {t.name}
                                </p>
                                <p
                                    className="text-label"
                                    style={{ color: 'rgba(17,17,17,0.4)', marginTop: '0.25rem' }}
                                >
                                    {t.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}