import axios from 'axios'
import type { TwitchUserType } from '../types/TwitchTypings'

import twitchConfig from '../config/twitchConfig'

export const api = axios.create({
  validateStatus: () => true,
  baseURL: 'https://api.twitch.tv',
})

export async function getUser(): Promise<TwitchUserType> {
  const { data } = await api.get<{ data: [TwitchUserType] }>('/helix/users', {
    headers: {
      'Client-Id': twitchConfig.clientId,
    },
  })
  return data.data[0]
}

export async function validateToken() {
  const response = await api.get('/oauth2/validate')
  return response
}

export async function revokeToken() {
  const token = (api.defaults.headers.common.Authorization as string).split(' ')[1]
  const formData = new FormData()
  formData.append('client_id', twitchConfig.clientId)
  formData.append('token', token)
  const response = await api.post('/oauth2/revoke', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  return response
}