const {Country} = require('../db');
const {Activity} = require('../db');

const getCountriesById = async (req, res) => {
    try {
        const {id} = req.params;
        const country = await Country.findAll({ where: { ID: id }, include: {model: Activity }, atributes: ["ID", "Nombre", "Dificultad", "Duracion", "Temporada"], through: {atributes: []}});
        

        if (!country) {
            return res.status(404).json({ mensaje: 'País no encontrado Controller By ID' });
          }
        //console.log(country);
        res.json({country});
    } catch (error) {
        console.error("Error", error.message);
        res.status(500).json({ mensaje: 'Error al obtener el detalle del país' });
    }
}

module.exports = {getCountriesById};