import React, { useContext } from 'react'
import { CircleNotch, HeartStraight, MusicNotes, TwitchLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

import CrystalLogo from '../assets/crystal.svg'
import { AuthContext } from '../contexts/authContext'

export const LandingPage: React.FC = () => {
  const { isVerifying } = useContext(AuthContext)

  return (
    <div className='w-full h-screen bg-gradient-to-br from-blue-800 to-fuchsia-800 flex justify-center items-center flex-col gap-2'>
      <div>
        <img
          className='bg-gradient-to-r from-blue-300 to-fuchsia-300 rounded-full shadow-lg animate-zoomIn'
          src={CrystalLogo}
          alt="Crystal"
          width={96}
        />
      </div>

      <h2 className='text-3xl px-2 font-light text-center mt-4 animate-fadeIn'>
        Your favorite streamer listening to your favorite music!
      </h2>

      <div className='flex justify-center items-center gap-2 mt-3 animate-fadeIn'>
        <span className='p-2 text-sky-500 animate-bounce'>
          <MusicNotes size={32} weight='duotone' />
        </span>

        <span className='p-2 text-rose-500 animate-bounce' style={{ animationDelay: '250ms' }}>
          <HeartStraight size={32} weight='duotone' />
        </span>
      </div>

      <Link
        to='/signIn'
        className='bg-gradient-to-r from-blue-500 to-emerald-400 px-4 py-2 flex gap-2 items-center rounded hover:saturate-50 transition-all duration-200 ease-in-out hover:ring-2 ring-zinc-100 animate-fadeIn'
        style={{ pointerEvents: isVerifying ? 'none' : 'auto' }}
      >
        <span className='font-bold text-lg'>
          Get Started with
        </span>

        {
          !isVerifying ? (
            <span title='Twitch'>
              <TwitchLogo size={28} weight='duotone' />
            </span>
          ) : (
            <span className='animate-spin' title='Loading' style={{ animationTimingFunction: 'ease-in-out' }}>
              <CircleNotch size={28} weight='duotone' />
            </span>
          )
        }
      </Link>
    </div>
  )
}