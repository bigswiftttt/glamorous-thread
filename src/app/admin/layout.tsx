import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') redirect('/dashboard')

  const navItems = [
    { label: 'Overview', href: '/admin' },
    { label: 'Appointments', href: '/admin/appointments' },
    { label: 'Orders', href: '/admin/orders' },
    { label: 'Customers', href: '/admin/customers' },
    { label: 'Quotes', href: '/admin/quotes' },
    { label: 'Gallery', href: '/admin/gallery' },
  ]

  return (
    <div style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>

      {/* Admin header */}
      <div style={{ backgroundColor: '#0B0B0B' }}>
        <div
          style={{
            paddingTop: '6rem',
            paddingBottom: '0',
            paddingLeft: 'clamp(1.5rem, 5vw, 5rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 5rem)',
          }}
        >
          <div className="section-inner">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-label" style={{ color: '#C6A85A' }}>
                  Admin Panel
                </p>
                <h1
                  className="font-serif font-light mt-1"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: '#FAF8F3' }}
                >
                  Glamorous Thread
                </h1>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-label"
                  style={{ color: 'rgba(250,248,243,0.4)' }}
                >
                  View Site
                </Link>
                <form action="/api/auth/signout" method="POST">
                  <button
                    className="text-label"
                    style={{
                      color: 'rgba(250,248,243,0.4)',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                    }}
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            </div>

            {/* Nav */}
            <div
              className="flex items-center gap-0 overflow-x-auto"
              style={{ scrollbarWidth: 'none' }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-label shrink-0"
                  style={{
                    padding: '0.875rem 1.25rem',
                    color: 'rgba(250,248,243,0.5)',
                    borderBottom: '1px solid transparent',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
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