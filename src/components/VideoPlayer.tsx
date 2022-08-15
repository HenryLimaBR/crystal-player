import React, { useContext } from 'react'
import ReactPlayer from 'react-player/youtube'
import { MediaContext } from '../contexts/mediaContext'

export const VideoPlayer: React.FC = () => {
  const {
    currentVideoState: [currentVideo]
  } = useContext(MediaContext)

  return (
    <div className='w-full h-[50%]'>
      <div className='aspect-video rounded overflow-hidden'>
        <ReactPlayer
          url={currentVideo}
          playing={true}
          volume={0.25}
          width='100%'
          height='100%'
          controls
          config={{
            embedOptions: {
              autoplay: true,
              origin: window.location.origin              
            }
          }}
        />
      </div>
    </div>
  )
}