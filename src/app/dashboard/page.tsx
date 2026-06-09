import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const [{ data: appointments }, { data: orders }, { data: measurements }] =
        await Promise.all([
            supabase
                .from('appointments')
                .select('*')
                .eq('user_id', user!.id)
                .order('created_at', { ascending: false })
                .limit(3),
            supabase
                .from('orders')
                .select('*')
                .eq('user_id', user!.id)
                .order('created_at', { ascending: false })
                .limit(3),
            supabase
                .from('measurements')
                .select('*')
                .eq('user_id', user!.id)
                .single(),
        ])

    const stats = [
        {
            label: 'Appointments',
            value: appointments?.length ?? 0,
            href: '/dashboard/appointments',
        },
        {
            label: 'Active Orders',
            value: orders?.length ?? 0,
            href: '/dashboard/orders',
        },
        {
            label: 'Measurements',
            value: measurements ? 'Saved' : 'Not set',
            href: '/dashboard/measurements',
        },
    ]

    return (
        <div>

            {/* Stats */}
            <div
                className="grid grid-cols-1 sm:grid-cols-3 mb-12"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
                {stats.map((stat) => (
                    <a
                        key={stat.label}
                        href={stat.href}
                        style={{ backgroundColor: '#FAF8F3', padding: '2rem', display: 'block' }}
                    >
                        <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            {stat.label}
                        </p>
                        <p
                            className="font-serif font-light mt-2"
                            style={{ fontSize: '2.5rem', color: '#0B0B0B', lineHeight: 1 }}
                        >
                            {stat.value}
                        </p>
                    </a>
                ))}
            </div>

            {/* Recent appointments */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-subheading" style={{ color: '#0B0B0B' }}>
                        Recent Appointments
                    </h2>
                    <a
                        href="/dashboard/appointments"
                        className="text-label"
                        style={{ color: '#C6A85A' }}
                    >
                        View all
                    </a>
                </div>

                {
                    appointments && appointments.length > 0 ? (
                        <div
                            className="flex flex-col"
                            style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
                        >
                            {appointments.map((apt) => (
                                <div
                                    key={apt.id}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6"
                                    style={{ backgroundColor: '#FAF8F3' }}
                                >
                                    <div>
                                        <p className="font-serif font-light text-lg" style={{ color: '#0B0B0B' }}>
                                            {apt.service}
                                        </p>
                                        <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                            {apt.date} at {apt.time}
                                        </p>
                                    </div>
                                    <span
                                        className="text-label"
                                        style={{
                                            color: apt.status === 'confirmed' ? '#2F855A'
                                                : apt.status === 'cancelled' ? '#E53E3E'
                                                    : '#C6A85A',
                                            padding: '4px 12px',
                                            border: `1px solid ${apt.status === 'confirmed' ? 'rgba(47,133,90,0.3)'
                                                : apt.status === 'cancelled' ? 'rgba(229,62,62,0.3)'
                                                    : 'rgba(198,168,90,0.3)'}`,
                                        }}
                                    >
                                        {apt.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div
                            style={{
                                padding: '3rem',
                                textAlign: 'center',
                                border: '1px solid rgba(198,168,90,0.15)',
                            }}
                        >
                            <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                No appointments yet
                            </p>
                            <a href="/book" className="btn-primary mt-6 inline-flex">
                                Book Consultation
                            </a>
                        </div>
                    )
                }
            </div >

            {/* Recent orders */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-subheading" style={{ color: '#0B0B0B' }}>
                        Recent Orders
                    </h2>
                    <a
                        href="/dashboard/orders"
                        className="text-label"
                        style={{ color: '#C6A85A' }}
                    >
                        View all
                    </a>
                </div>

                {orders && orders.length > 0 ? (
                    <div
                        className="flex flex-col"
                        style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
                    >
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6"
                                style={{ backgroundColor: '#FAF8F3' }}
                            >
                                <div>
                                    <p className="font-serif font-light text-lg" style={{ color: '#0B0B0B' }}>
                                        {order.order_number}
                                    </p>
                                    <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                        {order.description || 'Custom order'}
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
                        ))}
                    </div>
                ) : (
                    <div
                        style={{
                            padding: '3rem',
                            textAlign: 'center',
                            border: '1px solid rgba(198,168,90,0.15)',
                        }}
                    >
                        <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            No orders yet
                        </p>
                    </div>
                )
                }
            </div >

        </div >
    )
}