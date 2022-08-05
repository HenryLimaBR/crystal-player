import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleNotch } from 'phosphor-react'

import type { TwitchAuthorizeResponseType } from '../types/TwitchTypings'

import { AuthContext } from '../contexts/authContext'
import { parseHash } from '../utils/url-utils'
import { validateToken } from '../services/twitch-data'

export const SignIn: React.FC = () => {
  const { signInUrl, signIn, signOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const urlHasToken = window.location.hash.includes('access_token')

  useEffect(() => {
    const validate = async () => {
      const token = localStorage.getItem('@crystal/token')

      if (!token && !urlHasToken) {
        window.location.href = signInUrl
      } else if (!token && urlHasToken) {
        const tokenData = parseHash<TwitchAuthorizeResponseType>(window.location.hash)
        localStorage.setItem('@crystal/token', tokenData.access_token)
      } else if (token && !urlHasToken) {
        const tokenInfo = await validateToken()

        if (tokenInfo.status === 200) {
          signIn()
          navigate('/panel')
        } else {
          signOut()
          navigate('/signIn')
        }
      } else if (token && urlHasToken) {
        signIn()
        navigate('/panel')
      } else {
        navigate('/')
      }
    }

    validate()
  }, [urlHasToken])

  return (
    <div className='w-full min-h-screen flex justify-center items-center gap-4 bg-gradient-to-br from-purple-700 to-blue-400'>
      <h1 className='text-2xl'>
        You will be redirected soon!
      </h1>

      <CircleNotch className='animate-spin' size={40} />
    </div>
  )
}