import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CircleNotch } from 'phosphor-react'

import type { TwitchAuthorizeResponseType } from '../types/TwitchTypings'

import { AuthContext } from '../contexts/authContext'
import { parseHash } from '../utils/url-utils'

export const SignIn: React.FC = () => {
  const { signInUrl, signIn, signOut } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const urlHasToken = location.hash.includes('access_token')

  const handleSignIn = async () => {
    const token = localStorage.getItem('@crystal/token')

    if (token && !urlHasToken) {
      await signOut()
    }

    if (!token && !urlHasToken) {
      window.location.href = signInUrl
    } else if (!token && urlHasToken) {
      const tokenData = parseHash<TwitchAuthorizeResponseType>(window.location.hash)
      localStorage.setItem('@crystal/token', tokenData.access_token)
    } else if (token && urlHasToken) {
      await signIn()
      navigate('/panel')
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    handleSignIn()
    const timer = setInterval(handleSignIn, 1500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className='w-full min-h-screen flex justify-center items-center gap-4 bg-gradient-to-br from-purple-700 to-blue-400'>
      <h1 className='text-2xl animate-fadeIn'>
        You will be redirected soon!
      </h1>

      <span className='animate-zoomIn'>
        <CircleNotch className='animate-spin' size={40} />
      </span>
    </div>
  )
}