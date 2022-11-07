import {useState} from 'react'
import styles from '../static/css/master.module.css'

const BoxForm = (props) => {

    const [color,setColor] = useState("red")
    const [size,setSize] = useState(1)

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        props.onNewBox(color,size)
    }

    return (
        <div>
            <form className={`${styles.txtCenter} ${styles.pad20}`} onSubmit={(e) => handleFormSubmit(e)}>
                {/* <input className={styles.sizeLG} type="text" value={color} onChange={(e) => setColor(e.target.value)}/> */}
                <select className={styles.sizeLG} onChange={(e)=>setColor(e.target.value)}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                    <option value="pink">Black</option>
                </select>
                <input className={styles.sizeLG} type="number" min="1" max="5" step="1" value={size} onChange={(e) => setSize(e.target.value)}/>
                <input className={styles.sizeLG} type="submit" value="Create" />
            </form>
        </div>
    )
}

export default BoxForm