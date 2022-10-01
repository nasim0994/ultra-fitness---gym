import React from "react";
import "./Header.css";
import logo from "./../../img/favicon.png";

const Header = () => {
  return (
    <header className="mt-3 py-4">
      <h4 className="d-flex align-items-center gap-2 text-danger">
        <img src={logo} alt="" />
        ULTRA-FITNESS & GYM
      </h4>
    </header>
  );
};

export default Header;
