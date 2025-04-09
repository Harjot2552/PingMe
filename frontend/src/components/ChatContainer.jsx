import React from 'react'
import {useChatStore} from "../store/useChatStore "

const ChatContainer = () => {
  const {isMessagesLoading, messages, getMessages, selectedUser} = useChatStore();

  if(isMessagesLoading) return <div>Loading..</div>
  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
