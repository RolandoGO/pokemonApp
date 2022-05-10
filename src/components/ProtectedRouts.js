import React from 'react'
import { useAuth } from './context/authContext'
import { Outlet  } from 'react-router'
import Login from './Login/Login'


export default function ProtectedRouts() {

    const {user, userAuth} = useAuth()

    const renderComponent = userAuth?<Outlet/>:<Login/>

  return renderComponent
}
