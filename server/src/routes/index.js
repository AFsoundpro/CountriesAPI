const { Router } = require('express');
const router = Router();
const { getCountries } = require('../controllers/getCountries');
const { getCountriesById } = require('../controllers/getCountriesById');
const {getCountriesByName} = require('../controllers/getCountriesByName');
const {getContinents} = require('../controllers/getContinents');
const {createActivity} = require('../controllers/create');
const {getActivities} = require('../controllers/getActivities');


router.get('/countries', getCountries);
router.get('/countries/name', getCountriesByName);
router.get('/countries/:id', getCountriesById);
router.post('/activities', createActivity);
router.get('/activities', getActivities);
router.get('/continents', getContinents);

module.exports = router;  