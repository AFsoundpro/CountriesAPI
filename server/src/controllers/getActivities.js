const {Activity, CountryActivity} = require('../db');

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.json(activities);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener las actividades');
    }
}

module.exports = {getActivities}