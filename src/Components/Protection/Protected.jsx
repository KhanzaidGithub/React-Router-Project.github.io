import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'


const Protected = ({ children }) => {
    // const { authed } = useAuth();

    const checkauth = () => {
        const isAuth = localStorage.getItem('isAuth');
        return isAuth
    }

    const location = useLocation();
    const isAuthreq = checkauth()

    return isAuthreq === "true" ? (
        children
    ) : (
        <Navigate to='/' replace state={{ path: location.pathname }} />
    )

}

export default Protected
