import {create} from "zustand"
import toast from "react-hot-toast"
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,

    getUsers: async () =>{
        set({isUsersLoading: true})
        try {
            const res = await axiosInstance.get("/message/users")
            set({users: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isUsersLoading: false})
        }
    },

    getMessages: async (userId) =>{
        set({isMessagesLoading: true})
        try {
            const res = await axiosInstance.get(`/message/${userId}`)
            set({message: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isMessagesLoading: false})
        }

    },

    sendMessages: async (messageData) =>{
    const {messages, selectedUser} = get();

    try {
        const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData)
    } catch (error) {
        
    }
    },

    setSelectedUser: (selectedUser) => set({selectedUser})
}))
