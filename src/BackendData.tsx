import React from 'react'
const backendUser = () => {
    return fetch('http://localhost:3200/fetch/user').then(res => res.json())
    
}

export default backendUser;