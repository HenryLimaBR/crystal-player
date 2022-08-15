import axios from 'axios'
import type { PlaylistInfo, VideoInfo } from '../types/YotubeTypings'

export const api = axios.create({
  validateStatus: () => true,
  baseURL: 'https://youtube-playlist-fetch.vercel.app/api',
})

export async function getPlaylistInfo(urlOrId: string): Promise<PlaylistInfo> {
  const { data } = await api.get<PlaylistInfo>(`/playlist?q=${urlOrId}`)
  return data
}

export async function getVideoInfo(urlOrId: string): Promise<VideoInfo> {
  const { data } = await api.get<VideoInfo>(`/video?q=${urlOrId}`)
  return data
}