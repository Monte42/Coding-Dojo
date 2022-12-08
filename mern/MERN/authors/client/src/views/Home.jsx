import {Link} from "react-router-dom"
import AuthorList from"../components/AuthorList"

const Home = ({authorList, removeFromDom}) => {
    return (
        <div>
            <Link to={"/new"}>Add An Author</Link>
            <h4>We have quotes by:</h4>
            <AuthorList authorList={authorList} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Home