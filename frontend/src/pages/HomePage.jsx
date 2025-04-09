import React from 'react'
import { useChatStore } from '../store/useChatStore'

const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div className='h-screen bg-base-200'>
      <div className='flex items-center justify-center pt-20 px-4'>

      </div>
    </div>
  )
}

export default HomePage
