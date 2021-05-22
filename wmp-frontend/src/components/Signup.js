import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup (props) {
    const { push } = useHistory()
    const [ newUser, setNewUser] = useState({
        name: "",
        phoneNumber: "",
        username: "", 
        password: ""
    })

    const handleChanges = e => {
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://water-my-plants-build.herokuapp.com/users/register", newUser)
            .then(res => {
                console.log(res);
                push("/home");
            }) 
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                <h2>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name
                        <input name="name" value={newUser.name} onChange={handleChanges} />
                    </label >
                    <label htmlFor="phoneNumber">Phone number
                        <input name="phoneNumber" value={newUser.phoneNumber} onChange={handleChanges}/>
                    </label>
                    <label htmlFor="username">Username
                        <input name="username" value={newUser.username} onChange={handleChanges}/>
                    </label>
                    <label htmlFor="password">Password
                        <input name="password" type="password" value={newUser.password} onChange={handleChanges}/>
                    </label>
                    <button>Submit</button>
                </form>
                <button onClick={() => props.history.push("/")}>Cancel</button>
            </div>
        </div>
    )
}

export default Signup