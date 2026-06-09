'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

const fields = [
    { key: 'height', label: 'Height', unit: 'cm' },
    { key: 'bust', label: 'Bust', unit: 'cm' },
    { key: 'waist', label: 'Waist', unit: 'cm' },
    { key: 'hips', label: 'Hips', unit: 'cm' },
    { key: 'shoulder', label: 'Shoulder', unit: 'cm' },
    { key: 'sleeve', label: 'Sleeve', unit: 'cm' },
    { key: 'inseam', label: 'Inseam', unit: 'cm' },
]

export default function MeasurementsPage() {
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [saved, setSaved] = useState(false)
    const [measurements, setMeasurements] = useState<Record<string, string>>({})
    const [notes, setNotes] = useState('')

    useEffect(() => {
        async function load() {
            const supabase = createClient()
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) return

            const { data } = await supabase
                .from('measurements')
                .select('*')
                .eq('user_id', user.id)
                .single()

            if (data) {
                const vals: Record<string, string> = {}
                fields.forEach((f) => {
                    vals[f.key] = data[f.key]?.toString() || ''
                })
                setMeasurements(vals)
                setNotes(data.notes || '')
            }

            setLoading(false)
        }
        load()
    }, [])

    async function handleSave() {
        setSaving(true)
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const payload: Record<string, number | string | null> = {
            user_id: user.id,
            notes,
            updated_at: new Date().toISOString(),
        }

        fields.forEach((f) => {
            payload[f.key] = measurements[f.key]
                ? parseFloat(measurements[f.key])
                : null
        })

        await supabase
            .from('measurements')
            .upsert(payload, { onConflict: 'user_id' })

        setSaving(false)
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
    }

    const inputStyle = {
        width: '100%',
        padding: '0.875rem 1rem',
        border: '1px solid rgba(17,17,17,0.1)',
        backgroundColor: '#FAF8F3',
        fontFamily: 'Jost, sans-serif',
        fontSize: '0.875rem',
        color: '#111111',
        outline: 'none',
    }

    if (loading) {
        return (
            <div style={{ padding: '4rem 0', textAlign: 'center' }}>
                <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <div>
            <div className="flex items-start justify-between mb-10 gap-4">
                <div>
                    <h2 className="text-heading" style={{ color: '#0B0B0B' }}>
                        My Measurements
                    </h2>
                    <p
                        className="text-body mt-2"
                        style={{ color: 'rgba(17,17,17,0.5)', maxWidth: '400px' }}
                    >
                        Your measurements are saved securely and shared with
                        your designer for every order.
                    </p>
                </div>
            </div>

            {/* Measurements grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {fields.map((field) => (
                    <div key={field.key}>
                        <label
                            className="text-label block mb-2"
                            style={{ color: 'rgba(17,17,17,0.5)' }}
                        >
                            {field.label} ({field.unit})
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="number"
                                placeholder="0"
                                value={measurements[field.key] || ''}
                                onChange={(e) =>
                                    setMeasurements((prev) => ({
                                        ...prev,
                                        [field.key]: e.target.value,
                                    }))
                                }
                                style={inputStyle}
                            />
                            <span
                                className="text-label"
                                style={{
                                    position: 'absolute',
                                    right: '1rem',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'rgba(17,17,17,0.3)',
                                }}
                            >
                                {field.unit}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Notes */}
            <div className="mb-8">
                <label
                    className="text-label block mb-2"
                    style={{ color: 'rgba(17,17,17,0.5)' }}
                >
                    Additional Notes
                </label>
                <textarea
                    placeholder="Any special notes about your measurements or fitting preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                    style={{
                        ...inputStyle,
                        resize: 'vertical',
                    }}
                />
            </div>

            {/* Save button */}
            <div className="flex items-center gap-4">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="btn-primary"
                    style={{ opacity: saving ? 0.6 : 1 }}
                >
                    {saving ? 'Saving...' : 'Save Measurements'}
                </button>

                {saved && (
                    <p
                        className="text-body"
                        style={{ color: '#2F855A' }}
                    >
                        Measurements saved successfully
                    </p>
                )}
            </div>
        </div>
    )
}