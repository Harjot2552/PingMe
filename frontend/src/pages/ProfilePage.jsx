import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const ProfilePage = () => {
  const {authuser, isUpdatingProfile, updateProfile}  = useAuthStore()
  return (
    <div>
      
    </div>
  )
}

export default ProfilePage
