const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();
app
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', function (req, res) {
    res.send('Hello World')
  })

  .post('/', function (req, res) {
    res.send('Got a POST request')
  })
  .put('/', function (req, res) {
    res.send('Got a PUT request at /user')
  })
  .delete('/', function (req, res) {
    res.send('Got a DELETE request at /user')
  })


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

console.log(`NODE_ENV=${process.env.NODE_ENV}`);
