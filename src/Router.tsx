import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { SignIn } from './pages/SignIn'
import { SignOut } from './pages/SignOut'
import { Panel } from './pages/Panel'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signout' element={<SignOut />} />
      <Route path="/panel" element={<Panel />} />

      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}