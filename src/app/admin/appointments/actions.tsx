'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AdminAppointmentActions({
    id,
    status,
}: {
    id: string
    status: string
}) {
    const router = useRouter()

    async function updateStatus(newStatus: string) {
        const supabase = createClient()
        await supabase
            .from('appointments')
            .update({ status: newStatus })
            .eq('id', id)
        router.refresh()
    }

    return (
        <div className="flex gap-2 flex-wrap">
            {status !== 'confirmed' && (
                <button
                    onClick={() => updateStatus('confirmed')}
                    className="text-label"
                    style={{
                        padding: '4px 12px',
                        backgroundColor: 'rgba(47,133,90,0.1)',
                        border: '1px solid rgba(47,133,90,0.3)',
                        color: '#2F855A',
                        cursor: 'pointer',
                    }}
                >
                    Confirm
                </button>
            )}
            {status !== 'cancelled' && (
                <button
                    onClick={() => updateStatus('cancelled')}
                    className="text-label"
                    style={{
                        padding: '4px 12px',
                        backgroundColor: 'rgba(229,62,62,0.05)',
                        border: '1px solid rgba(229,62,62,0.2)',
                        color: '#E53E3E',
                        cursor: 'pointer',
                    }}
                >
                    Cancel
                </button>
            )}
        </div>
    )
}