const path = require('path')
require('dotenv').config({path: path.join(__dirname, '/./../.env')})

module.exports = {

  'facebookAuth': {
    'clientID': process.env.FACEBOOK_ID, // your App ID
    'clientSecret': process.env.FACEBOOK_SECRET, // your App Secret
    'callbackURL': 'http://localhost:3333/auth/facebook/callback',
    'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
  }
}
