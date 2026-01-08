import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Zap, Send, Link as LinkIcon, MessageCircle, Shield, Ghost, Sparkles, ChevronDown } from 'lucide-react'

export default function Home() {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [faqOpen, setFaqOpen] = useState(null)

  async function usernameSend() {
    const name = username.trim()
    if (!name) return toast.error('Please enter a username.')
    setLoading(true)
    try {
      const res = await axios.post('/api/username', { username: name })
      if (res?.data?.token) {
        localStorage.setItem('username', name)
        localStorage.setItem('token', res.data.token)
        router.push(`/link/${encodeURIComponent(name)}`)
        toast.success('Link created successfully!')
      }
    } catch (e) {
      toast.error('Error: ' + (e?.response?.data?.error || e.message))
    } finally {
      setLoading(false)
    }
  }

  const features = [
    { icon: <Ghost size={32} className="text-gradient-primary" />, title: '100% Anonymous', desc: 'No trackers, no leaks. Your identity is completely hidden.' },
    { icon: <Shield size={32} className="text-gradient-primary" />, title: 'Safe Space', desc: 'Built-in filters to prevent bullying and harassment.' },
    { icon: <Sparkles size={32} className="text-gradient-primary" />, title: 'Gen Z Aesthetics', desc: 'Clean, dark mode design that looks great on your Story.' },
  ]

  const faqs = [
    { q: 'Is it really anonymous?', a: 'Yes! We do not store IP addresses or any identifiable data of the sender.' },
    { q: 'How do I share on Instagram?', a: 'Copy your unique link and use the "Link" sticker in your Instagram Story.' },
    { q: 'Can I reply to messages?', a: 'Currently, you can screenshot the message and reply on your Story, typical NGL style.' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Background Grid */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

      <nav className="container" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Zap size={24} className="text-gradient-primary" />
          Desi<span className="text-gradient-primary">NGL</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '40px', padding: '60px 20px' }}>

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
          <h1 style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: 1.1, margin: '0 0 24px 0', fontWeight: 800 }}>
            Unleash the <br /> <span className="text-gradient-primary">Untold Stories</span>
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', margin: '0 auto 40px', maxWidth: '600px', lineHeight: 1.6 }}>
            Get honest feedback, confessions, and burning questions from your friends and followers. Simple, secure, and aesthetic.
          </p>
        </div>

        <div className="animate-fade-in" style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          padding: '40px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 40px var(--shadow-color)',
          animationDelay: '0.2s',
          position: 'relative'
        }}>
          {/* Floating Sticker */}
          <div className="animate-float" style={{ position: 'absolute', top: '-30px', right: '-20px', background: '#FF4500', padding: '10px 20px', borderRadius: '12px', transform: 'rotate(10deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', fontWeight: 'bold' }}>
            🔥 It's Viral
          </div>

          <h2 style={{ margin: '0 0 24px 0', fontSize: '24px' }}>Claim your unique link</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>@</span>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="instagram_handle"
                style={{
                  width: '100%',
                  padding: '18px 18px 18px 40px',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--surface-color)',
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  outline: 'none',
                  fontFamily: 'var(--font-main)',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <button
              onClick={usernameSend}
              disabled={loading}
              style={{
                padding: '18px',
                width: '100%',
                background: 'var(--accent-purple)',
                color: '#fff',
                border: 'none',
                borderRadius: '16px',
                fontSize: '18px',
                fontWeight: 700,
                opacity: loading ? 0.7 : 1,
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 10px 20px rgba(138, 43, 226, 0.3)'
              }}
              onMouseEnter={e => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => !loading && (e.currentTarget.style.transform = 'translateY(0)')}
              onMouseDown={e => !loading && (e.currentTarget.style.transform = 'scale(0.98)')}
            >
              {loading ? 'Creating...' : <>Get My Link <Zap size={20} fill="currentColor" /></>}
            </button>
          </div>
        </div>

      </main>

      {/* Features Section */}
      <section style={{ padding: '80px 20px', background: 'var(--surface-color)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ fontSize: '36px', textAlign: 'center', marginBottom: '60px', fontWeight: 800 }}>Why <span className="text-gradient-primary">DesiNGL</span>?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {features.map((f, i) => (
              <div key={i} style={{
                padding: '30px',
                borderRadius: '24px',
                background: 'var(--bg-color)',
                border: '1px solid var(--glass-border)',
                transition: 'transform 0.3s'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ marginBottom: '20px', display: 'inline-flex', padding: '15px', borderRadius: '50%', background: 'rgba(138, 43, 226, 0.1)' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
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

      <footer style={{ padding: '60px 0 30px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px', borderTop: '1px solid var(--glass-border)' }}>
        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-1px', marginBottom: '10px' }}>
          Desi<span className="text-gradient-primary">NGL</span>
        </div>
        <p>Built for <span style={{ color: 'var(--text-primary)' }}>Gen Z</span> • Secure • Anonymous</p>
      </footer>
    </div>
  )
}

