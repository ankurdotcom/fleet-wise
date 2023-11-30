const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { getUsers } = require('../dbservice/login_service');

/* GET Login Form . */
router.get('/', (req, res) => {
  // Destroy the session and redirect to the login page
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.redirect('/login');
      }
    });
  } else {
    // If there is no session, redirect to the login page
    res.redirect('/login');
  }
});



module.exports = router;
