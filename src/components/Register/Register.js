import React, { useState } from 'react'
import RegisterService from './registerService'
import LoginRegisterService from '../../service/LoginRegisterService'
import { useNavigate } from 'react-router'
import "./register.css"




export default function Register() {

  const navigate = useNavigate()
  
 const initialValues = {email:"", password:""}
  const [userData, setUserData] = useState(initialValues)
  const {handleRegister} = RegisterService()
  const {handleChange, emailValidation, passwordValidation} = LoginRegisterService()


  

  let emailErrVali =  userData.email&&emailValidation(userData.email)? <p>Invalid email</p>:""
  let passwordErrVali = userData.password&&passwordValidation(userData.password)? <p>Invalid password</p>:""
  let btnDisable = userData.email&&userData.password&& !emailErrVali&& !passwordErrVali? false:true
  let btnDisableMsj = btnDisable?<p>Fill the inputs with valid data</p> : ""
  

  return (
    <div className='registerWrapper'>

      
      
      <form className='registerForm' onSubmit={(e)=>handleRegister(e,userData)}>
      <p>Go to Login</p>
      <div className='goToLogin' onClick={()=>navigate("/login")}></div>

        <input autoComplete='' name={"email"} type={"email"} placeholder={"User email:"} required onChange={(e)=>handleChange(e,userData,setUserData)}></input>

        {emailErrVali}

        <input autoComplete='' name={"password"} type={"password"} placeholder={"5 numeric characters"} required onChange={(e)=>handleChange(e,userData,setUserData)}></input>

        {passwordErrVali}

        <button disabled={btnDisable}>Register</button>
        {btnDisableMsj}
        


      </form>
    
      
      </div>
  )
}
