import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function ServiceLogin() {

  const {logIn} = useAuth()
    
  const navigate = useNavigate()
  
    
  function handleSubmit(e,loginData,setSubmitMsj){



   e.preventDefault()
   

   const userData = JSON.parse(localStorage.getItem("user"))

    if(userData&&loginData.email===userData.email&& loginData.password===userData.password){
      logIn(true)
      navigate("/homepage")
       
     }
    else {
        setSubmitMsj(false)
      }

    
  }


  
   
    
  return {handleSubmit}
  
}



