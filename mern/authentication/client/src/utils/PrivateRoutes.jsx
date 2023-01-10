import { useContext } from "react"
import {Navigate, Outlet} from "react-router-dom"
import { UserContext } from "../App"

const PrivateRoutes = () => {
    const [user] = useContext(UserContext)
    if (!user) {
        return <Navigate to="/"/>
    }
    return  <Outlet/> 
}

export default PrivateRoutes