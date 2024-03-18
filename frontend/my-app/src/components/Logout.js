import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//Function for users to logout
const Logout = (props) => {
  const URL = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const response = await axios.post(URL + "session/logout", {
        withCredentials: true, //Ensure cookies are sent with the request
      });

      if (response.status === 200) {
        props.setUser(null);
        navigate("/");
      }
    } catch (error) {
      console.error("logout failed", error);
    }
  };
  return <button onClick={logoutUser}>Logout</button>;
};

export default Logout;
