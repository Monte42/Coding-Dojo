import React from 'react'
import styles from '../master.module.css'
export const Tab = (props) => {
    const {title} = props 
    return (
        <div className={`${styles.tab}`} onClick={(e)=>props.handleChange(e,props.i)}>
            <span>{title}</span>
        </div>
    )
}
