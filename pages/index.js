import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Zap, Link as LinkIcon, MessageCircle, Shield, Ghost, Sparkles, ChevronDown, Github, Linkedin, Instagram, TrendingUp } from 'lucide-react'
import Footer from '../components/Footer'

export default function Home() {
  const router = useRouter()
  const [faqOpen, setFaqOpen] = useState(null)

  const features = [
    { icon: <Shield size={32} className="text-gradient-primary" />, title: 'Privacy First', desc: 'Encrypted from end-to-end. Your data stays yours, and your secrets stay secret.' },
    { icon: <Zap size={32} className="text-gradient-primary" />, title: 'Real-time Vibe', desc: 'Instant notifications and real-time inbox updates. Never miss a single "tea" spill.' },
    { icon: <Ghost size={32} className="text-gradient-primary" />, title: 'Pure Anonymity', desc: 'No email required to send messages. Just click the link and start gossiping.' },
    { icon: <Sparkles size={32} className="text-gradient-primary" />, title: 'AI Mood Tags', desc: 'Smart detection categories like "Serious", "Advice", or "Roast" for your messages.' },
    { icon: <MessageCircle size={32} className="text-gradient-primary" />, title: 'Anonymous Chat', desc: 'A secure two-way portal to chat with senders without ever knowing who they are.' },
    { icon: <TrendingUp size={32} className="text-gradient-primary" />, title: 'Viral ready', desc: 'Built-in story engine to generate aesthetic Instagram story cards in one click.' },
  ]

  const faqs = [
    { q: 'Is it really anonymous?', a: 'Yes! We only store what is necessary. Your IP and identity are never shared unless you explicitly choose to "Reveal Identity".' },
    { q: 'How do I reveal my identity?', a: 'After a receiver replies to your secret, you\'ll see a prompt on your status page to stay anonymous or reveal yourself.' },
    { q: 'How do I share on Instagram?', a: 'Copy your link, use the "Link" sticker on Instagram, and wait for the secrets to roll in!' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden', position: 'relative' }}>

      {/* Background Aurora Slurps */}
      <div className="aurora-bg" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'rgba(138, 43, 226, 0.2)' }}></div>
      <div className="aurora-bg" style={{ top: '50%', right: '10%', width: '500px', height: '500px', background: 'rgba(204, 255, 0, 0.15)', animationDelay: '-5s' }}></div>

      {/* Background Grid */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

      <nav className="nav-container" style={{ width: '100%', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Zap size={24} className="text-gradient-primary" />
          Desi<span className="text-gradient-primary">NGL</span>
        </div>

        <div className="nav-links-desktop" style={{ display: 'flex', gap: '30px', alignItems: 'center', marginLeft: 'auto', marginRight: '30px' }}>
          <Link href="/how-it-works" style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>How it works</Link>
          <Link href="/faq" style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>FAQ</Link>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <a
            href="https://github.com/Axshatt/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)' }}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/axshattt/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)' }}
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '40px', padding: '60px 20px', zIndex: 1 }}>

        <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            borderRadius: '100px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            fontSize: '14px',
            marginBottom: '20px',
            fontWeight: 600
          }}>
            ✨ The #1 Anonymous Messaging App
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: 1.1, margin: '0 0 24px 0', fontWeight: 800 }}>
            Unleash the <br /> <span className="shimmer-text">Untold Stories</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', margin: '0 auto 40px', maxWidth: '600px', lineHeight: 1.6 }}>
            Get honest feedback, confessions, and burning questions from your friends and followers. Simple, secure, and aesthetic.
          </p>
        </div>

        <div className="animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
          <button
            onClick={() => router.push('/claim')}
            style={{
              padding: '18px 48px',
              background: 'var(--accent-purple)',
              color: '#fff',
              border: 'none',
              borderRadius: '16px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              boxShadow: '0 10px 20px rgba(138, 43, 226, 0.3)',
              minWidth: '280px'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          >
            Claim Your Link <Zap size={20} fill="currentColor" />
          </button>
        </div>

      </main>

      {/* Product Hunt Achievement Section */}
      <section style={{ padding: '80px 20px 40px', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(135deg, #CCFF00 0%, #8A2BE2 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🏆 Featured on Product Hunt
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
              Join thousands of users who trust DesiNGL for their anonymous conversations
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(138, 43, 226, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <a
                href="https://www.producthunt.com/products/desi-ngl?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-desi-ngl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', textDecoration: 'none' }}
              >
                <img
                  alt="Desi-Ngl - Tell Truths. Reveal Vibes. & Open Source | Product Hunt"
                  width="250"
                  height="54"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1060745&theme=dark&t=1768220830773"
                  style={{ borderRadius: '8px' }}
                />
              </a>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-lime)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(204, 255, 0, 0.2)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <a
                href="https://www.producthunt.com/products/desi-ngl/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-desi-ngl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', textDecoration: 'none' }}
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1147247&theme=dark"
                  alt="Desi-Ngl - Tell Truths. Reveal Vibes. & Open Source | Product Hunt"
                  style={{ borderRadius: '8px', width: '250px', height: '54px' }}
                  width="250"
                  height="54"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '120px 20px', position: 'relative' }}>
        {/* Decorative Background Blob */}
        <div className="aurora-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'rgba(138, 43, 226, 0.05)', filter: 'blur(120px)' }}></div>

        <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '20px' }}>
              Why Choose <span className="text-gradient-primary">DesiNGL</span>?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              The most advanced, aesthetic, and secure anonymous messaging platform built for the digital age.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {features.map((f, i) => (
              <div key={i} className="animate-fade-in feature-card" style={{
                padding: '40px',
                borderRadius: '32px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animationDelay: `${0.1 * (i + 1)}s`,
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--glass-border)'
                }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#fff' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '15px' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 20px' }}>
        <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '40px', fontWeight: 800 }}>FAQs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{
                background: 'var(--surface-color)',
                borderRadius: '16px',
                border: '1px solid var(--glass-border)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '18px',
                    fontWeight: 600,
                    textAlign: 'left'
                  }}
                >
                  {f.q}
                  <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: faqOpen === i ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {faqOpen === i && (
                  <div style={{ padding: '0 20px 20px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div >
  )
}

