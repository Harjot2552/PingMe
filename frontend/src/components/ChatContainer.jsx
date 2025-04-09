import React, { useEffect } from 'react'
import {useChatStore} from "../store/useChatStore "

const ChatContainer = () => {
  const {isMessagesLoading, messages, getMessages, selectedUser} = useChatStore();

useEffect(()=>{
  getMessages(selectedUser._id)
}, [selectedUser._id, getMessages])

  if(isMessagesLoading) return <div>Loading..</div>
  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
