var express = require('express');
var app = express();
var PORT = 3100
var homeRoute = __dirname + `/views/index.html`

app.get('/', (req, res) => {
  res.sendFile(homeRoute)
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
































 module.exports = app;
