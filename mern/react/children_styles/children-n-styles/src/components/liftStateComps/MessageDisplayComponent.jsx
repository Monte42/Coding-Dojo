import React from 'react'

const MessageDisplayComponent = (props) => {
    return (
        <>
            <h2>New Message</h2>
            <p>{props.message}</p>
        </>
    )
}

export default MessageDisplayComponent