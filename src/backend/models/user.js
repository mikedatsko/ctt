const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = User
