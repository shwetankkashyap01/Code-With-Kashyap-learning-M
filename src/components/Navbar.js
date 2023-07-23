import React, { useId, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className={`${navState ? "open" : ""}`}>
      <div className="container nav">
        <div className="nav_brand ">
          <h3 onClick={() => navigate("/")}>Code With Kashyap</h3>
        </div>
        <div
          className={`nav_switch ${navState ? "open" : ""}`}
          onClick={() => setNavState(!navState)}
        >
          <span className="span1"></span>
          <span className="span2"></span>
          <span className="span3"></span>
        </div>
        <div className="nav_link_container">
          <ul className="nav_link">
            <li>
              <Link to="/courses">Student Login</Link>
            </li>
            <li>
              <Link to="/about">Buy Courses</Link>
            </li>
            <li>Connect With Us</li>
          </ul>
        </div>
      </div>
      <div className="nav_links_collapsed">
        <a href="#">
          <h2>Home</h2>
        </a>
        <Link to="/courses">
          <h2>Courses</h2>
        </Link>
        <Link to="/about">
          <h2>About us</h2>
        </Link>

        <a href="#">
          <h2>Contact</h2>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
