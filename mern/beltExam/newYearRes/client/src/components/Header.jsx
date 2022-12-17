import { Link } from 'react-router-dom'

const Header = ({path,title}) => {
    return (
        <header style={{
            display:"flex", 
            justifyContent:"space-around",
            alignItems:"center",
            fontSize:"1.5vw"
        }}>
            <h1>New Years Resolutions</h1>
            <Link to={path}>{title}</Link>
        </header>
    )
}

export default Header