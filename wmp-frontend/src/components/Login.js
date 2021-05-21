import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialCredentialValue = {
    username: "",
    password: ""
  }

  const initialFormErrors = {
    isError: false,
    message: 'Username or Password not valid.',
  }

function Login (props) {
    
    const history = useHistory();
    const [credentials, setCredentials] = useState(initialCredentialValue);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const handleChanges = e => {
        const userCredentials = {...credentials, [e.target.name] : e.target.value}
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`https://water-my-plants-build.herokuapp.com/users/login`, credentials)
        .then(res => {
            localStorage.setItem('authToken', res.data.payload)
            history.push('/protected')
        })
        .catch(err => {
            setFormErrors({
                ...initialFormErrors,
                isError: true
            })
            console.log(err)
        })
    }

    useEffect(() => {
        //post request to retrieve token from API
        //Once handled, navigate to the WMP route
    }, [])

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="username"
                    value={credentials.username} 
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    value={credentials.password} 
                    onChange={handleChange}
                />

                <button>Log in</button>

                <div>{formErrors.isError? formErrors.message : ""}</div>

                </form>

        </div>
    )
}

export default Login;