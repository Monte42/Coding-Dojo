import { useState } from "react";

export default (initialList=[]) => {
    const [list, setList] = useState(initialList)

    const add = (str) =>{
        setList([...list, str])
    }

    const remove = (index) =>{
        setList([
            ...list.slice(0,index),
            ...list.slice(index+1)
        ])
    }

    return {list,add,remove}
}