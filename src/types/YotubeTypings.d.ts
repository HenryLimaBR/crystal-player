export interface PlaylistVideoInfo {
  title: string
  videoId: string
  listId: string
  thumbnail: string
  duration: {
    seconds: number
    timestamp: string
  }
  author: {
    name: string
    url: string
  }
}

export interface PlaylistInfo {
  title: string
  listId: string
  url: string
  size: number
  views: number
  date: string
  image: string
  thumbnail: string
  videos: PlaylistVideoInfo[]
  alertInfo: string
  author: {
    name: string
    url: string
  }
}

export interface VideoInfo {
  title: string
  description: string
  url: string
  videoId: string
  duration: {
    seconds: number
    timestamp: string
  },
  views: number
  genre: string
  uploadDate: string
  ago: string
  image: string
  thumbnail: string
  author: {
    name: string
    url: string
  }
}