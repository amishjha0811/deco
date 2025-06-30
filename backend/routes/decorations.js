import express from 'express';
import Decoration from '../models/Decoration.js';

const router = express.Router();

// Get all decorations
router.get('/', async (req, res) => {
    try {
        const decorations = await Decoration.find();
        res.json(decorations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get decoration by ID
router.get('/:id', async (req, res) => {
    try {
        const decoration = await Decoration.findById(req.params.id);
        if (!decoration) {
            return res.status(404).json({ message: 'Decoration not found' });
        }
        res.json(decoration);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create new decoration (admin only)
router.post('/', async (req, res) => {
    const decoration = new Decoration({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        images: req.body.images,
        features: req.body.features
    });

    try {
        const newDecoration = await decoration.save();
        res.status(201).json(newDecoration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update decoration (admin only)
router.patch('/:id', async (req, res) => {
    try {
        const decoration = await Decoration.findById(req.params.id);
        if (!decoration) {
            return res.status(404).json({ message: 'Decoration not found' });
        }

        Object.keys(req.body).forEach(key => {
            decoration[key] = req.body[key];
        });

        const updatedDecoration = await decoration.save();
        res.json(updatedDecoration);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete decoration (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const decoration = await Decoration.findById(req.params.id);
        if (!decoration) {
            return res.status(404).json({ message: 'Decoration not found' });
        }

        await decoration.remove();
        res.json({ message: 'Decoration deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 