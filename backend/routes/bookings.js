import express from 'express';
import Booking from '../models/Booking.js';
import Decoration from '../models/Decoration.js';

const router = express.Router();

// Get all bookings (admin only)
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate('decoration')
            .populate('user', 'name email phone');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get user's bookings
router.get('/user/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.params.userId })
            .populate('decoration')
            .populate('user', 'name email phone');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new booking
router.post('/', async (req, res) => {
    try {
        const decoration = await Decoration.findById(req.body.decoration);
        if (!decoration) {
            return res.status(404).json({ message: 'Decoration not found' });
        }

        const booking = new Booking({
            decoration: req.body.decoration,
            user: req.body.user,
            eventDate: req.body.eventDate,
            eventType: req.body.eventType,
            location: req.body.location,
            guestCount: req.body.guestCount,
            specialRequests: req.body.specialRequests,
            totalAmount: decoration.price
        });

        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update booking status
router.patch('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        if (req.body.status) {
            booking.status = req.body.status;
        }

        const updatedBooking = await booking.save();
        res.json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Cancel booking
router.delete('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        booking.status = 'cancelled';
        await booking.save();
        res.json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 