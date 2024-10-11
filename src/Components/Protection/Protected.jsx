import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'


const Protected = ({Children}) => {

    const checkauth =()=>{
        const isAuth = localStorage.getItem('isAuth');
        return isAuth
    }

    const location = useLocation();
    const isAuthres = checkauth();
    return(
        isAuthres ? (
            Children
        ):(
            <Navigate to='/' replace state={{path:location.pathname}}/>
        )
    )    



}

export default Protected
