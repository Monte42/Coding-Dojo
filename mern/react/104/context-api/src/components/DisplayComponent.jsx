import React from 'react'
import UserComponent from './UserComponent'

const DisplayComponent = () => {
    return (
        <div>
            <h2>Grandchild</h2>
            <UserComponent />
        </div>
    )
}

export default DisplayComponent