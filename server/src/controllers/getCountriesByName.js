const axios = require('axios');
const { Op } = require('sequelize');
const { Country } = require('../db');

const getCountriesByName = async (req, res) => {
    try {
        const { query } = req.query; // Obtener el parámetro 'query' desde la URL
        console.log(query);
        const countries = await Country.findAll({ where: { Nombre: { [Op.iLike]: `%${query}%` } } }); // Hacer la consulta a la base de datos

        if (countries.length === 0) {
            return res.status(404).json({ error: 'No se encontraron países similares' });
        }

        res.json(countries); // Mostrar la información de los países encontrados
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error en la solicitud' });
    }
}

module.exports = { getCountriesByName }