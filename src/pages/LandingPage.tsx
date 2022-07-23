import React from 'react'
import { HeartStraight, MusicNote, TwitchLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

import CrystalLogo from '../assets/crystal.svg'

export const LandingPage: React.FC = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-br from-blue-800 to-fuchsia-800 flex justify-center items-center flex-col gap-2'>
      <div>
        <img
          className='bg-gradient-to-r from-blue-300 to-fuchsia-300 rounded-full shadow-lg'
          src={CrystalLogo}
          alt="Crystal"
          width={96}
        />
      </div>

      <h2 className='text-3xl px-2 font-light text-center mt-4'>
        Your favorite streamer listening to your favorite music!
      </h2>

      <div className='flex justify-center items-center gap-2 mt-3'>
        <span className='p-2 text-purple-500 animate-bounce' style={{ animationDelay: '100ms' }}>
          <TwitchLogo size={32} />
        </span>

        <span className='p-2 text-sky-500 animate-bounce' style={{ animationDelay: '200ms' }}>
          <MusicNote size={32} />
        </span>

        <span className='p-2 text-rose-500 animate-bounce' style={{ animationDelay: '300ms' }}>
          <HeartStraight size={32} />
        </span>
      </div>

      <Link
        to='/get-started'
        className='bg-gradient-to-l from-fuchsia-600 to-blue-400 px-8 py-2 font-bold text-lg rounded hover:saturate-50 transition-all duration-200 ease-in-out hover:ring-2 ring-zinc-100'
      >
        Get Started
      </Link>
    </div>
  )
}