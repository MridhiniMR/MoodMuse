import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

export default function App() {
  const nav = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)

  // Check login status on first load
  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('mood_token'))

    // Listen for token changes (login/logout)
    const onStorageChange = () => {
      setLoggedIn(!!localStorage.getItem('mood_token'))
    }

    window.addEventListener('storage', onStorageChange)
    return () => window.removeEventListener('storage', onStorageChange)
  }, [])

  const logout = () => {
    localStorage.removeItem('mood_token')
    setLoggedIn(false)
    nav('/')
  }

  return (
    <div>
      <nav className="nav glassy">
        <Link to="/" className="logo">
          MoodMuse
        </Link>
        <div className="nav-links">
          <Link to="/favorites" className="navlink">Favorites</Link>
          <Link to="/about" className="navlink">About</Link>
          <Link to="/contact" className="navlink">Contact</Link>
          {loggedIn ? (
            <button onClick={logout} className="button logout">Logout</button>
          ) : (
            <Link to="/login" className="button login">Login</Link>
          )}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="footer glassy">
        <p>MoodMuse — Uplift Your Mood • 2025</p>
      </footer>
    </div>
  )
}
