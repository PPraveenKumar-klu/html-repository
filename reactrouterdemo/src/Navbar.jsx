import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            Logo
          </Link>
        </div>
        <div className="links">
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>{" "}
          &nbsp; &nbsp;
          <Link to="/about" style={{ textDecoration: "none" }}>
            About us
          </Link>
          &nbsp; &nbsp;
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
          &nbsp; &nbsp;
        </div>
      </div>
    </>
  );
};

export default Navbar;
