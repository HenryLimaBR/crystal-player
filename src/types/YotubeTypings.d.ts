export interface VideoInfo {
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

export interface VideoList {
  title: string
  listId: string
  url: string
  size: number
  views: number
  date: string
  image: string
  thumbnail: string
  videos: VideoInfo[]
  alertInfo: string
  author: {
    name: string
    url: string
  }
}