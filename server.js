// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const port = 3000;

// Set up database connection
mongoose.connect('mongodb://localhost/adminLogin', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define the admin user schema
const adminSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Define the admin model
const Admin = mongoose.model('Admin', adminSchema);

// Middleware for parsing request body
app.use(express.urlencoded({ extended: true }));

// Middleware for session management
app.use(session({
  secret: 'YourSecretKey',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the admin user in the database
  Admin.findOne({ username: username }, (err, admin) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else if (!admin) {
      res.send('Invalid username');
    } else {
      // Compare the provided password with the hashed password in the database
      bcrypt.compare(password, admin.password, (err, result) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else if (result) {
          // Authentication successful, set session or token
          req.session.isLoggedIn = true;
          res.redirect('/admin/dashboard');
        } else {
          res.send('Invalid password');
        }
      });
    }
  });
});

app.get('/admin/dashboard', (req, res) => {
  // Check if the user is authenticated
  if (req.session.isLoggedIn) {
    res.send('Admin dashboard');
  } else {
    res.redirect('/');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
