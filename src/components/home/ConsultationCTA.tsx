import Link from 'next/link'

export default function ConsultationCTA() {
    return (
        <section
            className="section"
            style={{ backgroundColor: '#0B0B0B', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, rgba(198,168,90,0.3), transparent)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '1px',
                    background: 'linear-gradient(to bottom, transparent, rgba(198,168,90,0.3), transparent)',
                }}
            />

            <div className="section-inner" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                    <div className="eyebrow" style={{ justifyContent: 'center' }}>
                        <div className="gold-line" />
                        <span className="text-label" style={{ color: '#C6A85A' }}>
                            Begin Your Journey
                        </span>
                        <div className="gold-line" />
                    </div>

                    <h2 className="text-heading" style={{ color: '#FAF8F3', marginTop: '0.5rem' }}>
                        Ready To Wear
                        <br />
                        <span className="italic" style={{ color: '#C6A85A' }}>
                            Your Story?
                        </span>
                    </h2>

                    <p
                        className="text-body"
                        style={{
                            color: 'rgba(250,248,243,0.4)',
                            maxWidth: '420px',
                            margin: '1.5rem auto 3rem',
                        }}
                    >
                        Book a private consultation and let us bring your vision to life.
                        Every great garment begins with a conversation.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className="sm:flex-row"
                    >
                        <Link href="/book" className="btn-primary">
                            Book Consultation
                            <svg
                                style={{ width: '0.75rem', height: '0.75rem' }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>

                        <Link
                            href="https://wa.me/2349024193118"
                            target="_blank"
                            className="btn-outline"
                        >
                            WhatsApp Us
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}