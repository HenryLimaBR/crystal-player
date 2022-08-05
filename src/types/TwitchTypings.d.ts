export interface TwitchAuthorizeResponseType {
  access_token: string
  scope: string
  token_type: string
}

export interface TwitchUserType {
  broadcaster_type: string
  created_at: string
  description: string
  display_name: string
  email: string
  id: string
  login: string
  offline_image_url: string
  profile_image_url: string
  type: string
  view_count: number
}