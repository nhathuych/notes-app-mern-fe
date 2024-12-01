import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../ultils/helpers'
import axiosInstance from '../../ultils/axiosInstance'
import { API_URLS, LOCAL_STORAGE_KEYS } from '../../ultils/constants'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError("Please enter e valid email.")
      return
    }

    if (!password) {
      setError("Please enter your password.")
      return
    }

    setError(null)

    try {
      const response = await axiosInstance.post(API_URLS.login, { email, password })

      if (response?.data?.data?.accessToken) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.access_token, response.data.data.accessToken)
        navigate('/dashboard')
      }
    } catch(error) {
      if (error?.response?.data?.message) {
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
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Login</h4>

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

            <button type='submit' className='btn-primary'>Login</button>
            {error && <p className='text-xs text-red-600 py-1'>{error}</p>}

            <p className='text-center text-sm mt-4'>
              Not registered yet?{' '}
              <Link to='/signup' className='text-primary font-medium underline'>
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
