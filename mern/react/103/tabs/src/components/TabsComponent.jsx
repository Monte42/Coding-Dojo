import { useState } from 'react'
import styles from '../master.module.css'
import { Tab } from './Tab'

const TabsComponent = (props) => {
    const {contentArr} = props
    const [currentTab,setCurrentTab] = useState(3)

    const handleTabChange = (e,index) => {
        const el = document.getElementsByClassName("master_selected__rcm2E")
        if (el.length!==0) el[0].classList.remove("master_selected__rcm2E");
        e.target.parentElement.classList.add("master_selected__rcm2E");
        setCurrentTab(index)
    }

    return (
        <div>
            <div className={styles.tabBar}>
                {
                    contentArr.map( (tab,i) => {
                        if (i<contentArr.length-1){
                            return <div onClick={(e)=>handleTabChange(e,i)}><Tab key={i} title={tab.title}/></div>
                        }
                        return true
                    })
                }
            </div>
            <div className={styles.displayWindow}>
                {
                    contentArr[currentTab].content.map((item,i) => <p key={i}>{item}</p>)
                }
            </div>
        </div>
    )
}

export default TabsComponent