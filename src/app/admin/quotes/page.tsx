import { createClient } from '@/lib/supabase/server'
import AdminQuoteActions from './actions'
export default async function AdminQuotesPage() {
    const supabase = await createClient()

    const { data: quotes } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false })

    return (
        <div>
            <h2 className="text-heading mb-10" style={{ color: '#0B0B0B' }}>
                Quote Requests
            </h2>

            <div
                className="flex flex-col"
                style={{ gap: '1px', backgroundColor: 'rgba(198,168,90,0.15)' }}
            >
                {quotes?.map((quote) => (
                    <div key={quote.id} className="p-6" style={{ backgroundColor: '#FAF8F3' }}>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                            <div style={{ flex: 1 }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <p className="font-serif font-light text-xl" style={{ color: '#0B0B0B' }}>
                                        {quote.name}
                                    </p>
                                    <span
                                        className="text-label"
                                        style={{
                                            color: quote.status === 'new' ? '#C6A85A' : 'rgba(17,17,17,0.4)',
                                            padding: '2px 8px',
                                            border: `1px solid ${quote.status === 'new'
                                                ? 'rgba(198,168,90,0.3)'
                                                : 'rgba(17,17,17,0.1)'}`,
                                            fontSize: '0.6rem',
                                        }}
                                    >
                                        {quote.status}
                                    </span>
                                </div>
                                <p className="text-body" style={{ color: 'rgba(17,17,17,0.5)' }}>
                                    {quote.email}
                                </p>
                                <p className="text-body mt-3" style={{ color: '#0B0B0B', maxWidth: '600px' }}>
                                    {quote.description}
                                </p>
                                <div className="flex gap-6 mt-3">
                                    {quote.budget && (
                                        <div>
                                            <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>Budget</p>
                                            <p className="text-body" style={{ color: '#0B0B0B' }}>{quote.budget}</p>
                                        </div>
                                    )}
                                    {quote.deadline && (
                                        <div>
                                            <p className="text-label" style={{ color: 'rgba(17,17,17,0.3)' }}>Deadline</p>
                                            <p className="text-body" style={{ color: '#0B0B0B' }}>{quote.deadline}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <AdminQuoteActions id={quote.id} currentStatus={quote.status} />
                        </div>
                    </div>
                ))}
                {(!quotes || quotes.length === 0) && (
                    <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#FAF8F3' }}>
                        <p className="text-body" style={{ color: 'rgba(17,17,17,0.4)' }}>
                            No quote requests yet
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}