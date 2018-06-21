const express = require('express')
const sanitize = require('mongo-sanitize')
const UserModel = require('../models').user
const sendEmail = require('../utils').sendEmail
const cryptPassword = require('../utils').cryptPassword

const UserRouter = express.Router()

UserRouter.get('/list', getUserList)
UserRouter.post('/', addUser)
UserRouter.post('/auth', authUser)
UserRouter.delete('/', removeUser)

function getUserList(req, res) {
  UserModel
    .find()
    .exec((err, langugeList) => res.end(JSON.stringify(langugeList)))
}

async function addUser(req, res) {
  const name = sanitize(req.body.name)
  const email = sanitize(req.body.email)
  const password = sanitize(req.body.password)

  if (!name) {
    res.status(400).send({message: 'Name required'})
    return
  }

  if (!email) {
    res.status(400).send({message: 'Email required'})
    return
  }

  if (!password) {
    res.status(400).send({message: 'Password required'})
    return
  }

  cryptPassword.crypt(password, (err, hash) => {
    if (err) {
      res.status(400).send({message: 'Password crypt error'})
      return
    }

    console.log('addUser', 'cryptPassword', hash)

    const user = new UserModel({
      name: name,
      email: email,
      password: hash
    })

    user.save().then(() => {
      sendEmail([email], `
        <p>Thank you for registration.</p>
        <p>You'll see your account details below:</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `, (err, info) => {
        if (err) {
          res.status(400).send({message: 'Send email error', err: err})
          return
        }

        res.end(JSON.stringify({message: 'SAVE_SUCCESS'}))
      })
    })
  })
}

function authUser(req, res) {
  const email = sanitize(req.body.email)
  const password = sanitize(req.body.password)

  if (!email) {
    res.status(400).send({message: 'Email required'})
    return
  }

  if (!password) {
    res.status(400).send({message: 'Password required'})
    return
  }

  UserModel.findOne({email: email})
    .then(user => {
      if (!user) {
        res.status(400).send({message: 'User not found'})
        return
      }

      cryptPassword.compare(password, user.password, (err, isPasswordMatch) => {
        if (err) {
          res.status(400).send({message: 'Password match error'})
          return
        }

        res.end(JSON.stringify({message: 'SAVE_SUCCESS'}))
      })
    })
    .catch(err => res.status(400).send({message: 'User find error'}))
}

function removeUser(req, res) {
  const languageId = sanitize(req.body.languageId)

  if (!languageId) {
    res.status(400).send({message: 'Id required'})
    return
  }

  UserModel
    .deleteOne({_id: languageId})
    .then(() => res.end(JSON.stringify({message: 'DELETE_SUCCESS'})))
    .catch(err => res.status(400).end(JSON.stringify(err)))
}

module.exports = UserRouter
