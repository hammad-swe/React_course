import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = React.useState();
  //  useEffect(() => {
  //      fetch('https://api.github.com/users/Hammad200217')
  //          .then(response => response.json())
  //          .then(data => {
  //           onsole.log(data)
  //              setData(data)
  //          })
  //  }, [])

  return (
    <div className='text-center text-white bg-gray-700 p-4 text-3xl'>Github : {data.followers}
    <div className='flex flex-row items-center justify-center m-4'>
    <div>
    <img src={data.avatar_url} alt="GithubPicture"  width={300} className='rounded-full p-4 border-2 border-gray-500'/> 
    </div>
    <div className='flex flex-col items-center justify-center border-2 border-gray-500 p-4 ml-4'> 
    <h1 className='text-2xl'>Name : {data.name}</h1>
    <h1 className='text-2xl'>Bio : {data.bio}</h1>
    <h1 className='text-2xl'>Location : {data.location}</h1>
  
    </div>
    <div className='flex flex-col items-center justify-center border-2 border-gray-500 p-4 ml-4'>
    <h1 className='text-2xl'>Public Repos : {data.public_repos}</h1>
    <h1 className='text-2xl'>Public Gists : {data.public_gists}</h1>
    <h1 className='text-2xl'>Followers : {data.followers}</h1>
    </div>
    
    </div>
  
    </div>

  )
}

export default Github
export async function githubInfoLoader() {
  const response = await fetch('https://api.github.com/users/Hammad200217')
  if (!response.ok) {
    throw new Response("Failed to fetch data", {status: 500})
  }
  return response.json()
}