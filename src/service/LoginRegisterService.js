

export default function LoginRegisterService() {


  function emailValidation(email){
    if(!/^[a-zA-Z0-9]+@gmail.com$/.test(email))return true
    else return false
  }

function passwordValidation(password){
    if(!/^[0-9]{5}$/.test(password))return true
    else return false
  }

  
 function handleChange(e, formValues, setFormValues){

    const {name, value}= e.target
    setFormValues({...formValues, [name]:value})

    
   }



return {
  handleChange,
  passwordValidation,
  emailValidation
}
  
}
