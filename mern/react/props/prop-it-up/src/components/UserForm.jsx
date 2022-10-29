import {useState} from 'react'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = (event) => {
        event.preventDefault()

        const newUser = {username, email, password}
        console.log("Welcome", newUser.username)
        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <form onSubmit={createUser}>
            <div>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </label>
            </div>
            <input type="submit" value="Create User" />
        </form>
    )
}

export default UserForm