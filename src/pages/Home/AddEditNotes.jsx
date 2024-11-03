import React, { useState } from 'react'
import TagInput from '../../components/Input/TagInput'

function AddEditNotes() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState([])

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <label className='input-label'>Title</label>
        <input
          value={title}
          onChange={({ target }) => { setTitle(target.value) }}
          type='text'
          placeholder='This is the title test'
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
          placeholder='Content'
          className='text-sm text-slate-950 bg-slate-50 outline-none border rounded p-2'
        />
      </div>

      <div className='mt-3'>
        <label className='input-label'>Tags</label>
        <TagInput tags={tags} setTags={setTags}/>
      </div>
      <button className='btn-primary font-medium mt-5 p-3'>
        Add
      </button>
    </div>
  )
}

export default AddEditNotes
