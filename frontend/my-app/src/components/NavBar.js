import React from "react";

const NavBar = (props) => {
    return(
        <div class="navbar-fixed">
        <nav class="navbar white">
          <div class="nav-wrapper"><a href="#!" class="brand-logo grey-text text-darken-4">{props.title}</a>
          </div>
        </nav>
      </div>
    )
}

export default NavBar;