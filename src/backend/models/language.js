const mongoose = require('mongoose')

const Language = mongoose.model('Language', {
  title: String,
  code: String
})

module.exports = Language
