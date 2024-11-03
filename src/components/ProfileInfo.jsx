import React from 'react'
import { getInitialsName } from '../ultils/helpers'

function ProfileInfo({ handleLogout }) {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center justify-center rounded-full text-slate-900 bg-slate-100 font-medium w-12 h-12'>
        {getInitialsName('Huy Huy')}
      </div>

      <div>
        <p className='text-sm font-medium'>Huy</p>
        <button onClick={handleLogout} className='text-sm text-slate-700 underline'>
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo
