import React, { useState } from 'react'
import PasswordInput from '../../components/Input/PasswordInput'
import { Link } from 'react-router-dom'
import { validateEmail } from '../../ultils/helpers'

function SignUp() {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!fullname) {
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
  }

  return (
    <div>
      <div className='flex items-center justify-center mt-28'>
        <div className='rounded border bg-white w-96 px-7 py-10'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>Sign Up</h4>

            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
