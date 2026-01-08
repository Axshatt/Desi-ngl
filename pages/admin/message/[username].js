import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Trash2, RefreshCcw, LogOut, Inbox, User } from 'lucide-react'

export default function AdminMessages() {
  const router = useRouter()
  const { username } = router.query
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '15px' }}>
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
              padding: '24px',
              borderRadius: '20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'default',
              position: 'relative'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                fontSize: '18px',
                lineHeight: '1.5',
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                fontWeight: 500,
                marginBottom: '40px'
              }}>
                {m.message}
              </div>

              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <User size={12} /> Anonymous
                </span>
                <button
                  onClick={() => requestDelete(m._id)}
                  style={{
                    background: 'rgba(255, 0, 0, 0.1)',
                    color: '#ff4444',
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
                  title="Delete message"
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 0, 0, 0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 0, 0, 0.1)'}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


