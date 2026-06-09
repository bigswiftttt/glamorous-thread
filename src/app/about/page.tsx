export default function AboutPage() {
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
              Our Story
            </span>
          </div>
          <h1 className="text-display" style={{ color: '#FAF8F3' }}>
            About Glamorous
            <br />
            <span className="italic" style={{ color: '#C6A85A' }}>Thread</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="eyebrow">
                <div className="gold-line" />
                <span className="text-label" style={{ color: '#C6A85A' }}>
                  The Beginning
                </span>
              </div>
              <h2 className="text-heading mb-6" style={{ color: '#0B0B0B' }}>
                Born From A
                <span className="italic" style={{ color: '#C6A85A' }}> Passion</span>
              </h2>
              <p
                className="text-body mb-6"
                style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 2 }}
              >
                Glamorous Thread was founded on a simple but powerful belief —
                that every woman deserves to wear clothes that were made
                specifically for her. Not adjusted. Not approximated. Made.
              </p>
              <p
                className="text-body mb-6"
                style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 2 }}
              >
                We started as a small atelier with a single sewing machine and
                an unwavering commitment to craftsmanship. Today, we serve
                clients across Nigeria — from brides preparing for their most
                important day, to executives who understand the power of a
                perfectly tailored suit.
              </p>
              <p
                className="text-body"
                style={{ color: 'rgba(17,17,17,0.6)', lineHeight: 2 }}
              >
                Every garment we create carries the same dedication to detail,
                quality, and personal expression that has defined us from the
                very beginning.
              </p>
            </div>

            {/* Values */}
            <div
              className="flex flex-col"
              style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
              {[
                {
                  title: 'Our Mission',
                  body: 'To help every woman show up as the most beautiful, confident version of herself through the power of bespoke fashion.',
                },
                {
                  title: 'Our Vision',
                  body: 'To become the most trusted luxury fashion house in Africa — known for excellence, craftsmanship and a deeply personal approach.',
                },
                {
                  title: 'Our Values',
                  body: 'Craftsmanship. Integrity. Creativity. Collaboration. Every decision we make is guided by these four pillars.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ backgroundColor: '#FAF8F3', padding: '2rem' }}
                >
                  <div className="gold-line mb-4" />
                  <h3
                    className="font-serif font-light text-xl mb-3"
                    style={{ color: '#0B0B0B' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-body"
                    style={{ color: 'rgba(17,17,17,0.55)', lineHeight: 1.8 }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Designer section */}
      <section className="section" style={{ backgroundColor: '#0B0B0B' }}>
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Placeholder for designer photo */}
            <div
              style={{
                backgroundColor: 'rgba(198,168,90,0.05)',
                border: '1px solid rgba(198,168,90,0.15)',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p className="text-label" style={{ color: 'rgba(198,168,90,0.3)' }}>
                Designer Photo
              </p>
            </div>

            <div>
              <div className="eyebrow">
                <div className="gold-line" />
                <span className="text-label" style={{ color: '#C6A85A' }}>
                  The Designer
                </span>
              </div>
              <h2 className="text-heading mb-6" style={{ color: '#FAF8F3' }}>
                The Creative
                <span className="italic" style={{ color: '#C6A85A' }}> Mind</span>
              </h2>
              <p
                className="text-body mb-6"
                style={{ color: 'rgba(250,248,243,0.5)', lineHeight: 2 }}
              >
                With years of experience in luxury fashion design, our lead
                designer brings a rare combination of technical mastery and
                artistic vision to every piece created at Glamorous Thread.
              </p>
              <p
                className="text-body mb-10"
                style={{ color: 'rgba(250,248,243,0.5)', lineHeight: 2 }}
              >
                Trained in the art of bespoke tailoring and deeply rooted in
                African fashion heritage, every design reflects a thoughtful
                balance between contemporary elegance and cultural identity.
              </p>
              <a href="/book" className="btn-primary">
                Book A Consultation
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}