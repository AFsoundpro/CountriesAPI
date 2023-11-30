import React from "react";
import { Link } from "react-router-dom";
import "./landing.css"; // Importa el archivo CSS
import Footer from "../../components/Footer/footer";
import viteLogo from '/vite.svg'
import img from '/countries.png';

function Lpage() {
  return (
    <div>
      <div className="background-image">
        <div className="center-button">
          <Link to="/home">
            <button> CLICK PARA INGRESAR</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Lpage;
