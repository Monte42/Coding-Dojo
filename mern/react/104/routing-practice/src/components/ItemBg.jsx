import React from 'react'
import {useParams} from 'react-router-dom'
import styles from '../static/css/master.module.css'

const ItemBg = () => {
    const {item,fontColor,bgColor} = useParams()
    return (
        <div>
            <h1 style={{backgroundColor:`${bgColor}`, color:`${fontColor}`}} className={`${styles.banner}`}>
            {
                isNaN(item) ? 
                <h1>The Word Is: {item}</h1> :
                <h1>The Number Is: {item}</h1>
            }
            </h1>
        </div>
    )
}

export default ItemBg