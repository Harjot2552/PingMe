import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ProfilePage = () => {
  const {authuser, isUpdatingProfile, updateProfile}  = useAuthStore();
  const handleUploadImage = async (e) =>{

  }
  return (
    <div className='h-screen pt-20'>
      
    </div>
  )
}

export default ProfilePage
