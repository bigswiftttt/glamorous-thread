'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const statuses = ['new', 'reviewed', 'quoted', 'accepted', 'declined']

export default function AdminQuoteActions({
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
            .from('quote_requests')
            .update({ status: newStatus })
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
                flexShrink: 0,
            }}
        >
            {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
            ))}
        </select>
    )
}