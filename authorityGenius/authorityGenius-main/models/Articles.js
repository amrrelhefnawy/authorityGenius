const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  },
  reviewedBy: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  },
  publishedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

module.exports = Articles = mongoose.model('articles', ArticleSchema);
