const express = require('express')
const path = require('path')
const axios = require('axios')
require('dotenv').config({path: path.join(__dirname, '/./../.env')})

module.exports = function (app) {
  let routes = new express.Router()
  routes.get('/weather', async function (req, res, next) {
    console.log('getting weather')
    const DARK_SKY_SECRET = process.env.DARK_SKY_SECRET
    const lat = 37.8267
    const lon = -122.4233
    const url = `https://api.darksky.net/forecast/${DARK_SKY_SECRET}/${lat},${lon}?units=si`
    console.log('getting weather from ', url)

    axios.get(url).then(function (response) {
      const summary = response.data.currently.summary
      const temp = response.data.currently.temperature

      return res.json({
        status: 200,
        errors: {},
        data: {
          summary,
          temp
        }
      })
    }).catch(function (error) {
      return res.send(error)
    })
  })

  return routes
}
