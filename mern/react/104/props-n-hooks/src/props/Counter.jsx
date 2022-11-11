import { useState } from "react"

export default ({ render, initValue = 0}) => {
    const [count, setCount] = useState(initValue)
    const increment = () => {
        setCount( count + 1)
    }
    const decrement = () => {
        setCount( count - 1)
    }
    return render({count, increment, decrement})
}