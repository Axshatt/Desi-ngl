import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Info, Users, Heart, Globe } from 'lucide-react'


export default function About() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>About Us | Desi-Ngl</title>
            </Head>

            <div className="aurora-bg" style={{ top: '10%', right: '-10%', width: '600px', height: '600px', background: 'rgba(138, 43, 226, 0.15)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '60px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '20px', borderRadius: '50%', display: 'inline-flex', marginBottom: '20px' }}>
                        <Info size={40} className="text-gradient-primary" />
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 800, marginBottom: '24px' }}>
                        The Story of <span className="text-gradient-primary">DesiNGL</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, marginBottom: '60px' }}>
                        We started with a simple idea: let people express themselves without the pressure of identity. Today, we're building the future of safe, anonymous social interaction for Gen Z.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'left' }}>
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <Users size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h3 style={{ margin: '0 0 10px 0' }}>The Community</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Thousands of users sharing secrets, roasts, and advice every single day.</p>
                        </div>
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <Heart size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h3 style={{ margin: '0 0 10px 0' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>To create a fun, safe, and transparent way for friends to connect deeper.</p>
                        </div>
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                            <Globe size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h3 style={{ margin: '0 0 10px 0' }}>Open Source</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>Built by the community, for the community. We believe in transparency and security.</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
