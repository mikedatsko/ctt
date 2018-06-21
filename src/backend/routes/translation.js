const express = require('express')
const sanitize = require('mongo-sanitize')
const TranslationModel = require('../models').translation
const LanguageModel = require('../models').language
const OriginKeyModel = require('../models').originKey

const TranslationRouter = express.Router()

TranslationRouter.get('/list', getTranslationList)
TranslationRouter.post('/import', importTranslation)
TranslationRouter.post('/', addTranslation)
TranslationRouter.put('/', saveTranslation)

function getTranslationList(req, res) {
  TranslationModel
    .find()
    .exec((err, translationList) => {
      const translationObj = {}

      // console.log(Date.now())

      translationList.forEach(translation => {
        if (!translationObj[translation.originKey]) {
          translationObj[translation.originKey] = {}
        }

        translationObj[translation.originKey][translation.language] = translation
      })

      // console.log(Date.now())

      res.end(JSON.stringify(translationObj))
    })
}

async function importTranslation(req, res) {
  const translation = sanitize(req.body.translation)
  const language = sanitize(req.body.language)
  const originKeyList = []
  const queryTranslationListInsert = []
  const queryTranslationListUpdate = []

  for (let k in translation) {
    originKeyList.push(k)
  }

  const originKeyListExistFind = await OriginKeyModel.find({title: originKeyList})
  const originKeyListExist = originKeyListExistFind.map(originKey => originKey.title)
  const queryOriginKeyListInsert = originKeyList
    .filter(originKey => !originKeyListExist.includes(originKey))
    .map(originKey => ({title: originKey}))

  if (queryOriginKeyListInsert.length) {
    await OriginKeyModel.insertMany(queryOriginKeyListInsert)
  }

  const originKeyListFull = await OriginKeyModel.find({title: originKeyList})
  const originKeyListObject = {}
  originKeyListFull.forEach(originKey => originKeyListObject[originKey.title] = originKey._id)

  const queryTranslationListExist = {originKey: originKeyListFull.map(originKey => originKey._id), language: language}
  const translationListExist = await TranslationModel.find(queryTranslationListExist)

  for (let k in translation) {
    const translationNew = {
      translatedText: translation[k],
      originKey: originKeyListObject[k],
      language: language
    }

    const translationExist = translationListExist.filter(translationExist => translationExist.originKey === translationNew.originKey && translationExist.language === translationNew.language)

    if (translationExist.length) {
      translationNew._id = translationExist[0]._id
      queryTranslationListUpdate.push(translationNew)
    } else {
      queryTranslationListInsert.push(translationNew)
    }
  }

  if (queryTranslationListInsert.length) {
    await TranslationModel.insertMany(queryTranslationListInsert)
  }

  if (queryTranslationListUpdate.length) {
    await TranslationModel.updateMany(queryTranslationListUpdate)
  }

  res.end(JSON.stringify({message: 'SAVE_SUCCESS'}))
}

function addTranslation(req, res) {
  const translationList = sanitize(req.body)

  TranslationModel
    .insertMany(translationList)
    .then(() => res.end(JSON.stringify({message: 'SAVE_SUCCESS'})))
    .catch(err => res.status(400).end(JSON.stringify(err)))
}

async function saveTranslation(req, res) {
  const translationList = sanitize(req.body)
  const queryTranslationListInsert = translationList.filter(translation => !translation._id || translation._id === 'undefined')
  const queryTranslationListUpdate = translationList.filter(translation => translation._id && translation._id !== 'undefined')
  const promises = []

  promises.push(TranslationModel.insertMany(queryTranslationListInsert))

  queryTranslationListUpdate.forEach(translation => {
    promises.push(TranslationModel.findByIdAndUpdate(translation._id, { $set: { translatedText: translation.translatedText }}, { new: true }))
  })

  Promise.all(promises)
    .then(values => res.end(JSON.stringify({message: 'SAVE_SUCCESS'})))
    .catch(err => res.status(400).end(JSON.stringify(err)))
}

module.exports = TranslationRouter
