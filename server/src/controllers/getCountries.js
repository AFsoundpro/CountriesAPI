const axios = require('axios');
const {Country} = require('../db');
const URL = 'http://localhost:5000/countries';


const getCountries = async (req, res) => {
    try {
        const response = await axios.get(`${URL}`);
        const countriesApi = response.data.map((country) => {

            let capital = Array.isArray(country.capital) ? country.capital[0] : country.capital;
            capital = String(capital);
            
            return {
                ID: country.cca3,
                Nombre: country.name.common,
                Imagen: country.flags.png,
                Continente: country.region,
                Capital: capital,
                Subregion: String(country.subregion),
                Area:country.area,
                Poblacion:country.population,
            }
        });

        await Country.bulkCreate(countriesApi, { ignoreDuplicates: true });

        //console.log("Respuesta de la API:", countriesApi);
        res.json(countriesApi);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
}

module.exports = {getCountries};

