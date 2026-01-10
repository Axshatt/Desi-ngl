import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react'


export default function Contact() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>Contact Us | Desi-Ngl</title>
            </Head>

            {/* Background Aurora */}
            <div className="aurora-bg" style={{ top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'rgba(138, 43, 226, 0.15)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '60px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '20px' }}>
                        Get in <span className="text-gradient-primary">Touch</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px' }}>
                        Have questions, feedback, or just want to say hi? We're here for you.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Contact Info */}
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '40px', borderRadius: '32px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '15px', borderRadius: '16px' }}>
                                        <Mail size={24} className="text-gradient-primary" />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-secondary)' }}>Email Us</h3>
                                        <p style={{ margin: '5px 0 0 0', fontWeight: 600 }}>hello@desi-ngl.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ background: 'rgba(204, 255, 0, 0.1)', padding: '15px', borderRadius: '16px' }}>
                                        <MapPin size={24} className="text-gradient-primary" />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-secondary)' }}>Location</h3>
                                        <p style={{ margin: '5px 0 0 0', fontWeight: 600 }}>Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <div style={{ background: 'rgba(138, 43, 226, 0.1)', padding: '15px', borderRadius: '16px' }}>
                                        <Phone size={24} className="text-gradient-primary" />
                                    </div>
                                    <div>
                                        <h3 style={{ margin: 0, fontSize: '16px', color: 'var(--text-secondary)' }}>Follow Us</h3>
                                        <p style={{ margin: '5px 0 0 0', fontWeight: 600 }}>@desi_ngl_official</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Contact Form Shell */}
                        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '40px', borderRadius: '32px' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Name</label>
                                    <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '14px', borderRadius: '12px', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Message</label>
                                    <textarea placeholder="How can we help?" style={{ width: '100%', height: '120px', padding: '14px', borderRadius: '12px', background: 'var(--bg-color)', border: '1px solid var(--glass-border)', color: '#fff', outline: 'none', resize: 'none' }} />
                                </div>
                                <button style={{ width: '100%', padding: '16px', borderRadius: '16px', background: 'var(--accent-purple)', color: '#fff', border: 'none', fontWeight: 700, cursor: 'pointer' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}
