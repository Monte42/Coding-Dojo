import React from 'react'
import styles from '../master.module.css'
export const Tab = (props) => {
    const {title} = props 
    return (
        <div className={`${styles.tab}`}>
            <span>{title}</span>
        </div>
    )
}
