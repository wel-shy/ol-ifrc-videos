// load all the things we need
// var LocalStrategy = require('passport-local').Strategy
var FacebookStrategy = require('passport-facebook').Strategy

// load up the user model
// var User = require('../app/models/user')

// load the auth variables
var configAuth = require('./auth')

module.exports = function (passport) {
  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    // User.findById(id, function (err, user) {
    //   done(err, user)
    // })
    done({id})
  })

  // code for login (use('local-login', new LocalStategy))
  // code for signup (use('local-signup', new LocalStategy))

  // =========================================================================
  // FACEBOOK ================================================================
  // =========================================================================
  passport.use(new FacebookStrategy({
    // pull in our app id and secret from our auth.js file
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  },

  // facebook will send back the token and profile
  function (token, refreshToken, profile, done) {
    // asynchronous
    process.nextTick(function () {
      let user = {
        id: profile.id,
        token: token,
        name: profile.name.givenName + ' ' + profile.name.familyName,
        email: profile.emails[0].value
      }

      return done(null, user)
    })
  }))
}
