import axios from 'axios'
import type { TwitchUserType } from '../types/TwitchTypings'

import twitchConfig from '../config/twitchConfig'

export const api = axios.create({
  validateStatus: () => true,
})

export async function getUser(): Promise<TwitchUserType> {
  const { data } = await api.get<{ data: [TwitchUserType] }>('https://api.twitch.tv/helix/users', {
    headers: {
      'Client-Id': twitchConfig.clientId,
    },
  })

  console.log(data)

  return data.data[0]
}

export async function validateToken() {
  const response = await api.get('https://id.twitch.tv/oauth2/validate')
  return response
}

export async function revokeToken() {
  const response = await api.post('https://id.twitch.tv/oauth2/revoke')
  return response
}