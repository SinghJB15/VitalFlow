import React from "react";

const DailyActivities = ({ userActivities }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Daily Activities</span>
        {userActivities ? (
          <div>
            <p><strong>Steps:</strong> {userActivities.goals.steps}</p>
            <p><strong>Distance:</strong> {userActivities.goals.distance} kilometers</p>
            <p><strong>Calories Burned:</strong> {userActivities.goals.caloriesOut}</p>
            <p><strong>Active Minutes:</strong> {userActivities.goals.activeMinutes} minutes</p>
          </div>
        ) : (
          <p>Loading daily activities data...</p>
        )}
      </div>
    </div>
  );
};

export default DailyActivities;