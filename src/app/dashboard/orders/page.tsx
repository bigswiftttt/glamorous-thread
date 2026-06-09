import { createClient } from '@/lib/supabase/server'

const statusSteps = [
    { key: 'measurement_taken', label: 'Measurement Taken' },
    { key: 'design_approved', label: 'Design Approved' },
    { key: 'cutting', label: 'Cutting' },
    { key: 'sewing', label: 'Sewing' },
    { key: 'ready_for_fitting', label: 'Ready for Fitting' },
    { key: 'delivered', label: 'Delivered' },
]

export default async function OrdersPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const { data: orders } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false })

    function getStepIndex(status: string) {
        return statusSteps.findIndex((s) => s.key === status)
    }

    return (
        <div>
            <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                My Orders
            </h2>

            {orders && orders.length > 0 ? (
                <div className="flex flex-col gap-8">
                    {orders.map((order) => {
                        const currentStep = getStepIndex(order.status)

                        return (
                            <div
                                key={order.id}
                                style={{
                                    border: '1px solid rgba(198,168,90,0.2)',
                                    backgroundColor: '#FAF8F3',
                                }}
                            >
                                {/* Order header */}
                                <div
                                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6"
                                    style={{ borderBottom: '1px solid rgba(198,168,90,0.15)' }}
                                >
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
                                    <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                        {order.description || 'Custom order'}
                                    </p>
                                </div>

                                {/* Progress tracker */}
                                <div className="p-6">
                                    <p className="text-label mb-6" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                        Production Progress
                                    </p>

                                    {/* Desktop progress */}
                                    <div className="hidden sm:flex items-center gap-0">
                                        {statusSteps.map((step, i) => {
                                            const done = i < currentStep
                                            const active = i === currentStep
                                            return (
                                                <div
                                                    key={step.key}
                                                    className="flex items-center"
                                                    style={{ flex: i < statusSteps.length - 1 ? 1 : 'none' }}
                                                >
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div
                                                            style={{
                                                                width: '28px',
                                                                height: '28px',
                                                                borderRadius: '50%',
                                                                backgroundColor: done ? '#C6A85A'
                                                                    : active ? 'rgba(198,168,90,0.1)'
                                                                        : 'transparent',
                                                                border: `1px solid ${done || active ? '#C6A85A' : 'rgba(17,17,17,0.15)'}`,
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            {done ? (
                                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#FAF8F3">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            ) : active ? (
                                                                <div
                                                                    style={{
                                                                        width: '8px',
                                                                        height: '8px',
                                                                        borderRadius: '50%',
                                                                        backgroundColor: '#C6A85A',
                                                                    }}
                                                                />
                                                            ) : null}
                                                        </div>
                                                        <p
                                                            className="text-label"
                                                            style={{
                                                                color: done || active ? '#0B0B0B' : 'rgba(17,17,17,0.3)',
                                                                textAlign: 'center',
                                                                fontSize: '0.6rem',
                                                            }}
                                                        >
                                                            {step.label}
                                                        </p>
                                                    </div>

                                                    {i < statusSteps.length - 1 && (
                                                        <div
                                                            style={{
                                                                height: '1px',
                                                                flex: 1,
                                                                backgroundColor: i < currentStep
                                                                    ? '#C6A85A'
                                                                    : 'rgba(17,17,17,0.1)',
                                                                marginBottom: '1.5rem',
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Mobile progress */}
                                    <div className="flex flex-col gap-3 sm:hidden">
                                        {statusSteps.map((step, i) => {
                                            const done = i < currentStep
                                            const active = i === currentStep
                                            return (
                                                <div key={step.key} className="flex items-center gap-3">
                                                    <div
                                                        style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            flexShrink: 0,
                                                            backgroundColor: done ? '#C6A85A'
                                                                : active ? 'rgba(198,168,90,0.1)'
                                                                    : 'transparent',
                                                            border: `1px solid ${done || active ? '#C6A85A' : 'rgba(17,17,17,0.15)'}`,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        {done && (
                                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#FAF8F3">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        )}
                                                        {active && (
                                                            <div
                                                                style={{
                                                                    width: '7px',
                                                                    height: '7px',
                                                                    borderRadius: '50%',
                                                                    backgroundColor: '#C6A85A',
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                    <p
                                                        className="text-body"
                                                        style={{
                                                            color: done || active ? '#0B0B0B' : 'rgba(17,17,17,0.3)',
                                                        }}
                                                    >
                                                        {step.label}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div
                    style={{
                        padding: '4rem',
                        textAlign: 'center',
                        border: '1px solid rgba(198,168,90,0.15)',
                    }}
                >
                    <p className="text-body mb-2" style={{ color: 'rgba(17,17,17,0.4)' }}>
                        No orders yet
                    </p>
                    <p className="text-body" style={{ color: 'rgba(17,17,17,0.3)' }}>
                        Your orders will appear here once placed
                    </p>
                </div>
            )}
        </div>
    )
}