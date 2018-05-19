// index.js
//
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, '/index.html'))
})

console.log('starting server')

app.listen(80)
