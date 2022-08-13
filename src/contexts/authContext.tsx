import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { TwitchUserType } from '../types/TwitchTypings'

import twitchConfig from '../config/twitchConfig'
import { api, getUser, revokeToken, validateToken } from '../services/twitch-data'

interface AuthContextProps {
  user: TwitchUserType | null
  signInUrl: string
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = React.createContext({} as AuthContextProps)

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<TwitchUserType | null>(null)

  const navigate = useNavigate()

  const signInUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchConfig.clientId}&response_type=token&redirect_uri=${window.location.protocol}//${window.location.host}/signin&scope=${twitchConfig.scopes.join(' ')}`

  const signIn = async () => {
    const token = localStorage.getItem('@crystal/token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const user = await getUser()
    setUser(user)
  }

  const signOut = async () => {
    localStorage.removeItem('@crystal/token')
    await revokeToken()
    api.defaults.headers.common.Authorization = ''
    setUser(null)
  }

  const validate = async () => {
    const token = localStorage.getItem('@crystal/token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    if (token) {
      const tokenInfo = await validateToken()
      tokenInfo.status === 200 ? await signIn() : navigate('/signout')
    } else {
      navigate('/signout')
    }
  }

  useEffect(() => {
    validate()
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      signInUrl,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}