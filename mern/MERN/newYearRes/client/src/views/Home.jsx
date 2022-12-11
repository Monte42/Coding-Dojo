import {useContext} from 'react'
import { AppContext } from '../App'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import DeleteButton from '../components/DeleteButton'

const Home = () => {
    const [resolutions] = useContext(AppContext)

    return (
        <div>
            <Header path={"/resolutions/new"} title={"Create"} />
            <table style={{margin:'20px auto', fontSize:'2vw'}}>
                <tbody>
                    <tr>
                        <th>Resolution</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                    {
                        resolutions.map( (res,i) => {
                            return (
                                <tr key={i}>
                                    <td>{res.name}</td>
                                    <td>{res.category}</td>
                                    <td>
                                        <Link to={`/resolutions/${res._id}`}>Info</Link> |
                                        <Link to={`/resolutions/${res._id}/edit`}>Update</Link> |
                                        <DeleteButton id={res._id}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home