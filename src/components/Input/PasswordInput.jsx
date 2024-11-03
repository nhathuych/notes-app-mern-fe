import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

function PasswordInput({value, onChange, placeholder}) {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div className='flex items-center bg-transparent rounded border-[1.5px] px-5 mb-3'>
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder || 'Password'}
        className='w-full text-sm bg-transparent rounded outline-none py-3 mr-3'
      />

      {
        isShowPassword ?
        <FaRegEye
          onClick={() => toggleShowPassword()}
          size={22}
          className='text-primary cursor-pointer'
        /> :
        <FaRegEyeSlash
          onClick={() => toggleShowPassword()}
          size={22}
          className='text-slate-400 cursor-pointer'
        />
      }
    </div>
  )
}

export default PasswordInput
