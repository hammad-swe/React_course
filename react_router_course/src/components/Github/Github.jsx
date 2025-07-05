import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'

function Github() {
    const [data, setData] = React.useState(null);
   useEffect(() => {
       fetch('https://api.github.com/users/Hammad200217')
           .then(response => response.json())
           .then(data => {
            onsole.log(data)
               setData(data)
           })
   }, [])

  return (
    <div className='text-center text-white bg-gray-700 p-4 text-3xl'>Github : {data.f}</div>
  )
}

export default Github