import React from 'react'
import { useChatStore } from '../store/useChatStore'

const HomePage = () => {
  const {selectedUser} = useChatStore();
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default HomePage
