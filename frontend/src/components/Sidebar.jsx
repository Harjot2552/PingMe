import React from 'react'
import { useChatStore } from '../store/useChatStore'

const Sidebar = () => {
    const {isUsersLoading,getUsers, selectedUser, setSelectedUser, users } =    useChatStore();
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
