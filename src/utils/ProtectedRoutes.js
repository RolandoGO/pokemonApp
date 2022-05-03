import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { authContext } from '../components/context/authContext';



export default function ProtectedRoutes() {
   
   const {userAuth:auth} = useContext(authContext)

   return auth? <Outlet/> : <Navigate to="/login"/>
}

