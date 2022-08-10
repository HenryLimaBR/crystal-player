import React from 'react'

import { UserLogoutButton } from './UserLogoutButton'

export const Navbar: React.FC = () => {
  return (
    <nav className='w-full h-12 bg-zinc-900 bg-opacity-75 relative flex items-center'>
      <UserLogoutButton />
    </nav>
  )
}