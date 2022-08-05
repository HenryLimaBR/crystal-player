import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'

import { Router } from './Router'

export const App: React.FC = () => {
  return (
    <BrowserRouter>

      <AuthContextProvider>
        <Router />
      </AuthContextProvider>

    </BrowserRouter>
  )
}
