import 'dotenv/config';
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
// const cors = require('cors');
const session = require('express-session');
// const corsOptions = {
//   origin: 'http://localhost:8081',
// };
const PORT = process.env.PORT || 8080;
require('./models/User');
require('./services/passport');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to trippyDB');
});

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

app.get('/', (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
