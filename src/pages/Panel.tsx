import React, { useContext, useEffect } from 'react'
import { CircleNotch, SignOut } from 'phosphor-react'

import { AuthContext } from '../contexts/authContext'
import { Link } from 'react-router-dom'

export const Panel: React.FC = () => {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    // 
  }, [])

  return (
    <div className='w-full min-h-screen flex flex-col justify-start items-center gap-4 bg-gradient-to-br from-emerald-600 to-blue-600'>
      <nav className='w-full h-12 bg-zinc-900 bg-opacity-75 relative flex items-center'>
        <div className='absolute flex items-center gap-2 right-0 px-2'>
          {
            user ? (
              <a
                className='w-8 h-8 ring-2 rounded-full ring-zinc-100'
                title={user.login}
                href={`https://twitch.tv/${user.login}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={user.profile_image_url}
                  alt={user.display_name}
                  className='aspect-square rounded-full animate-fadeIn'
                />
              </a>
            ) : (
              <span className='rounded-full animate-zoomIn'>
                <CircleNotch
                  className='animate-spin w-8 h-8 text-zinc-100'
                />
              </span>
            )
          }

          <Link
            to='/signout'
            className='animate-fadeIn p-1 hover:scale-110 bg-zinc-100 bg-opacity-0 rounded hover:bg-opacity-25 transition-all'
          >
            <SignOut className='w-6 h-6 text-zinc-100' />
          </Link>
        </div>
      </nav>
    </div>
  )
}