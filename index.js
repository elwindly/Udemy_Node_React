const express = require('express');
require('./services/passport');
const {mongoose} = require('./db/mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const app = express();
const keys = require('./config/keys')

app.use(
  cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
  })  
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});