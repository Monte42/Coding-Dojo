import styles from '../static/css/MyHeaderComp.module.css' // importing css module as styles

const MyHeaderComp = (props) => {
    const {header, children} = props
    return (
        <div>
            {/* we use className instead of class */}
            <h1 className={styles.headerStyle}>{header}</h1>
            {/* we then use styles.className to add a class */}

            {/* this renders all children */}
            {children}
            {/* this renders the indexed child */}
            {children[0]}
        </div>
    )
}

export default MyHeaderComp