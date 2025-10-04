import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  return (
    <section>
    <h1>X</h1>
    <TwitterFollowCard isFollowing={true} userName='maarianvsf' name='Marian Suárez' />
    <TwitterFollowCard isFollowing={true} userName='midudev' name='Miguel Angel' />
    <TwitterFollowCard isFollowing={true} userName='vxn' name='Elon Musk' />
    <TwitterFollowCard isFollowing={true} userName='vxn' name='Elon Musk' />
    </section>
  )
}

export default App
