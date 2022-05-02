import { useNavigate } from "react-router-dom";


export default function ServiceLogin() {

    
  const navigate = useNavigate()

   function emailValidation(email){
        if(!/rolo@gmail.com$/.test(email))return true
        else return false
      }
    
    function passwordValidation(password){
        if(!/^[0-9]{5}$/.test(password))return true
        else return false
      }
    
      
     function handleChange(e, setFormValues, formValues){
    
        const {name, value}= e.target
        setFormValues({...formValues, [name]:value})
    
        
       }
    
      function handleSubmit(e,setSubmitMsj){
         e.preventDefault()

         if(localStorage.getItem("user")){
           
          navigate("/homePage");
         }
         else {
           
          setSubmitMsj(false)
        }
         

         
       }
      

       return{
           emailValidation,
           passwordValidation,
           handleChange,
           handleSubmit
       }
  
}



