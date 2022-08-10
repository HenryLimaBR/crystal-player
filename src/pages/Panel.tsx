import React, { useEffect } from 'react'

import { Navbar } from '../components/Navbar'

export const Panel: React.FC = () => {
  useEffect(() => {
    //
  }, [])

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-4 bg-gradient-to-br from-emerald-600 to-blue-600'>
      <Navbar />
    </div>
  )
}