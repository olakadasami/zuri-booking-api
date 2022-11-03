const express = require('express');
const router = express.Router();
const { getFlight, getFlights, addFlight, updateFlight, deleteFlight } = require('../controllers/flightController');

router.route('/').get(getFlights).post(addFlight)
router.route('/:id').get(getFlight).put(updateFlight).delete(deleteFlight)

module.exports = router;