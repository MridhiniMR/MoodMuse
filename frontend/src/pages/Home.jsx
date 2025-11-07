import React from 'react'
import { useNavigate } from 'react-router-dom'
const moods = [
  {key:'happy', emoji:'😊'},
  {key:'sad', emoji:'😢'},
  {key:'calm', emoji:'😌'},
  {key:'stressed', emoji:'😖'}
]
export default function Home(){
  const nav = useNavigate()
  return (
    <div className='home'>
      <header className='hero'>
        <h1>How are you feeling today?</h1>
        <p>Pick a mood and let MoodMuse curate music and quotes for you.</p>
        <div className='moodrow'>
          {moods.map(m=>(
            <button key={m.key} className='moodbtn' onClick={()=>nav('/dashboard/'+m.key)}>
              <span className='emoji'>{m.emoji}</span>
              <span className='label'>{m.key}</span>
            </button>
          ))}
        </div>
      </header>
    </div>
  )
}
