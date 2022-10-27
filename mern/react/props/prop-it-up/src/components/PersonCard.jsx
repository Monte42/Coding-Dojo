const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    return (
        <div style={{border:"1px solid black",padding:"10px",width:"300px",margin:"10px auto"}}>
            <h2 style={{color:"red"}}>{lastName}, {firstName}</h2>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hairColor}</h3>
        </div>
    )
}

export default PersonCard;
