// index.js
//
const express = require('express')
let app = express()
const path = require('path')
const cors = require('cors')
// const passport = require('passport')

//app.use('/static', express.static(path.join(__dirname, './static')))

// require('./config/passport')(passport) // pass passport for configuration

// app.use(passport.initialize())
// app.use(passport.session())

var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
}
app.use(cors(corsOption))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.use('/video', express.static(path.join(__dirname, '/./static/VideoGUI/Export/Data')))

// app.get('/video', (req, res) => {
//   res.sendFile(path.join(__dirname, '/static/VideoGUI/Export/Data/index.html'))
// })

// app.use('/auth', require('./routes/auth')(app, passport))
app.use('/api', require('./routes/api')(app))

console.log('starting server')

app.listen(80)
