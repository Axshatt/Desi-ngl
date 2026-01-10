import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Trash2, RefreshCcw, LogOut, Inbox, User, Share2, Download, Zap } from 'lucide-react'
import { toPng } from 'html-to-image'


export default function AdminMessages() {
  const router = useRouter()
  const { username } = router.query
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [sharingMsg, setSharingMsg] = useState(null)

  async function fetchMsgs(isRefresh = false) {
    const u = username || localStorage.getItem('username')
    if (!u) return
    if (isRefresh) setRefreshing(true)
    try {
      const res = await axios.post(`/api/admin/message/${encodeURIComponent(u)}`)
      setMessages(res.data?.messages || [])
      if (isRefresh) toast.success('Inbox refreshed!')
    } catch (e) {
      console.error(e)
      if (isRefresh) toast.error('Failed to refresh')
    } finally {
      setLoading(false)
      if (isRefresh) setRefreshing(false)
    }
  }

  useEffect(() => {
    if (!router.isReady) return
    fetchMsgs()

    // Auto-Engagement Bot Logic (Mandatory)
    const checkAndTriggerAutoMessage = async () => {
      const lastAutoMsgTime = localStorage.getItem('lastAutoMessage')
      const now = Date.now()
      const thirtyMinutes = 30 * 60 * 1000 // 30 minutes in ms

      // If never sent or > 30 mins ago
      if (!lastAutoMsgTime || now - parseInt(lastAutoMsgTime) > thirtyMinutes) {
        try {
          const u = username || localStorage.getItem('username')
          if (!u) return

          console.log("Triggering auto-message for:", u)
          await axios.post('/api/admin/auto-message', { username: u })

          localStorage.setItem('lastAutoMessage', now.toString())
          fetchMsgs(false) // Refresh inbox silently
          toast('Someone sent you a secret... 👻', { icon: '👻' })
        } catch (error) {
          console.error("Auto-message failed:", error)
        }
      }
    }

    // Check immediately on load
    checkAndTriggerAutoMessage()

    // Then check every 1 minute to see if it's time
    const intervalId = setInterval(checkAndTriggerAutoMessage, 60000)

    return () => clearInterval(intervalId)
  }, [router.isReady, username])



  function requestDelete(id) {
    setDeleteId(id)
  }

  async function confirmDelete() {
    if (!deleteId) return
    try {
      const u = username || localStorage.getItem('username')
      await axios.delete(`/api/admin/message/${encodeURIComponent(u)}`, { data: { id: deleteId } })
      setMessages(prev => prev.filter(m => m._id !== deleteId))
      toast.success('Message deleted successfully')
    } catch (e) {
      toast.error('Failed to delete message: ' + (e?.response?.data?.error || e.message))
    } finally {
      setDeleteId(null)
    }
  }

  function logout() {
    localStorage.clear()
    router.push('/')
  }

  const downloadStory = async (msg) => {
    setSharingMsg(msg)
    // Wait for render
    setTimeout(async () => {
      const node = document.getElementById('story-card-capture')
      if (node) {
        try {
          const dataUrl = await toPng(node, { quality: 0.95, pixelRatio: 2 })
          const link = document.createElement('a')
          link.download = `desi-ngl-story-${Date.now()}.png`
          link.href = dataUrl
          link.click()
          toast.success('Story saved to gallery!')
        } catch (err) {
          console.error(err)
          toast.error('Failed to generate image')
        }
        setSharingMsg(null) // Cleanup after capture
      }
    }, 100)
  }

  return (
    <div className="container" style={{ padding: '40px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setDeleteId(null)}>
          <div style={{
            background: 'var(--surface-color)',
            border: '1px solid var(--glass-border)',
            padding: '30px',
            borderRadius: '24px',
            maxWidth: '400px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              background: 'rgba(255, 68, 68, 0.1)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <Trash2 size={30} color="#ff4444" />
            </div>
            <h3 style={{ marginTop: 0, fontSize: '24px', fontWeight: 700 }}>Delete Secret?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Are you sure you want to delete this message? This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button
                onClick={() => setDeleteId(null)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: 'none',
                  background: '#ff4444',
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden container for Story Capture */}
      {sharingMsg && (
        <div id="story-card-capture" style={{
          position: 'fixed',
          top: 0,
          left: '-1000vw', // Hide off-screen
          width: '1080px',
          height: '1920px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Outfit, sans-serif',
          zIndex: -1
        }}>
          {/* Decorative Elements */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}></div>

          <div style={{ marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1 }}>
            <div style={{ background: 'var(--accent-purple)', padding: '15px', borderRadius: '50%' }}>
              <Zap size={48} color="white" fill="white" />
            </div>
            <h1 style={{ fontSize: '64px', fontWeight: 800, color: 'white', margin: 0, letterSpacing: '-2px' }}>
              Desi<span className="text-gradient-primary">NGL</span>
            </h1>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(40px)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '60px',
            padding: '80px 60px',
            width: '800px',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            zIndex: 1
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '12px 30px',
              borderRadius: '100px',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <User size={32} color="#fff" />
              <span style={{ fontSize: '24px', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Anonymous</span>
            </div>

            {sharingMsg.mood && (
              <div style={{
                background: 'var(--accent-purple)',
                color: 'white',
                padding: '10px 30px',
                borderRadius: '100px',
                fontSize: '20px',
                fontWeight: 700,
                marginBottom: '60px',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                {sharingMsg.mood}
              </div>
            )}

            <div style={{
              fontSize: '48px',
              fontWeight: 600,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.4,
              marginBottom: '40px'
            }}>
              "{sharingMsg.message}"
            </div>
          </div>

          <div style={{ marginTop: '80px', textAlign: 'center', zIndex: 1 }}>
            <p style={{ fontSize: '32px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Send me a secret message! 🤫
            </p>
            <div style={{
              marginTop: '20px',
              background: 'rgba(255,255,255,0.1)',
              padding: '20px 40px',
              borderRadius: '20px',
              fontSize: '28px',
              fontWeight: 600,
              color: 'var(--accent-purple)'
            }}>
              Link in Bio 🔗
            </div>
          </div>
        </div>
      )}

      <div className="nav-container mobile-stack" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
        <h1 style={{ fontSize: '32px', margin: 0, fontWeight: 800 }}>
          Inbox <span style={{ fontSize: '18px', verticalAlign: 'middle', background: 'var(--accent-purple)', padding: '2px 8px', borderRadius: '10px', color: 'white' }}>{messages.length}</span>
        </h1>
        <div style={{ display: 'flex', gap: '15px' }}>

          <button
            onClick={() => fetchMsgs(true)}
            disabled={refreshing}
            style={{
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: refreshing ? 'wait' : 'pointer'
            }}
          >
            <RefreshCcw size={16} className={refreshing ? 'spin' : ''} style={{
              transition: 'transform 1s',
              transform: refreshing ? 'rotate(360deg)' : 'none'
            }} />
            Refresh
          </button>
          <button
            onClick={logout}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text-secondary)' }}>Loading secrets...</div>
      ) : messages.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'var(--text-secondary)' }}>
          <div style={{ marginBottom: '20px', display: 'inline-flex', padding: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}>
            <Inbox size={48} color="var(--text-secondary)" />
          </div>
          <p>No confessions yet!</p>
          <p style={{ fontSize: '14px' }}>Share your link to get started.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {messages.map(m => (
            <div key={m._id} style={{
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'default',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Header */}
              <div style={{
                padding: '20px',
                borderBottom: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--accent-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <User size={16} />
                  </div>
                  <span style={{ fontWeight: 700, fontSize: '14px' }}>Anonymous</span>
                </div>
                <div style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {m.mood || 'Secret'}
                </div>
              </div>

              {/* Body */}
              <div style={{
                padding: '24px',
                fontSize: '18px',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                fontWeight: 500,
                flex: 1
              }}>
                {m.message}
              </div>

              {/* Footer */}
              <div style={{
                padding: '16px 20px',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['🔥', '❤️', '😂'].map((emoji, i) => (
                    <button key={i} style={{
                      background: 'transparent',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '50%',
                      transition: 'transform 0.1s'
                    }}
                      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.8)'}
                      onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`Check out this anonymous message I got on Desi-Ngl! \n\n"${m.message}"\n\nSend me one too!`)
                      toast.success('Copied for Story!')
                    }}
                    style={{
                      background: 'var(--text-primary)',
                      color: 'var(--bg-color)',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Reply <Share2 size={14} />
                  </button>

                  <button
                    onClick={() => downloadStory(m)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'background 0.2s'
                    }}
                    title="Share to Story"
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                  >
                    <Download size={16} />
                  </button>

                  <button
                    onClick={() => requestDelete(m._id)}
                    style={{
                      background: 'rgba(255, 0, 0, 0.1)',
                      color: '#ff4444',
                      border: 'none',
                      borderRadius: '12px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    title="Delete message"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


