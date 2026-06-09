import { createClient } from '@/lib/supabase/server'

export default async function AdminCustomersPage() {
    const supabase = await createClient()

    const { data: customers } = await supabase
        .from('users')
        .select('*')
        .eq('role', 'customer')
        .order('created_at', { ascending: false })

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-heading" style={{ color: '#0B0B0B' }}>
                    Customers
                </h2>
                <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                    {customers?.length ?? 0} total
                </p>
            </div>

            <div
                className="flex flex-col"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
                {customers?.map((customer) => (
                    <div
                        key={customer.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6"
                        style={{ backgroundColor: '#FAF8F3' }}
                    >
                        <div>
                            <p className="font-serif font-light text-xl" style={{ color: '#0B0B0B' }}>
                                {customer.full_name || 'No name'}
                            </p>
                            <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                {customer.phone || 'No phone'}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>
                                Joined
                            </p>
                            <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                {new Date(customer.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
                {(!customers || customers.length === 0) && (
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                        <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            No customers yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}