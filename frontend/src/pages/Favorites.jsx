import React, { useEffect, useState } from 'react'
const API = 'http://localhost:5000/api'

export default function Favorites() {
  const [favs, setFavs] = useState([])
  const token = localStorage.getItem('mood_token')

  useEffect(() => {
    if (!token) return
    fetch(API + '/favorites', {
      headers: { authorization: 'Bearer ' + token }
    })
      .then(r => r.json())
      .then(setFavs)
  }, [])

  const remove = async id => {
    await fetch(API + '/favorites/' + id, {
      method: 'DELETE',
      headers: { authorization: 'Bearer ' + token }
    })
    setFavs(favs.filter(f => f._id !== id))
  }

  if (!token)
    return (
      <div className="centered card glassy">
        <h3>Please login to view your favorites ❤️</h3>
      </div>
    )

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favs.length === 0 ? (
        <p>No favorites yet. Go save some songs or quotes!</p>
      ) : (
        <div className="favorites-grid">
          {favs.map(f => (
            <div className="favcard glassy" key={f._id}>
              <h4>{f.title}</h4>
              <div className="tag">
                {f.type} • {f.mood}
              </div>
              {f.src && f.src.includes('youtube') && (
                <iframe src={f.src} title={f.title} frameBorder="0"></iframe>
              )}
              <button className="button small danger" onClick={() => remove(f._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
