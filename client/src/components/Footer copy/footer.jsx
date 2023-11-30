import React from 'react';
import './Footer.css'; // Importa el archivo CSS para los estilos del footer

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PI-HENRY afsoundpro. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;