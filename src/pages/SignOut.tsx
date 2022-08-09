import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleNotch } from 'phosphor-react'

import { AuthContext } from '../contexts/authContext'

export const SignOut: React.FC = () => {
  const { signOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  useEffect(() => {
    handleSignOut()
  }, [])

  return (
    <div className='w-full min-h-screen flex justify-center items-center gap-4 bg-gradient-to-br from-purple-700 to-blue-400'>
      <h1 className='text-2xl'>
        You will be redirected soon!
      </h1>

      <CircleNotch className='animate-spin' size={40} />
    </div>
  )
}