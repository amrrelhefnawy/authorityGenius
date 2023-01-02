const mongoose = require('mongoose');

const UserReviewsSchema = new mongoose.Schema({
  writtenBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  writtenFor: {
    type: mongoose.Schema.Types.ObjectId,
  },
  review: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  overall: {
    type: Number,
  },
  communication: {
    type: Number,
  },
  timeliness: {
    type: Number,
  },
  value: {
    type: Number,
  },
});

module.exports = UserReviews = mongoose.model('userReviews', UserReviewsSchema);
