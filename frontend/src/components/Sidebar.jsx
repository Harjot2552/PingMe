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
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">

    </aside>
  )
}

export default Sidebar
