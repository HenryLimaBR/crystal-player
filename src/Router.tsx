import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { Panel } from './pages/Panel'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/panel" element={<Panel />} />

      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}