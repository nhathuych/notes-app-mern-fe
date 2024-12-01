import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link, useNavigate } from 'react-router-dom'
import { validateEmail } from '../../ultils/helpers'
import axiosInstance from '../../ultils/axiosInstance'
import { API_URLS } from '../../ultils/constants'

function SignUp() {
  const [fullName, setfullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!fullName) {
      setError("Please enter your full name.")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter your email.")
      return
    }

    if (!password) {
      setError("Please enter your password")
      return
    }

    setError(null)

    try {
      const response = await axiosInstance.post(API_URLS.create_user, { fullName, email, password })

      if (response.status == 200) navigate('/login')
    } catch(error) {
      if (error?.response?.data?.error) {
        setError(error.response.data.message)
      } else {
        setError('An unexpected error occurred. Please try again!')
      }
    }
  }

  return (
    <div>
      <div className='flex items-center justify-center mt-28'>
        <div className='rounded border bg-white w-96 px-7 py-10'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>Sign Up</h4>

            <input
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              type='text'
              placeholder='Full name'
              className='input-box'
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Email'
              className='input-box'
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit' className='btn-primary'>Create account</button>
            {error && <p className='text-xs text-red-600 py-1'>{error}</p>}

            <p className='text-center text-sm mt-4'>
              Already have an account?{' '}
              <Link to='/login' className='text-primary font-medium underline'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
