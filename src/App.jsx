import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  return (
    <section>
    <TwitterFollowCard  
      userName='maarianvsf' >
      Marian Suárez
      </TwitterFollowCard>
    <TwitterFollowCard isFollowing
      userName='midudev' >
      Miguel Angel
      </TwitterFollowCard>
    <TwitterFollowCard
      userName='vxn'>
      Elon Musk
      </TwitterFollowCard>
    <TwitterFollowCard  
      userName='nanutria'>
      Victor Medina
      </TwitterFollowCard>
    </section>
  )
}

export default App
