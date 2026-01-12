import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Shield, Lock, Eye, Database } from 'lucide-react'


export default function Privacy() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>Privacy Policy | Desi-Ngl</title>
            </Head>

            <div className="aurora-bg" style={{ bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(204, 255, 0, 0.1)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '60px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '20px' }}>
                        Privacy <span className="text-gradient-primary">Policy</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '60px' }}>
                        Your privacy is our top priority. Here's how we handle your data.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <Eye size={24} className="text-gradient-primary" />
                                <h3 style={{ margin: 0, fontSize: '20px' }}>What we collect</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                We collect your username and the messages sent to you. We do NOT store IP addresses or location data for anonymous senders by default.
                            </p>
                        </div>

                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <Lock size={24} className="text-gradient-primary" />
                                <h3 style={{ margin: 0, fontSize: '20px' }}>Data Security</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Your messages are encrypted at rest and in transit. Only you can access your inbox using your unique token stored in your browser.
                            </p>
                        </div>

                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                <Database size={24} className="text-gradient-primary" />
                                <h3 style={{ margin: 0, fontSize: '20px' }}>Optional Hints</h3>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                Senders can optionally choose to share hints (like device type or location). This data is processed in real-time and is subject to the sender's explicit choice to reveal hints.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
