import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Trash2, RefreshCcw, LogOut, Inbox, User, Share2, Download, Zap, Smile, MessageSquare, Send, X } from 'lucide-react'
import { toPng } from 'html-to-image'
import EmojiPicker from '../../../components/EmojiPicker'


export default function AdminMessages() {
  const router = useRouter()
  const { username } = router.query
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [sharingMsg, setSharingMsg] = useState(null)
  const [reactingId, setReactingId] = useState(null)
  const [hoveredReaction, setHoveredReaction] = useState(null)
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(null)
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [sendingReply, setSendingReply] = useState(false)

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

  async function addReaction(messageId, emoji) {
    setReactingId(messageId)
    const username = localStorage.getItem('username')
    
    try {
      const res = await axios.post('/api/message/reaction', { messageId, reaction: emoji, username })
      // Update the local message with new reaction counts
      // Ensure reactions is always an object
      const updatedReactions = res.data.reactions && typeof res.data.reactions === 'object' 
        ? res.data.reactions 
        : {}
      
      setMessages(prev => prev.map(m => 
        m._id === messageId ? { ...m, reactions: updatedReactions } : m
      ))
      toast.success(res.data.userReacted ? `Added ${emoji}!` : `Removed ${emoji}`)
    } catch (error) {
      console.error('Reaction error:', error)
      toast.error('Failed to add reaction: ' + (error?.response?.data?.error || error.message))
    } finally {
      setReactingId(null)
    }
  }

  async function sendReply(messageId) {
    if (!replyText.trim()) {
      toast.error('Please enter a reply')
      return
    }

    setSendingReply(true)
    const username = localStorage.getItem('username')
    
    try {
      const res = await axios.post('/api/message/reply', { 
        messageId, 
        reply: replyText, 
        username 
      })
      
      // Update the local message with new replies
      setMessages(prev => prev.map(m => 
        m._id === messageId ? { ...m, replies: res.data.replies } : m
      ))
      
      toast.success('Reply sent!')
      setReplyText('')
      setReplyingTo(null)
    } catch (error) {
      console.error('Reply error:', error)
      toast.error('Failed to send reply: ' + (error?.response?.data?.error || error.message))
    } finally {
      setSendingReply(false)
    }
  }

  const downloadStory = async (msg) => {
    setSharingMsg(msg)
    
    // Wait for fonts and images to load, then render
    setTimeout(async () => {
      const node = document.getElementById('story-card-capture')
      if (!node) {
        toast.error('Failed to find story element')
        setSharingMsg(null)
        return
      }
      
      // Verify the message content is actually in the DOM
      const messageText = node.querySelector('div[style*="fontSize: \'48px\'"]')
      if (!messageText || !messageText.textContent || !messageText.textContent.includes(msg.message)) {
        console.warn('Message content not found, waiting longer...')
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      
      try {
          // Make element visible temporarily for proper rendering
          const originalStyle = {
            position: node.style.position,
            top: node.style.top,
            left: node.style.left,
            visibility: node.style.visibility,
            opacity: node.style.opacity
          }
          
          // Make element visible and properly positioned for capture
          // Position it off-screen but make it fully visible for rendering
          node.style.position = 'fixed'
          node.style.top = '0px'
          node.style.left = '0px'
          node.style.visibility = 'visible'
          node.style.opacity = '1'
          node.style.zIndex = '99999'
          node.style.width = '1080px'
          node.style.height = '1920px'
          node.style.overflow = 'hidden'
          
          // Force browser to render the element
          const forceReflow = node.offsetHeight
          
          // Ensure fonts are loaded
          if (document.fonts && document.fonts.ready) {
            await document.fonts.ready
          }
          
          // Wait for rendering - increased time
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Double-check element is ready
          const rect = node.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) {
            console.warn('Element has zero dimensions, retrying...')
            await new Promise(resolve => setTimeout(resolve, 500))
          }
          
          console.log('Capturing element:', {
            width: rect.width,
            height: rect.height,
            visible: window.getComputedStyle(node).visibility
          })
          
          const dataUrl = await toPng(node, { 
            quality: 1, 
            pixelRatio: 2,
            backgroundColor: '#1a1a2e',
            cacheBust: true,
            useCORS: true,
            allowTaint: true,
            width: 1080,
            height: 1920
          })
          
          // Check if we got a valid image
          if (!dataUrl || dataUrl === 'data:,') {
            throw new Error('Failed to generate image data')
          }
          
          // Restore original styles
          node.style.position = originalStyle.position || 'absolute'
          node.style.top = originalStyle.top || '-9999px'
          node.style.left = originalStyle.left || '-9999px'
          node.style.visibility = originalStyle.visibility || 'hidden'
          node.style.opacity = originalStyle.opacity || '0'
          node.style.zIndex = '-1'
          
          const link = document.createElement('a')
          link.download = `desi-ngl-story-${Date.now()}.png`
          link.href = dataUrl
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          toast.success('Story saved to gallery!')
        } catch (err) {
          console.error('Download error:', err)
          toast.error('Failed to generate image: ' + err.message)
        } finally {
          setSharingMsg(null) // Cleanup after capture
        }
    }, 300)
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
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '1080px',
          height: '1920px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          overflow: 'hidden',
          boxSizing: 'border-box',
          visibility: 'hidden',
          opacity: 0
        }}>
          {/* Decorative Elements */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ 
            marginBottom: '60px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            zIndex: 1, 
            position: 'relative',
            width: '100%',
            justifyContent: 'center'
          }}>
            <div style={{ 
              background: '#8A2BE2', 
              padding: '15px', 
              borderRadius: '50%', 
              width: '78px', 
              height: '78px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h1 style={{ 
              fontSize: '64px', 
              fontWeight: 800, 
              margin: 0, 
              letterSpacing: '-2px',
              color: '#FFFFFF',
              lineHeight: '1.2'
            }}>
              Desi<span style={{
                background: 'linear-gradient(135deg, #CCFF00 0%, #8A2BE2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}>NGL</span>
            </h1>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '60px',
            padding: '80px 60px',
            width: '800px',
            minHeight: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            zIndex: 1,
            position: 'relative',
            boxSizing: 'border-box'
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
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span style={{ fontSize: '24px', fontWeight: 600, color: '#FFFFFF' }}>Anonymous</span>
            </div>

            {sharingMsg.mood && (
              <div style={{
                background: '#8A2BE2',
                color: '#FFFFFF',
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
              color: '#FFFFFF',
              textAlign: 'center',
              lineHeight: 1.4,
              marginBottom: '40px',
              wordWrap: 'break-word',
              maxWidth: '100%',
              padding: '0 20px'
            }}>
              "{sharingMsg.message}"
            </div>
          </div>

          <div style={{ 
            marginTop: '80px', 
            textAlign: 'center', 
            zIndex: 1, 
            position: 'relative',
            width: '100%'
          }}>
            <p style={{ fontSize: '32px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              Send me a secret message! 🤫
            </p>
            <div style={{
              marginTop: '20px',
              background: 'rgba(255,255,255,0.1)',
              padding: '20px 40px',
              borderRadius: '20px',
              fontSize: '28px',
              fontWeight: 600,
              color: '#8A2BE2',
              display: 'inline-block'
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
                background: 'rgba(255,255,255,0.02)',
                gap: '12px',
                flexWrap: 'wrap'
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontWeight: 700, fontSize: '14px' }}>Anonymous</span>
                    {/* Sender hint chip if they chose to share */}
                    {m.senderMeta?.share && (
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 8px',
                        borderRadius: '999px',
                        border: '1px solid rgba(204,255,0,0.4)',
                        background: 'rgba(204,255,0,0.08)',
                        fontSize: '11px',
                        color: 'var(--text-secondary)'
                      }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#CCFF00' }} />
                        <span>Shared hint:</span>
                        <span style={{ color: '#fff', fontWeight: 600 }}>
                          {(() => {
                            const parts = (m.senderMeta?.ip || '').split('.')
                            const ipHint = parts.length === 4 ? `${parts[0]}.${parts[1]}.x.x` : null
                            const deviceBits = [m.senderMeta?.deviceType, m.senderMeta?.os].filter(Boolean).join(' • ')
                            if (ipHint && deviceBits) return `${ipHint} • ${deviceBits}`
                            if (ipHint) return ipHint
                            if (deviceBits) return deviceBits
                            return 'Device & location hint saved'
                          })()}
                        </span>
                      </div>
                    )}
                  </div>
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

              {/* Replies Section */}
              {m.replies && m.replies.length > 0 && (
                <div style={{
                  padding: '16px 20px',
                  borderTop: '1px solid var(--glass-border)',
                  background: 'rgba(139, 92, 246, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--accent-purple)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <MessageSquare size={14} />
                    {m.replies.length} {m.replies.length === 1 ? 'Reply' : 'Replies'}
                  </div>
                  {m.replies.map((reply, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px'
                      }}>
                        <span style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--accent-purple)'
                        }}>
                          {reply.repliedBy}
                        </span>
                        <span style={{
                          fontSize: '11px',
                          color: 'var(--text-secondary)'
                        }}>
                          {new Date(reply.repliedAt).toLocaleDateString()} {new Date(reply.repliedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p style={{
                        margin: 0,
                        fontSize: '14px',
                        color: 'var(--text-primary)',
                        lineHeight: '1.5'
                      }}>
                        {reply.reply}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Input Section */}
              {replyingTo === m._id && (
                <div style={{
                  padding: '16px 20px',
                  borderTop: '1px solid var(--glass-border)',
                  background: 'rgba(139, 92, 246, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '4px'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--accent-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <MessageSquare size={14} />
                      Reply to this message
                    </span>
                    <button
                      onClick={() => {
                        setReplyingTo(null)
                        setReplyText('')
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '4px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                        e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <textarea
                    value={replyText}
                    onChange={e => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    style={{
                      width: '100%',
                      minHeight: '80px',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      background: 'rgba(0,0,0,0.3)',
                      color: '#fff',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                    onFocus={e => e.currentTarget.style.border = '1px solid var(--accent-purple)'}
                    onBlur={e => e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)'}
                  />
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => {
                        setReplyingTo(null)
                        setReplyText('')
                      }}
                      disabled={sendingReply}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--glass-border)',
                        background: 'transparent',
                        color: 'var(--text-secondary)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: sendingReply ? 'wait' : 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => !sendingReply && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                      onMouseLeave={e => !sendingReply && (e.currentTarget.style.background = 'transparent')}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => sendReply(m._id)}
                      disabled={sendingReply || !replyText.trim()}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        background: sendingReply || !replyText.trim() 
                          ? 'rgba(139, 92, 246, 0.3)' 
                          : 'var(--accent-purple)',
                        color: '#fff',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: sendingReply || !replyText.trim() ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={e => {
                        if (!sendingReply && replyText.trim()) {
                          e.currentTarget.style.background = 'rgba(139, 92, 246, 0.9)'
                          e.currentTarget.style.transform = 'translateY(-1px)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!sendingReply && replyText.trim()) {
                          e.currentTarget.style.background = 'var(--accent-purple)'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }
                      }}
                    >
                      {sendingReply ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Reply <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div style={{
                padding: '16px 20px',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.02)',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', position: 'relative' }}>
                  {/* Display existing reactions - sort to show user's reactions first */}
                  {m.reactions && typeof m.reactions === 'object' && Object.entries(m.reactions)
                    .filter(([emoji, users]) => {
                      // Handle both array format and ensure it's valid
                      return emoji && users && Array.isArray(users) && users.length > 0
                    })
                    .sort(([emojiA, usersA], [emojiB, usersB]) => {
                      const username = typeof window !== 'undefined' ? localStorage.getItem('username') : ''
                      const userReactedA = Array.isArray(usersA) && usersA.includes(username)
                      const userReactedB = Array.isArray(usersB) && usersB.includes(username)
                      // User's reactions first, then by count (descending)
                      if (userReactedA && !userReactedB) return -1
                      if (!userReactedA && userReactedB) return 1
                      return (usersB?.length || 0) - (usersA?.length || 0)
                    })
                    .map(([emoji, users]) => {
                    const username = typeof window !== 'undefined' ? localStorage.getItem('username') : ''
                    const userReacted = Array.isArray(users) && users.includes(username)
                    const reactionCount = Array.isArray(users) ? users.length : 0
                    const isHovered = hoveredReaction === `${m._id}-${emoji}`

                    return (
                      <button 
                        key={emoji} 
                        onClick={() => addReaction(m._id, emoji)}
                        onMouseEnter={() => setHoveredReaction(`${m._id}-${emoji}`)}
                        onMouseLeave={() => setHoveredReaction(null)}
                        disabled={reactingId === m._id}
                        style={{
                          background: userReacted 
                            ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 100%)' 
                            : isHovered 
                              ? 'rgba(255,255,255,0.15)' 
                              : 'rgba(255,255,255,0.08)',
                          border: userReacted 
                            ? '2px solid var(--accent-purple)' 
                            : isHovered 
                              ? '2px solid rgba(139, 92, 246, 0.6)' 
                              : '2px solid rgba(255,255,255,0.15)',
                          cursor: reactingId === m._id ? 'wait' : 'pointer',
                          padding: '8px 12px',
                          borderRadius: '12px',
                          transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: userReacted ? 'var(--accent-purple)' : isHovered ? 'var(--accent-purple)' : '#fff',
                          fontWeight: 600,
                          fontSize: '13px',
                          animation: reactingId === m._id ? 'pulse-reaction 0.4s ease-out' : userReacted ? 'glow-reacted 2s ease-in-out infinite' : isHovered ? 'glow-hover 1s ease-in-out' : 'none',
                          boxShadow: userReacted 
                            ? '0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 10px rgba(139, 92, 246, 0.2)' 
                            : isHovered 
                              ? '0 0 16px rgba(139, 92, 246, 0.3)' 
                              : '0 2px 8px rgba(0,0,0,0.1)',
                          transform: isHovered ? 'translateY(-2px)' : userReacted ? 'scale(1.05)' : 'translateY(0)',
                          position: 'relative'
                        }}
                        onMouseDown={e => {
                          if (!reactingId) {
                            e.currentTarget.style.transform = 'scale(0.9) translateY(-2px)'
                          }
                        }}
                        onMouseUp={e => {
                          if (!reactingId) {
                            e.currentTarget.style.transform = isHovered ? 'scale(1) translateY(-2px)' : userReacted ? 'scale(1.05)' : 'scale(1) translateY(0)'
                          }
                        }}
                        title={`${userReacted ? '✓ You reacted - Click to remove' : 'Click to react'} ${emoji} • ${reactionCount} ${reactionCount === 1 ? 'reaction' : 'reactions'}`}
                      >
                        {/* Checkmark indicator for user's reaction */}
                        {userReacted && (
                          <span style={{
                            position: 'absolute',
                            top: '-4px',
                            right: '-4px',
                            background: 'var(--accent-purple)',
                            borderRadius: '50%',
                            width: '18px',
                            height: '18px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            fontWeight: 700,
                            color: 'white',
                            boxShadow: '0 2px 8px rgba(139, 92, 246, 0.6)',
                            border: '2px solid var(--bg-color)',
                            zIndex: 1
                          }}>
                            ✓
                          </span>
                        )}
                        <span style={{ 
                          fontSize: isHovered ? '22px' : userReacted ? '20px' : '18px', 
                          transition: 'font-size 0.2s',
                          display: 'inline-block',
                          lineHeight: 1,
                          filter: userReacted ? 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.8))' : 'none'
                        }}>
                          {emoji}
                        </span>
                        <span style={{ 
                          minWidth: '20px',
                          background: userReacted 
                            ? 'rgba(139, 92, 246, 0.4)' 
                            : 'rgba(255,255,255,0.15)',
                          padding: '3px 7px',
                          borderRadius: '10px',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: userReacted ? 'var(--accent-purple)' : '#fff',
                          border: userReacted ? '1px solid rgba(139, 92, 246, 0.5)' : 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          {reactionCount}
                          {userReacted && (
                            <span style={{ fontSize: '9px', opacity: 0.8 }}>• You</span>
                          )}
                        </span>
                      </button>
                    )
                  })}

                  {/* Add Reaction Button */}
                  <div style={{ position: 'relative' }}>
                    <button
                      onClick={() => setEmojiPickerOpen(emojiPickerOpen === m._id ? null : m._id)}
                      onMouseEnter={() => setHoveredReaction(`${m._id}-add`)}
                      onMouseLeave={() => setHoveredReaction(null)}
                      disabled={reactingId === m._id}
                      style={{
                        background: emojiPickerOpen === m._id
                          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 100%)'
                          : hoveredReaction === `${m._id}-add`
                            ? 'rgba(255,255,255,0.12)'
                            : 'rgba(255,255,255,0.06)',
                        border: emojiPickerOpen === m._id
                          ? '2px solid var(--accent-purple)'
                          : '2px dashed rgba(255,255,255,0.2)',
                        cursor: reactingId === m._id ? 'wait' : 'pointer',
                        padding: '8px 14px',
                        borderRadius: '12px',
                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: emojiPickerOpen === m._id ? 'var(--accent-purple)' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: '13px',
                        boxShadow: emojiPickerOpen === m._id
                          ? '0 0 16px rgba(139, 92, 246, 0.3)'
                          : 'none',
                        transform: hoveredReaction === `${m._id}-add` ? 'translateY(-2px)' : 'translateY(0)'
                      }}
                      title="Add reaction"
                    >
                      <Smile size={16} />
                      <span>React</span>
                    </button>
                    
                    {emojiPickerOpen === m._id && (
                      <EmojiPicker
                        onSelect={(emoji) => addReaction(m._id, emoji)}
                        isOpen={true}
                        onClose={() => setEmojiPickerOpen(null)}
                      />
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => {
                      if (replyingTo === m._id) {
                        setReplyingTo(null)
                        setReplyText('')
                      } else {
                        setReplyingTo(m._id)
                        setReplyText('')
                      }
                    }}
                    style={{
                      background: replyingTo === m._id 
                        ? 'var(--accent-purple)' 
                        : 'var(--text-primary)',
                      color: replyingTo === m._id ? '#fff' : 'var(--bg-color)',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s',
                      boxShadow: replyingTo === m._id ? '0 0 12px rgba(139, 92, 246, 0.4)' : 'none'
                    }}
                    title={replyingTo === m._id ? 'Cancel reply' : 'Reply to this message'}
                  >
                    <MessageSquare size={14} />
                    {replyingTo === m._id ? 'Cancel' : 'Reply'}
                    {m.replies && m.replies.length > 0 && (
                      <span style={{
                        background: replyingTo === m._id ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        fontSize: '11px',
                        marginLeft: '4px'
                      }}>
                        {m.replies.length}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`Check out this anonymous message I got on Desi-Ngl! \n\n"${m.message}"\n\nSend me one too!`)
                      toast.success('Copied for Story!')
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '12px',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'background 0.2s'
                    }}
                    title="Copy for Story"
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                  >
                    <Share2 size={16} />
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


