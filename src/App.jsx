import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider } from './context/UserContext'
import { Home } from './components/Home'

function App() {

  return (
    <UserProvider>
      <Home />
    </UserProvider>
  )
}

export default App
