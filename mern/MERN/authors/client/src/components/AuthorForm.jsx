import { useState } from "react"

const AuthorForm = ({initName,submitHandler,errors}) => {
    const [name,setName] = useState(initName)
    const onSubmitForm = e =>{
        e.preventDefault()
        submitHandler({name})
    }

    return (
        <form onSubmit={e => onSubmitForm(e)}>
            <p>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    { errors.name ?
                        <p style={{color:'red'}}>
                            {errors.name.message}
                        </p>
                        : null
                    }
                </label>
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AuthorForm