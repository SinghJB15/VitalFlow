import React from "react";
import { Link } from "react-router-dom";

const MustSignIn = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "20px", textAlign: "center" }}
    >
      <div className="section">
        <h5>You must sign in to view this page.</h5>
        <p>Please login or register to continue.</p>
      </div>
      <div className="section">
        <Link
          to="/login"
          className="waves-effect waves-light btn"
          style={{ marginRight: "10px" }}
        >
          Login
        </Link>
        <Link to="/register" className="waves-effect waves-light btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default MustSignIn;