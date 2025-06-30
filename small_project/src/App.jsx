import { useState , useCallback } from 'react'

import './App.css'

function App() {
  const [length , setlenght] = useState(8)
  const [numallow , setnumallow] = useState(false)
  const [charallow , setcharallow] = useState(false)
  const [Password, setPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numallow) str += "0123456789"
    if(charallow) str += "!@#$%^&*()_+[]{}|;':,./<>?`~"
    for(let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass)
  },[length, numallow, charallow,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-4xl px-4 my8 text-orange-800 bg-gray-700 m-15 text-center'> Test</div>
    </>
  )
}

export default App
