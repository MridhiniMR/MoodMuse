import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState('')

  const submit = async e => {
  e.preventDefault();
  if (!name || !msg) return setOk('Please fill in all fields.');
  const res = await fetch('http://localhost:5000/api/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message: msg })
  });
  const data = await res.json();
  setOk(data.msg || 'Message sent!');
  setName('');
  setMsg('');
};


  return (
    <div className="auth">
      <form className="card glassy contactform" onSubmit={submit}>
        <h2>Contact / Feedback</h2>
        <input
          placeholder="Your Name"
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={msg}
          onChange={e => setMsg(e.target.value)}
          rows="4"
        />
        <button className="button">Send</button>
        {ok && <p style={{ marginTop: '10px', color: '#a78bfa' }}>{ok}</p>}
      </form>
    </div>
  )
}
