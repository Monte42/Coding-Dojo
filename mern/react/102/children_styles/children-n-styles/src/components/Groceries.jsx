import React from 'react'

function Groceries(props) {
    const groceryList = ['cheese', 'eggs', 'bread', 'milk', 'butter']
    return (
        <div>
            <h1>Groceries</h1>
            <ul>
                {
                    groceryList.map((item, index)=> <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default Groceries