import styles from '../static/css/MyHeaderComp.module.css'

const MyHeaderComp = (props) => {
    const {header, children} = props
    console.log(children);
    return (
        <div>
            <h1 className={styles.headerStyle}>{header}</h1>
            {children}
            {children[0]}
        </div>
    )
}

export default MyHeaderComp