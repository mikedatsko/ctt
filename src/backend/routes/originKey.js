const express = require('express')
const sanitize = require('mongo-sanitize')
const OriginKeyModel = require('../models').originKey

const OriginKeyRouter = express.Router()

OriginKeyRouter.get('/list', (req, res) => getOriginKeyList().then(originKeyList => res.end(JSON.stringify(originKeyList))))
OriginKeyRouter.post('/', addOriginKey)
OriginKeyRouter.delete('/:originKeyId', removeOriginKey)

function getOriginKeyList() {
  return OriginKeyModel.find()
}

function addOriginKey(req, res) {
  const title = sanitize(req.body.title)

  if (!title) {
    res.status(400).send({message: 'Title required'})
    return
  }

  const originKey = new OriginKeyModel({
    title: title
  })

  originKey.save().then(() => res.end(JSON.stringify({message: 'SAVE_SUCCESS'})))
}

function removeOriginKey(req, res) {
  const originKeyId = sanitize(req.params.originKeyId)

  if (!originKeyId) {
    res.status(400).send({message: 'Id required'})
    return
  }

  OriginKeyModel
    .deleteOne({_id: originKeyId})
    .then(() => res.end(JSON.stringify({message: 'DELETE_SUCCESS'})))
    .catch(err => res.status(400).end(JSON.stringify(err)))
}

module.exports = OriginKeyRouter
