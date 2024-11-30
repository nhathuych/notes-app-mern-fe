import React, { useState } from 'react'
import ProfileInfo from '../ProfileInfo/ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Navbar() {
  // a hook of the react-router-dom lib
  // using to navigate pages without loading them
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = () => {
    navigate('/login')
  }

  const handleSearch = () => {}

  const handleSearchClear = () => {
    setSearchQuery('')
  }

  return (
    <div className='flex items-center justify-between bg-white drop-shadow px-6 py-2'>
      <h2 className='text-black font-medium text-xl py-2'>Notes app</h2>

      <SearchBar
        value={searchQuery}
        onChange={({target}) => {
          setSearchQuery(target.value)
        }}
        handleSearch={handleSearch}
        onSearchClear={handleSearchClear}
      />

      <ProfileInfo handleLogout={handleLogout}/>
    </div>
  )
}

export default Navbar
