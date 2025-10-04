import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  return (
    <section>
    <TwitterFollowCard 
      isFollowing={true} 
      userName='maarianvsf' 
      name='Marian Suárez' />
    <TwitterFollowCard 
      isFollowing={true} 
      userName='midudev' 
      name='Miguel Angel' />
    <TwitterFollowCard 
      isFollowing={true} 
      userName='vxn' 
      name='Elon Musk' />
    <TwitterFollowCard 
      isFollowing={true} 
      userName='nanutria' 
      name='Victor Medina' />
    </section>
  )
}

export default App
