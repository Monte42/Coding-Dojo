import {useState} from 'react'

const PersonForm = ({onSubmitProp,initFirstName,initLastName,initAge,initEmail}) => {
    const [firstName, setFirstName] = useState(initFirstName)
    const [lastName, setLastName] = useState(initLastName)
    const [age, setAge] = useState(initAge)
    const [email, setEmail] = useState(initEmail)

    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({firstName,lastName,age,email})
        setFirstName("")
        setLastName("")
        setAge(0)
        setEmail("")
    }

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={e => onSubmitHandler(e)}>
                <p>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                    </label>
                </p>
                <p>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PersonForm