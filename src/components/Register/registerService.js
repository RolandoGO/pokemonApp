import { useNavigate } from "react-router-dom";

export default function RegisterService() {


    const navigate = useNavigate()

    function handleRegister(e,data){

        const userDate = {email:data.email,password: data.password}
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(userDate))

        navigate("/Login")

    }




    return {handleRegister}
  
}
