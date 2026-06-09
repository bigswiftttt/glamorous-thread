import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) redirect('/login')

    const { data: profile } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single()

    return (
        <div style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>

            {/* Dashboard header */}
            <div
                style={{
                    backgroundColor: '#0B0B0B',
                    paddingTop: '6rem',
                    paddingBottom: '2rem',
                    paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
                    paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
                }}
            >
                <div className="section-inner">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <p className="text-label" style={{ color: '#C6A85A' }}>
                                Welcome back
                            </p>
                            <h1
                                className="font-serif font-light mt-1"
                                style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FAF8F3' }}
                            >
                                {profile?.full_name || user.email}
                            </h1>
                        </div>

                        <form action="/api/auth/signout" method="POST">
                            <button
                                className="text-label"
                                style={{ color: 'rgba(250,248,243,0.4)', cursor: 'pointer', background: 'none', border: 'none' }}
                            >
                                Sign Out
                            </button>
                        </form>
                    </div>

                    {/* Dashboard nav */}
                    <div
                        className="flex items-center gap-0 overflow-x-auto mt-8"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {[
                            { label: 'Overview', href: '/dashboard' },
                            { label: 'Appointments', href: '/dashboard/appointments' },
                            { label: 'Orders', href: '/dashboard/orders' },
                            { label: 'Measurements', href: '/dashboard/measurements' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-label shrink-0"
                                style={{
                                    padding: '0.75rem 1.25rem',
                                    color: 'rgba(250,248,243,0.5)',
                                    borderBottom: '1px solid transparent',
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Page content */}
            <div
                style={{
                    paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
                    paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
                    paddingTop: '3rem',
                    paddingBottom: '5rem',
                }}
            >
                <div className="section-inner">
                    {children}
                </div>
            </div>

        </div>
    )
}