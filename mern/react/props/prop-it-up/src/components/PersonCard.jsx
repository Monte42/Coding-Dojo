import {useState} from 'react'

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [personAge, setPersonAge] = useState(age)

    const handleBirthdayClick = () => {
        setPersonAge(personAge+1)
    }

    return (
        <div style={{border:"1px solid black",padding:"10px",width:"300px",margin:"10px auto"}}>
            <h2 style={{color:"red"}}>{lastName}, {firstName}</h2>
            <h3>Age: {personAge}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={handleBirthdayClick}>
                Birthday Button {firstName} {lastName}
            </button>
        </div>
    )
}

export default PersonCard;
