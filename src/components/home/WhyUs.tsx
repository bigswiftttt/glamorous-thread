export default function WhyUs() {
    const reasons = [
        {
            title: 'Bespoke Every Time',
            description: 'Every garment is made from scratch to your exact measurements. Nothing off the rack, ever.',
        },
        {
            title: 'Premium Fabrics',
            description: 'We source only the finest materials — locally and internationally — for every piece we create.',
        },
        {
            title: 'Your Vision First',
            description: 'We listen before we design. Your personality, lifestyle and preferences guide every decision.',
        },
        {
            title: 'Timely Delivery',
            description: 'We respect your time. Every order comes with a clear timeline and real-time progress updates.',
        },
    ]

    return (
        <section className="section" style={{ backgroundColor: '#0B0B0B' }}>
            <div className="section-inner">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

                    <div>
                        <div className="eyebrow">
                            <div className="gold-line" />
                            <span className="text-label" style={{ color: '#C6A85A' }}>
                                Why Glamorous Thread
                            </span>
                        </div>

                        <h2 className="text-heading" style={{ color: '#FAF8F3' }}>
                            Crafted With
                            <br />
                            <span className="italic" style={{ color: '#C6A85A' }}>
                                Intention
                            </span>
                        </h2>

                        <p
                            className="text-body mt-6 mb-10"
                            style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '400px' }}
                        >
                            We are not just a fashion brand. We are storytellers who use
                            fabric, thread and craftsmanship to help you show up as the
                            most beautiful version of yourself.
                        </p>

                        <a
                            href="/book"
                            className="text-label inline-flex items-center gap-2"
                            style={{
                                color: '#C6A85A',
                                borderBottom: '1px solid rgba(198,168,90,0.3)',
                                paddingBottom: '4px',
                            }}
                        >
                            Start Your Journey
                            <svg
                                className="w-3 h-3"
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
                        </a>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '1px',
                            backgroundColor: 'rgba(198,168,90,0.1)',
                        }}
                    >
                        {reasons.map((reason, i) => (
                            <div
                                key={i}
                                style={{ backgroundColor: '#0B0B0B', padding: '1.5rem' }}
                            >
                                <div className="gold-line" style={{ marginBottom: '1.25rem' }} />
                                <h3
                                    className="text-subheading"
                                    style={{ color: '#FAF8F3', marginBottom: '0.5rem' }}
                                >
                                    {reason.title}
                                </h3>
                                <p
                                    className="text-body"
                                    style={{ color: 'rgba(250,248,243,0.4)' }}
                                >
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section >
    )
}