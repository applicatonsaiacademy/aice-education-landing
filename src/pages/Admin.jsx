import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fetchCollection, saveBlogPost } from '../lib/forms'
import { auth } from '../lib/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

export default function Admin() {
  const [contacts, setContacts] = useState([])
  const [newsletter, setNewsletter] = useState([])
  const [preEnroll, setPreEnroll] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [post, setPost] = useState({ title: '', preview: '' })
  const [postStatus, setPostStatus] = useState('idle') // idle | loading | success | error

  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const loadAll = async () => {
    setLoading(true)
    setError('')
    try {
      const [c, n, p] = await Promise.all([
        fetchCollection('contacts'),
        fetchCollection('newsletter'),
        fetchCollection('preenroll'),
      ])
      setContacts(c)
      setNewsletter(n)
      setPreEnroll(p)
    } catch (err) {
      console.error(err)
      setError('Could not load data. Check Firebase config/rules.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!auth) {
      setAuthLoading(false)
      return
    }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      loadAll()
    }
  }, [user])

  const handlePost = async (e) => {
    e.preventDefault()
    if (!post.title || !post.preview) return
    setPostStatus('loading')
    try {
      await saveBlogPost(post)
      setPost({ title: '', preview: '' })
      setPostStatus('success')
    } catch (err) {
      console.error(err)
      setPostStatus('error')
    } finally {
      setTimeout(() => setPostStatus('idle'), 1400)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error('Logout error', err)
    }
  }

  const fmt = (d) => (d ? new Date(d).toLocaleString() : '—')

  if (!user) {
    return (
      <motion.div className="page-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'var(--bg-page)' }} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <div className="glass-card" style={{ padding: '40px', maxWidth: '400px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '8px' }}>Admin Login</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '24px' }}>Please sign in to access the dashboard.</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setLoginError('');
              // Behind the scenes, we convert the simple username to a firebase-friendly email
              const emailFormat = `${loginEmail.toLowerCase()}@admin.com`;
              signInWithEmailAndPassword(auth, emailFormat, loginPassword).catch((err) => {
                console.error(err);
                setLoginError('Invalid username or password.');
              });
            }} 
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <input 
              type="text" 
              placeholder="Username" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
              required 
            />
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
            {loginError && <p style={{ color: '#d04530', fontSize: '14px', marginTop: '8px' }}>{loginError}</p>}
          </form>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div className="page-wrapper admin-page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <header className="admin-topbar">
        <div className="admin-brand">
          <span className="admin-dot" />
          <span>Admin Dashboard</span>
        </div>
        <div className="admin-top-actions">
          <span className="admin-count">Newsletter: {newsletter.length}</span>
          <span className="admin-count">Pre-enroll: {preEnroll.length}</span>
          <button className="btn btn-secondary" onClick={loadAll} disabled={loading}>
            {loading ? 'Refreshing…' : 'Refresh Data'}
          </button>
          <button className="btn btn-outline" type="button" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container admin-container">
          {error && <div className="admin-error-banner">{error}</div>}

          <div className="admin-grid">
            <div className="admin-card glass-card">
              <div className="admin-card-head">
                <h3>Contacts ({contacts.length})</h3>
              </div>
              <div className="admin-table">
                <div className="admin-row contacts admin-row-head">
                  <span>Email</span><span>Name</span><span>Subject</span><span>Date</span>
                </div>
                {contacts.map((c) => (
                  <div className="admin-row contacts" key={c.id}>
                    <span>{c.email}</span>
                    <span>{c.name || '—'}</span>
                    <span>{c.subject || '—'}</span>
                    <span>{fmt(c.createdAt)}</span>
                  </div>
                ))}
                {contacts.length === 0 && <div className="admin-empty">No contacts yet.</div>}
              </div>
            </div>

            <div className="admin-card glass-card">
              <div className="admin-card-head">
                <h3>Newsletter ({newsletter.length})</h3>
              </div>
              <div className="admin-table">
                <div className="admin-row newsletter admin-row-head">
                  <span>Email</span><span>Date</span>
                </div>
                {newsletter.map((n) => (
                  <div className="admin-row newsletter" key={n.id}>
                    <span>{n.email}</span>
                    <span>{fmt(n.createdAt)}</span>
                  </div>
                ))}
                {newsletter.length === 0 && <div className="admin-empty">No newsletter signups yet.</div>}
              </div>
            </div>

            <div className="admin-card glass-card">
              <div className="admin-card-head">
                <h3>Pre-Enroll ({preEnroll.length})</h3>
              </div>
              <div className="admin-table">
                <div className="admin-row preenroll admin-row-head">
                  <span>Email</span><span>Date</span>
                </div>
                {preEnroll.map((p) => (
                  <div className="admin-row preenroll" key={p.id}>
                    <span>{p.email}</span>
                    <span>{fmt(p.createdAt)}</span>
                  </div>
                ))}
                {preEnroll.length === 0 && <div className="admin-empty">No pre-enrollments yet.</div>}
              </div>
            </div>
          </div>

          <div className="admin-card glass-card admin-blog-card">
            <div className="admin-card-head">
              <h3>Publish Blog / Newsletter Item</h3>
            </div>
            <form className="admin-blog-form" onSubmit={handlePost}>
              <input
                type="text"
                placeholder="Title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                required
              />
              <textarea
                placeholder="Preview / summary"
                value={post.preview}
                onChange={(e) => setPost({ ...post, preview: e.target.value })}
                required
              />
              <div className="admin-blog-actions">
                <button type="submit" className="btn btn-primary" disabled={postStatus === 'loading'}>
                  {postStatus === 'loading' ? 'Saving…' : 'Publish'}
                </button>
                {postStatus === 'success' && <span className="admin-success">Saved!</span>}
                {postStatus === 'error' && <span className="admin-error">Save failed. Check Firebase.</span>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
