import { createClient } from '@/lib/supabase/server'

export default async function TestimonialsPage() {
  const supabase = await createClient()

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('visible', true)
    .order('created_at', { ascending: false })

  const fallback = [
    {
      id: '1',
      customer_name: 'Adaeze O.',
      content: 'My bridal gown was beyond anything I imagined. Every detail was perfect and I felt like royalty on my wedding day.',
      rating: 5,
    },
    {
      id: '2',
      customer_name: 'Funmi A.',
      content: 'Glamorous Thread understood my vision immediately. The corporate pieces they made have completely elevated my wardrobe.',
      rating: 5,
    },
    {
      id: '3',
      customer_name: 'Chisom E.',
      content: 'I have never received so many compliments on an outfit. The craftsmanship is truly world class.',
      rating: 5,
    },
    {
      id: '4',
      customer_name: 'Blessing N.',
      content: 'From the consultation to the final fitting, the experience was seamless. My event dress was absolutely stunning.',
      rating: 5,
    },
    {
      id: '5',
      customer_name: 'Temi A.',
      content: 'They brought my vision to life perfectly. The attention to detail is unmatched. I will not go anywhere else.',
      rating: 5,
    },
    {
      id: '6',
      customer_name: 'Kemi B.',
      content: 'The native wear they made for my traditional wedding was breathtaking. Everyone wanted to know who made it.',
      rating: 5,
    },
  ]

  const display = testimonials && testimonials.length > 0 ? testimonials : fallback

  return (
    <main style={{ backgroundColor: '#FAF8F3' }}>

      {/* Hero */}
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
              Client Stories
            </span>
          </div>
          <h1 className="text-display" style={{ color: '#FAF8F3' }}>
            What Our Clients
            <br />
            <span className="italic" style={{ color: '#C6A85A' }}>Say</span>
          </h1>
          <p
            className="text-body mt-6"
            style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
          >
            Every piece we create is a collaboration. Here is what
            our clients say about the experience.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section">
        <div className="section-inner">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
          >
            {display.map((t) => (
              <div
                key={t.id}
                className="p-8 flex flex-col justify-between"
                style={{ backgroundColor: '#FAF8F3' }}
              >
                <div>
                  <span
                    className="font-serif block mb-4"
                    style={{ fontSize: '3rem', color: '#C6A85A', lineHeight: 1, opacity: 0.4 }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="font-serif font-light text-lg leading-relaxed"
                    style={{ color: '#0B0B0B' }}
                  >
                    {t.content}
                  </p>
                </div>

                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: '1px solid rgba(198,168,90,0.2)' }}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className="font-sans text-sm font-medium"
                      style={{ color: '#0B0B0B' }}
                    >
                      {t.customer_name}
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} style={{ color: '#C6A85A', fontSize: '0.75rem' }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section text-center"
        style={{ backgroundColor: '#0B0B0B' }}
      >
        <div className="section-inner">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>
              <div className="gold-line" />
              <span className="text-label" style={{ color: '#C6A85A' }}>
                Your Turn
              </span>
              <div className="gold-line" />
            </div>
            <h2 className="text-heading" style={{ color: '#FAF8F3' }}>
              Ready To Create
              <span className="italic" style={{ color: '#C6A85A' }}> Your Story?</span>
            </h2>
            <p
              className="text-body mt-6 mb-10 mx-auto"
              style={{ color: 'rgba(250,248,243,0.4)', maxWidth: '400px' }}
            >
              Join our growing family of clients who wear their
              confidence every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="btn-primary">
                Book Consultation
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
      </section>

    </main>
  )
}