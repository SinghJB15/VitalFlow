import React from "react";
import {useState} from "react";

const RegisterForm = ({ register }) => {
    //Local state for user registration
    const [registerUser, setRegisterUser] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
    });

    //Function to handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        register(registerUser);
        setRegisterUser({
            name: "",
            email: "",
            username: "",
            password: "",
        })
    };

    //Function to handle user input changes
    const handleInputChange = async(e) => {
        setRegisterUser({...registerUser, [e.target.name]: e.target.value})
    };

    return (
        <div className="RegisterStyle" style={{ marginLeft: "300px", width: "500px", margin: "20px auto", padding: "20px" }}>
            <h2 className="center-align">Register</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={registerUser.name}
                onChange={handleInputChange}
                placeholder="Name"
            /> <br />
            <input
                type="email"
                name="email"
                value={registerUser.email}
                onChange={handleInputChange}
                placeholder="Email"
            /> <br />
            <input
                type="text"
                name="username"
                value={registerUser.username}
                onChange={handleInputChange}
                placeholder="Username"
            /> <br />
            <input
                type="password"
                name="password"
                value={registerUser.password}
                onChange={handleInputChange}
                placeholder="Password"
            /> <br />
            <button type="submit" className="submitButton">
                Register
            </button>
        </form>
        </ div>
    )
}

export default RegisterForm