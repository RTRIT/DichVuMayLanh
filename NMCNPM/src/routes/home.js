const express = require('express');
const router = express.Router();
const home = require('../app/controller/home');
const form = require('../app/controller/form');
const path = require('path'); // Import the path module


//home page
router.get('/form', form.show);
router.post('/form', form.submitForm);
router.get('/HoaDon', home.billList);

router.get('/:serviceDetail', home.serviceDetail);
router.get('/', home.show);


module.exports = router;