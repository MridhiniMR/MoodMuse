import React from 'react'

export default function About() {
  return (
    <div className="about-page">
      <div className="card glassy" style={{ maxWidth: '800px', margin: '60px auto', padding: '40px' }}>
        <h1 style={{ color: '#a78bfa', marginBottom: '20px' }}>About MoodMuse</h1>
        <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#e2e8f0' }}>
          MoodMuse was created with a simple but beautiful goal — to make every emotion feel seen,
          supported, and understood. Whether you’re smiling without reason, weighed down by stress,
          or lost in a quiet moment, MoodMuse brings you a comforting digital space that reflects
          what you feel.
        </p>

        <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#e2e8f0' }}>
          Every mood comes alive with hand-picked playlists, gentle quotes, and visuals that help
          you reconnect with yourself. It’s more than a music and quotes site — it’s a personal
          moment of calm, joy, and reflection, designed to make your day a little brighter and
          your heart a little lighter.
        </p>

        <p style={{ lineHeight: '1.8', fontSize: '17px', color: '#e2e8f0' }}>
          We believe that technology should do more than inform — it should comfort, inspire,
          and care for the mind behind the screen. MoodMuse is our small step toward that vision.
        </p>
      </div>
    </div>
  )
}
