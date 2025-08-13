import React from 'react'
import NavBar from '../components/NavBar'


const Dashboard = () => {
  // TODO: add variable that will store username

  return (
    <div className='flex flex-col h-56 w-80 gap-3'>
      <NavBar />
      {/* h2: welcome, user */}
      <div className='flex flex-col gap-3'>
        <button><a href="/notebooks">Notebooks</a></button>
        <button>CardDecks</button>
      </div>
    </div>
  )
}

export default Dashboard