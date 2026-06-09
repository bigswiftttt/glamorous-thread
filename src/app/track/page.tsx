'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const statusSteps = [
  { key: 'measurement_taken', label: 'Measurement Taken' },
  { key: 'design_approved', label: 'Design Approved' },
  { key: 'cutting', label: 'Cutting' },
  { key: 'sewing', label: 'Sewing' },
  { key: 'ready_for_fitting', label: 'Ready for Fitting' },
  { key: 'delivered', label: 'Delivered' },
]

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState('')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<Record<string, string> | null>(null)
  const [notFound, setNotFound] = useState(false)

  async function handleTrack() {
    if (!orderNumber.trim()) return
    setLoading(true)
    setNotFound(false)
    setOrder(null)

    const supabase = createClient()
    const { data } = await supabase
      .from('orders')
      .select('*')
      .eq('order_number', orderNumber.trim().toUpperCase())
      .single()

    if (data) {
      setOrder(data)
    } else {
      setNotFound(true)
    }

    setLoading(false)
  }

  const currentStep = order
    ? statusSteps.findIndex((s) => s.key === order.status)
    : -1

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
              Track Your Order
            </span>
          </div>
          <h1 className="text-display" style={{ color: '#FAF8F3' }}>
            Order Tracking
          </h1>
          <p
            className="text-body mt-6"
            style={{ color: 'rgba(250,248,243,0.5)', maxWidth: '480px' }}
          >
            Enter your order number to see the current
            status of your garment.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div style={{ maxWidth: '600px' }}>

            {/* Search */}
            <div className="flex gap-3 mb-12">
              <input
                type="text"
                placeholder="e.g. GT-2024-001"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                style={{
                  flex: 1,
                  padding: '1rem',
                  border: '1px solid rgba(17,17,17,0.1)',
                  backgroundColor: '#FAF8F3',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.875rem',
                  color: '#111111',
                  outline: 'none',
                }}
              />
              <button
                onClick={handleTrack}
                disabled={loading || !orderNumber.trim()}
                className="btn-primary"
                style={{
                  opacity: loading || !orderNumber.trim() ? 0.5 : 1,
                  cursor: loading || !orderNumber.trim() ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {loading ? 'Searching...' : 'Track Order'}
              </button>
            </div>

            {/* Not found */}
            {notFound && (
              <div
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(229,62,62,0.2)',
                  backgroundColor: 'rgba(229,62,62,0.03)',
                }}
              >
                <p className="text-body" style={{ color: '#E53E3E' }}>
                  Order not found. Please check your order number and try again.
                </p>
                <p className="text-body mt-2" style={{ color: 'rgba(17,17,17,0.4)' }}>
                  Need help?{' '}
                  <a href="/contact" style={{ color: '#C6A85A' }}>
                    Contact us
                  </a>
                </p>
              </div>
            )}

            {/* Order found */}
            {order && (
              <div>
                {/* Order info */}
                <div
                  style={{
                    padding: '1.5rem',
                    border: '1px solid rgba(198,168,90,0.2)',
                    backgroundColor: 'rgba(198,168,90,0.03)',
                    marginBottom: '2rem',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)' }}>
                        Order Number
                      </p>
                      <p
                        className="font-serif font-light text-2xl mt-1"
                        style={{ color: '#0B0B0B' }}
                      >
                        {order.order_number}
                      </p>
                    </div>
                    <span
                      className="text-label"
                      style={{
                        color: '#C6A85A',
                        padding: '4px 12px',
                        border: '1px solid rgba(198,168,90,0.3)',
                      }}
                    >
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  {order.description && (
                    <p
                      className="text-body mt-3"
                      style={{ color: 'rgba(17,17,17,0.5)' }}
                    >
                      {order.description}
                    </p>
                  )}
                </div>

                {/* Progress steps */}
                <div className="flex flex-col gap-0">
                  {statusSteps.map((step, i) => {
                    const done = i < currentStep
                    const active = i === currentStep
                    const upcoming = i > currentStep

                    return (
                      <div
                        key={step.key}
                        className="flex items-center gap-4 py-4"
                        style={{
                          borderBottom: i < statusSteps.length - 1
                            ? '1px solid rgba(198,168,90,0.1)'
                            : 'none',
                        }}
                      >
                        {/* Icon */}
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            flexShrink: 0,
                            backgroundColor: done ? '#C6A85A'
                              : active ? 'rgba(198,168,90,0.1)'
                              : 'transparent',
                            border: `1px solid ${done || active
                              ? '#C6A85A'
                              : 'rgba(17,17,17,0.15)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {done ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#FAF8F3">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : active ? (
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: '#C6A85A',
                              }}
                            />
                          ) : null}
                        </div>

                        {/* Label */}
                        <div>
                          <p
                            className="font-serif font-light text-lg"
                            style={{
                              color: upcoming ? 'rgba(17,17,17,0.25)' : '#0B0B0B',
                            }}
                          >
                            {step.label}
                          </p>
                          {active && (
                            <p
                              className="text-label mt-1"
                              style={{ color: '#C6A85A' }}
                            >
                              Currently in progress
                            </p>
                          )}
                          {done && (
                            <p
                              className="text-label mt-1"
                              style={{ color: 'rgba(17,17,17,0.3)' }}
                            >
                              Completed
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

    </main>
  )
}