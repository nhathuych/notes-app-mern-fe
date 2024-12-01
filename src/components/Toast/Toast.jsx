import React, { useEffect } from 'react'
import { LuCheck } from 'react-icons/lu'
import { MdDeleteOutline } from 'react-icons/md'

function Toast({ isShown, message, type, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 3000)

    return () => { clearTimeout(timeout) }
  }, [onclose])

  return (
    <div className={`absolute transition-all duration-400 ${ isShown ? 'opacity-100' : 'opacity-0' } top-20 right-6`}>
      <div className={`min-w-52 bg-white rounded-md border shadow-2xl after:w-[5px] after:h-full after:absolute after:left-0 after:top-0 after:rounded-l-lg ${ type == 'delete' ? 'after:bg-red-500' : 'after:bg-green-500' }`}>
        <div className='flex items-center gap-3 px-4 py-2'>
          <div className={`flex items-center justify-center rounded-full ${ type == 'delete' ? 'bg-red-100' : 'bg-green-100' } w-10 h-10`}>
            { type == 'delete' ? <MdDeleteOutline className='text-xl text-red-500' /> : <LuCheck className='text-xl text-green-500' /> }
          </div>

          <p className='text-sm text-slate-800'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Toast
