import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const API = 'http://localhost:5000/api'

export default function Register() {
  const nav = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const submit = async e => {
    e.preventDefault()
    setErr('')
    const res = await fetch(API + '/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    if (!res.ok) return setErr(data.msg || 'Register failed')

    localStorage.setItem('mood_token', data.token)
    localStorage.setItem('mood_user_name', data.user.name)
    window.dispatchEvent(new Event('storage'))
    nav('/')
  }

  return (
    <div className="auth">
      <form onSubmit={submit} className="card glassy authform">
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="button">Register</button>
        {err && <div className="err">{err}</div>}
        <p className="switch-link">
          Already have an account?{' '}
          <Link to="/login" className="accent">
            Login here
          </Link>
        </p>
      </form>
    </div>
  )
}
