import React from "react";

const Profile = ({ profileData }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">User Profile</span>
        {profileData ? (
          <>
            <p>
              <strong>Name:</strong> {profileData.user.fullName}
            </p>
            <p>
              <strong>Age:</strong> {profileData.user.age}
            </p>
            <p>
              <strong>Gender:</strong> {profileData.user.gender}
            </p>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;