import { useNavigate } from "react-router-dom";
import constants from "../../constants";

export default function RegisterService() {


    const navigate = useNavigate()

    function handleRegister(e,data){

        const userDate = {email:data.email,password: data.password}
        e.preventDefault()

       
        localStorage.setItem("user", JSON.stringify(userDate))

        navigate(constants.loginURL)

    }




    return {handleRegister}
  
}
