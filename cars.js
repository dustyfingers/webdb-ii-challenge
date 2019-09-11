const express = require('express');
const db = require('./carsDb.js');

const router = express.Router();

router.get('/', async (req, res) => {
    const cars = await db.get();
    res.status(200).json({ cars });
});

router.post('/', async (req, res) => {
    const carAdded = await db.insert(req.body);
    res.status(200).json({ carAdded });
});

module.exports = router;