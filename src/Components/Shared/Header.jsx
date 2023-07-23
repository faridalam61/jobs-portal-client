import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg";

function Header() {
  return (
    <div className="py-4 border border-b-1 shadow-neutral-950	">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
