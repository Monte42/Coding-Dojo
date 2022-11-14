import React from 'react'
import {useParams} from 'react-router'

const Item = () => {
    const {item} = useParams()
    return (
        <div>
            {
                isNaN(item) ? 
                <h1>The Word Is: {item}</h1> :
                <h1>The Number Is: {item}</h1>
            }
        </div>
    )
}

export default Item