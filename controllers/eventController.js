const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  const { name, description, date, category, reminderTime } = req.body;
  try {
    const event = new Event({ name, description, date, category, reminderTime, userId: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  const { category, sortBy = 'date' } = req.query;
  const query = { userId: req.user.id };
  if (category) query.category = category;
  try {
    const events = await Event.find(query).sort({ [sortBy]: 1 });
    res.json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};