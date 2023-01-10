import axios from "axios"

const DeleteBtn = ({docModel,docId,event}) => {
    const deleteDocument = () => {
        axios.delete(`http://localhost:8000/api/${docModel}/${docId}`)
            .then(()=>event())
            .catch(err=>console.log(err))
    }

    return (
        <button className="btn btn-danger" onClick={deleteDocument}>Delete</button>
    )
}

export default DeleteBtn