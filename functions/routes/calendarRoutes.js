const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/calendarController');

// Routes
router.get('/', calendarController.getEvents);
router.post('/', calendarController.addEvent);
router.put('/:id', calendarController.updateEvent);
router.delete('/:id', calendarController.deleteEvent);

module.exports = router;
