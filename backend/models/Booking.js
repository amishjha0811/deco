import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    decoration: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Decoration',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    eventType: {
        type: String,
        required: true,
        enum: ['Birthday', 'Anniversary', 'BabyShower', 'Wedding', 'Corporate']
    },
    location: {
        type: String,
        required: true
    },
    guestCount: {
        type: Number,
        required: true
    },
    specialRequests: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking; 