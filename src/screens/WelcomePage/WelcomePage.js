import React from 'react'
import { useNavigate } from 'react-router'
import constants from '../../constants'
import "./welcomePage.css"


export default function WelcomePage() {

  const navigate = useNavigate()
  
  return (
    <div className='welcomePageImg'>

      <div className='btnContainer'>
        <button onClick={()=>navigate(constants.loginURL)} >LOGIN</button>
      </div>
        
        
      

    </div>
  )
}
