import React from 'react'
import { CustomState } from '../types/Generic'

interface MediaContextProps {
  currentVideoState: CustomState<string>
}

export const MediaContext = React.createContext({} as MediaContextProps)

interface MediaContextProviderProps {
  children: React.ReactNode
}

export const MediaContextProvider: React.FC<MediaContextProviderProps> = ({ children }) => {
  const [currentVideo, setCurrentVideo] = React.useState<string>('')

  return (
    <MediaContext.Provider value={{
      currentVideoState: [currentVideo, setCurrentVideo]
    }}>
      {children}
    </MediaContext.Provider>
  )
}