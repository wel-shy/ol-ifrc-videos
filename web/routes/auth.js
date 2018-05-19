const express = require('express')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '/./../.env')})

module.exports = function (app, passport) {
  console.log('loading routes')
  let routes = new express.Router()

  routes.get('/profile', function (req, res) {
    console.log('getting profile')
    res.send(req.user)
  })

  routes.get('/auth/facebook', passport.authenticate('facebook', {
    scope: [
      'public_profile',
      'email'
    ]
  }))

  // handle the callback after facebook has authenticated the user
  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/'
  }))

  return routes
}
