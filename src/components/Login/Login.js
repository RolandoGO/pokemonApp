import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import serviceLogin from './ServiceLogin'
import "./login.css"



export default function Login() {

  const initialValues = {email:"", password:""}
  const [formValues, setFormValues] = useState(initialValues)
  const [submitMsj, setSubmitMsj] = useState(true)

  const {handleChange, handleSubmit, emailValidation, passwordValidation} = serviceLogin()
  
  
  let emailErrVali =  emailValidation(formValues.email)
  let passwordErrVali = passwordValidation(formValues.password)
  let btnDisable = formValues.email.length>0 && formValues.password.length>0 && !emailErrVali && !passwordErrVali? false:true
  let emailErrMsj = emailErrVali && formValues.email.length>0? <p className='errMsj'>Invalid email data, try rolo@gmail.com</p>: ""
  let passwordErrMsj = passwordErrVali && formValues.password.length>0? <p className='errMsj'>Invalid password, try 5 numeric characters</p>:""
  let loginErrMsj = !submitMsj? <p className='errMsj'>User not register, go to the register page</p>: ""
  return (
    <div className='loginWrapper'>

      <form className='loginForm' onSubmit={(e)=>handleSubmit(e , setSubmitMsj)}>

        <input name={"email"} type={"email"} onChange={(e)=>handleChange(e,setFormValues, formValues)} required></input>
        {emailErrMsj}

        <input name ={"password"} type={"password"}  onChange={(e)=>handleChange(e, setFormValues, formValues)} required></input>
        {passwordErrMsj}

        <button disabled={btnDisable}>Login</button>

        {loginErrMsj}

        <Link to={"/register"}>Register</Link>
      </form>
      
    </div>
  )
}
