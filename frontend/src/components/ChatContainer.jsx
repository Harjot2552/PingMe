import React from 'react'
import {useChatStore} from "../store/useChatStore "

const ChatContainer = () => {
  const {isMessagesLoading, messages, getMessages} = useChatStore();
  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
