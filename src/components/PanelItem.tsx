import React from 'react'

interface PanelItemProps {
  children: React.ReactNode
}

export const PanelItem: React.FC<PanelItemProps> = ({ children }) => {
  return (
    <div className='bg-zinc-900 bg-opacity-50 m-1 p-2 rounded-md w-1/3 flex flex-col gap-2 items-center'>
      {children}
    </div>
  )
}