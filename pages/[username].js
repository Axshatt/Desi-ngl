import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Send, Flame, Heart, Smile, AlertCircle } from 'lucide-react'



export default function MessagePage() {
  const router = useRouter()
  const { username } = router.query
  const [msg, setMsg] = useState('')
  const [mood, setMood] = useState('Serious')
  const [sending, setSending] = useState(false)

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
      await axios.post(`/api/${encodeURIComponent(u)}`, { message: msg, mood })
      toast.success('Message Sent!')
      setMsg('')
    } catch (e) {
      toast.error('Error: ' + (e?.response?.data?.error || e.message))
    } finally {
      setSending(false)
    }
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
      </div>

      <p style={{ marginTop: '30px', color: 'var(--text-secondary)', fontSize: '13px' }}>
        <a href="/" style={{ textDecoration: 'underline' }}>Get your own messages</a>
      </p>

    </div>
  )
}

