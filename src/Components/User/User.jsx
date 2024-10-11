import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {

    let { userid } = useParams();

    return (
        <div>
            <h1>User:{userid}</h1>
            <h1>This is user id page</h1>
        </div>
    )
}

export default User
