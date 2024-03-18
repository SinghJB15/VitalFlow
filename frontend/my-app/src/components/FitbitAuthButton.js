import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const FitbitAuthButton = () => {
    const navigate = useNavigate()
    const URL = process.env.REACT_APP_BACKEND_URL;

    const getAuthUrlAndRedirect = async() => {
        try {
            //Fetch the authentication URL from backend
            const response = await axios.get(URL + "auth/fitbit/callback/authorize", {withCredentials: true});
            const authUrl = response.data.url;

            //Redirect the user to Fitbit's authorization page
            window.location.href = authUrl; //Use window.location for absolute URL navigation
        } catch(error) {
            console.error("Error fetching Fitbit auth Url", error)
        }
    }

    return (
        <button onClick={getAuthUrlAndRedirect}>
            Authorize with Fitbit
        </button>
    )
}

export default FitbitAuthButton;