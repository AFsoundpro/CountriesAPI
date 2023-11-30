import React from "react";
import NavigationBar from "../../components/nav/NavigationBar";
import Footer from "../../components/Footer/footer";
import img from "../../../public/me.jpg";
import "./about.css"; // Importa el archivo CSS que contiene los estilos

function About() {
  return (
    <div className="containerAbout">
      <NavigationBar />
      <div className="container">
        <h4 className="section-title">Programador:</h4>
        <h2 className="name">Andres Felipe Sanchez Pinilla</h2>
        <img src={img} alt="Tu Nombre" className="profile-image" />
        <p className="about-text">¡Hola! Soy ANDRÉS, y aquí encontrarás información sobre mí.</p>

        <h3 className="section-title">Redes Sociales</h3>
        <div className="social-links">
          <ul>
            <li>
              <a href="URL-de-tu-red-social-1" target="_blank" rel="noopener noreferrer">
                Red Social 1
              </a>
            </li>
            <li>
              <a href="URL-de-tu-red-social-2" target="_blank" rel="noopener noreferrer">
                Red Social 2
              </a>
            </li>
            <li>
              <a href="URL-de-tu-red-social-3" target="_blank" rel="noopener noreferrer">
                Red Social 3
              </a>
            </li>
          </ul>
        </div>

        <h3 className="section-title">Más sobre mí</h3>
        <div className="about-me-text">
          El amor por la programación es una pasión que fusiona lógica y
          creatividad en líneas de código. Es un compromiso con la resolución de
          problemas y la creación de mundos digitales. Cada error es una
          lección, cada éxito, una recompensa. La programación es precisión,
          innovación y la satisfacción de ver ideas cobrar vida en la pantalla.
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;