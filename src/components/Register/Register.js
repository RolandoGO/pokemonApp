import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className='registerWrapper'>
      
      <form className='registerForm'>

        <input name={"email"} type={"email"} placeholder={"User email:"} required></input>
        <input name={"password"} type={"password"} placeholder={"5 numeric characters"} required></input>

        <button>Register</button>


      </form>
    
      
      </div>
  )
}
