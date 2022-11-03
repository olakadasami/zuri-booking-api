const Flight = require('../models/Flight')

// @desc GET all flights
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

// @desc POST Book/add flight
// Public
exports.addFlight = async (req, res) => {
    try {
        const { title, time, price, date } = req.body

        // validation of flight details
        if (!title || !time || !price || !date) {
            return res.status(400).json({ message: "Invalid Flight details" })
        }

        const flight = { id: Date.now(), ...req.body }
        Flight.push(flight)

        res.status(201).json({
            message: "Flight Created",
            flight: flight
        })

    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// @desc GET single flight
// Public
exports.getFlight = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const singleFlight = await Flight.find((flight) => flight.id === id)

        if (!singleFlight) {
            return res.status(400).json({ message: "Incorrect Flight id" })
        }

        res.status(200).json({
            message: "One Flight",
            flight: singleFlight
        })
    } catch (err) {
        res.status(400).json({
            message: err
        })
    }
}

// @desc PUT Update flight
// Public
exports.updateFlight = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, time, price, date } = req.body
        const flight = await Flight.find(i => i.id === id)

        // cant find flight with the id
        if (!flight) {
            return res.status(400).json({ message: "Incorrect Flight id" })
        }
        // validation of flight details
        if (!title || !time || !price || !date) {
            return res.status(400).json({ message: "Incomplete Flight details" })
        }

        flight.title = title
        flight.time = time
        flight.price = price
        flight.date = date

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

// @desc DELETE Delete flight
// Public
exports.deleteFlight = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const flight = await Flight.find(i => i.id === id)
        // cant find flight with the id
        if (!flight) {
            return res.status(400).json({ message: "Incorrect Flight id" })
        }
        Flight.splice(Flight.indexOf(flight), 1)

        res.status(200).json({
            message: "Flight Deleted",
            flight: flight
        })

    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
}

// {
//     "title": "flight to canada",
//     "time": "1pm",
//     "price": 26000,
//     "date": "26-06-2022"
// }