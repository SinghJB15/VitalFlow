import React from "react";

const Ecg = ({ userEcg }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">ECG</span>
        {userEcg ? (
          <div>
            <p><strong>Heart Rate Value:</strong> {userEcg.averageHeartRate}</p>
            <p><strong>Result Classification:</strong> {userEcg.resultClassification}</p>
          </div>
        ) : (
          <p>Ecg data:</p>
        )}
      </div>
    </div>
  );
};

export default Ecg;