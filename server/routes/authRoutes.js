const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private', 'user-follow-read'],
      showDialog: true,
    })
  );

  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
    function (req, res) {
      res.redirect('/');
    }
  );

  app.get('/auth/error', (req, res) => res.send('Unknown Error'));
};
