import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, ChevronDown, HelpCircle, MessageCircle, Shield, Zap } from 'lucide-react'


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            q: "Is it really 100% anonymous?",
            a: "Yes! We do not store IP addresses or any identifiable data of the sender. The receiver will never know who you are unless you explicitly choose to reveal your identity via a Premium Hint."
        },
        {
            q: "How do I share my link on Instagram?",
            a: "Go to your dashboard, copy your unique Link, and then open Instagram Story. Use the 'Link' sticker and paste your Desi-Ngl URL there. Easy!"
        },
        {
            q: "What are 'Premium Hints'?",
            a: "Pro members can see subtle hints like the sender's city/state, their device type (e.g., iPhone), and the time of day they sent the message. It's the ultimate 'vibe check'!"
        },
        {
            q: "Can I block someone?",
            a: "Currently, you can delete any message you receive. We are working on a blocking feature to ensure a safe environment for everyone."
        },
        {
            q: "Is there a limit to messages?",
            a: "No! Send as many messages as you want. There's no cap on confessions, roasts, or advice."
        },
        {
            q: "How do I get my link if I log out?",
            a: "Just type your username again on the home page. As long as you remember your handle, you can always reclaim your inbox."
        }
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>FAQ | Desi-Ngl</title>
            </Head>

            <div className="aurora-bg" style={{ bottom: '-10%', left: '10%', width: '500px', height: '500px', background: 'rgba(138, 43, 226, 0.15)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '40px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '20px', borderRadius: '50%', display: 'inline-flex', marginBottom: '20px' }}>
                            <HelpCircle size={40} className="text-gradient-primary" />
                        </div>
                        <h1 style={{ fontSize: '48px', fontWeight: 800, margin: '0 0 15px 0' }}>Frequently Asked <span className="text-gradient-primary">Questions</span></h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Everything you need to know about the most viral anonymous app.</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faqs.map((f, i) => (
                            <div key={i} style={{
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                transition: 'all 0.3s'
                            }}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    style={{
                                        width: '100%',
                                        padding: '24px 30px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        textAlign: 'left',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {f.q}
                                    <ChevronDown size={24} style={{ transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)' }} />
                                </button>
                                {openIndex === i && (
                                    <div style={{ padding: '0 30px 30px 30px', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '16px' }}>
                                        <div style={{ height: '1px', background: 'var(--glass-border)', marginBottom: '20px' }}></div>
                                        {f.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                        <div style={{ textAlign: 'center', padding: '30px', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                            <Zap size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h4 style={{ margin: 0 }}>Pro Plan</h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Learn about upgrades</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '30px', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                            <Shield size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h4 style={{ margin: 0 }}>Safety</h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>How we protect you</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '30px', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                            <MessageCircle size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                            <h4 style={{ margin: 0 }}>Support</h4>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Talk to us</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
