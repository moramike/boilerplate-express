require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path')
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































 module.exports = app;
