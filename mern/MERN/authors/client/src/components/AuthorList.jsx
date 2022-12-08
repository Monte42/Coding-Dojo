import React from 'react'
import { Link } from 'react-router-dom'

const AuthorList = ({authorList, removeFromDom}) => {
    return (
        <table style={{margin:"0 auto"}}>
            <tbody>
                <tr>
                    <th>Authors</th>
                    <th>Available Actions</th>
                </tr>
                {authorList.map((a,i) => {
                    return(
                        <tr key={i}>
                            <td>{a.name}</td>
                            <td>
                                <button>
                                    <Link to={`/edit/${a._id}`}>Edit</Link>
                                </button>
                                <button onClick={e => removeFromDom(a._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AuthorList