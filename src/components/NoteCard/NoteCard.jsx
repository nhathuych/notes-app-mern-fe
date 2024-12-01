import React from 'react'
import { MdOutlinePushPin, MdCreate, MdDelete } from 'react-icons/md'
import moment from 'moment'

function NoteCard({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) {
  return (
    <div className='border rounded bg-white hover:shadow-xl transition-all ease-in-out p-4'>
      <div className='flex items-center justify-between'>
        <div>
          <h6 className='text-sm font-medium'>{title}</h6>
          <span className='text-xs text-slate-500'>{moment(date).format('Do MMM YYYY')}</span>
        </div>

        <MdOutlinePushPin
          onClick={onPinNote}
          className={`icon-btn ${ isPinned ? 'text-primary' : 'text-slate-300' }`}
        />
      </div>

      <p className='text-xs text-slate-900 mt-2'>{content?.slice(0, 60)}</p>

      <div className='flex items-center justify-between mt-2'>
        <div className='text-xs text-slate-500'>{tags.map((tag) => { return `#${tag}` }).join(', ')}</div>

        <div className='flex items-center gap-2'>
          <MdCreate
            onClick={onEdit}
            className='icon-btn hover:text-green-600'
          />

          <MdDelete
            onClick={onDelete}
            className='icon-btn hover:text-red-500'
          />
        </div>
      </div>
    </div>
  )
}

export default NoteCard
