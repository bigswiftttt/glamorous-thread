import { createClient } from '@/lib/supabase/server'

export default async function AppointmentsPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const { data: appointments } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', user!.id)
        .order('date', { ascending: true })

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-heading" style={{ color: '#0B0B0B' }}>
                    My Appointments
                </h2>
                <a href="/book" className="btn-primary">
                    Book New
                </a>
            </div>

            {appointments && appointments.length > 0 ? (
                <div
                    className="flex flex-col"
                    style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
                >
                    {appointments.map((apt) => (
                        <div
                            key={apt.id}
                            className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 items-center"
                            style={{ backgroundColor: '#FAF8F3' }}
                        >
                            <div className="sm:col-span-2">
                                <p
                                    className="font-serif font-light text-xl"
                                    style={{ color: '#0B0B0B' }}
                                >
                                    {apt.service}
                                </p>
                                {apt.notes && (
                                    <p
                                        className="text-body mt-1"
                                        style={{ color: 'rgba(17,17,17,0.4)' }}
                                    >
                                        {apt.notes}
                                    </p>
                                )}
                            </div>

                            <div>
                                <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                    Date & Time
                                </p>
                                <p className="text-body mt-1" style={{ color: '#0B0B0B' }}>
                                    {apt.date}
                                </p>
                                <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                    {apt.time}
                                </p>
                            </div>

                            <div className="flex justify-start sm:justify-end">
                                <span
                                    className="text-label"
                                    style={{
                                        color: apt.status === 'confirmed' ? '#2F855A'
                                            : apt.status === 'cancelled' ? '#E53E3E'
                                                : '#C6A85A',
                                        padding: '4px 16px',
                                        border: `1px solid ${apt.status === 'confirmed'
                                            ? 'rgba(47,133,90,0.3)'
                                            : apt.status === 'cancelled'
                                                ? 'rgba(229,62,62,0.3)'
                                                : 'rgba(198,168,90,0.3)'}`,
                                    }}
                                >
                                    {apt.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        padding: '4rem',
                        textAlign: 'center',
                        border: '1px solid rgba(198,168,90,0.15)',
                    }}
                >
                    <p className="text-body mb-6" style={{ color: 'rgba(17,17,17,0.4)' }}>
                        You have no appointments yet
                    </p>
                    <a href="/book" className="btn-primary">
                        Book Your First Consultation
                    </a>
                </div>
            )}
        </div>
    )
}