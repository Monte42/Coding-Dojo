import { useReducer} from 'react'

// Setting up out empty state OR component loading
const initialState = {
    username: {
        value: "",
        error: ""
    },
    email: {
        value: "",
        error: ""
    },
    password: {
        value: "",
        error: ""
    },
    hasBeenSubmitted: false
}
// building the switch statment for reducer to use
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERNAME_VALUE":
            return {
                ...state,
                username: {
                    ...state.username,
                    value: action.payload
                }
            }
        case "SET_USERNAME_ERROR":
            return {
                ...state,
                username: {
                    ...state.username,
                    error: action.payload
                }
            }
        case "SET_EMAIL_VALUE":
            return {
                ...state,
                email: {
                    ...state.email,
                    value: action.payload
                }
            }
        case "SET_EMAIL_ERROR":
            return {
                ...state,
                email: {
                    ...state.email,
                    error: action.payload
                }
            }
        case "SET_PASSWORD_VALUE":
            return {
                ...state,
                password: {
                    ...state.password,
                    value: action.payload
                }
            }
        case "SET_PASSWORD_ERROR":
            return {
                ...state,
                password: {
                    ...state.password,
                    error: action.payload
                }
            }
        case "SET_BOOLEAN":
            return {
                ...state,
                hasBeenSubmitted: action.payload
            }
        default:
            return state
    }
}
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // Handeler functions -- what to do when input fields are changed by the user
    const handelUsername = (e) => {
        dispatch({
            type: "SET_USERNAME_VALUE",
            payload: e.target.value
        })
    }
    const handelEmail = (e) => {
        dispatch({
            type: "SET_EMAIL_VALUE",
            payload: e.target.value
        })
    }
    const handelPassword = (e) => {
        dispatch({
            type: "SET_PASSWORD_VALUE",
            payload: e.target.value
        })
    }
// VALIDATING FORM
    const validateEmail = (email) => {
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.match(mailformat)){
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: ""
            })
            return true;
        }
        else{
            initialState.email.error = "this is an invalid email"
            return false;
        }
    }
    const validatePassword = () => {
        var pwdformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,45}$/;
        if(state.password.value.match(pwdformat)){
            dispatch({
                type: "SET_PASSWORD_ERROR",
                payload: ""
            })
            return true;
        }
        else{
            initialState.password.error = "password must be at least 8 characters and contain a number and speacil character"
            return false;
        }
    }
    const validateUsername = () => {
        if (state.username.value.length < 2){
            dispatch({
                type:"SET_USERNAME_ERROR",
                payload: "Username must be at least 2 characters long"
            })
            return false
        }
        dispatch({
            type: "SET_USERNAME_ERROR",
            payload: ""
        })
        return true
    }
    const validateForm = () => {
        let isValid = true
        isValid = validateEmail(document.getElementById("email").value)
        isValid = validatePassword(document.getElementById("password").value)
        isValid = validateUsername()
        return isValid
    }
// HANDLE FORM SUBMIT
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()){
            dispatch({
                type: "SET_BOOLEAN",
                payload: true
            })
        }
    }
    
    return (
        <div>
            {/* <h1>{JSON.stringify(state)}</h1>  displays the current state */}
            { state.hasBeenSubmitted ? <h1>Success!</h1> : "" }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input id='username' onChange={(e)=>handelUsername(e)} />
                    </label>
                    <p>{state.username.error}</p>
                </div>
                <div>
                    <label>
                        Email:
                        <input id='email' onChange={(e)=>handelEmail(e)} />
                    </label>
                    <p>{state.email.error}</p>
                </div>
                <div>
                    <label>
                        Password:
                        <input id='password' onChange={(e)=>handelPassword(e)} />
                    </label>
                    <p>{state.password.error}</p>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

