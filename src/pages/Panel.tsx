import React from 'react'

import { Navbar } from '../components/Navbar'
import { PanelItem } from '../components/PanelItem'
import { VideoList } from '../components/VideoList'
import { VideoPlayer } from '../components/VideoPlayer'
import { playListMock } from '../data/playListMock'

export const Panel: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col bg-gradient-to-br from-emerald-600 to-blue-600'>
      <Navbar />

      <div className='flex flex-1 overflow-hidden overflow-y-auto'>

        <PanelItem>
          <span className='text-lg font-bold'>
            Your Playlist
          </span>

          <VideoList playlist={playListMock.videos} />
        </PanelItem>

        <PanelItem>
          <span className='text-lg font-bold'>
            Viewers Request Playlist
          </span>

          <VideoList playlist={undefined} />
        </PanelItem>

        <PanelItem>
          <span className='text-lg font-bold'>
            Player
          </span>
          
          <VideoPlayer />
        </PanelItem>

      </div>
    </div>
  )
}