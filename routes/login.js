const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const { getUsers } = require('../dbservice/login_service');

const pageName = 'Login Page (लॉगिन पेज)';

/* GET Login Form . */
router.get('/', async function(req, res, next) {
  
  res.render('login',{title : 'login page' , message: ' this is login page'});

});


/* GET users listing. */
router.get('/:username', async (req, res, next) => {
  res.render('login', viewObject);
});


/* SAVE loading Entry. */
router.post('/', async (req, res, next) => {

  console.log(`req==>${JSON.stringify(req.body)}`);

  const { username, password } = req.body;
  const users = await getUsers();
  console.log("123 " + users);
  const user = users.find(u => u.username === username);
  console.log("1234 " + JSON.stringify(user));
  if (user) {
    console.log("12345 " + JSON.stringify(user));
    console.log("palin text pwd  " + password);
    console.log("hash " + user.password);
    if (await bcrypt.compare(password, user.password) ){
      // Make sure that req.session is properly initialized before setting properties
      req.session = req.session || {};
      
      req.session.user = { id: user.id, username: user.username };
      // res.json({ message: 'Login successful' });
      // res.render('index', { title: 'login successful ', message: ' login Sucess Message' });
       res.json({ message: 'Login successful', redirect: '' });
    }else {
      res.status(401).json({ message: 'Authentication failed' });
    }
    
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }

  
  });


module.exports = router;
