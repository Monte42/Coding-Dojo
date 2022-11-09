import { useContext } from "react"
import { AppContext } from "../App"

export const NavBar = () => {
    const context = useContext(AppContext)
    return (
        <div>Hello! {context}</div>
    )
}
