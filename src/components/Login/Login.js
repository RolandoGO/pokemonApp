import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"


export default function Login() {
  return (
    <div className='loginWrapper'>

      <div className='loginForm'>
        <input type={"email"}></input>
        <input type={"password"}></input>

        <button>Login</button>

        <Link to={"/register"}>Register</Link>
      </div>
      
    </div>
  )
}
