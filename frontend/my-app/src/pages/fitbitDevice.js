import React from "react";

const Device = ({ deviceData }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">Devices</span>
        {deviceData ? (
          <ul>
            {deviceData.map((device, index) => (
              <li key={index} style={{listStyleType: "none", marginBottom: "15px"}}>
                <p><strong>Type:</strong> {device.type}</p>
                <p><strong>Battery:</strong> {device.battery}</p>
                <p><strong>Battery Level:</strong> {device.batteryLevel}%</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading device data...</p>
        )}
      </div>
    </div>
  );
};

export default Device;