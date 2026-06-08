import Link from 'next/link'

export default function ConsultationCTA() {
    return (
        <section
            className="py-40 px-8 md:px-16 text-center relative overflow-hidden"
            style={{ backgroundColor: '#0B0B0B' }}
        >
            <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,168,90,0.3), transparent)' }}
            />
            <div
                className="absolute right-0 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(198,168,90,0.3), transparent)' }}
            />

            <div className="max-w-3xl mx-auto relative z-10">

                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-px" style={{ backgroundColor: '#C6A85A' }} />
                    <span
                        className="font-sans text-xs uppercase"
                        style={{ letterSpacing: '0.25em', color: '#C6A85A' }}
                    >
                        Begin Your Journey
                    </span>
                    <div className="w-12 h-px" style={{ backgroundColor: '#C6A85A' }} />
                </div>

                <h2
                    className="font-serif font-light leading-tight mb-6"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#FAF8F3' }}
                >
                    Ready To Wear
                    <br />
                    <span className="italic" style={{ color: '#C6A85A' }}>
                        Your Story?
                    </span>
                </h2>

                <p
                    className="font-sans text-sm leading-relaxed mb-12 max-w-md mx-auto"
                    style={{ color: 'rgba(250,248,243,0.4)' }}
                >
                    Book a private consultation and let us bring your vision to life.
                    Every great garment begins with a conversation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                    <Link
                        href="/book"
                        className="inline-flex items-center justify-center gap-3 font-sans text-xs uppercase"
                        style={{
                            letterSpacing: '0.2em',
                            backgroundColor: '#C6A85A',
                            color: '#0B0B0B',
                            padding: '18px 48px',
                        }}
                    >
                        Book Consultation
                        <svg
                            className="w-4 h-4"
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
                        href="https://wa.me/234XXXXXXXXXX"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-3 font-sans text-xs uppercase"
                        style={{
                            letterSpacing: '0.2em',
                            border: '1px solid rgba(250,248,243,0.2)',
                            color: '#FAF8F3',
                            padding: '18px 48px',
                        }}
                    >
                        WhatsApp Us
                    </Link>

                </div>
            </div>
        </section>
    )
}