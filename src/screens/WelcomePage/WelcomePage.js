import React from 'react'
import "./welcomePage.css"
import { useNavigate } from 'react-router'

export default function WelcomePage() {

  const navigate = useNavigate()
  return (
    <div className='welcomePageImg'>

      <div className='btnContainer'>
        <button onClick={()=>navigate("/login")} >LOGIN</button>
      </div>
        
        
      

    </div>
  )
}
