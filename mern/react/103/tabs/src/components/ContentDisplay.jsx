import React from 'react'
import styles from "../master.module.css"

const ContentDisplay = (props) => {
    return (
        <div className={styles.displayWindow}>
            {
                props.content.map( (c,i) => <p key={i}>{c}</p>)
            }
        </div>
    )
}

export default ContentDisplay