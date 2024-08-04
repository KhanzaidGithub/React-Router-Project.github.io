import React, { useEffect, useState } from 'react'

const Github = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/KhanzaidGithub')
            .then(responce => responce.json()).then(data => {
                console.log(data);
                setData(data)
            })
    })
    return (
        <div>
            <div className='bg-gray-500 text-center text-white text-5xl p-5'>My Gihtub Followers : {data.followers}
                <img className='mt-8 rounded-full' src={data.avatar_url} alt="Git Picture" />
            </div>
        </div>
    )
}

export default Github