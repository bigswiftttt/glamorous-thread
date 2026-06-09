'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const services = [
    'Bridal Couture',
    'Native Wear',
    'Corporate Fashion',
    'Bespoke Fashion',
    'Event Dresses',
    'Custom Designs',
]

const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM',
]

export default function BookPage() {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const [form, setForm] = useState({
        full_name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: '',
    })

    function updateForm(field: string, value: string) {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    async function handleSubmit() {
        setLoading(true)
        setError('')

        try {
            const supabase = createClient()

            const { error: dbError } = await supabase
                .from('appointments')
                .insert({
                    service: form.service,
                    date: form.date,
                    time: form.time,
                    notes: form.notes,
                    status: 'pending',
                })

            if (dbError) throw dbError

            setSuccess(true)
        } catch (err) {
            setError('Something went wrong. Please try again or contact us on WhatsApp.')
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
                <section
                    className="section"
                    style={{ paddingTop: '10rem', textAlign: 'center' }}
                >
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

                            <h1 className="text-heading" style={{ color: '#0B0B0B' }}>
                                Booking Confirmed
                            </h1>
                            <p
                                className="text-body mt-4"
                                style={{ color: 'rgba(17,17,17,0.5)' }}
                            >
                                Thank you, {form.full_name}. Your consultation has been booked
                                for {form.date} at {form.time}. We will be in touch shortly.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                                <a href="/" className="btn-primary">
                                    Back to Home
                                </a>

                                <a href={`https://wa.me/2349024193118?text=Hi, I just booked a ${form.service} consultation for ${form.date} at ${form.time}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline-dark"
                >
                                Confirm on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
      </main >
    )
    }

    return (
        <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>

            {/* Page hero */}
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
                            Begin Your Journey
                        </span>
                    </div>
                    <h1 className="text-display" style={{ color: '#FAF8F3' }}>
                        Book A Consultation
                    </h1>
                    <p
                        className="text-body mt-6"
                        style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
                    >
                        Choose your service, pick a date and time, and we will
                        take care of the rest.
                    </p>

                    {/* Step indicator */}
                    <div className="flex items-center gap-4 mt-10">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-4">
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        border: `1px solid ${step >= s ? '#C6A85A' : 'rgba(250,248,243,0.2)'}`,
                                        backgroundColor: step > s ? '#C6A85A' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {step > s ? (
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#0B0B0B">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <span
                                            className="text-label"
                                            style={{ color: step >= s ? '#C6A85A' : 'rgba(250,248,243,0.3)' }}
                                        >
                                            {s}
                                        </span>
                                    )}
                                </div>
                                {s < 3 && (
                                    <div
                                        style={{
                                            width: '40px',
                                            height: '1px',
                                            backgroundColor: step > s ? '#C6A85A' : 'rgba(250,248,243,0.2)',
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                        <span
                            className="text-label ml-2"
                            style={{ color: 'rgba(250,248,243,0.4)' }}
                        >
                            {step === 1 ? 'Choose Service' : step === 2 ? 'Pick Date & Time' : 'Your Details'}
                        </span>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="section">
                <div className="section-inner">
                    <div style={{ maxWidth: '680px' }}>

                        {/* Step 1 — Service */}
                        {step === 1 && (
                            <div>
                                <h2 className="text-heading mb-8" style={{ color: '#0B0B0B' }}>
                                    What can we
                                    <span className="italic" style={{ color: '#C6A85A' }}> create for you?</span>
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            onClick={() => updateForm('service', service)}
                                            style={{
                                                padding: '1.5rem',
                                                textAlign: 'left',
                                                border: form.service === service
                                                    ? '1px solid #C6A85A'
                                                    : '1px solid rgba(17,17,17,0.1)',
                                                backgroundColor: form.service === service
                                                    ? 'rgba(198,168,90,0.05)'
                                                    : '#FAF8F3',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            <span
                                                className="font-serif font-light text-xl block"
                                                style={{ color: form.service === service ? '#C6A85A' : '#0B0B0B' }}
                                            >
                                                {service}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setStep(2)}
                                    disabled={!form.service}
                                    className="btn-primary mt-10"
                                    style={{
                                        opacity: form.service ? 1 : 0.4,
                                        cursor: form.service ? 'pointer' : 'not-allowed',
                                    }}
                                >
                                    Continue
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Step 2 — Date & Time */}
                        {step === 2 && (
                            <div>
                                <h2 className="text-heading mb-8" style={{ color: '#0B0B0B' }}>
                                    Choose a
                                    <span className="italic" style={{ color: '#C6A85A' }}> date and time</span>
                                </h2>

                                {/* Date input */}
                                <div className="mb-8">
                                    <label
                                        className="text-label block mb-3"
                                        style={{ color: 'rgba(17,17,17,0.6)' }}
                                    >
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        value={form.date}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => updateForm('date', e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            border: '1px solid rgba(17,17,17,0.1)',
                                            backgroundColor: '#FAF8F3',
                                            fontFamily: 'Jost, sans-serif',
                                            fontSize: '0.875rem',
                                            color: '#111111',
                                            outline: 'none',
                                        }}
                                    />
                                </div>

                                {/* Time slots */}
                                <div className="mb-10">
                                    <label
                                        className="text-label block mb-3"
                                        style={{ color: 'rgba(17,17,17,0.6)' }}
                                    >
                                        Preferred Time
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => updateForm('time', time)}
                                                style={{
                                                    padding: '0.75rem',
                                                    border: form.time === time
                                                        ? '1px solid #C6A85A'
                                                        : '1px solid rgba(17,17,17,0.1)',
                                                    backgroundColor: form.time === time
                                                        ? 'rgba(198,168,90,0.05)'
                                                        : '#FAF8F3',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s ease',
                                                }}
                                            >
                                                <span
                                                    className="text-label"
                                                    style={{ color: form.time === time ? '#C6A85A' : 'rgba(17,17,17,0.6)' }}
                                                >
                                                    {time}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="btn-outline-dark"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={() => setStep(3)}
                                        disabled={!form.date || !form.time}
                                        className="btn-primary"
                                        style={{
                                            opacity: form.date && form.time ? 1 : 0.4,
                                            cursor: form.date && form.time ? 'pointer' : 'not-allowed',
                                        }}
                                    >
                                        Continue
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3 — Personal Details */}
                        {step === 3 && (
                            <div>
                                <h2 className="text-heading mb-8" style={{ color: '#0B0B0B' }}>
                                    Your
                                    <span className="italic" style={{ color: '#C6A85A' }}> details</span>
                                </h2>

                                <div className="flex flex-col gap-5 mb-8">

                                    <div>
                                        <label
                                            className="text-label block mb-2"
                                            style={{ color: 'rgba(17,17,17,0.6)' }}
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            value={form.full_name}
                                            onChange={(e) => updateForm('full_name', e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                border: '1px solid rgba(17,17,17,0.1)',
                                                backgroundColor: '#FAF8F3',
                                                fontFamily: 'Jost, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#111111',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>

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
                                            value={form.email}
                                            onChange={(e) => updateForm('email', e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                border: '1px solid rgba(17,17,17,0.1)',
                                                backgroundColor: '#FAF8F3',
                                                fontFamily: 'Jost, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#111111',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="text-label block mb-2"
                                            style={{ color: 'rgba(17,17,17,0.6)' }}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+234 XXX XXX XXXX"
                                            value={form.phone}
                                            onChange={(e) => updateForm('phone', e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                border: '1px solid rgba(17,17,17,0.1)',
                                                backgroundColor: '#FAF8F3',
                                                fontFamily: 'Jost, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#111111',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className="text-label block mb-2"
                                            style={{ color: 'rgba(17,17,17,0.6)' }}
                                        >
                                            Additional Notes (optional)
                                        </label>
                                        <textarea
                                            placeholder="Tell us more about what you have in mind..."
                                            value={form.notes}
                                            onChange={(e) => updateForm('notes', e.target.value)}
                                            rows={4}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                border: '1px solid rgba(17,17,17,0.1)',
                                                backgroundColor: '#FAF8F3',
                                                fontFamily: 'Jost, sans-serif',
                                                fontSize: '0.875rem',
                                                color: '#111111',
                                                outline: 'none',
                                                resize: 'vertical',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Booking summary */}
                                <div
                                    style={{
                                        padding: '1.5rem',
                                        border: '1px solid rgba(198,168,90,0.2)',
                                        backgroundColor: 'rgba(198,168,90,0.03)',
                                        marginBottom: '2rem',
                                    }}
                                >
                                    <p className="text-label mb-3" style={{ color: '#C6A85A' }}>
                                        Booking Summary
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <span className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>Service</span>
                                            <span className="text-body" style={{ color: '#0B0B0B' }}>{form.service}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>Date</span>
                                            <span className="text-body" style={{ color: '#0B0B0B' }}>{form.date}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>Time</span>
                                            <span className="text-body" style={{ color: '#0B0B0B' }}>{form.time}</span>
                                        </div>
                                    </div>
                                </div>

                                {error && (
                                    <p
                                        className="text-body mb-4"
                                        style={{ color: '#E53E3E' }}
                                    >
                                        {error}
                                    </p>
                                )}

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="btn-outline-dark"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading || !form.full_name || !form.email}
                                        className="btn-primary"
                                        style={{
                                            opacity: loading || !form.full_name || !form.email ? 0.6 : 1,
                                            cursor: loading || !form.full_name || !form.email ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        {loading ? 'Booking...' : 'Confirm Booking'}
                                        {!loading && (
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </section>

        </main>
    )
}