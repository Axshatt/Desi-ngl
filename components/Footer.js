import Link from 'next/link'
import { Zap, Github, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer style={{ background: 'var(--surface-color)', borderTop: '1px solid var(--glass-border)', padding: '80px 20px 40px', position: 'relative', width: '100%' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>

                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Zap size={24} className="text-gradient-primary" />
                            Desi<span className="text-gradient-primary">NGL</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, maxWidth: '280px' }}>
                            The world's most viral anonymous messaging platform. Tell truths, get roasts, and spill secrets safely.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://github.com/Axshatt/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/axshattt/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="https://instagram.com/desi_ngl_official" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>Product</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/how-it-works" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>How it works</Link></li>
                            <li><Link href="/faq" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>FAQ</Link></li>
                            <li><Link href="/premium" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Go Pro ✨</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Contact Us</Link></li>
                            <li><Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>About Us</Link></li>
                            <li><a href="mailto:hello@desi-ngl.com" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '20px', color: '#fff' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/terms" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Terms of Service</Link></li>
                            <li><Link href="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="mobile-stack" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid var(--glass-border)', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                        &copy; 2026 Desi-Ngl. Built for Gen Z.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <a href="https://www.producthunt.com/products/desi-ngl?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-desi-ngl" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1060745&theme=dark"
                                alt="Desi-Ngl | Product Hunt"
                                style={{ width: '150px', height: '32px' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
