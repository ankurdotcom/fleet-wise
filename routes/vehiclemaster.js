const express = require('express');
const router = express.Router();

// const { getLoading, saveLoading} = require('../dbservice/loading_service');
// const { newRokarNumber } = require('../dbservice/common/rokar_generator');
const { getGadiList, getAllGaadi } = require('../dbservice/gadi_service');

const pageName = 'Vehicle Master Entry Page (vahan मास्टर एंट्री पेज)';

const viewObject = { 
  title: `${pageName}`,
  message: `${pageName}`,
};

/* GET All Vehicle Entry Form . */
router.get('/', async function(req, res, next) {

    // TO some processing with request
    
    const data = await getAllGaadi();

    viewObject.newroker = '';

    viewObject.gadiList = data.map((d) => { return d.gadi_number});

    viewObject.sellerNameList = [];

    viewObject.buyerNameList = [];

    res.render('vehicle_master', viewObject);

});

/* Save Vehicle Entry Form . */
router.post('/', function(req, res, next) {

    console.log(`req==>${JSON.stringify(req.body)}`);

    const { loadingDate, ponitSale, buyer, weight, rate, total, cr_dr, rokar, vehicleNumber  } = req.body;
    
    saveLoading(loadingDate, ponitSale, buyer, weight, rate, total, cr_dr, vehicleNumber, rokar);

    viewObject.message = 'Loading Entry Saved';

    res.render('vehicle_master', viewObject);
  });


/* Save Vehicle Entry Form . */
router.put('/', async function(req, res, next) {

    const record = '';
  
    viewObject.record = record;
  
    viewObject.newroker = await newRokarNumber();
  
    const gadiList = await getGadiList();
    viewObject.gadiList = gadiList;
    
    res.render('vehicle_master',viewObject);
});

/* Save Vehicle Entry Form . */
router.delete('/', async function(req, res, next) {

    const record = '';
  
    viewObject.record = record;
  
    viewObject.newroker = await newRokarNumber();
  
    const gadiList = await getGadiList();
    viewObject.gadiList = gadiList;
    
    res.render('vehicle_master',viewObject);
});

/* GET Vehicle detail by Gaadi_No */
router.get('/:gaadi_no', async function(req, res, next) {

  if(!req.params.gaadi_no){
    const errorMsg = 'Request with valid Gaadi number';
    viewObject.message = errorMsg;
    console.error('Error:', errorMsg);
    res.render('master', viewObject);
  }

  const recordList = await getGadiList();
  
  viewObject.message = 'Record Found';
  viewObject.record = recordList[0].gadi_number;

  res.render('vehicle_master', viewObject);
});




module.exports = router;
