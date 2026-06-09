import { createClient } from '@/lib/supabase/server'

export default async function AdminPage() {
    const supabase = await createClient()

    const [
        { count: totalCustomers },
        { count: totalAppointments },
        { count: pendingAppointments },
        { count: totalOrders },
        { count: newQuotes },
    ] = await Promise.all([
        supabase.from('users').select('*', { count: 'exact', head: true }).eq('role', 'customer'),
        supabase.from('appointments').select('*', { count: 'exact', head: true }),
        supabase.from('appointments').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('orders').select('*', { count: 'exact', head: true }),
        supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'new'),
    ])

    const stats = [
        { label: 'Total Customers', value: totalCustomers ?? 0, href: '/admin/customers' },
        { label: 'Total Appointments', value: totalAppointments ?? 0, href: '/admin/appointments' },
        { label: 'Pending Appointments', value: pendingAppointments ?? 0, href: '/admin/appointments' },
        { label: 'Total Orders', value: totalOrders ?? 0, href: '/admin/orders' },
        { label: 'New Quote Requests', value: newQuotes ?? 0, href: '/admin/quotes' },
    ]

    const { data: recentAppointments } = await supabase
        .from('appointments')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

    const { data: recentQuotes } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

    return (
    <div>
      <div
        className="grid grid-cols-2 lg:grid-cols-5 mb-12"
        style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
      >
        {stats.map((stat) => (
          <a
            key={stat.label}
            href={stat.href}
            style={{ backgroundColor: '#FAF8F3', padding: '1.5rem', display: 'block' }}
          >
            <p className="text-label" style={{ color: 'rgba(17,17,17,0.4)', fontSize: '0.6rem' }}>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-subheading" style={{ color: '#0B0B0B' }}>
              Recent Appointments
            </h2>
            <a href="/admin/appointments" className="text-label" style={{ color: '#C6A85A' }}>
              View all
            </a>
          </div>
          <div
            className="flex flex-col"
            style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
          >
            {recentAppointments?.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between p-4"
                style={{ backgroundColor: '#FAF8F3' }}
              >
                <div>
                  <p className="text-body font-medium" style={{ color: '#0B0B0B' }}>
                    {apt.service}
                  </p>
                  <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                    {apt.date} · {apt.time}
                  </p>
                </div>
                <span
                  className="text-label"
                  style={{
                    color: apt.status === 'confirmed' ? '#2F855A'
                      : apt.status === 'cancelled' ? '#E53E3E'
                      : '#C6A85A',
                    padding: '3px 10px',
                    border: `1px solid ${apt.status === 'confirmed'
                      ? 'rgba(47,133,90,0.3)'
                      : apt.status === 'cancelled'
                      ? 'rgba(229,62,62,0.3)'
                      : 'rgba(198,168,90,0.3)'}`,
                    fontSize: '0.6rem',
                  }}
                >
                  {apt.status}
                </span>
              </div>
            ))}
            {(!recentAppointments || recentAppointments.length === 0) && (
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                  No appointments yet
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-subheading" style={{ color: '#0B0B0B' }}>
              Quote Requests
            </h2>
            <a href="/admin/quotes" className="text-label" style={{ color: '#C6A85A' }}>
              View all
            </a>
          </div>
          <div
            className="flex flex-col"
            style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
          >
            {recentQuotes?.map((quote) => (
              <div
                key={quote.id}
                className="flex items-center justify-between p-4"
                style={{ backgroundColor: '#FAF8F3' }}
              >
                <div>
                  <p className="text-body font-medium" style={{ color: '#0B0B0B' }}>
                    {quote.name}
                  </p>
                  <p
                    className="text-body"
                    style={{ color: 'rgba(17,17,17,0.4)', maxWidth: '200px' }}
                  >
                    {quote.description?.slice(0, 50)}...
                  </p>
                </div>
                <span
                  className="text-label"
                  style={{
                    color: quote.status === 'new' ? '#C6A85A' : 'rgba(17,17,17,0.4)',
                    padding: '3px 10px',
                    border: `1px solid ${quote.status === 'new'
                      ? 'rgba(198,168,90,0.3)'
                      : 'rgba(17,17,17,0.1)'}`,
                    fontSize: '0.6rem',
                  }}
                >
                  {quote.status}
                </span>
              </div>
            ))}
            {(!recentQuotes || recentQuotes.length === 0) && (
              <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                  No quotes yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}