var express = require('express');
var app = express();
var PORT = 3100

app.get('/', (req, res) => {
  res.send("Hello Express")
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
})
































 module.exports = app;
