const axios = require('axios');
const { Country } = require('../db');
const URL = 'http://localhost:5000/countries';

const getContinents = async (req, res) => {
    try {
        const response = await axios.get(`${URL}`);
        const countriesApi = response.data.map((country) => {
            return {
                Continente: country.region,
            };
        });

        const uniqueContinents = [...new Set(countriesApi.map(obj => obj.Continente))];

        const continentsObj = {
            continents: uniqueContinents
        };

        res.json(continentsObj);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send(error.message);
    }
};

module.exports = { getContinents };