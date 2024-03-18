import React from "react";
import {useState} from "react";


const LoginForm = ({ login }) => {


    //Local state for username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        login(username, password);
    }

    //Function to handle user input on the login form
    const handleInputChange = (e) => {
        //Update the corressponding state based on input name
        if(e.target.name === "username") {
            setUsername(e.target.value);
        } else if(e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    return (
        <div className="RegisterStyle" style={{ marginLeft: "300px", width: "500px", margin: "20px auto", padding: "20px" }}>
            <h2 className="center-align">Login</h2>
        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Username"
                /> <br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                /> <br />
                <button type="submit" className="submitButton">
                    Login
                </button>
        </form>
        </div>
    )
}

export default LoginForm;