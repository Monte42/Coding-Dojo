
import PageHeader from '../../components/general/PageHeader'
import { Link } from 'react-router-dom'

const ChatLobby = () => {

    return (
        <div>
            <PageHeader />
            <h1>Chat Lobby</h1>
            <h2>Which room would you like to join?</h2>
            <ul>
                <li>
                    <Link to={'/chat/chat_1'}>Chat Room 1</Link> |
                    <Link to={'/chat/chat_2'}>Chat Room 2</Link>
                </li>
            </ul>
        </div>
    )
}

export default ChatLobby