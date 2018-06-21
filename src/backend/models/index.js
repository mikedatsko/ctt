const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)

const Translation = require('./translation')
const Language = require('./language')
const OriginKey = require('./originKey')
const User = require('./user')

module.exports = {
  translation: Translation,
  language: Language,
  originKey: OriginKey,
  user: User
}
