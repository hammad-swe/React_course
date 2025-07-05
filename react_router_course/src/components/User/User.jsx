import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className='bg-gray-700 text-2xl text-white p-4 justify-center'>User: {userid}</div>
  )
}

export default User