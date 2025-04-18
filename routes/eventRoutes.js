const express = require('express');
const router = express.Router();
const { createEvent, getEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createEvent);
router.get('/', authMiddleware, getEvents);

module.exports = router;