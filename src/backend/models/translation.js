const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TranslationSchema = new Schema({
  translatedText: String,
  originKey: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'OriginKey'
  },
  language: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'Language'
  }
})

TranslationSchema.statics.bulkUpdate = (arr) => {
  const bulk = Translation.collection.initializeOrderedBulkOp()

  arr.map(a => bulk.find({_id: a._id}).update({$set: {translatedText: a.translatedText}}))

  return bulk.execute()
}

const Translation = mongoose.model('Translation', TranslationSchema)

module.exports = Translation
