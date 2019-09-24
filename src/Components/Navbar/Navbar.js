import React from "react";
import logoUcol from "./img/logoUcol.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="www.ucol.mx">
        <img
          src={logoUcol}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo ucol"
        />
      </a>
    </nav>
  );
}
