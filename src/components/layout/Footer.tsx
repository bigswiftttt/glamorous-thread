import Link from 'next/link'

const services = [
    'Bridal Couture',
    'Native Wear',
    'Corporate Fashion',
    'Bespoke Fashion',
    'Event Dresses',
    'Custom Designs',
]

const links = [
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Collections', href: '/collections' },
    { label: 'Order Tracking', href: '/track' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
]

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#0B0B0B' }}>

            {/* Main footer */}
            <div className="section" style={{ paddingBottom: '3rem' }}>
                <div className="section-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <Link href="/" className="inline-block mb-6">
                                <span
                                    className="font-serif font-light block"
                                    style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: '#FAF8F3' }}
                                >
                                    GLAMOROUS
                                </span>
                                <span
                                    className="font-serif font-light block"
                                    style={{ fontSize: '1.5rem', letterSpacing: '0.2em', color: '#C6A85A' }}
                                >
                                    THREAD
                                </span>
                            </Link>

                            <p
                                className="text-body mb-8"
                                style={{ color: 'rgba(250,248,243,0.4)', maxWidth: '320px' }}
                            >
                                Luxury bespoke fashion tailored to your identity.
                                Every stitch tells your story.
                            </p>

                            {/* Social links */}
                            <div className="flex items-center gap-6">
                                <a
                                    href="https://www.instagram.com/glamorous.thread.1988?igsh=cGlnZHBwazB3bXps"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-label"
                                    style={{ color: 'rgba(250,248,243,0.4)' }}
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://wa.me/2349024193118"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-label"
                                    style={{ color: 'rgba(250,248,243,0.4)' }}
                                >
                                    WhatsApp
                                </a>
                                <a
                                    href="mailto:consultglamorousthread@gmail.com"
                                    className="text-label"
                                    style={{ color: 'rgba(250,248,243,0.4)' }}
                                >
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <p
                                className="text-label mb-6"
                                style={{ color: '#C6A85A' }}
                            >
                                Services
                            </p>
                            <ul className="flex flex-col gap-3">
                                {services.map((s) => (
                                    <li key={s}>
                                        <Link
                                            href="/collections"
                                            className="text-body"
                                            style={{ color: 'rgba(250,248,243,0.4)' }}
                                        >
                                            {s}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Links */}
                        <div>
                            <p
                                className="text-label mb-6"
                                style={{ color: '#C6A85A' }}
                            >
                                Quick Links
                            </p>
                            <ul className="flex flex-col gap-3">
                                {links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-body"
                                            style={{ color: 'rgba(250,248,243,0.4)' }}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Book CTA */}
                            <div className="mt-10">
                                <Link href="/book" className="btn-primary">
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(198,168,90,0.1)' }}>
                <div className="section-inner px-6 md:px-8 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p
                            className="text-label"
                            style={{ color: 'rgba(250,248,243,0.2)' }}
                        >
                            &copy; {new Date().getFullYear()} Glamorous Thread. All rights reserved.
                        </p>
                        <p
                            className="font-serif italic text-sm"
                            style={{ color: 'rgba(198,168,90,0.3)', letterSpacing: '0.15em' }}
                        >
                            Sew and Set Trend
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
