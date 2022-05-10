import React ,{ createContext, useContext, useState} from 'react'

const authContext = createContext(null)

export default function AuthProvider({children}) {


    const [user, setUser] = useState(null)
    const userAuth = localStorage.getItem("userAuth")

    const logIn = (user)=>{
      localStorage.setItem("userAuth", true)
        setUser(user)
    }

    const logOut = ()=>{
      localStorage.removeItem("userAuth")
        setUser(null)

    }


  return (
    <authContext.Provider value={{user, logIn, logOut, userAuth}}>
        {children}
    </authContext.Provider>
  )
}

export const useAuth =()=> useContext(authContext)