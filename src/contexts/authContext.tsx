import React, { useEffect } from 'react'
import type { TwitchUserType } from '../types/TwitchTypings'

import twitchConfig from '../config/twitchConfig'
import { api, getUser } from '../services/twitch-api'

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

  const signInUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchConfig.clientId}&response_type=token&redirect_uri=${window.location.protocol}//${window.location.host}/signin&scope=${twitchConfig.scopes.join(' ')}`

  const signIn = async () => {
    const token = localStorage.getItem('@crystal/token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const user = await getUser()
    setUser(user)
  }

  const signOut = async () => {
    localStorage.removeItem('@crystal/token')
    api.defaults.headers.common.Authorization = ''
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('@crystal/token')
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      getUser().then(setUser)
    }
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