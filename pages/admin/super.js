import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import toast from 'react-hot-toast'
import { 
  BarChart3, Users, MessageSquare, Reply, TrendingUp, 
  Shield, Trash2, Search, RefreshCw, LogOut, Eye,
  Calendar, Zap, Heart, Flame, AlertCircle, Download
} from 'lucide-react'

export default function SuperAdmin() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [authToken, setAuthToken] = useState(null)
  
  const [stats, setStats] = useState(null)
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')
  const [usersPage, setUsersPage] = useState(1)
  const [messagesPage, setMessagesPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const token = localStorage.getItem('superAdminToken')
    if (token) {
      setAuthToken(token)
      setAuthenticated(true)
      fetchStats(token)
    }
  }, [])

  async function handleLogin() {
    if (!password.trim()) {
      toast.error('Please enter password')
      return
    }
    setLoading(true)
    try {
      const res = await axios.post('/api/admin/auth', { password })
      if (res.data.success) {
        localStorage.setItem('superAdminToken', res.data.token)
        setAuthToken(res.data.token)
        setAuthenticated(true)
        toast.success('Welcome, Super Admin!')
        fetchStats(res.data.token)
      }
    } catch (e) {
      toast.error('Invalid password')
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem('superAdminToken')
    setAuthenticated(false)
    setAuthToken(null)
    setStats(null)
    setPassword('')
    toast.success('Logged out')
  }

  async function fetchStats(token) {
    try {
      const res = await axios.get('/api/admin/stats', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setStats(res.data.stats)
    } catch (e) {
      console.error('Failed to fetch stats:', e)
    }
  }

  async function fetchUsers(token, page = 1, search = '') {
    try {
      const res = await axios.get('/api/admin/users', {
        params: { page, limit: 50, search },
        headers: { Authorization: `Bearer ${token}` }
      })
      setUsers(res.data.users)
    } catch (e) {
      console.error('Failed to fetch users:', e)
    }
  }

  async function fetchMessages(token, page = 1, search = '') {
    try {
      const res = await axios.get('/api/admin/messages', {
        params: { page, limit: 50, search },
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessages(res.data.messages)
    } catch (e) {
      console.error('Failed to fetch messages:', e)
    }
  }

  async function deleteUser(userId) {
    if (!confirm('Are you sure you want to delete this user and all their messages?')) return
    
    try {
      await axios.delete('/api/admin/users', {
        data: { userId },
        headers: { Authorization: `Bearer ${authToken}` }
      })
      toast.success('User deleted')
      fetchUsers(authToken, usersPage, searchQuery)
      fetchStats(authToken)
    } catch (e) {
      toast.error('Failed to delete user')
    }
  }

  async function deleteMessage(messageId) {
    if (!confirm('Are you sure you want to delete this message?')) return
    
    try {
      await axios.delete('/api/admin/messages', {
        data: { messageId },
        headers: { Authorization: `Bearer ${authToken}` }
      })
      toast.success('Message deleted')
      fetchMessages(authToken, messagesPage, searchQuery)
      fetchStats(authToken)
    } catch (e) {
      toast.error('Failed to delete message')
    }
  }

  useEffect(() => {
    if (authenticated && authToken) {
      if (activeTab === 'users') {
        fetchUsers(authToken, usersPage, searchQuery)
      } else if (activeTab === 'messages') {
        fetchMessages(authToken, messagesPage, searchQuery)
      }
    }
  }, [activeTab, usersPage, messagesPage, searchQuery, authenticated, authToken])

  if (!authenticated) {
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
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Shield size={48} color="var(--accent-purple)" style={{ marginBottom: '16px' }} />
            <h1 style={{ fontSize: '28px', margin: 0, fontWeight: 800 }}>Super Admin</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>
              Founder Access Only
            </p>
          </div>

          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleLogin()}
            placeholder="Enter admin password"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              background: 'var(--surface-color)',
              color: '#fff',
              fontSize: '16px',
              marginBottom: '20px',
              outline: 'none'
            }}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: 'var(--accent-purple)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 700,
              cursor: loading ? 'wait' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)' }}>
      {/* Sidebar Navigation */}
      <div style={{
        width: '280px',
        background: 'var(--surface-color)',
        borderRight: '1px solid var(--glass-border)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        zIndex: 100
      }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Shield size={24} color="var(--accent-purple)" />
            Admin
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '6px' }}>v1.0</p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'users', label: 'Users Management', icon: Users },
            { id: 'messages', label: 'Messages', icon: MessageSquare }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: activeTab === tab.id ? 'var(--accent-purple)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontWeight: 600,
                transition: 'all 0.2s',
                fontSize: '14px',
                textAlign: 'left'
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--glass-border)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 68, 68, 0.3)',
              background: 'rgba(255, 68, 68, 0.1)',
              color: '#ff6b6b',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(255, 68, 68, 0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 68, 68, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 68, 68, 0.3)';
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ marginLeft: '280px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Header Bar */}
        <div style={{
          padding: '24px 40px',
          background: 'var(--surface-color)',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '28px', margin: 0, fontWeight: 800 }}>
              {activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'users' ? 'Users Management' : 'Messages'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '6px', fontSize: '14px' }}>
              {activeTab === 'dashboard' ? 'Analytics & Overview' : activeTab === 'users' ? 'Manage all users' : 'Review & manage messages'}
            </p>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && stats && (
        <div>
          {/* Overview Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <StatCard
              icon={Users}
              label="Total Users"
              value={stats.overview.totalUsers}
              change={`+${stats.growth.usersLast7Days} this week`}
              color="#8A2BE2"
            />
            <StatCard
              icon={MessageSquare}
              label="Total Messages"
              value={stats.overview.totalMessages}
              change={`+${stats.growth.messagesLast7Days} this week`}
              color="#CCFF00"
            />
            <StatCard
              icon={Reply}
              label="Total Replies"
              value={stats.overview.totalReplies}
              change={`${stats.overview.avgRepliesPerMessage} avg per message`}
              color="#FF69B4"
            />
          </div>

          {/* Charts Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.5fr',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {/* Messages Per Day Chart */}
            <div style={{
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '28px'
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px', fontWeight: 700 }}>
                Messages Per Day (Last 7 Days)
              </h3>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '220px' }}>
                {stats.messagesPerDay.map((day, idx) => {
                  const maxCount = Math.max(...stats.messagesPerDay.map(d => d.count))
                  const height = maxCount > 0 ? (day.count / maxCount) * 100 : 0
                  return (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '100%',
                        background: 'linear-gradient(to top, var(--accent-purple), rgba(138, 43, 226, 0.5))',
                        borderRadius: '6px 6px 0 0',
                        height: `${height}%`,
                        minHeight: day.count > 0 ? '4px' : '0',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingBottom: '4px',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        transition: 'all 0.2s'
                      }}>
                        {day.count > 0 && day.count}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Messages By Mood */}
            <div style={{
              background: 'var(--surface-color)',
              border: '1px solid var(--glass-border)',
              borderRadius: '16px',
              padding: '28px'
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '18px', fontWeight: 700 }}>
                Messages By Mood
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {stats.messagesByMood.map((mood, idx) => {
                  const total = stats.messagesByMood.reduce((sum, m) => sum + m.count, 0)
                  const percentage = total > 0 ? ((mood.count / total) * 100).toFixed(1) : 0
                  const moodIcons = {
                    'Serious': <AlertCircle size={16} />,
                    'Fun': <MessageSquare size={16} />,
                    'Advice': <Heart size={16} />,
                    'Roast': <Flame size={16} />
                  }
                  return (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px' }}>
                          {moodIcons[mood._id] || <MessageSquare size={16} />}
                          {mood._id || 'Unknown'}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>
                          {mood.count} ({percentage}%)
                        </span>
                      </div>
                      <div style={{
                        height: '10px',
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: '6px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          background: 'linear-gradient(to right, var(--accent-purple), var(--accent-lime))',
                          width: `${percentage}%`,
                          transition: 'width 0.3s'
                        }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Most Active Users */}
          <div style={{
            background: 'var(--surface-color)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '28px'
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '24px', fontSize: '18px', fontWeight: 700 }}>
              🔥 Most Active Users
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {stats.mostActiveUsers.map((user, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.2s',
                  cursor: 'default'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(138,43,226,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(138,43,226,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#000',
                      fontWeight: 800,
                      fontSize: '16px'
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>@{user.username}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '2px' }}>Rank #{idx + 1}</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent-lime)', fontWeight: 700, fontSize: '14px' }}>
                    {user.messageCount} msg
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div>
          {/* Search & Refresh */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'center' }}>
            <div style={{ flex: 1, maxWidth: '400px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value)
                  setUsersPage(1)
                }}
                placeholder="Search users by username..."
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--surface-color)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <button
              onClick={() => fetchUsers(authToken, usersPage, searchQuery)}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(138, 43, 226, 0.1)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.2)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <RefreshCw size={16} /> Refresh
            </button>
          </div>

          {/* Users Table */}
          <div style={{
            background: 'var(--surface-color)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(138, 43, 226, 0.08)', borderBottom: '2px solid var(--glass-border)' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>Username</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>Messages</th>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>Joined Date</th>
                  <th style={{ padding: '16px 20px', textAlign: 'right', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.5px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx} style={{
                    borderTop: '1px solid var(--glass-border)',
                    transition: 'all 0.2s',
                    background: 'transparent'
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(138, 43, 226, 0.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <td style={{ padding: '16px 20px', fontWeight: 600, fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#000',
                          fontWeight: 700,
                          fontSize: '12px'
                        }}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        @{user.username}
                      </div>
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--accent-lime)', fontWeight: 600, fontSize: '14px' }}>
                      {user.messageCount || 0}
                    </td>
                    <td style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontSize: '13px' }}>
                      {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </td>
                    <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                      <button
                        onClick={() => deleteUser(user._id)}
                        style={{
                          padding: '8px 12px',
                          borderRadius: '8px',
                          border: 'none',
                          background: 'rgba(255, 68, 68, 0.15)',
                          color: '#ff6b6b',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 600,
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = 'rgba(255, 68, 68, 0.25)';
                          e.currentTarget.style.color = '#ff8787';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)';
                          e.currentTarget.style.color = '#ff6b6b';
                        }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {users.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                No users found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div>
          {/* Search & Refresh */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'center' }}>
            <div style={{ flex: 1, maxWidth: '400px', position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value)
                  setMessagesPage(1)
                }}
                placeholder="Search messages..."
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 44px',
                  borderRadius: '12px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--surface-color)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <button
              onClick={() => fetchMessages(authToken, messagesPage, searchQuery)}
              style={{
                padding: '12px 20px',
                borderRadius: '12px',
                border: '1px solid var(--glass-border)',
                background: 'rgba(138, 43, 226, 0.1)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.2)';
                e.currentTarget.style.borderColor = 'var(--accent-purple)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
              }}
            >
              <RefreshCw size={16} /> Refresh
            </button>
          </div>

          {/* Messages Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '20px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                background: 'var(--surface-color)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'all 0.2s',
                cursor: 'default'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-purple)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '12px'
                      }}>
                        {(msg.userId?.username || 'U').charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '14px' }}>@{msg.userId?.username || 'Unknown'}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {new Date(msg.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    background: 'rgba(138, 43, 226, 0.2)',
                    color: 'var(--accent-lime)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {msg.mood || 'Serious'}
                  </span>
                </div>

                {/* Message Content */}
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  lineHeight: '1.6',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  borderLeft: '3px solid var(--accent-lime)'
                }}>
                  {msg.message}
                </div>

                {/* Stats & Actions */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {msg.replies?.length > 0 && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MessageSquare size={14} /> {msg.replies.length}
                      </span>
                    )}
                    {msg.reactions && Object.keys(msg.reactions).length > 0 && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Heart size={14} /> {Object.keys(msg.reactions).length}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => deleteMessage(msg._id)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: 'rgba(255, 68, 68, 0.15)',
                      color: '#ff6b6b',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255, 68, 68, 0.25)';
                      e.currentTarget.style.color = '#ff8787';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)';
                      e.currentTarget.style.color = '#ff6b6b';
                    }}
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {messages.length === 0 && (
            <div style={{
              padding: '60px 40px',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              background: 'var(--surface-color)',
              borderRadius: '16px',
              border: '1px dashed var(--glass-border)'
            }}>
              <MessageSquare size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
              <p style={{ fontSize: '16px', margin: 0 }}>No messages found</p>
            </div>
          )}
        </div>
      )}
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, change, color }) {
  return (
    <div style={{
      background: 'var(--surface-color)',
      border: '1px solid var(--glass-border)',
      borderRadius: '16px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'all 0.2s',
      cursor: 'default'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 15px 35px ${color}20`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--glass-border)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          background: `${color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1.5px solid ${color}40`
        }}>
          <Icon size={28} color={color} />
        </div>
      </div>
      <div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '6px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {label}
        </div>
        <div style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px', color: '#fff' }}>
          {value.toLocaleString()}
        </div>
        <div style={{ fontSize: '13px', color: color, fontWeight: 600 }}>
          📈 {change}
        </div>
      </div>
    </div>
  )
}
