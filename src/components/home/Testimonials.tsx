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

export default function Testimonials() {
    return (
        <section
            className="py-32 px-8 md:px-16"
            style={{ backgroundColor: '#FAF8F3' }}
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px" style={{ backgroundColor: '#C6A85A' }} />
                        <span
                            className="font-sans text-xs uppercase"
                            style={{ letterSpacing: '0.25em', color: '#C6A85A' }}
                        >
                            Client Stories
                        </span>
                        <div className="w-12 h-px" style={{ backgroundColor: '#C6A85A' }} />
                    </div>
                    <h2
                        className="font-serif font-light"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#0B0B0B' }}
                    >
                        Words From Our
                        <span className="italic" style={{ color: '#C6A85A' }}> Clients</span>
                    </h2>
                </div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px"
                    style={{ backgroundColor: 'rgba(198,168,90,0.15)' }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="p-10 flex flex-col justify-between"
                            style={{ backgroundColor: '#FAF8F3' }}
                        >
                            {/* Quote mark */}
                            <div>
                                <span
                                    className="font-serif block mb-6"
                                    style={{ fontSize: '4rem', color: '#C6A85A', lineHeight: 1, opacity: 0.3 }}
                                >
                                    "
                                </span>
                                <p
                                    className="font-serif font-light text-lg leading-relaxed"
                                    style={{ color: '#0B0B0B' }}
                                >
                                    {t.quote}
                                </p>
                            </div>

                            <div
                                className="mt-8 pt-8"
                                style={{ borderTop: '1px solid rgba(198,168,90,0.2)' }}
                            >
                                <p
                                    className="font-sans text-sm font-medium"
                                    style={{ color: '#0B0B0B' }}
                                >
                                    {t.name}
                                </p>
                                <p
                                    className="font-sans text-xs mt-1"
                                    style={{ letterSpacing: '0.15em', color: 'rgba(17,17,17,0.4)' }}
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