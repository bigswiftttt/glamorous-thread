'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const statusSteps = [
    { key: 'measurement_taken', label: 'Measurement Taken' },
    { key: 'design_approved', label: 'Design Approved' },
    { key: 'cutting', label: 'Cutting' },
    { key: 'sewing', label: 'Sewing' },
    { key: 'ready_for_fitting', label: 'Ready for Fitting' },
    { key: 'delivered', label: 'Delivered' },
]

export default function AdminOrderActions({
    id,
    currentStatus,
}: {
    id: string
    currentStatus: string
}) {
    const router = useRouter()

    async function updateStatus(newStatus: string) {
        const supabase = createClient()
        await supabase
            .from('orders')
            .update({ status: newStatus, updated_at: new Date().toISOString() })
            .eq('id', id)
        router.refresh()
    }

    return (
        <select
            value={currentStatus}
            onChange={(e) => updateStatus(e.target.value)}
            style={{
                padding: '0.5rem 1rem',
                border: '1px solid rgba(198,168,90,0.3)',
                backgroundColor: '#FAF8F3',
                fontFamily: 'Jost, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: '#0B0B0B',
                cursor: 'pointer',
                outline: 'none',
            }}
        >
            {statusSteps.map((step) => (
                <option key={step.key} value={step.key}>
                    {step.label}
                </option>
            ))}
        </select>
    )
}