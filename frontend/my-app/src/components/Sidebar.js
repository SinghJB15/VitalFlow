import React from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import Logout from "./Logout.js";

class Sidebar extends React.Component {
  componentDidMount() {
    this.initializeCollapsibles();
  }

  componentDidUpdate(prevProps) {
    // If user's sign-in state changes, reinitialize the collapsibles
    if (this.props.user !== prevProps.user) {
      this.initializeCollapsibles();
    }
  }

  initializeCollapsibles() {
    // Initialize Materialize Collapsibles
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, { accordion: true });
  }


  render() {
    const { user, setUser } = this.props;

    return (
      <ul
        id="slide-out"
        className="sidenav sidenav-fixed background-blue"
        style={{ paddingTop: "0px" }}
      >
        <li>
          <div className="user-view">
            <div className="background blue"></div>
            <a href="/">
              <span className="white-text name">
                <strong>VitalFlow</strong>
              </span>
            </a>
          </div>
        </li>
        <li style={{ marginBottom: "9px" }}>
          <Link to="/" className="waves-effect">
            Home
          </Link>
        </li>
        <li><div class="divider"></div></li>
        {user ? (
          <>
            <li style={{ marginBottom: "20px" }}>
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons"></i>Sync Device
                  </div>
                  <li><div class="divider"></div></li>

                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="/register-device">Register Device</Link>
                      </li>
                      <li>
                        <Link to="/fitbit">Device</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: "20px" }}>
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons"></i>Journals
                  </div>
                  <li><div class="divider"></div></li>

                  <div className="collapsible-body">
                    <ul>
                      <li>
                        <Link to="/journals">View Journals</Link>
                      </li>
                      <li>
                        <Link to="/journals/new">Add Journal</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/must-register" className="waves-effect">
                Sync Device
              </Link>
            </li>
            <li><div class="divider"></div></li>
            <li>
              <Link to="/must-register" className="waves-effect">
                Journals
              </Link>
            </li>
            <li><div class="divider"></div></li>
          </>
        )}
        <li style={{ marginBottom: "20px" }}>
          <ul className="collapsible">
            <li>
              <div className="collapsible-header">
                <i className="material-icons"></i>Account
              </div>
              <li><div class="divider"></div></li>

              <div className="collapsible-body">
                <ul>
                  {user ? (
                    <Logout setUser={setUser} />
                  ) : (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        {user && (
          <li className="user-info-bottom">
            <div className="user-view">
              <div className="background">
              </div>
              <a href="#!user">
                <img
                  className="circle"
                  src="https://alexeitruhin.github.io/images/avatar-br.png"
                  alt="User Avatar"
                />
              </a>
              <a href="#!name">
                <span className="material-icons">{user.username}</span>
              </a>
            </div>
          </li>
        )}
      </ul>
    );
  }
}

export default Sidebar;
