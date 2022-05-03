import {  createContext} from "react"


export const authContext = createContext()

export function AuthContextProvider(props) {
  
    const userAuth = localStorage.getItem("userAuth")

    return (

        <authContext.Provider value={{userAuth:userAuth}}>
            {props.children}
        </authContext.Provider>
    )
    
  
}
