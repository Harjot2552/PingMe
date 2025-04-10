import React, { useEffect } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useChatStore } from "../store/useChatStore";
import MessageSkelton from "./skeltons/MessageSkelton"

const ChatContainer = () => {
  const { isMessagesLoading, messages, getMessages, selectedUser } =
  const { authUser } =   useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);

  if (isMessagesLoading)
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkelton />
        <MessageInput />
      </div>
    );
  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message)=>{
            <div key={message._id} className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}>


            </div>
          })}
        </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
