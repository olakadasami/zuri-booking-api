const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlights)
router.get('/:id', controller.getFlight)
router.post('/', controller.addFlight)
router.delete('/:id', controller.deleteFlight)
router.put('/:id', controller.updateFlight)

module.exports = router;