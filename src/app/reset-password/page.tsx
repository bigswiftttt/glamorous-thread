'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

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

  async function handleReset() {
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setTimeout(() => router.push('/dashboard'), 2000)
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

        {success ? (
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-heading mb-3" style={{ color: '#0B0B0B' }}>
              Password Updated
            </h1>
            <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
              Your password has been reset successfully.
              Redirecting you to your dashboard...
            </p>
          </div>
        ) : (
          <div>
            <div className="eyebrow">
              <div className="gold-line" />
              <span className="text-label" style={{ color: '#C6A85A' }}>
                New Password
              </span>
            </div>

            <h1 className="text-heading mb-3" style={{ color: '#0B0B0B' }}>
              Reset Password
            </h1>
            <p className="text-body mb-8" style={{ color: 'rgba(17,17,17,0.5)' }}>
              Enter your new password below.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label
                  className="text-label block mb-2"
                  style={{ color: 'rgba(17,17,17,0.6)' }}
                >
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  className="text-label block mb-2"
                  style={{ color: 'rgba(17,17,17,0.6)' }}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Repeat your password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
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
                disabled={loading || !password || !confirm}
                className="btn-primary"
                style={{
                  opacity: loading || !password || !confirm ? 0.6 : 1,
                  cursor: loading || !password || !confirm ? 'not-allowed' : 'pointer',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                {loading ? 'Updating...' : 'Update Password'}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}