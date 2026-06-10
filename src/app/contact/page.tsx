'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid rgba(17,17,17,0.1)',
    backgroundColor: '#FAF8F3',
    fontFamily: 'Jost, sans-serif',
    fontSize: '0.875rem',
    color: '#111111',
    outline: 'none',
  }

  const contacts = [
    {
      label: 'WhatsApp',
      value: '+234 902 419 3118',
      href: 'https://wa.me/2349024193118',
      note: 'Fastest response',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: 'consultglamorousthread@gmail.com',
      href: 'mailto:consultglamorousthread@gmail.com',
      note: 'Within 24hrs',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: '@glamorous.thread.1988',
      href: 'https://www.instagram.com/glamorous.thread.1988',
      note: 'Follow for updates',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: '#',
      note: 'By appointment only',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width: '20px', height: '20px' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

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
              Get In Touch
            </span>
          </div>
          <h1 className="text-display" style={{ color: '#FAF8F3' }}>
            Contact Us
          </h1>
          <p
            className="text-body mt-6"
            style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
          >
            We would love to hear from you. Reach out through
            any of the channels below.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact channels */}
            <div>
              <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                Let&apos;s
                <span className="italic" style={{ color: '#C6A85A' }}> Talk</span>
              </h2>

              <div className="flex flex-col gap-3">
                {contacts.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#FAF8F3',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      border: '1px solid rgba(198,168,90,0.15)',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    {/* Icon box */}
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(198,168,90,0.08)',
                        border: '1px solid rgba(198,168,90,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#C6A85A',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)' }}>
                        {item.label}
                      </p>
                      <p
                        className="font-sans text-sm mt-1"
                        style={{
                          color: '#0B0B0B',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>

                    {/* Note — hidden on very small screens */}
                    <p
                      className="text-label hidden sm:block shrink-0"
                      style={{ color: 'rgba(17,17,17,0.3)' }}
                    >
                      {item.note}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/2349024193118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Chat on WhatsApp
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                Send A
                <span className="italic" style={{ color: '#C6A85A' }}> Message</span>
              </h2>

              {sent ? (
                <div
                  style={{
                    padding: '3rem',
                    textAlign: 'center',
                    border: '1px solid rgba(198,168,90,0.2)',
                  }}
                >
                  <p className="text-subheading mb-2" style={{ color: '#0B0B0B' }}>
                    Message Sent
                  </p>
                  <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                    Thank you! We will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <div>
                    <label
                      className="text-label block mb-2"
                      style={{ color: 'rgba(17,17,17,0.6)' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="text-label block mb-2"
                      style={{ color: 'rgba(17,17,17,0.6)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="text-label block mb-2"
                      style={{ color: 'rgba(17,17,17,0.6)' }}
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>
                  <button
                    onClick={() => setSent(true)}
                    disabled={!form.name || !form.email || !form.message}
                    className="btn-primary"
                    style={{
                      opacity: !form.name || !form.email || !form.message ? 0.5 : 1,
                      cursor: !form.name || !form.email || !form.message ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}