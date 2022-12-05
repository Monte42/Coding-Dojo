import React from 'react'
import {Link} from 'react-router-dom'

const DisplayAll = ({personList, removeFromDom}) => {
    return (
        <div>
            <h2>All People</h2>
            {
                personList.map( (p,i) =>{
                    return (
                        <div key={i}>
                            <br/>
                            <h4>{p.firstName} {p.lastName}</h4>
                            <p>Age: {p.age}</p>
                            <p>Email: {p.email}</p>
                            <p>
                                <Link to={`/people/${p._id}`}>View</Link> |
                                <Link to={`/people/edit/${p._id}`}>Edit</Link> |
                                <span
                                onClick={e => removeFromDom(p._id)}
                                style={{textDecoration:'underline', color:'blue'}}
                                >
                                    Delete
                                </span>
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayAll