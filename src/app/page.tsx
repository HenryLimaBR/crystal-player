import { Music2, Heart, Twitch } from 'lucide-react'
import CrystalLogo from '../assets/crystal.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-screen bg-gradient-to-br from-blue-800 to-fuchsia-800 flex justify-center items-center flex-col gap-2'>
      <div>
        <Image
          className='bg-gradient-to-r from-blue-200 to-fuchsia-200  rounded-full shadow-lg animate-zoomIn'
          src={CrystalLogo}
          alt='Crystal'
          width={96}
        />
      </div>

      <h2 className='text-3xl px-2 font-light text-center mt-4 animate-fadeIn'>
        Your favorite streamer listening to your favorite music!
      </h2>

      <div className='flex justify-center items-center gap-2 mt-3 animate-fadeIn'>
        <span className='p-2 text-sky-500 animate-bounce'>
          <Music2 size={32} />
        </span>

        <span className='p-2 text-rose-500 animate-bounce' style={{ animationDelay: '250ms' }}>
          <Heart size={32} />
        </span>
      </div>

      <Link
        href={'/signin'}
        className='bg-gradient-to-r from-blue-500 to-emerald-400 px-4 py-2 flex gap-2 items-center rounded hover:saturate-50 transition-all duration-200 ease-in-out hover:ring-2 ring-zinc-100 animate-fadeIn'
      >
        <span className='font-bold text-lg'>
          Get Started with
        </span>
        <span title='Twitch'>
          <Twitch size={28} />
        </span>
      </Link>
    </div>
  )
}
