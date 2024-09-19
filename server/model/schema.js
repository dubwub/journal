const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  id: { type: String },
  feelings: [{type: String}],
  text: { type: String },
});

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;