'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function QuotePage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
    deadline: '',
  })

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    setLoading(true)
    setError('')

    try {
      const supabase = createClient()
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert({
          name: form.name,
          email: form.email,
          description: form.description,
          budget: form.budget,
          deadline: form.deadline || null,
          status: 'new',
        })

      if (dbError) throw dbError
      setSuccess(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
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

  const budgetOptions = [
    'Under ₦50,000',
    '₦50,000 – ₦100,000',
    '₦100,000 – ₦250,000',
    '₦250,000 – ₦500,000',
    'Above ₦500,000',
    'Let us discuss',
  ]

  if (success) {
    return (
      <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
        <section className="section" style={{ paddingTop: '10rem', textAlign: 'center' }}>
          <div className="section-inner">
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(198,168,90,0.1)',
                  border: '1px solid rgba(198,168,90,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C6A85A">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-heading mb-4" style={{ color: '#0B0B0B' }}>
                Quote Request Sent
              </h1>
              <p className="text-body mb-10" style={{ color: 'rgba(17,17,17,0.5)' }}>
                Thank you {form.name}. We have received your request and
                will get back to you within 24 hours.
              </p>
              <a href="/" className="btn-primary">
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
    )
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
              Get A Quote
            </span>
          </div>
          <h1 className="text-display" style={{ color: '#FAF8F3' }}>
            Request A Quote
          </h1>
          <p
            className="text-body mt-6"
            style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
          >
            Tell us about your vision and we will get back to
            you with a personalised quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div style={{ maxWidth: '680px' }}>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                  Describe Your Design
                </label>
                <textarea
                  placeholder="Tell us everything — occasion, style, colours, fabric preferences, inspiration..."
                  value={form.description}
                  onChange={(e) => update('description', e.target.value)}
                  rows={6}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <div>
                <label className="text-label block mb-3" style={{ color: 'rgba(17,17,17,0.6)' }}>
                  Budget Range
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => update('budget', option)}
                      style={{
                        padding: '0.75rem 1rem',
                        border: form.budget === option
                          ? '1px solid #C6A85A'
                          : '1px solid rgba(17,17,17,0.1)',
                        backgroundColor: form.budget === option
                          ? 'rgba(198,168,90,0.05)'
                          : '#FAF8F3',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        className="text-label"
                        style={{
                          color: form.budget === option
                            ? '#C6A85A'
                            : 'rgba(17,17,17,0.6)',
                          fontSize: '0.65rem',
                        }}
                      >
                        {option}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                  Deadline (optional)
                </label>
                <input
                  type="date"
                  value={form.deadline}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => update('deadline', e.target.value)}
                  style={inputStyle}
                />
              </div>

              {error && (
                <p className="text-body" style={{ color: '#E53E3E' }}>
                  {error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.description}
                className="btn-primary"
                style={{
                  opacity: loading || !form.name || !form.email || !form.description ? 0.5 : 1,
                  cursor: loading || !form.name || !form.email || !form.description ? 'not-allowed' : 'pointer',
                }}
              >
                {loading ? 'Submitting...' : 'Submit Quote Request'}
                {!loading && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}