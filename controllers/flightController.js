const Flight = require('../models/Flight')

// @desc Get all flights
// Public
exports.getFlights = (req, res) => {

    try {
        const flights = Flight

        res.status(200).json({
            message: "All flights",
            flights: flights
        })
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// @desc Get single flight
// Public
exports.getFlight = (req, res) => {
    try {
        const id = req.params.id;
        const flight = Flight.find(i => i.id === id)

        res.status(200).json({
            message: "One Flight",
            flight: flight
        })
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

// @desc Book/add flight
// Public
exports.addFlight = async (req, res) => {
    try {
        const flight = { ...req.body, id: Date.now() }

        Flight.push(flight)

        res.status(201).json({
            message: "Flight Created",
            flight
        })

    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// @desc Delete  flight
// Public
exports.deleteFlight = (req, res) => {
    try {
        const id = req.params.id
        const flights = Flight.filter(i => i.id !== id)

        res.status(200).json({
            message: "Flight Deleted"
        })

    } catch (err) {

    }
}

// @desc Update flight
// Public
exports.updateFlight = (req, res) => {
    try {
        const id = req.params.id;
        const flight = Flight.find(i => i.id === id)

        flight = req.body

        res.status(200).json({
            message: "Flight Updated",
            flight: flight
        })
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}