import React from 'react'

import Counter from '../props/Counter'

export const FirstCounter = () => (
    <Counter 
        render={ ({ count, increment }) => (
            <>
                <h2>Add Only</h2>
                <h3>Current count in {count}</h3>
                <button onClick={increment}>Add One</button>
            </>
        )}
        initValue = {6}
    />
)
