import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Send, Flame, Heart, Smile, AlertCircle, MessageSquare, Copy, Check } from 'lucide-react'



export default function MessagePage() {
  const router = useRouter()
  const { username } = router.query
  const [msg, setMsg] = useState('')
  const [mood, setMood] = useState('Serious')
  const [sending, setSending] = useState(false)
  // Whether the sender wants to share location & device hints
  const [shareHints, setShareHints] = useState(false)
  // Store the view token after sending
  const [viewToken, setViewToken] = useState(null)
  const [copied, setCopied] = useState(false)

  const moods = [
    { id: 'Serious', icon: <AlertCircle size={16} />, color: '#666' },
    { id: 'Fun', icon: <Smile size={16} />, color: '#FFD700' },
    { id: 'Advice', icon: <Heart size={16} />, color: '#FF69B4' },
    { id: 'Roast', icon: <Flame size={16} />, color: '#FF4500' },
  ]

  async function sendMessage() {
    if (!msg.trim()) return toast.error('Please enter a message.')
    const u = username || ''
    setSending(true)
    try {
      const res = await axios.post(`/api/${encodeURIComponent(u)}`, { 
        message: msg, 
        mood,
        shareMeta: shareHints
      })
      toast.success('Message Sent!')
      setMsg('')
      // Store the view token so sender can check replies
      if (res.data?.senderToken) {
        setViewToken(res.data.senderToken)
      }
    } catch (e) {
      toast.error('Error: ' + (e?.response?.data?.error || e.message))
    } finally {
      setSending(false)
    }
  }

  function copyViewLink() {
    if (!viewToken) return
    const viewUrl = `${window.location.origin}/view/${viewToken}`
    navigator.clipboard.writeText(viewUrl)
    setCopied(true)
    toast.success('Link copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px' }}>

      <div style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        padding: '30px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>Send a text to</p>
          <h1 style={{ fontSize: '32px', margin: '5px 0 0 0', fontWeight: 800 }}>@{username}</h1>
        </div>

        <textarea
          value={msg}
          onChange={e => setMsg(e.target.value)}
          placeholder="Send me an anonymous message..."
          style={{
            width: '100%',
            height: '150px',
            padding: '16px',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            background: 'var(--surface-color)',
            color: '#fff',
            fontSize: '16px',
            fontFamily: 'inherit',
            resize: 'none',
            outline: 'none',
            marginBottom: '20px'
          }}
        />

        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {moods.map(m => (
            <button
              key={m.id}
              onClick={() => setMood(m.id)}
              style={{
                background: mood === m.id ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)',
                color: mood === m.id ? 'var(--bg-color)' : 'var(--text-secondary)',
                border: `1px solid ${mood === m.id ? 'var(--text-primary)' : 'var(--glass-border)'}`,
                padding: '8px 16px',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s'
              }}
            >
              {m.icon} {m.id}
            </button>
          ))}
        </div>

        {/* Privacy choice: fully anonymous vs share location & device hints */}
        <div style={{
          marginBottom: '20px',
          padding: '12px 14px',
          borderRadius: '16px',
          border: '1px solid var(--glass-border)',
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <p style={{ 
            margin: 0, 
            fontSize: '13px', 
            color: 'var(--text-secondary)', 
            fontWeight: 500 
          }}>
            Choose how anonymous you want to be:
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setShareHints(false)}
              style={{
                flex: 1,
                minWidth: '120px',
                padding: '8px 10px',
                borderRadius: '999px',
                border: shareHints ? '1px solid var(--glass-border)' : '1px solid var(--accent-purple)',
                background: shareHints ? 'rgba(255,255,255,0.02)' : 'rgba(138, 43, 226, 0.2)',
                color: shareHints ? 'var(--text-secondary)' : '#fff',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2px',
                transition: 'all 0.2s'
              }}
            >
              <span>Stay 100% Anonymous</span>
              <span style={{ fontSize: '11px', opacity: 0.8 }}>No device or location hints shown</span>
            </button>

            <button
              type="button"
              onClick={() => setShareHints(true)}
              style={{
                flex: 1,
                minWidth: '120px',
                padding: '8px 10px',
                borderRadius: '999px',
                border: shareHints ? '1px solid var(--accent-purple)' : '1px solid var(--glass-border)',
                background: shareHints ? 'rgba(138, 43, 226, 0.25)' : 'rgba(255,255,255,0.02)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2px',
                transition: 'all 0.2s'
              }}
            >
              <span>Share Hints</span>
              <span style={{ fontSize: '11px', opacity: 0.8 }}>Lets them see your device & IP-based location hint</span>
            </button>
          </div>

          <p style={{ 
            margin: 0, 
            fontSize: '11px', 
            color: 'var(--text-secondary)', 
            opacity: 0.9 
          }}>
            Your real name and exact details are never shown. Location is estimated from IP, and only visible to @{username}.
          </p>
        </div>

        <button
          onClick={sendMessage}
          disabled={sending}
          style={{
            padding: '16px',
            width: '100%',
            background: 'var(--text-primary)',
            color: '#000',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 800,
            opacity: sending ? 0.7 : 1,
            transition: 'transform 0.1s',
            cursor: sending ? 'wait' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
          onMouseDown={e => !sending && (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={e => !sending && (e.currentTarget.style.transform = 'scale(1)')}
        >
          {sending ? 'Sending...' : <>Send Message <Send size={18} /></>}
        </button>

        {/* View Replies Link - shown after sending */}
        {viewToken && (
          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '4px'
            }}>
              <MessageSquare size={18} color="var(--accent-purple)" />
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--accent-purple)'
              }}>
                View Replies
              </span>
            </div>
            <p style={{
              margin: 0,
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: '1.5'
            }}>
              Save this link to check for replies to your message later!
            </p>
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
              <a
                href={`/view/${viewToken}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  background: 'var(--accent-purple)',
                  color: '#fff',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.9)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-purple)'}
              >
                Open Replies Page
              </a>
              <button
                onClick={copyViewLink}
                style={{
                  padding: '10px 14px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        )}
      </div>

      <p style={{ marginTop: '30px', color: 'var(--text-secondary)', fontSize: '13px' }}>
        <a href="/" style={{ textDecoration: 'underline' }}>Get your own messages</a>
      </p>

    </div>
  )
}

