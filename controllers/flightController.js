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
        const { title, time, price, date } = req.body

        // validation of flight details
        if (!title || !time || !price || !date) {
            return res.status(400).json({ message: "Invalid Flight details" })
        }

        const flight = { id: Date.now(), ...req.body }
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
exports.deleteFlight = async (req, res) => {
    try {
        const id = req.params.id
        const flight = Flight.find(i => i.id === id)
        Flight.splice(Flight.indexOf(flight), 1)

        res.status(200).json({
            message: "Flight Deleted",
            flight: flight
        })

    } catch (err) {

    }
}

// @desc Update flight
// Public
exports.updateFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, time, price, date } = req.body

        const flight = await Flight.find(i => i.id === id)

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

// {
//     "title": "flight to canada",
//     "time": "1pm",
//     "price": 26000,
//     "date": "26-06-2022"
// }