import {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const createUser = (e) => {
        e.preventDefault()

        const newUser = {firstName,lastName,email,password,confirm}
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirm("")
    }

    return (
        <div style={{border:"1px solid black",padding:"10px",width:"300px",margin:"10px auto"}}>
            <form>
            <div>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Confirm Password:
                    <input type="text" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
                </label>
            </div>
            <input type="submit" value="Reset Form"/>
        </form>

        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirm}</p>

        </div>
    )
}

export default Form