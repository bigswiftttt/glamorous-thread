import { createClient } from '@/lib/supabase/server'
import AdminOrderActions from './actions'

export default async function AdminOrdersPage() {
    const supabase = await createClient()

    const { data: orders } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div>
            <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                All Orders
            </h2>

            <div
                className="flex flex-col"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
                {orders?.map((order) => (
                    <div
                        key={order.id}
                        className="p-6"
                        style={{ backgroundColor: '#FAF8F3' }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <div>
                                <p className="font-serif font-light text-xl" style={{ color: '#0B0B0B' }}>
                                    {order.order_number}
                                </p>
                                <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                    {order.description || 'Custom order'}
                                </p>
                            </div>
                            <AdminOrderActions id={order.id} currentStatus={order.status} />
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
                ))}
                {(!orders || orders.length === 0) && (
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                        <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            No orders yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}