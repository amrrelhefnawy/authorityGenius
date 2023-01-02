const mongoose = require('mongoose');

const RevProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  specialties: {
    type: [String],
  },
  credentials: [
    {
      degree: {
        type: String,
      },
      major: {
        type: String,
      },
      institution: {
        type: String,
      },
    },
  ],
  publications: {
    type: [String],
  },
  jobPreferences: {
    type: [String],
  },
  ratePerArticle: {
    type: Number,
  },
  pubRating: {
    type: Number,
  },
});

module.exports = RevProfile = mongoose.model('revProfile', RevProfileSchema);
