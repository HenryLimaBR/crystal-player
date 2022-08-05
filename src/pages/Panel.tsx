import React, { useContext } from 'react'
import { CircleNotch, SignOut } from 'phosphor-react'

import { AuthContext } from '../contexts/authContext'
import { Link } from 'react-router-dom'

export const Panel: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-emerald-600 to-blue-600'>
      {
        user ? (
          <div className='bg-zinc-900 bg-opacity-75 flex justify-center items-center gap-2 p-1 rounded'>
            <img
              src={user.profile_image_url}
              alt={user.display_name}
              width={56}
              className='rounded'
            />

            <div>
              <h3 className='text-lg font-bold'>
                {user.display_name}
              </h3>

              <p className='text-sm text-clip'>
                {user.description}
              </p>
            </div>

            <Link
              to='/signOut'
              className='text-4xl p-2 bg-zinc-100 bg-opacity-5 rounded hover:bg-opacity-20 transition-colors cursor-pointer'
            >
              <SignOut weight='bold' />
            </Link>
          </div>
        ) : (
          <span className='text-6xl animate-spin'>
            <CircleNotch />
          </span>
        )
      }
    </div>
  )
}