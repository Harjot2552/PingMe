import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

const Navbar = () => {
  const {authUser, logout} = useAuthStore();
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar
