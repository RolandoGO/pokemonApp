import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const auth = false
// cuando se cree el login se usara el dato del usuario en vez del boolean anterior.
//const isAuth = window.localStorage.usuario

export default function ProtectedRoutes() {
   
   return auth? <Outlet/> : <Navigate to="/login"/>
}

