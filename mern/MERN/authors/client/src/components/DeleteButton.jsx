import React from 'react'
import {useNavigate} from "react-router-dom"

const DeleteButton = ({removeFromDom, id}) => {
    const navigate = useNavigate()
    const onDelete = () => {
        removeFromDom(id)
        navigate('/')
    }

    return (
        <button onClick={e => onDelete()}>
            Delete
        </button>
    )
}

export default DeleteButton