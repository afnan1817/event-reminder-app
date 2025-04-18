const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  category: String,
  reminderTime: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Event', eventSchema);
