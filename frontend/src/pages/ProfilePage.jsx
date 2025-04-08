import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ProfilePage = () => {
  const {authuser, isUpdatingProfile, updateProfile}  = useAuthStore();
  const handleUploadImage = async (e) =>{

  }
  return (
    <div className='h-screen pt-20'>
      <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-300 rounded-xl px-6 space-y-8'>

        </div>

      </div>
    </div>
  )
}

export default ProfilePage
