import {useContext} from 'react'
import { AppContext } from '../App'

export const Form = () => {
    const [username,setUsername] = useContext(AppContext)

    return (
        <div>
            <form>
                <label>
                    Your Name:  
                    <input type="text" value={username} onChange={ e => setUsername(e.target.value)} />
                </label>
            </form>
        </div>
    )
}
