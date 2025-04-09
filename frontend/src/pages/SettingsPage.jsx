import React from 'react'
import { useThemeStore } from '../store/useThemeStore'
const PREVIEW_MESSAGES = [
  {id: 1, content: "Hey! How's it's going?", isSent: false},
  {id: 2, content: "I'm doing great! Just working on some new feature.", isSent: false},
]

const SettingsPage = () => {
  const {theme, setTheme} = useThemeStore();
  return (
    <div>
      
    </div>
  )
}

export default SettingsPage
