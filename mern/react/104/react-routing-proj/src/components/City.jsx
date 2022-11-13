import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import React from 'react'

const City = () => {
    const {state,city} = useParams()
    return (
        <div style={{color:"green"}}>
            <h1>{city}, {state}</h1>
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default City
