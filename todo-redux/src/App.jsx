import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {


  return (
    <>
    <h1 className='text-6xl underline font-bold text-blue-600'>Learn About Redux Toolkit</h1>
    <AddTodo/>
    <Todos/>
    <Footer/>

    </>


  )
}

export default App
