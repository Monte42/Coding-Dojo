import {useState} from 'react'

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirm, setConfirm] = useState("")
    const [confirmError, setConfirmError] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        if (validateForm()) {
            setSubmitted(true)
            submitForm()
        }
    }

    const validateForm = () => {
        let isValid = true
        const newUser = {firstName,lastName,email,password,confirm}
        if (newUser.firstName.length < 2) {
            setFirstNameError("First name can't be less than 2 characters")
            isValid = false
        } else {setFirstNameError("")}
        if (newUser.lastName.length < 2) {
            setLastNameError("Last name can't be less than 2 characters")
            isValid = false
        } else {setLastNameError("")}
        if (newUser.email.length < 5) {
            setEmailError("Email must be at least 5 characters")
            isValid = false
        } else {setEmailError("")}
        if (newUser.password < 8) {
            setPasswordError("Password must be at least 8 characters")
            isValid = false
        } else {setPasswordError("")}
        if (newUser.confirm != newUser.password) {
            setConfirmError("Passwords must match")
            isValid = false
        } else {setConfirmError("")}
        return isValid
    }

    const submitForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirm("")
    }

    return (
        <div style={{border:"1px solid black",padding:"10px",width:"fit-content",margin:"10px auto"}}>
            <form onSubmit={createUser}>
                {
                    submitted ? 
                    <h2>Thank you for submitting the form</h2> : 
                    <h2>Please enter and submit form</h2>
                }
                <div>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    </label>
                    { firstNameError ? <p style={{color:"red"}}>{firstNameError}</p> : '' }
                </div>
                <div>
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    </label>
                    { lastNameError ? <p style={{color:"red"}}>{lastNameError}</p> : "" }
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                    { emailError ? <p style={{color:"red"}}>{emailError}</p> : "" }
                </div>
                <div>
                    <label>
                        Password:
                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </label>
                    { passwordError ? <p style={{color:"red"}}>{passwordError}</p> : "" }
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input type="text" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
                        { confirmError ? <p style={{color:"red"}}>{confirmError}</p> : "" }
                    </label>
                </div>
                <input type="submit" value="Reset Form"/>
            </form>

            <h2>All Users</h2>

            <p>{submitted}</p>

        </div>
    )
}

export default Form