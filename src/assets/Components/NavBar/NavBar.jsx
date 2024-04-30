import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="container">
      <div>
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
      </div>
      <button className="btn">Sign Up</button>
    </nav>
  );
}

export default NavBar;
