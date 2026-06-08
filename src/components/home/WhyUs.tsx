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

export default function WhyUs() {
    return (
        <section
            className="py-32 px-8 md:px-16"
            style={{ backgroundColor: '#0B0B0B' }}
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left — heading */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px" style={{ backgroundColor: '#C6A85A' }} />
                            <span
                                className="font-sans text-xs uppercase"
                                style={{ letterSpacing: '0.25em', color: '#C6A85A' }}
                            >
                                Why Glamorous Thread
                            </span>
                        </div>

                        <h2
                            className="font-serif font-light leading-tight mb-8"
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#FAF8F3' }}
                        >
                            Crafted With
                            <br />
                            <span className="italic" style={{ color: '#C6A85A' }}>
                                Intention
                            </span>
                        </h2>

                        <p
                            className="font-sans text-sm leading-relaxed mb-12 max-w-md"
                            style={{ color: 'rgba(250,248,243,0.5)' }}
                        >
                            We are not just a fashion brand. We are storytellers who use fabric,
                            thread and craftsmanship to help you show up as the most beautiful
                            version of yourself.
                        </p>


                        <a
                            href="/book"
                            className="inline-flex items-center gap-3 font-sans text-xs uppercase"
                            style={{
                                letterSpacing: '0.2em',
                                color: '#C6A85A',
                                borderBottom: '1px solid rgba(198,168,90,0.3)',
                                paddingBottom: '4px',
                            }}
                        >
                            Start Your Journey
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
                        </a>
                    </div>

                    {/* Right — reasons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
                        style={{ backgroundColor: 'rgba(198,168,90,0.1)' }}
                    >
                        {reasons.map((reason, i) => (
                            <div
                                key={i}
                                className="p-8"
                                style={{ backgroundColor: '#0B0B0B' }}
                            >
                                <div
                                    className="w-8 h-px mb-6"
                                    style={{ backgroundColor: '#C6A85A' }}
                                />
                                <h3
                                    className="font-serif font-light text-xl mb-3"
                                    style={{ color: '#FAF8F3' }}
                                >
                                    {reason.title}
                                </h3>
                                <p
                                    className="font-sans text-sm leading-relaxed"
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