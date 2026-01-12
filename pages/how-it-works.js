import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Link as LinkIcon, Instagram, Inbox, Share2, Zap } from 'lucide-react'


export default function HowItWorks() {
    const steps = [
        {
            icon: <LinkIcon size={32} />,
            title: "1. Create your Link",
            desc: "Enter your Instagram handle on the home page. We'll generate a unique, secure link just for you."
        },
        {
            icon: <Instagram size={32} />,
            title: "2. Post on your Story",
            desc: "Go to Instagram, create a story, and use the 'Link' sticker. Paste your Desi-Ngl URL and invite your friends to spill the tea."
        },
        {
            icon: <Inbox size={32} />,
            title: "3. Receive Secrets",
            desc: "Your friends tap the link and send you anonymous messages. You'll see them instantly in your private inbox."
        },
        {
            icon: <Zap size={32} />,
            title: "4. Reveal & Share",
            desc: "Screenshot your favorite messages, share them to your story, and use Pro features to see hints about who sent them!"
        }
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>How It Works | Desi-Ngl</title>
            </Head>

            <div className="aurora-bg" style={{ top: '10%', right: '10%', width: '600px', height: '600px', background: 'rgba(204, 255, 0, 0.1)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '40px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 800, margin: '0 0 20px 0' }}>How it <span className="text-gradient-primary">Works</span></h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
                            Four simple steps to start your journey into anonymous conversations.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                padding: '40px',
                                borderRadius: '32px',
                                position: 'relative',
                                transition: 'transform 0.3s'
                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: 'var(--surface-color)',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-purple)',
                                    marginBottom: '25px',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    {s.icon}
                                </div>
                                <h3 style={{ fontSize: '28px', marginBottom: '15px', fontWeight: 700 }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '16px' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="feature-card" style={{ marginTop: '100px', textAlign: 'center', background: 'var(--surface-color)', padding: '60px', borderRadius: '48px', border: '1px solid var(--glass-border)' }}>
                        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Ready to start your first <span className="text-gradient-primary">Secret</span>?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '18px' }}>Join over 100,000+ users sharing honest feedback every day.</p>
                        <Link href="/" style={{ padding: '20px 50px', background: 'var(--accent-purple)', color: '#fff', borderRadius: '100px', fontWeight: 800, fontSize: '20px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 20px 40px rgba(138, 43, 226, 0.3)' }}>
                            Get My Link Now <Zap size={20} fill="currentColor" style={{ marginLeft: '10px' }} />
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    )
}
