import React from "react";
import FitbitAuthButton from "./FitbitAuthButton";

//Function to handle device registration
const DeviceRegistration = () => {
    return (
        <div className="container" style={{  marginLeft: "300px", maxWidth: "calc(100% - 300px)", padding: "20px" }}>
            <h2 className="center-align">Register Device</h2>
            <div className="row"> 
                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Fitbit</span>
                            <p>Register your Fitbit device to sync your health data.</p>
                        </div>
                        <div className="card-action">
                            <FitbitAuthButton/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Apple Watch</span>
                            <p>Apple Watch Integration coming soon.</p>
                        </div>
                        <div className="card-action">
                            <button disabled className="btn">Register</button>
                        </div>
                    </div>
                </div>

                <div className="col s12 m6 l4">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Strava</span>
                            <p>Strava integration coming soon.</p>
                        </div>
                        <div className="card-action">
                            <button disabled className="btn">Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DeviceRegistration;