import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"; // Importa el archivo CSS
import SearchBar from "../SearchBar/SearchBar";

function NavigationBar() {
  return (
    <nav>
      <Link to='/'>
        <div className="img1-container"></div>
      </Link>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/AboutUs">About US</Link>
        </li>
      </ul>
      <div className="button-container" style={{ flexGrow: "auto" }}></div>
      <SearchBar />
      <div className="img-container"></div>
    </nav>
  );
}

export default NavigationBar;
