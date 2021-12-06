require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path')
var PORT = 3100
var homeRoute = path.join(__dirname, `views/index.html`)
var assetsRoute = path.join(__dirname, `public`)

app.use('/', (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

app.use('/public', express.static(assetsRoute))

app.get('/', (req, res) => {
  res.sendFile(homeRoute)
})

app.get('/json', (req, res) => {
  let message = 'Hello json'
  process.env.MESSAGE_STYLE === 'uppercase' ? message = message.toUpperCase() : message
  res.json({
    message
  })
})































 module.exports = app;
