import 'dotenv/config';
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

const User = mongoose.model('users');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.spotifyClientID,
      clientSecret: process.env.spotifyClientSecret,
      callbackURL: 'http://localhost:' + PORT + '/auth/spotify/callback',
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      User.findOne({ spotifyId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //we laready have a record.
          done(null, existingUser);
        } else {
          //we don't have a user record, make one
          new User({
            spotifyId: profile.id,
            email: profile._json.email,
            name: profile.displayName,
            acccessToken: accessToken,
            refreshToken: refreshToken,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
