import React, { useRef, useState } from 'react'
import { useChatStore } from '../store/useChatStore';

const MessageInput = () => {
    const {text, setText} = useState("")
    const {imgPreview, setImgPreview} = useState(null);
    const fileInputRef = useRef(null);
    const {sendMessages} = useChatStore();

    const handleImageChange = (e) =>{

    }

    const removeImage = () =>{

    }

    const handleSendMessage = async (e) =>{
        
    }

  return (
    <div>
      
    </div>
  )
}

export default MessageInput
