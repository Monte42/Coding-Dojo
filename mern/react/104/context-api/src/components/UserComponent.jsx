import React, {useContext} from 'react'
import { AppContext } from '../App'

const UserComponent = () => {
    const context = useContext(AppContext)
    return (
        <div>
            <h3>Great Grandchild</h3>
            <p>{context}</p>
        </div>
    )
}

export default UserComponent