import React from 'react'

function EmptyNoteCard({ imgSrc, message }) {
  return (
    <div className='flex flex-col items-center justify-center mt-[16%]'>
      <img src={imgSrc} className='w-60' />

      <p className='text-sm font-medium text-center text-slate-700 leading-7 w-1/2 mt-5'>{message}</p>
    </div>
  )
}

export default EmptyNoteCard
