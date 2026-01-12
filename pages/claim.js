import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Zap, ArrowLeft, Shield } from 'lucide-react'
import Footer from '../components/Footer'

export default function Claim() {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [loading, setLoading] = useState(false)

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

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden', position: 'relative' }}>

      {/* Background Aurora Slurps */}
      <div className="aurora-bg" style={{ top: '10%', left: '10%', width: '400px', height: '400px', background: 'rgba(138, 43, 226, 0.2)' }}></div>
      <div className="aurora-bg" style={{ top: '50%', right: '10%', width: '500px', height: '500px', background: 'rgba(204, 255, 0, 0.15)', animationDelay: '-5s' }}></div>

      {/* Background Grid */}
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: -1 }}></div>

      {/* Header */}
      <nav className="nav-container" style={{ width: '100%', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <ArrowLeft size={20} />
          <span style={{ fontWeight: 600, fontSize: '14px' }}>Back</span>
        </Link>

        <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-1px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Zap size={24} className="text-gradient-primary" />
          Desi<span className="text-gradient-primary">NGL</span>
        </div>

        <div style={{ width: '80px' }}></div>
      </nav>

      {/* Main Content */}
      <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '40px', padding: '60px 20px', zIndex: 1 }}>

        <div className="animate-fade-in" style={{ maxWidth: '700px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            borderRadius: '100px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            fontSize: '14px',
            marginBottom: '24px',
            fontWeight: 600
          }}>
            <Shield size={16} />
            Secure & Anonymous
          </div>
          <h1 className="hero-title" style={{ fontSize: 'clamp(40px, 7vw, 68px)', lineHeight: 1.1, margin: '0 0 20px 0', fontWeight: 800 }}>
            Claim Your <br /> <span className="shimmer-text">Unique Link</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', margin: '0 auto 20px', maxWidth: '550px', lineHeight: 1.6 }}>
            Create your personalized link and start receiving honest feedback, confessions, and burning questions from your friends and followers.
          </p>
        </div>

        {/* Claim Form Card */}
        <div className="animate-fade-in" style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          padding: '50px 40px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 40px var(--shadow-color)',
          animationDelay: '0.2s',
          position: 'relative'
        }}>
          {/* Floating Sticker */}
          <div className="animate-float hero-sticker" style={{ position: 'absolute', top: '-30px', right: '-20px', background: '#FF4500', padding: '10px 20px', borderRadius: '12px', transform: 'rotate(10deg)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', fontWeight: 'bold', zIndex: 10 }}>
            🔥 It's Viral
          </div>

          <h2 style={{ margin: '0 0 28px 0', fontSize: '26px', fontWeight: 800 }}>Get Your Link</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '28px', marginTop: 0 }}>
            Choose any username to get started
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontWeight: 600 }}>@</span>
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && usernameSend()}
                placeholder="instagram_handle"
                autoFocus
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
                  transition: 'all 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            
            <button
              onClick={usernameSend}
              disabled={loading}
              style={{
                padding: '20px',
                width: '100%',
                background: 'linear-gradient(135deg, var(--accent-purple) 0%, #6A1BE2 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '18px',
                fontSize: '18px',
                fontWeight: 700,
                opacity: loading ? 0.8 : 1,
                cursor: loading ? 'wait' : 'pointer',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 15px 40px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={e => {
                if (!loading) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(138, 43, 226, 0.5), inset 0 1px 0 rgba(255,255,255,0.15)';
                }
              }}
              onMouseLeave={e => {
                if (!loading) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)';
                }
              }}
              onMouseDown={e => !loading && (e.currentTarget.style.transform = 'scale(0.96)')}
            >
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                {loading ? (
                  <>
                    <div style={{
                      width: '18px',
                      height: '18px',
                      border: '3px solid rgba(255,255,255,0.3)',
                      borderTop: '3px solid #fff',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Creating...
                  </>
                ) : (
                  <>
                    Claim My Link
                    <Zap size={22} fill="currentColor" />
                  </>
                )}
              </div>
            </button>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '20px', marginBottom: 0 }}>
            No email or password required. It takes 10 seconds.
          </p>
        </div>

        {/* Info Section */}
        <div style={{ maxWidth: '700px', marginTop: '40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(138, 43, 226, 0.1)',
              border: '1px solid rgba(138, 43, 226, 0.2)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔒</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>100% Secure</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                End-to-end encrypted messages
              </p>
            </div>
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(204, 255, 0, 0.1)',
              border: '1px solid rgba(204, 255, 0, 0.2)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>👻</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>Anonymous</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                No identity required to receive messages
              </p>
            </div>
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(255, 105, 180, 0.1)',
              border: '1px solid rgba(255, 105, 180, 0.2)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>⚡</div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px 0' }}>Instant</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                Real-time notifications
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
