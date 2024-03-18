import React from "react";

const IndexPage = () => {
  return (
    // Outermost container to ensure content doesn't go behind the sidebar and to manage overall width
    <div style={{ marginLeft: "300px", maxWidth: "calc(100% - 300px)", padding: "20px" }}> 
      <div className="container">
        <h1 className="center-align">Welcome to VitalFlow</h1>
        <p className="flow-text">
          VitalFlow is your one-stop destination for managing all your wearable
          devices. Here, you can seamlessly integrate devices like Fitbit, Apple
          Watch, and Strava to gather and monitor your health data in one place.
          Stay informed, stay healthy, and take control of your well-being with
          VitalFlow.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;