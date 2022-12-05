import {useState} from 'react'

const PersonForm = ({onSubmitProp,initFirstName,initLastName,initAge,initEmail,errors}) => {
    const [firstName, setFirstName] = useState(initFirstName)
    const [lastName, setLastName] = useState(initLastName)
    const [age, setAge] = useState(initAge)
    const [email, setEmail] = useState(initEmail)

    const onSubmitHandler = e => {
        e.preventDefault()
        onSubmitProp({firstName,lastName,age,email})
    }

    return (
        <div>
            <h2>Add Person</h2>
            <form onSubmit={e => onSubmitHandler(e)}>
                <p>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        { errors.firstName ?
                            <p style={{color:'red'}}>
                                {errors.firstName.message}
                            </p>
                            : null
                        }
                    </label>
                </p>
                <p>
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                        { errors.lastName ?
                            <p style={{color:'red'}}>
                                {errors.lastName.message}
                            </p>
                            : null
                        }
                    </label>
                </p>
                <p>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
                        { errors.age ?
                            <p style={{color:'red'}}>
                                {errors.age.message}
                            </p>
                            : null
                        }
                    </label>
                </p>
                <p>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        { errors.email ?
                            <p style={{color:'red'}}>
                                {errors.email.message}
                            </p>
                            : null
                        }
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PersonForm