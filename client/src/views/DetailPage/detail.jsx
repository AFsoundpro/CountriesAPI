import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from '../../components/nav/NavigationBar';
import Footer from "../../components/Footer/footer";
import './detail.css';

const DetailPage = () => {
  const url = window.location.href;
  const dato = url.split("/").slice(-1)[0];
  console.log(dato);
  const [countriesDetails, setCountriesDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCountriesDetails() {
      try {
        const response = await axios.get(`http://localhost:3001/countries/${dato}`);
        const data = response.data;
        console.log(data);

        if (data) {
          setCountriesDetails(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchCountriesDetails();
  }, [dato]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="detail-cont">
        <div className="card-detail">
        <h2>{countriesDetails.country.ID}</h2>
        <h2>{countriesDetails.country.Nombre}</h2>
      <img src={countriesDetails.country.Imagen} alt="img" />
        <h3>{countriesDetails.country.Continente}</h3>
        <h3>{countriesDetails.country.Capital}</h3>
        <h4>{countriesDetails.country.Subregion}</h4>
        <h4>{countriesDetails.country.Area} Kilometros cuadrados</h4>
        <h4>Numero de Habitantes: {countriesDetails.country.Poblacion}</h4>
        
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;