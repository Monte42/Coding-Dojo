import {useState} from 'react'
import styles from '../static/css/flex.module.css'
import FromMessageComponent from './liftStateComps/FromMessageComponent'
import MessageDisplayComponent from './liftStateComps/MessageDisplayComponent'

function MessageComponent() {

    const [newMsg,setNewMsg] = useState("There are no new messages")

    const newMail = (newMessage) => setNewMsg(newMessage)

    return (
        <div>
            <h1>Message Component</h1>
            <div className={`${styles.flexWrapper} ${styles.flexGap}`}>
                <div className={`${styles.flexCol8} ${styles.borderShadow}`}>
                    <FromMessageComponent onNewMessage={newMail}/>
                </div>
                <div className={`${styles.flexCol4} ${styles.borderShadow}`}>
                    <MessageDisplayComponent message={newMsg} />
                </div>
            </div>
        </div>
    )
}

export default MessageComponent