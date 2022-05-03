import React from 'react'
import { useNavigate } from 'react-router'


export default function HomePage() {

  const navigate = useNavigate()

  function handleLogout(){
    
    localStorage.clear()
    navigate("/login")
  }
  
  return (
    <div>HomePage

      <button onClick={handleLogout}>Log Out</button>
    </div>
   
  )
}
