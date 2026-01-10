import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link as LinkIcon, Check, Copy, MessageSquare, LogOut } from 'lucide-react'


export default function Share() {
  const router = useRouter()
  const { username } = router.query
  const [linkVal, setLinkVal] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!router.isReady) return
    const u = username || localStorage.getItem('username')
    if (!u) {
      setLinkVal('No username found!')
      return
    }
    const link = `${location.origin}/${encodeURIComponent(u)}`
    setLinkVal(link)
  }, [router.isReady, username])

  function copyLink() {
    if (!linkVal) return
    navigator.clipboard.writeText(linkVal)
    setCopied(true)
    toast.success('Link copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  function logout() {
    localStorage.clear()
    router.push('/')
  }

  function goToConfessions() {
    const u = username || localStorage.getItem('username')
    router.push(`/admin/message/${u}`)
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
        maxWidth: '550px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          Your Link <LinkIcon size={32} />
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '16px', margin: '0 0 30px 0' }}>
          Share this on your Instagram Story to get anonymous messages!
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#0a0a0a',
          border: '1px solid #333',
          borderRadius: '12px',
          padding: '5px 5px 5px 15px',
          marginBottom: '20px'
        }}>
          <input
            readOnly
            value={linkVal}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontFamily: 'var(--font-main)',
              outline: 'none',
              textOverflow: 'ellipsis'
            }}
          />
          <button
            onClick={copyLink}
            style={{
              padding: '12px 20px',
              background: copied ? 'var(--accent-lime)' : 'var(--accent-purple)',
              color: copied ? '#000' : '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background 0.2s',
              minWidth: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            {copied ? <><Check size={16} /> Copied!</> : <><Copy size={16} /> Copy</>}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={goToConfessions}
            style={{
              padding: '14px 24px',
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <MessageSquare size={16} /> View Messages
          </button>

          <button
            onClick={logout}
            style={{
              padding: '14px 24px',
              background: 'transparent',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-secondary)',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>
    </div>
  )
}

