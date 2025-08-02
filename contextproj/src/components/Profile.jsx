import { useContext } from "react"
import React  from 'react'

function Profile() {
  const { user } = useContext(UserContext);
  
  if (!user) return <div>Please Login</div>

  return (

    <div>Wellcome {user.username}</div>
  )
}

export default Profile