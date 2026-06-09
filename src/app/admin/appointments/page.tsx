import { createClient } from '@/lib/supabase/server'
import AdminAppointmentActions from '@/app/admin/appointments/actions'

export default async function AdminAppointmentsPage() {
    const supabase = await createClient()

    const { data: appointments } = await supabase
        .from('appointments')
        .select('*')
        .order('date', { ascending: true })

    return (
        <div>
            <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                All Appointments
            </h2>

            <div
                className="flex flex-col"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
                {appointments?.map((apt) => (
                    <div
                        key={apt.id}
                        className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 items-center"
                        style={{ backgroundColor: '#FAF8F3' }}
                    >
                        <div className="sm:col-span-2">
                            <p className="font-serif font-light text-xl" style={{ color: '#0B0B0B' }}>
                                {apt.service}
                            </p>
                            <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.4)' }}>
                                {apt.date} · {apt.time}
                            </p>
                            {apt.notes && (
                                <p className="text-body mt-1" style={{ color: 'rgba(17,17,17,0.3)' }}>
                                    {apt.notes}
                                </p>
                            )}
                        </div>
                        <div>
                            <span
                                className="text-label"
                                style={{
                                    color: apt.status === 'confirmed' ? '#2F855A'
                                        : apt.status === 'cancelled' ? '#E53E3E'
                                            : '#C6A85A',
                                    padding: '4px 12px',
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
                        <AdminAppointmentActions id={apt.id} status={apt.status} />
                    </div>
                ))}
                {(!appointments || appointments.length === 0) && (
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                        <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            No appointments yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}