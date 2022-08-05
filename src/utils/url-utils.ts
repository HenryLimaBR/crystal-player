export function parseHash<T = { [key: string]: unknown }>(hash: string): T {
  hash = decodeURIComponent(hash)
  hash = hash.substring(1)
  const entries = hash.split('&').map(entry => entry.split('='))
  const result = Object.fromEntries(entries) as T
  return result
}