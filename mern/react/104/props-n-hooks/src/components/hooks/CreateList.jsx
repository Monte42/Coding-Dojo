import {useState} from 'react'

import useList from '../../hooks/useList'

const CreateList = () => {
    const [val, setVal] = useState('')
    const {list,add,remove} = useList(['first','second','third'])

    const addToList = () =>{
        add(val)
        setVal("")
    }





    return (
        <>
            {list.map((item, i) => <p key={i}>{i}: {item}</p>)}
            <input type="text" value={val} onChange={(e => setVal(e.target.value))}/>
            <button onClick={addToList}>Add</button>
        </>
    )
}

export default CreateList