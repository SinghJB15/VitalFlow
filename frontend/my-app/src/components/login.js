import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginForm from "../pages/userLogin";
import RegisterForm from "../pages/userRegister";

const Auth = (props) => {
    const navigate = useNavigate();
    const URL = process.env.REACT_APP_BACKEND_URL;

    // Function for existing users to login
    const login = async (username, password) => {
        try {
            const response = await axios.post(URL + "session", {
                username,
                password
            }, {
                withCredentials: true // Ensure cookies are sent with the request
            });

            if (response.status === 200) {
                const { id, username } = response.data.user;
                props.setUser({
                    id,
                    username
                });
                navigate("/");
            }
        } catch (error) {
            console.error("Failed to login", error);
        }
    };

    //Function for new users to register
    const register = async(user) => {
        try {
            const response = await axios.post(URL + "user", user, {
                withCredentials: true //Encure cookies are sent with the request
            });

            if (response.status === 201) {
                navigate("/login")
            }
        } catch(error) {
            console.error("Failed to register", error)
        }
    }

    //Function for users to logout
    const logout = async() => {
        try {
            const response = await axios.get(URL + "logout", {
                withCredentials: true //Ensure cookies are sent with the request
            });

            if (response.status === 200) {
                props.setUser(null);
                navigate("/");
            }
        } catch(error) {
            console.error("logout failed", error);
        }
    }

    return (
        <Routes>
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/register" element={<RegisterForm register={register} />} />
        </Routes>
    );
};

export default Auth; 