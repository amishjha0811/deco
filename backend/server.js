import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello from backend!');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
