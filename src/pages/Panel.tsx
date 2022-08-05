import React, { useContext } from 'react'
import { CircleNotch, SignOut } from 'phosphor-react'
import { Client } from 'tmi.js'

import { AuthContext } from '../contexts/authContext'
import { Link } from 'react-router-dom'

type MessageContent = {
  content: string
  user: string
  color?: string
  timestamp: string
}

export const Panel: React.FC = () => {
  const { user } = useContext(AuthContext)
  const [client, setClient] = React.useState<Client | null>(null)
  const [messages, setMessages] = React.useState<MessageContent[]>([])

  React.useEffect(() => {
    const connect = async () => {
      const token = localStorage.getItem('@crystal/token')

      if (token && user) {
        const client = new Client({
          channels: [user.login],
          connection: { reconnect: true, secure: true },
          identity: { username: user.login, password: token },
          options: { skipUpdatingEmotesets: true },
        })

        client.on('message', (channel, userstate, message) => {
          setMessages(
            [
              ...messages,
              {
                content: message,
                user: userstate['display-name'] ?? userstate.username ?? '?',
                color: userstate.color,
                timestamp: new Date().toLocaleTimeString(),
              }
            ]
          )
        })

        setClient(client)
        client.connect()

        setClient(client)
      }
    }

    connect()

    return () => {
      if (client) {
        client.disconnect()
      }
    }
  }, [user])

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-emerald-600 to-blue-600'>
      {
        user ? (
          <div className='bg-zinc-900 bg-opacity-75 flex justify-center items-center gap-2 p-1 rounded'>
            <img
              src={user.profile_image_url}
              alt={user.display_name}
              width={56}
              className='rounded'
            />

            <div>
              <h3 className='text-lg font-bold'>
                {user.display_name}
              </h3>

              <p className='text-sm truncate max-w-[192px]' title={user.description}>
                {user.description}
              </p>
            </div>

            <Link
              to='/signOut'
              className='text-4xl p-2 bg-zinc-100 bg-opacity-5 rounded hover:bg-opacity-20 transition-colors cursor-pointer'
            >
              <SignOut weight='bold' />
            </Link>
          </div>
        ) : (
          <span className='text-6xl animate-spin'>
            <CircleNotch />
          </span>
        )
      }

      <div className='w-[90vw] h-[40vh] p-4 bg-zinc-900 rounded bg-opacity-50 flex flex-col-reverse'>
        {
          messages.map(({ content, user, color, timestamp }, index) => (
            <p key={index + user + timestamp} className='text-sm text-gray-100'>
              <span className='text-xs'>{timestamp}</span>
              <span> - </span>
              <span className='text-bold text-emerald-400' style={{ color }}>{user}</span>
              <span>: </span>
              <span className=''>{content}</span>
            </p>
          ))
        }
      </div>
    </div>
  )
}