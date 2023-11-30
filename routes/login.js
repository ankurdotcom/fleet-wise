const express = require('express');
const router = express.Router();

const { login } = require('../auth_service/auth_service');

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
    
    // saveLoading(loadingDate, ponitSale, buyer, weight, rate, total, cr_dr, vehicleNumber, rokar);

    // const viewObject = await populateViewObject();
    
    // viewObject.message = 'SingnUp Entry Saved';

    res.render('login', {title : 'login Sucess ' , message: ' login Sucess Message'});
  });


module.exports = router;
