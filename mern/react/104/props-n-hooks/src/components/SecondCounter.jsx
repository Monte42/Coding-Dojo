import React from 'react'
import Counter from '../props/Counter'

export const SecondCounter = () => {
    return (
        <>
            <Counter 
            render={ ({ count, increment, decrement }) => (
                    <>
                        <h2>Add and Subtract</h2>
                        <h3>Current count in {count}</h3>
                        <button onClick={increment}>Add One</button>
                        <button onClick={decrement}>Subtract One</button>
                    </>
                )}
                initValue = {36}
            />
        </>
    )
}
