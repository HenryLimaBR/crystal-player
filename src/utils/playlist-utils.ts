import { PlaylistVideoInfo, VideoInfo } from '../types/YotubeTypings'

export function VideoInfoToPlaylistVideoInfo(videoInfo: VideoInfo): PlaylistVideoInfo {
  return {
    title: videoInfo.title,
    author: videoInfo.author,
    duration: videoInfo.duration,
    listId: videoInfo.videoId,
    thumbnail: videoInfo.thumbnail,
    videoId: videoInfo.videoId,
  }
}

export function idToUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`
}