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

            {/* Contact info */}
            <div>
              <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                Let&apos;s
                <span className="italic" style={{ color: '#C6A85A' }}> Talk</span>
              </h2>

              <div
                className="flex flex-col"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
              >
                {[
                  {
                    label: 'WhatsApp',
                    value: '+234 XXX XXX XXXX',
                    href: 'https://wa.me/2349024193118',
                    note: 'Fastest response',
                  },
                  {
                    label: 'Email',
                    value: 'consultglamorousthread@gmail.com',
                    href: 'mailto:consultglamorousthread@gmail.com',
                    note: 'Response within 24hrs',
                  },
                  {
                    label: 'Instagram',
                    value: '@glamorous.thread.1988',
                    href: 'https://www.instagram.com/glamorous.thread.1988?igsh=cGlnZHBwazB3bXps',
                    note: 'Follow for updates',
                  },
                  {
                    label: 'Location',
                    value: 'Lagos, Nigeria',
                    href: '#',
                    note: 'By appointment only',
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#FAF8F3', padding: '1.5rem', display: 'block' }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)' }}>
                          {item.label}
                        </p>
                        <p
                          className="font-serif font-light text-xl mt-1"
                          style={{ color: '#0B0B0B' }}
                        >
                          {item.value}
                        </p>
                      </div>
                      <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>
                        {item.note}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
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
                    <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
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
                    <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
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
                    <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
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