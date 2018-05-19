// index.js
//
const express = require('express')
let app = express()
const path = require('path')
const routes = require('./routes')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app = routes(app)

console.log('starting server')

app.listen(80)
