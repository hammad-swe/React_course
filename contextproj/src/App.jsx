import React from 'react'
import { UserContextProvider } from './context/userContextProvider'
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <h1>Context Api</h1>
    </UserContextProvider>
  )
}

export default App
