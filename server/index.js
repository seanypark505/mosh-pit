const express = require('express');
const passport = require('passport');
require('./services/passport');
const mongoose = require('mongoose');
// const cors = require('cors');
const PORT = process.env.PORT || 8080;
const session = require('express-session');
// const corsOptions = {
//   origin: 'http://localhost:8081',
// };

const app = express();

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
// Initialize Passport
app.use(passport.initialize());
// Persistent Login Sessions
app.use(passport.session());
// Require Authentication Route File containing Spotify Auth Routes
require('./routes/authRoutes')(app);

// TODO Move to .env file before production
// mongoose.connect(MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Connected to database');
// });

app.get('/', (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => console.log(`Connected to ${PORT}`));
