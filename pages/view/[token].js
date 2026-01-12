import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { MessageSquare, ArrowLeft, RefreshCcw, User, Clock } from 'lucide-react'

export default function ViewMessage() {
  const router = useRouter()
  const { token } = router.query
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  async function fetchMessage(isRefresh = false) {
    if (!token) return
    if (isRefresh) setRefreshing(true)
    try {
      const res = await axios.get(`/api/message/view/${token}`)
      setMessage(res.data.message)
      if (isRefresh) toast.success('Refreshed!')
    } catch (e) {
      console.error(e)
      if (e?.response?.status === 404) {
        toast.error('Message not found or invalid token')
      } else {
        toast.error('Failed to load message')
      }
    } finally {
      setLoading(false)
      if (isRefresh) setRefreshing(false)
    }
  }

  useEffect(() => {
    if (router.isReady && token) {
      fetchMessage()
    }
  }, [router.isReady, token])

  if (loading) {
    return (
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: '20px' 
      }}>
        <div style={{ color: 'var(--text-secondary)' }}>Loading message...</div>
      </div>
    )
  }

  if (!message) {
    return (
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: '20px' 
      }}>
        <div style={{ 
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '24px',
          padding: '40px',
          maxWidth: '500px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'var(--text-primary)', marginBottom: '20px' }}>Message Not Found</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
            This message link is invalid or has been deleted.
          </p>
          <button
            onClick={() => router.push('/')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: 'var(--accent-purple)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              margin: '0 auto'
            }}
          >
            <ArrowLeft size={16} />
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <div style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(10px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '24px',
        padding: '30px',
        width: '100%',
        maxWidth: '600px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => router.push('/')}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: '#fff',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <ArrowLeft size={18} />
            </button>
            <h1 style={{ fontSize: '24px', margin: 0, fontWeight: 800 }}>Your Message</h1>
          </div>
          <button
            onClick={() => fetchMessage(true)}
            disabled={refreshing}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid var(--glass-border)',
              borderRadius: '8px',
              padding: '8px 12px',
              cursor: refreshing ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            <RefreshCcw size={14} className={refreshing ? 'spin' : ''} style={{
              transition: 'transform 1s',
              transform: refreshing ? 'rotate(360deg)' : 'none'
            }} />
            Refresh
          </button>
        </div>

        {/* Message Card */}
        <div style={{
          background: 'var(--surface-color)',
          border: '1px solid var(--glass-border)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
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
              {message.mood || 'Secret'}
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: 'var(--text-secondary)'
            }}>
              <Clock size={12} />
              {new Date(message.createdAt).toLocaleDateString()} {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: 'var(--text-primary)',
            whiteSpace: 'pre-wrap',
            fontWeight: 500,
            margin: 0
          }}>
            {message.message}
          </p>
        </div>

        {/* Replies Section */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <MessageSquare size={20} color="var(--accent-purple)" />
            <h2 style={{ 
              fontSize: '20px', 
              margin: 0, 
              fontWeight: 700,
              color: 'var(--text-primary)'
            }}>
              Replies
              {message.replies && message.replies.length > 0 && (
                <span style={{
                  marginLeft: '8px',
                  fontSize: '16px',
                  color: 'var(--accent-purple)',
                  fontWeight: 600
                }}>
                  ({message.replies.length})
                </span>
              )}
            </h2>
          </div>

          {!message.replies || message.replies.length === 0 ? (
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px dashed var(--glass-border)',
              borderRadius: '12px',
              padding: '40px 20px',
              textAlign: 'center'
            }}>
              <MessageSquare size={32} color="var(--text-secondary)" style={{ marginBottom: '12px', opacity: 0.5 }} />
              <p style={{ 
                color: 'var(--text-secondary)', 
                margin: 0,
                fontSize: '14px'
              }}>
                No replies yet. Check back later!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {message.replies.map((reply, idx) => (
                <div key={idx} style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
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
                      <span style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--accent-purple)'
                      }}>
                        {reply.repliedBy}
                      </span>
                    </div>
                    <span style={{
                      fontSize: '12px',
                      color: 'var(--text-secondary)'
                    }}>
                      {new Date(reply.repliedAt).toLocaleDateString()} {new Date(reply.repliedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: '15px',
                    color: 'var(--text-primary)',
                    lineHeight: '1.6'
                  }}>
                    {reply.reply}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div style={{
          marginTop: '24px',
          padding: '12px 16px',
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '12px',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          lineHeight: '1.5'
        }}>
          <strong style={{ color: 'var(--accent-purple)' }}>💡 Tip:</strong> Bookmark this page to check for new replies later!
        </div>
      </div>
    </div>
  )
}
