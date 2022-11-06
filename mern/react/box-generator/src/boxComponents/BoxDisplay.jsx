import React from 'react'
import Box from './Box';
import styles from "../static/css/master.module.css"

const BoxDisplay = (props) => {
    const {boxes} = props
    return (
        <div className={`${styles.displayWindow} ${styles.txtCenter}`}>
            {
                boxes.map( (b,i) => <Box key={i} color={b.color} size={b.size}/>)
            }
        </div>
    )
}

export default BoxDisplay