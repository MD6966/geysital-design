import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = ({isLogged}) => {
    // console.log(isLogged)
    return isLogged ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes
