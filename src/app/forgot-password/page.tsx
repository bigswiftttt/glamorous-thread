'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleReset() {
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
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
    <main
      style={{
        backgroundColor: '#FAF8F3',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ width: '100%', maxWidth: '440px' }}>

        <Link href="/" className="inline-block mb-10">
          <span
            className="font-serif font-light block"
            style={{ fontSize: '1.2rem', letterSpacing: '0.2em', color: '#0B0B0B' }}
          >
            GLAMOROUS
          </span>
          <span
            className="font-serif font-light block"
            style={{ fontSize: '1.2rem', letterSpacing: '0.2em', color: '#C6A85A' }}
          >
            THREAD
          </span>
        </Link>

        {sent ? (
          <div>
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
                marginBottom: '2rem',
              }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#C6A85A">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="eyebrow">
              <div className="gold-line" />
              <span className="text-label" style={{ color: '#C6A85A' }}>
                Email Sent
              </span>
            </div>

            <h1 className="text-heading mb-4" style={{ color: '#0B0B0B' }}>
              Check Your Inbox
            </h1>
            <p className="text-body mb-8" style={{ color: 'rgba(17,17,17,0.5)' }}>
              We sent a password reset link to{' '}
              <strong style={{ color: '#0B0B0B' }}>{email}</strong>.
              Check your inbox and click the link to reset your password.
            </p>
            <p className="text-body mb-8" style={{ color: 'rgba(17,17,17,0.4)' }}>
              Did not receive it? Check your spam folder or{' '}
              <button
                onClick={() => setSent(false)}
                style={{
                  color: '#C6A85A',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontFamily: 'Jost, sans-serif',
                  fontSize: 'inherit',
                }}
              >
                try again
              </button>
            </p>
            <Link href="/login" className="btn-primary">
              Back to Sign In
            </Link>
          </div>
        ) : (
          <div>
            <div className="eyebrow">
              <div className="gold-line" />
              <span className="text-label" style={{ color: '#C6A85A' }}>
                Password Reset
              </span>
            </div>

            <h1 className="text-heading mb-3" style={{ color: '#0B0B0B' }}>
              Forgot Password?
            </h1>
            <p className="text-body mb-8" style={{ color: 'rgba(17,17,17,0.5)' }}>
              Enter your email address and we will send you
              a link to reset your password.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label
                  className="text-label block mb-2"
                  style={{ color: 'rgba(17,17,17,0.6)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleReset()}
                  style={inputStyle}
                />
              </div>

              {error && (
                <p className="text-body" style={{ color: '#E53E3E' }}>
                  {error}
                </p>
              )}

              <button
                onClick={handleReset}
                disabled={loading || !email}
                className="btn-primary"
                style={{
                  opacity: loading || !email ? 0.6 : 1,
                  cursor: loading || !email ? 'not-allowed' : 'pointer',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </div>

            <div
              className="mt-8 pt-8"
              style={{ borderTop: '1px solid rgba(198,168,90,0.2)' }}
            >
              <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                Remember your password?{' '}
                <Link
                  href="/login"
                  style={{ color: '#C6A85A', borderBottom: '1px solid rgba(198,168,90,0.3)' }}
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}