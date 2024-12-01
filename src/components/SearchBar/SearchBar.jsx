import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

function SearchBar({ value, onChange, handleSearch, onSearchClear }) {
  return (
    <div className='flex items-center rounded-md bg-slate-100 w-80 px-4'>
      <input
        type='text'
        placeholder='Search notes'
        value={value}
        onChange={onChange}
        onKeyDown={(event) => { event.key === 'Enter' && handleSearch() }}
        className='text-xs bg-transparent outline-none w-full py-[11px]'
      />

      {value && <IoMdClose
        onClick={onSearchClear}
        className='text-xl text-slate-500 cursor-pointer hover:text-black mr-3'
      />}

      <FaMagnifyingGlass
        onClick={handleSearch}
        className='text-slate-400 cursor-pointer hover:text-black'
      />
    </div>
  )
}

export default SearchBar
