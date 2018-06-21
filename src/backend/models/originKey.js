const mongoose = require('mongoose')

const OriginKey = mongoose.model('OriginKey', {
  title: String
})

module.exports = OriginKey
