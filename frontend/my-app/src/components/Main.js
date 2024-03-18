import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/fitbitProfile";
import Device from "../pages/fitbitDevice";
import Heartrate from "../pages/fitbitHeartrate";
import Ecg from "../pages/fitbitEcg";
import DailyActivities from "../pages/fitbitActivities";
import NavBar from "./NavBar";
import axios from "axios";
import "../SideBarStyles.css"

//Function to fetch user profile
const Main = (props) => {
  const [profileData, setProfileData] = useState(null);
  const [deviceData, setDeviceData] = useState(null);
  const [userHeartrate, setUserHeartrate] = useState(null);
  const [userEcg, setUserEcg] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const URL = process.env.REACT_APP_BACKEND_URL;

  //Function to fetch user profile
  const fetchData = async() => {
    try {
        //Fetch profile data
        const profileResponse = await axios.get(URL + "fitbit/data/profile", { withCredentials: true });
        setProfileData(profileResponse.data.data);

        //Fetch user device data
        const deviceResponse = await axios.get(URL + "fitbit/data/devices", { withCredentials: true });
        setDeviceData(deviceResponse.data.data);

        //Fetch user heartrate data
        const heartrateResponse = await axios.get(URL + "fitbit/data/heartrate", { withCredentials: true });
        setUserHeartrate(heartrateResponse.data["activities-heart"]);

        //Fetch user ECG
        const ecgREsponse = await axios.get(URL + "fitbit/data/ecg", { withCredentials: true });
        setUserEcg(ecgREsponse.data.data);

        //Fetch user Activities
        const dailyActivitiesResponse = await axios.get(URL + "fitbit/data/activities", { withCredentials: true });
        setUserActivities(dailyActivitiesResponse.data.data);

    } catch (error) {
        console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <NavBar title={"Fitbit"}/>
    <div className="container" style={{  marginLeft: "300px", maxWidth: "calc(100% - 300px)", padding: "20px" }}>
      <div className="row">
        <div className="col s12 m4">
          <Profile profileData={profileData} />
        </div>
        <div className="col s12 m4">
          <Device deviceData={deviceData} />
        </div>
        <div className="col s12 m4">
          <Heartrate userHeartrate={userHeartrate} />
        </div>
        <div className="col s12 m4">
          <Ecg userEcg={userEcg} />
        </div>
        <div className="col s12 m4">
          <DailyActivities userActivities={userActivities} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Main;
