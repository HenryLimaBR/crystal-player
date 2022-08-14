import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CircleNotch } from 'phosphor-react'

import type { TwitchAuthorizeResponseType } from '../types/TwitchTypings'

import { AuthContext } from '../contexts/authContext'
import { parseHash } from '../utils/url-utils'

export const SignIn: React.FC = () => {
  const { signInUrl, signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const urlHasToken = location.hash.includes('access_token')

  const handleSignIn = async () => {
    !urlHasToken && (window.location.href = signInUrl)
    const tokenData = parseHash<TwitchAuthorizeResponseType>(window.location.hash)
    localStorage.setItem('@crystal/token', tokenData.access_token)
    await signIn()
    navigate('/panel')
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