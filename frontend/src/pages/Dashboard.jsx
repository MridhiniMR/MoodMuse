import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const API = 'http://localhost:5000/api'

export default function Dashboard() {
  const { mood } = useParams()
  const [data, setData] = useState(null)
  const [msg, setMsg] = useState('')
  const [userName, setUserName] = useState('')
  const token = localStorage.getItem('mood_token')

  useEffect(() => {
    fetch(API + '/moods/' + mood)
      .then(r => r.json())
      .then(setData)
      .catch(() => setData(null))
  }, [mood])

  // decode the stored user info from JWT payload
  useEffect(() => {
  if (!token) return
  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    if (payload.name) setUserName(payload.name)
  } catch (e) {
    console.error('Token decode failed', e)
  }
}, [token])


  const saveFav = async (item, type) => {
    if (!token) return setMsg('Please login to save favorites.')
    setMsg('')
    const res = await fetch(API + '/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify({
        type,
        mood,
        title: item.title || item.text,
        src: item.src || ''
      })
    })
    if (res.ok) setMsg('Saved to favorites!')
  }

  if (!data) return <div className="centered">Loading...</div>

  return (
    <div className="dashboard" style={{ background: data.bg }}>
      <div className="panel">
        {userName && (
          <h2 style={{ marginBottom: '10px' }}>
            Welcome back, <span style={{ color: '#a78bfa' }}>{userName}</span> 🌸
          </h2>
        )}
        <h3>You seem {data.display} today</h3>

        <div className="section">
          <h3>Playlists</h3>
          <div className="cards">
            {data.songs.map((s, i) => (
              <div className="card" key={i}>
                <h4>{s.title}</h4>
                <div className="video">
                  <iframe
                    src={s.src}
                    title={s.title}
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                  ></iframe>
                </div>
                <button className="button small" onClick={() => saveFav(s, 'song')}>
                  ❤️ Save
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Quotes</h3>
          <ul className="quotes">
            {data.quotes.map((q, i) => (
              <li key={i} className="quote">
                <blockquote>“{q.text}”</blockquote>
                <div className="author">{q.author}</div>
                <button className="button small" onClick={() => saveFav(q, 'quote')}>
                  💾 Save
                </button>
              </li>
            ))}
          </ul>
        </div>

        {msg && <p style={{ color: '#34d399', fontWeight: 500 }}>{msg}</p>}
      </div>
    </div>
  )
}
