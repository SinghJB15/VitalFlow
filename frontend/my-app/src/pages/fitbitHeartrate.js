import React from "react";

const Heartrate = ({ userHeartrate }) => {
  // Since userHeartrate is now directly set to the "activities-heart" array
  const heartRateData = userHeartrate && userHeartrate.length > 0 ? userHeartrate[0].value : null;

  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Heart Rate</span>
        {heartRateData ? (
          <div>
            <p><strong>Resting Heart Rate:</strong> {heartRateData.restingHeartRate} bpm</p>
            {heartRateData.heartRateZones && heartRateData.heartRateZones.map((zone, index) => (
              <div key={index}>
                <p><strong>{zone.name} Zone:</strong></p>
                <p>{zone.minutes} minutes</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading heart rate data...</p>
        )}
      </div>
    </div>
  );
};

export default Heartrate;