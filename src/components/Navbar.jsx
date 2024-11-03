import React from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  // a hook of the react-router-dom lib
  // using to navigate pages without loading them
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between bg-white drop-shadow px-6 py-2'>
      <h2 className='text-black font-medium text-xl py-2'>Notes app</h2>

      <ProfileInfo handleLogout={handleLogout}/>
    </div>
  )
}

export default Navbar
