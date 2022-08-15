import React, { useContext } from 'react'
import { MediaContext } from '../contexts/mediaContext'
import type { PlaylistVideoInfo } from '../types/YotubeTypings'
import { idToUrl } from '../utils/playlist-utils'

interface VideoListProps {
  playlist?: PlaylistVideoInfo[]
}

export const VideoList: React.FC<VideoListProps> = ({ playlist }) => {
  const { currentVideoState: [, setCurrentVideo]} = useContext(MediaContext)

  return (
    <div className='bg-zinc-900 bg-opacity-25 w-full h-full overflow-hidden overflow-y-auto rounded'>
      <ul className='flex flex-col gap-1'>
        {
          playlist && playlist.map(video => (
            <li
              key={video.videoId}
              className='bg-zinc-900 bg-opacity-50 h-14 rounded flex'
              onClick={() => setCurrentVideo(idToUrl(video.videoId))}
            >
              <div className='h-14 p-1 aspect-square flex-shrink-0'>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className='w-full h-full object-cover rounded'
                />
              </div>

              <div className='px-2 truncate'>
                <span className='text-xs font-bold'>
                  {video.title}
                </span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}