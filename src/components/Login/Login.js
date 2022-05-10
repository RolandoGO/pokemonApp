import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import serviceLogin from './ServiceLogin'
import LoginRegisterService from '../../service/LoginRegisterService'
import constants from '../../constants'
import "./login.css"


export default function Login() {

  const initialValues = {email:"", password:""}
  const [formValues, setFormValues] = useState(initialValues)
  const [submitMsj, setSubmitMsj] = useState(true)

  const { handleSubmit} = serviceLogin()
  const { handleChange, emailValidation, passwordValidation}= LoginRegisterService()
  
  
  let emailErrVali =  formValues.email&&emailValidation(formValues.email)?<p className='errMsj'>Invalid email data, try rolo@gmail.com</p>: ""

  let passwordErrVali = formValues.password&&passwordValidation(formValues.password)? <p className='errMsj'>Invalid password, try 5 numeric characters</p>:""

  let btnDisable = formValues.email && formValues.password && !emailErrVali && !passwordErrVali? false:true

  let loginErrMsj = !submitMsj? <p className='errMsj'>User not register, go to the register page</p>: ""

  return (
    <div className='loginWrapper'>

      <form className='loginForm' onSubmit={(e)=>handleSubmit(e ,formValues, setSubmitMsj)}>

        <input autoComplete='' name={"email"} type={"email"} onChange={(e)=>handleChange(e,formValues,setFormValues)} required></input>
        {emailErrVali}

        <input autoComplete='' name ={"password"} type={"password"}  onChange={(e)=>handleChange(e, formValues, setFormValues)} required></input>
        {passwordErrVali}

        <button disabled={btnDisable}>Login</button>

        {loginErrMsj}

        <Link to={constants.registerURL}>Register</Link>
      </form>
      
    </div>
  )
}
