const mongoose = require('mongoose');

const PubProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/200',
  },
  about: {
    type: String,
  },
  websites: {
    type: [String],
  },
  roles: {
    type: [String],
  },
});

module.exports = PubProfile = mongoose.model('pubProfile', PubProfileSchema);
