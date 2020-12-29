import 'dotenv/config';
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const PORT = process.env.PORT || 8080;

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
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);
