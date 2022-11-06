import React from 'react'

const Box = (props) => {
    const {color, size} = props
    return (
        <div>
            <div style={{height:`${size*40}px`, width:`${size*40}px`, backgroundColor:`${color}`}}></div>
        </div>
    )
}

export default Box