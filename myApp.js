var express = require('express');
var app = express();
var path = require('path')
var PORT = 3100
var homeRoute = path.join(__dirname, `views/index.html`)
var assetsRoute = path.join(__dirname, `public`)

app.use('/public', express.static(assetsRoute))

app.get('/', (req, res) => {
  res.sendFile(homeRoute)
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
































 module.exports = app;
