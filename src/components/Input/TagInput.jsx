import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const addNewTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTag()
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <div>
      
      {
        tags?.length > 0 && (<div className='flex flex-wrap items-center gap-2 mt-2'>
          {tags.map((tag, index) => (
            <span key={index} className='flex items-center gap-2 text-sm font-medium text-slate-900 bg-slate-100 rounded px-3 py-1'>
              # {tag}
              <button onClick={() => {handleRemoveTag(tag)}}>
                <MdClose/>
              </button>
            </span>
          ))}
        </div>)
      }

      <div className='flex items-center gap-4 mt-3'>
        <input
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          type="text"
          value={inputValue}
          placeholder='Add tags'
          className='text-sm bg-transparent border rounded outline-none px-3 py-2'
        />

        <button
          onClick={() => { addNewTag() }}
          className='flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700 w-8 h-8'
        >
          <MdAdd className='text-2xl text-blue-700 hover:text-white'></MdAdd>
        </button>
      </div>
    </div>
  )
}

export default TagInput
