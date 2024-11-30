import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'
import { MdClose } from 'react-icons/md'

function AddEditNotes({ noteData, type, onCloseModal }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  const [error, setError] = useState(null)

  const handleAddNote = () => {
    if (!title) {
      setError('Please enter the title.')
      return
    }

    if (!content) {
      setError('Please enter the content.')
      return
    }

    setError(null)

    if (type === 'edit') {
      editNote()
    } else {
      addNewNote()
    }
  }

  const addNewNote = async () => {}

  const editNote = async () => {}

  return (
    <div className='relative'>
      <button onClick={onCloseModal} className='flex items-center justify-center absolute rounded-full -top-3 -right-3 hover:bg-slate-600 w-6 h-6'>
        <MdClose className='text-xl text-slate-400'/>
      </button>

      <div className='flex flex-col gap-2'>
        <label className='input-label'>Title</label>
        <input
          value={title}
          onChange={({ target }) => { setTitle(target.value) }}
          type='text'
          placeholder='The title of the note'
          className='text-xl text-slate-950 border outline-none p-2'
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label className='input-label'>Content</label>
        <textarea
          value={content}
          onChange={({ target }) => { setContent(target.value) }}
          type='text'
          rows={9}
          placeholder='Bla bla bla...'
          className='text-sm text-slate-950 bg-slate-50 outline-none border rounded p-2'
        />
      </div>

      <div className='my-3'>
        <label className='input-label'>Tags</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>

      {error && <p className='text-red-600 text-xs pt-2'>{error}</p>}

      <button
        onClick={handleAddNote}
        className='btn-primary font-medium mt-3 p-3'
      >
        Add
      </button>
    </div>
  )
}

export default AddEditNotes
