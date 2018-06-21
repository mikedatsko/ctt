const express = require('express')
const sanitize = require('mongo-sanitize')
const LanguageModel = require('../models').language
const OriginKeyModel = require('../models').originKey
const TranslationModel = require('../models').translation

const LanguageRouter = express.Router()

LanguageRouter.get('/list', getLanguageList)
LanguageRouter.get('/:languageId', getLanguage)
LanguageRouter.post('/', addLanguage)
LanguageRouter.delete('/', removeLanguage)

function getLanguageList(req, res) {
  LanguageModel
    .find()
    .exec((err, languageList) => res.send({languageList: languageList}))
}

async function getLanguage(req, res) {
  const languageId = req.params.languageId;

  try {
    const language = await LanguageModel.findById(languageId).exec();
    const originKeyList = await OriginKeyModel.find();
    const translationList = await TranslationModel.find({language: language._id});

    const languageObject = {};

    originKeyList.forEach(originKey => {
      const translation = translationList.filter(translation_ => translation_.originKey.toString() === originKey._id.toString())[0];

      if (translation) {
        languageObject[originKey.title] = translation.translatedText;
      }
    });

    res.send({
      language: language,
      originKeyList,
      translationList,
      languageObject
    });
  } catch (err) {
    res.status(400).send({error: err})
  }
}

function addLanguage(req, res) {
  const title = sanitize(req.body.title)
  const code = sanitize(req.body.code)

  if (!title) {
    res.status(400).send({message: 'Title required'})
    return
  }

  if (!code) {
    res.status(400).send({message: 'Code required'})
    return
  }

  const language = new LanguageModel({
    title: title,
    code: code
  })

  language.save().then(() => res.end(JSON.stringify({message: 'SAVE_SUCCESS'})))
}

function removeLanguage(req, res) {
  const languageId = sanitize(req.body.languageId)

  if (!languageId) {
    res.status(400).send({message: 'Id required'})
    return
  }

  LanguageModel
    .deleteOne({_id: languageId})
    .then(() => res.end(JSON.stringify({message: 'DELETE_SUCCESS'})))
    .catch(err => res.status(400).end(JSON.stringify(err)))
}

module.exports = LanguageRouter
