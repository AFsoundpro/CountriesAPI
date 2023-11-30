const  {Country, Activity} = require('../db');

const createActivity = async (req, res) => {
    try {
        const {Nombre, Dificultad, Duracion, Temporada, agregarPaises} = req.body

        console.log("Datos recibidos del Form:", {
            Nombre,
            Dificultad,
            Duracion,
            Temporada,
            agregarPaises
        });

        const nuevaActividad = await Activity.create({
            Nombre,
            Dificultad,
            Duracion,
            Temporada,
            agregarPaises
        })

        const paises = await Country.findAll({
            where: {
                Nombre: agregarPaises
            }
        });

        // Añadir los países a la actividad
        await nuevaActividad.addCountries(paises);

        res.status(201).json({ message: 'Actividad creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el Pokémon:', error);
        res.status(500).json({ message: 'Error al crear el Pokémon' });
    }
}

module.exports = {
    createActivity
}