import mongoose from 'mongoose';

const decorationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Birthday', 'Anniversary', 'BabyShower', 'Wedding', 'Corporate']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    features: [{
        type: String
    }],
    availability: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Decoration = mongoose.model('Decoration', decorationSchema);
export default Decoration; 