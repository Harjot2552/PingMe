import { create } from "zustand";
import { axiosInstant } from "../lib/axios";

export const useAuthStore = create((set)=>  ({
 authUser: null,
 isSigningUp: false,
 isLoggingIn: false,
 isUpdatingProfile: false,
 isCheckingAuth: true,

 checkAuth: async() =>{
    try {
        const res =  await axiosInstant.get("/auth/check")
        set({authUser:res.data})
    } catch (error) {
        console.log("Error in checkAuth", error)
        set({authUser:null})
    }finally{
        set({isCheckingAuth: false})
    }
 }
}))