require('dotenv').config()

var express = require('express');
var app = express();
var path = require('path')
const bodyParser = require('body-parser')

var PORT = 3100
var homeRoute = path.join(__dirname, `views/index.html`)
var assetsRoute = path.join(__dirname, `public`)

// Challenge 7 - Add logger to root path
// (was commited as challenge 6 on 55a1b1f)
app.use('/', (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

// Challenge 4 - Serve static assets
app.use('/public', express.static(assetsRoute))

// Challenge 3 - Serve a static html file
app.get('/', (req, res) => {
  res.sendFile(homeRoute)
})

// Challenge 5 - Serve json on a specific route
app.get('/json', (req, res) => {
  let message = 'Hello json'
  // Challenge 6 - Use .env variables
  process.env.MESSAGE_STYLE === 'uppercase' ? message = message.toUpperCase() : message
  res.json({
    message
  })
})

// Challenge 8 - Chain middleware to create a time server
app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({
    time: req.time
  })
})

// Challenge 10 - Get query parameters
app.get('/name', (req, res, next) => {
  if (req.query) {
    console.log(req.query)
    req.fullName = `${req.query['first']} ${req.query['last']}`
  }
  next()
}, (req, res) => {
  res.json({
    name: req.fullName
  })
  // Challenge 11 - Handle urlencoded POST request
}).post('/name', bodyParser.urlencoded({extended: false}), (req, res) => {
  next()
})

// Challenge 9 - Build an echo server
app.get('/:word/echo', (req, res) => {
  res.json({
    echo: req.params.word
  })
})




























 module.exports = app;
