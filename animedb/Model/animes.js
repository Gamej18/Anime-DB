const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
  animetitle: {
    type: String,
    required: true
  },
  alternatetitle: {
    type: String,
    required: false
  },
  typeofanime: {
    type: String,
    required: true
  },
  episodes: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  aired: {
    type: String,
    required: true
  },
  premier: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: false
  },
  studio: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Animes', animeSchema);