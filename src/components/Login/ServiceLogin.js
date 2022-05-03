import { useNavigate } from "react-router-dom";


export default function ServiceLogin() {

    
  const navigate = useNavigate()
  
    
  function handleSubmit(e,loginData,setSubmitMsj){
   e.preventDefault()
   const userData = JSON.parse(localStorage.getItem("user"))
   

   if(userData&&loginData.email===userData.email&& loginData.password===userData.password){
      
    localStorage.setItem("userAuth","true")

    navigate("/homePage");
  }
   else {
           
      setSubmitMsj(false)
    }
  }
   
    
  return {handleSubmit}
  
}



