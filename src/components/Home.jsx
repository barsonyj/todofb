import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Login } from './Login'
import { Todos } from './Todos'

export const Home = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      {user ? <Todos /> : <Login />}
    </div>
  )
}
