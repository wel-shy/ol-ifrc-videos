const express = require('express')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '/./../.env')})

module.exports = function (app, passport) {
  let routes = new express.Router()

  routes.get('/profile', function (req, res) {
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
