import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import SidebarSkeleton from './skeltons/SidebarSkelton';

const Sidebar = () => {
    const {isUsersLoading,getUsers, selectedUser, setSelectedUser, users } =    useChatStore();

    const onlineUsers = []

    useEffect(()=>{
        getUsers();
    },[getUsers])

    if (isUsersLoading) return <SidebarSkeleton/>
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
