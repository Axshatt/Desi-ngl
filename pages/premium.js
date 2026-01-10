import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, Zap, Check, Shield, Eye, Flame } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Premium() {
    const [loading, setLoading] = useState(false)

    const handleUpgrade = async () => {
        const username = localStorage.getItem('username')
        if (!username) {
            toast.error('Please create your link first')
            window.location.href = '/'
            return
        }

        setLoading(true)
        try {
            const res = await axios.post('/api/stripe/create-checkout-session', { username })
            const stripe = await stripePromise
            await stripe.redirectToCheckout({ sessionId: res.data.sessionId })
        } catch (error) {
            toast.error('Payment failed: ' + error.message)
            setLoading(false)
        }
    }
    const plans = [
        {
            name: 'Free',
            price: '$0',
            features: [
                'Unlimited Messages',
                'Basic Social Sharing',
                'Emoji Reactions',
                'Standard Inbox'
            ],
            button: 'Current Plan',
            accent: 'var(--text-secondary)',
            popular: false
        },
        {
            name: 'Pro',
            price: '₹99',
            features: [
                'Sender Location Hints',
                'Device Type Detection',
                'Time-of-day Vibes',
                'Exclusive Pro Badge',
                'Priority Support'
            ],
            button: 'Upgrade Now',
            accent: 'var(--accent-purple)',
            popular: true
        }
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>Go Pro | Desi-Ngl</title>
            </Head>

            <div className="aurora-bg" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'rgba(138, 43, 226, 0.15)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav className="nav-container" style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '40px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <div style={{ display: 'inline-block', padding: '10px 20px', background: 'rgba(138, 43, 226, 0.1)', borderRadius: '100px', border: '1px solid var(--accent-purple)', marginBottom: '20px' }}>
                        <span className="text-gradient-primary" style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Premium Experience</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 800, marginBottom: '24px' }}>
                        Elevate your <span className="shimmer-text">Gossip</span> Game
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
                        Unlock the power to see who's behind the secrets with our Pro features.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
                    {plans.map((p, i) => (
                        <div key={i} className="feature-card" style={{
                            background: 'var(--glass-bg)',
                            border: `1px solid ${p.popular ? 'var(--accent-purple)' : 'var(--glass-border)'}`,
                            padding: '50px 40px',
                            borderRadius: '40px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: p.popular ? '0 20px 50px rgba(138, 43, 226, 0.2)' : 'none'
                        }}>
                            {p.popular && (
                                <div style={{ position: 'absolute', top: '20px', right: '40px', background: 'var(--accent-purple)', color: '#fff', fontSize: '12px', fontWeight: 800, padding: '4px 12px', borderRadius: '100px' }}>
                                    MOST POPULAR
                                </div>
                            )}
                            <h2 style={{ fontSize: '28px', margin: '0 0 10px 0' }}>{p.name}</h2>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', marginBottom: '30px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 800 }}>{p.price}</span>
                                <span style={{ color: 'var(--text-secondary)' }}>/month</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {p.features.map((f, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)' }}>
                                        <div style={{ background: p.popular ? 'rgba(138, 43, 226, 0.1)' : 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '50%' }}>
                                            <Check size={16} color={p.popular ? 'var(--accent-purple)' : '#fff'} />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={p.name === 'Pro' ? handleUpgrade : undefined}
                                disabled={p.name === 'Free' || loading}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    borderRadius: '16px',
                                    background: p.popular ? 'var(--accent-purple)' : 'transparent',
                                    border: p.popular ? 'none' : '1px solid var(--glass-border)',
                                    color: '#fff',
                                    fontWeight: 800,
                                    fontSize: '18px',
                                    cursor: p.name === 'Free' || loading ? 'default' : 'pointer',
                                    opacity: loading ? 0.7 : 1,
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={e => !p.popular && p.name !== 'Free' && !loading && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                                onMouseLeave={e => !p.popular && !loading && (e.currentTarget.style.background = 'transparent')}
                            >
                                {loading && p.name === 'Pro' ? 'Processing...' : p.button}
                            </button>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
                    <div style={{ textAlign: 'center', padding: '30px' }}>
                        <Shield size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                        <h4>Secure Payments</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Bank-grade encryption for all transactions.</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '30px' }}>
                        <Eye size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                        <h4>No Log Policy</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>We don't track who you are, even on Pro.</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '30px' }}>
                        <Flame size={32} className="text-gradient-primary" style={{ marginBottom: '15px' }} />
                        <h4>Instant Activation</h4>
                        <h5 style={{ margin: 0 }}>Vibe check your inbox immediately.</h5>
                    </div>
                </div>
            </main>

        </div>
    )
}
