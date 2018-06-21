require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

Object.keys(routes).map(route => {
  app.use(`/api/${route}`, routes[route])
})

app.use(express.static(path.join(__dirname, '../../dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.listen(process.env.PORT || 80, () => {
  console.log('APP_STARTED')
})
