import { useState } from "react"

const AuthorForm = ({initName,submitHandler}) => {
    const [name,setName] = useState(initName)
    const updateAuthor = e =>{
        e.preventDefault()
        submitHandler({name})
    }

    return (
        <form onSubmit={e => updateAuthor(e)}>
            <p>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                </label>
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AuthorForm