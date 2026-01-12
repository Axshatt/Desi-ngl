import Head from 'next/head'
import Link from 'next/link'
import { ChevronLeft, FileText, Scale, Lock, EyeOff } from 'lucide-react'


export default function Terms() {
    const sections = [
        {
            icon: <Scale size={24} className="text-gradient-primary" />,
            title: "1. Acceptance of Terms",
            content: "By accessing or using Desi-Ngl, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service."
        },
        {
            icon: <EyeOff size={24} className="text-gradient-primary" />,
            title: "2. Anonymous Messaging",
            content: "Desi-Ngl is designed for anonymous interaction. However, you agree not to use the service for harassment, hate speech, bullying, or any illegal activities. We reserve the right to suspend users who violate these rules."
        },
        {
            icon: <Lock size={24} className="text-gradient-primary" />,
            title: "3. Privacy & Data",
            content: "We value your privacy. Your identity remains anonymous to the receiver. We do not sell your personal data. However, metadata may be used for service improvement."
        },
        {
            icon: <FileText size={24} className="text-gradient-primary" />,
            title: "4. Intellectual Property",
            content: "All content, designs, and code on Desi-Ngl are the property of the developers. You may not copy or redistribute any part of the service without permission."
        }
    ]

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
            <Head>
                <title>Terms & Conditions | Desi-Ngl</title>
            </Head>

            {/* Background Aurora */}
            <div className="aurora-bg" style={{ top: '20%', left: '-10%', width: '500px', height: '500px', background: 'rgba(204, 255, 0, 0.1)' }}></div>
            <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

            <nav style={{ padding: '20px 40px', zIndex: 10 }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    <ChevronLeft size={20} /> Back to Home
                </Link>
            </nav>

            <main className="container" style={{ flex: 1, padding: '60px 20px', zIndex: 1 }}>
                <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '20px' }}>
                        Terms & <span className="text-gradient-primary">Conditions</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '60px' }}>
                        Last updated: January 2026. Please read these terms carefully before using our service.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {sections.map((s, i) => (
                            <div key={i} style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '30px', borderRadius: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '12px' }}>
                                        {s.icon}
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '24px' }}>{s.title}</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0, fontSize: '16px' }}>
                                    {s.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '60px', padding: '40px', background: 'rgba(138, 43, 226, 0.05)', borderRadius: '32px', border: '1px dashed var(--accent-purple)', textAlign: 'center' }}>
                        <h3 style={{ margin: '0 0 10px 0' }}>Need clarification?</h3>
                        <p style={{ margin: '0 0 20px 0', color: 'var(--text-secondary)' }}>If you have any questions regarding these terms, feel free to reach out.</p>
                        <Link href="/contact" style={{ display: 'inline-block', padding: '12px 30px', background: 'var(--accent-purple)', color: '#fff', borderRadius: '12px', fontWeight: 700 }}>
                            Contact Legal Team
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    )
}
