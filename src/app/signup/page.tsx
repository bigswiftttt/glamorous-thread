'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        full_name: '',
        email: '',
        password: '',
    })

    function update(field: string, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    async function handleSignup() {
        setLoading(true)
        setError('')

        const supabase = createClient()
        const { error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password,
            options: {
                data: { full_name: form.full_name },
            },
        })

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        }

        router.push('/dashboard')
        router.refresh()
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

                {/* Logo */}
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

                {/* Heading */}
                <div className="eyebrow">
                    <div className="gold-line" />
                    <span className="text-label" style={{ color: '#C6A85A' }}>
                        Join Us
                    </span>
                </div>
                <h1 className="text-heading mb-8" style={{ color: '#0B0B0B' }}>
                    Create Account
                </h1>

                {/* Form */}
                <div className="flex flex-col gap-5">
                    <div>
                        <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            value={form.full_name}
                            onChange={(e) => update('full_name', e.target.value)}
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

                    <div>
                        <label className="text-label block mb-2" style={{ color: 'rgba(17,17,17,0.6)' }}>
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="At least 6 characters"
                            value={form.password}
                            onChange={(e) => update('password', e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSignup()}
                            style={inputStyle}
                        />
                    </div>

                    {error && (
                        <p className="text-body" style={{ color: '#E53E3E' }}>
                            {error}
                        </p>
                    )}

                    <button
                        onClick={handleSignup}
                        disabled={loading || !form.full_name || !form.email || !form.password}
                        className="btn-primary"
                        style={{
                            opacity: loading || !form.full_name || !form.email || !form.password ? 0.6 : 1,
                            cursor: loading || !form.full_name || !form.email || !form.password ? 'not-allowed' : 'pointer',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        {loading ? 'Creating account...' : 'Create Account'}
                    </button>
                </div>

                {/* Footer links */}
                <div
                    className="flex flex-col gap-3 mt-8 pt-8"
                    style={{ borderTop: '1px solid rgba(198,168,90,0.2)' }}
                >
                    <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            style={{ color: '#C6A85A', borderBottom: '1px solid rgba(198,168,90,0.3)' }}
                        >
                            Sign in
                        </Link>
                    </p>
                    <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                        <Link href="/" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            Back to website
                        </Link>
                    </p>
                </div>

            </div>
        </main>
    )
}